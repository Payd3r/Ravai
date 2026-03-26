import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import type { ProductConfig } from '../types/configurator';
import { businessTypes, getPackagesForType, extras } from '../data/configurator';
import Step1 from '../components/Configurator/Step1';
import Step2 from '../components/Configurator/Step2';
import Step3 from '../components/Configurator/Step3';
import Step4 from '../components/Configurator/Step4';

// Session state to persist data during navigation
const sessionState = {
  step: 1,
  config: {
    customerName: '',
    businessType: null,
    package: null,
    extras: [],
    email: ''
  } as ProductConfig,
  emailInput: '',
  privacyConsent: false
};

const Products = () => {
  const [currentStep, setCurrentStep] = useState(sessionState.step);
  const [config, setConfig] = useState<ProductConfig>(sessionState.config);
  const [expandedExtra, setExpandedExtra] = useState<string | null>(null);
  const [isSendingQuote, setIsSendingQuote] = useState(false);
  const [quoteError, setQuoteError] = useState<string | null>(null);
  const [quoteSuccess, setQuoteSuccess] = useState(false);
  const [emailInput, setEmailInput] = useState(sessionState.emailInput);
  const [privacyConsent, setPrivacyConsent] = useState(sessionState.privacyConsent);

  // Sync state to sessionState
  useEffect(() => {
    sessionState.step = currentStep;
  }, [currentStep]);

  useEffect(() => {
    sessionState.config = config;
  }, [config]);

  useEffect(() => {
    sessionState.emailInput = emailInput;
  }, [emailInput]);

  useEffect(() => {
    sessionState.privacyConsent = privacyConsent;
  }, [privacyConsent]);

  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  const API_BASE = import.meta.env.VITE_API_URL || '';

  // Detect keyboard/viewport changes
  useEffect(() => {
    const handleResize = () => {
      const newHeight = window.visualViewport?.height || window.innerHeight;
      const fullHeight = window.screen.height;

      // Se l'altezza è significativamente ridotta, probabilmente è aperta la tastiera
      const heightRatio = newHeight / fullHeight;
      const keyboardOpen = heightRatio < 0.75;

      setIsKeyboardOpen(keyboardOpen);
    };

    // Listen to visual viewport changes (more reliable for keyboard detection)
    if ('visualViewport' in window && window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleResize);
    } else {
      // Fallback for older browsers
      (window as any).addEventListener('resize', handleResize);
    }

    // Initial call
    handleResize();

    return () => {
      if ('visualViewport' in window && window.visualViewport) {
        window.visualViewport.removeEventListener('resize', handleResize);
      } else {
        (window as any).removeEventListener('resize', handleResize);
      }
    };
  }, []);

  // Calculate total price
  const calculateTotal = () => {
    if (!config.businessType || !config.package) return 0;

    const packages = getPackagesForType(config.businessType);
    const selectedPackage = packages.find(p => p.id === config.package);
    const packagePrice = selectedPackage?.price || 0;
    const extrasPrice = config.extras.reduce((total, extraId) => {
      const extra = extras.find(e => e.id === extraId);
      return total + (extra?.price || 0);
    }, 0);

    return packagePrice + extrasPrice;
  };

  // Navigation functions
  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return config.customerName.trim() !== '' && config.businessType !== null;
      case 2: return config.package !== null;
      case 3: return true; // Extras are optional
      default: return false;
    }
  };

  const handleSendQuote = async (email?: string) => {
    const emailToUse = (email ?? emailInput).trim();
    if (!emailToUse) return;
    setIsSendingQuote(true);
    setQuoteError(null);
    try {
      const res = await fetch(`${API_BASE}/api/send-quote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          config: {
            customerName: config.customerName,
            businessType: config.businessType,
            package: config.package,
            extras: config.extras
          },
          email: emailToUse
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Errore invio');
      setQuoteSuccess(true);
    } catch (err) {
      setQuoteError(err instanceof Error ? err.message : 'Errore durante l\'invio del preventivo.');
    } finally {
      setIsSendingQuote(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 config={config} setConfig={setConfig} businessTypes={businessTypes} />;
      case 2:
        return <Step2 config={config} setConfig={setConfig} getPackagesForType={getPackagesForType} />;
      case 3:
        return (
          <Step3
            config={config}
            setConfig={setConfig}
            extras={extras}
            expandedExtra={expandedExtra}
            setExpandedExtra={setExpandedExtra}
          />
        );
      case 4:
        return (
          <Step4
            config={config}
            businessTypes={businessTypes}
            getPackagesForType={getPackagesForType}
            extras={extras}
            calculateTotal={calculateTotal}
            quoteSuccess={quoteSuccess}
            quoteError={quoteError}
            emailInput={emailInput}
            setEmailInput={setEmailInput}
            privacyConsent={privacyConsent}
            setPrivacyConsent={setPrivacyConsent}
            handleSendQuote={handleSendQuote}
            isSendingQuote={isSendingQuote}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
      {/* Header */}
      <section className="flex-shrink-0 py-4 sm:py-6">
        <div className="container-custom text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 sm:mb-3">
            Calcola il tuo pacchetto
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mb-4 sm:mb-6 leading-relaxed max-w-2xl mx-auto px-2">
            Crea la soluzione perfetta per la tua attività in pochi semplici passaggi.
          </p>

          {/* Progress bar */}
          <div className="max-w-xs sm:max-w-md mx-auto mb-2">
            <div className="flex items-center justify-between mb-2 px-2">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`
                    w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition-all duration-300
                    ${currentStep >= step
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-200 text-slate-500'
                    }
                  `}
                >
                  {step}
                </div>
              ))}
            </div>
            <div className="h-1.5 sm:h-2 bg-slate-200 rounded-full overflow-hidden mx-2">
              <div
                className="h-full bg-slate-900 rounded-full transition-all duration-500"
                style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content - spazio dinamico in base al contenuto, padding per la nav fissa (nascosta in step 4) */}
      <section
        className={`flex-1 min-h-0 overflow-y-auto px-2 sm:px-4 ${currentStep === 4 ? 'pb-6 sm:pb-8' : isKeyboardOpen ? 'pb-6 pt-20' : 'pb-24 sm:pb-28'}`}
      >
        <div className="container-custom">
          <div className={`max-w-5xl mx-auto ${currentStep <= 2 || currentStep === 4 ? 'min-h-[calc(100vh-280px)] sm:min-h-[calc(100vh-320px)] flex items-start justify-center' : 'min-h-0'} py-2 sm:py-4`}>
            <div className="w-full">
              {renderStep()}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation - nascosta nello step 4 finale */}
      {currentStep < 4 && (
        <div
          className={`
          fixed left-0 right-0 bg-white border-t border-slate-200 p-3 sm:p-6 transition-all duration-300 z-50
          ${isKeyboardOpen
              ? 'top-0 bg-white/95 backdrop-blur-sm border-b border-slate-200 border-t-0'
              : 'bottom-0'
            }
        `}
          style={{
            // Su mobile, quando la tastiera è aperta, usa position sticky
            position: isKeyboardOpen ? 'sticky' : 'fixed'
          }}
        >
          <div className="container-custom">
            <div className="flex items-center justify-between max-w-4xl mx-auto">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`
                flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base
                ${currentStep === 1
                    ? 'text-slate-400 cursor-not-allowed'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }
              `}
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden xs:inline">Indietro</span>
              </button>

              {currentStep < 4 ? (
                <button
                  onClick={nextStep}
                  disabled={!canProceed()}
                  className={`
                  flex items-center gap-1 sm:gap-2 px-4 sm:px-8 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base
                  ${canProceed()
                      ? 'bg-slate-900 text-white hover:bg-slate-800 transform hover:scale-105'
                      : 'bg-slate-300 text-slate-500 cursor-not-allowed'
                    }
                `}
                >
                  Continua
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              ) : (
                <button
                  className="flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-slate-700 to-slate-600 text-white px-4 sm:px-8 py-2 sm:py-3 rounded-xl font-semibold hover:from-slate-800 hover:to-slate-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  Contattaci
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
