import React from 'react';
import { Link } from 'react-router-dom';
import type { ProductConfig, BusinessType, Package, Extra, Recurring } from '../../types/configurator';

interface Step4Props {
    config: ProductConfig;
    businessTypes: BusinessType[];
    getPackagesForType: (type: string) => Package[];
    extras: Extra[];
    recurrings: Recurring[];
    calculateTotal: () => number;
    calculateRecurringTotal: () => number;
    quoteSuccess: boolean;
    quoteError: string | null;
    emailInput: string;
    setEmailInput: (val: string) => void;
    privacyConsent: boolean;
    setPrivacyConsent: (val: boolean) => void;
    handleSendQuote: (email?: string) => void;
    isSendingQuote: boolean;
}

const Step4: React.FC<Step4Props> = ({
    config,
    businessTypes,
    getPackagesForType,
    extras,
    recurrings,
    calculateTotal,
    calculateRecurringTotal,
    quoteSuccess,
    quoteError,
    emailInput,
    setEmailInput,
    privacyConsent,
    setPrivacyConsent,
    handleSendQuote,
    isSendingQuote
}) => {
    const selectedBusinessType = businessTypes.find(t => t.id === config.businessType);
    const packages = config.businessType ? getPackagesForType(config.businessType) : [];
    const selectedPackage = packages.find(p => p.id === config.package);
    const selectedExtras = extras.filter(e => config.extras.includes(e.id));
    const total = calculateTotal();

    return (
        <div className="space-y-4 sm:space-y-6">
            <div className="text-center mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 px-2">
                    Perfetto {config.customerName}!
                </h3>
                <p className="text-sm sm:text-base text-slate-600 px-2">Ecco il riepilogo del tuo progetto</p>
            </div>

            <div className="max-w-xl mx-auto bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-slate-200">
                <div className="text-center mb-4 sm:mb-6">
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1">{config.customerName}</h4>
                    <div className="flex items-center justify-center gap-2">
                        {selectedBusinessType && <selectedBusinessType.icon className="w-3 h-3 sm:w-4 sm:h-4 text-slate-600" />}
                        <span className="text-slate-600 text-xs sm:text-sm">{selectedBusinessType?.title}</span>
                    </div>
                </div>

                {selectedPackage && (
                    <div className="border-b border-slate-200 pb-3 sm:pb-4 mb-3 sm:mb-4">
                        <div className="flex items-center justify-between">
                            <h5 className="font-bold text-slate-900 text-sm sm:text-base">Pacchetto {selectedPackage.name}</h5>
                            <span className="text-base sm:text-lg font-bold text-slate-900">€{selectedPackage.price}</span>
                        </div>
                    </div>
                )}

                {config.recurring && config.recurring.length > 0 && (
                    <div className="border-b border-slate-200 pb-3 sm:pb-4 mb-3 sm:mb-4">
                        <h5 className="font-bold text-slate-900 mb-2 sm:mb-3 text-xs sm:text-sm">Servizi ricorrenti mensili</h5>
                        <div className="space-y-1.5 sm:space-y-2">
                            {recurrings.filter(r => config.recurring.includes(r.id)).map(rec => (
                                <div key={rec.id} className="flex items-center justify-between">
                                    <span className="text-slate-600 text-xs sm:text-sm pr-2">{rec.name}</span>
                                    <span className="font-semibold text-slate-900 text-xs sm:text-sm flex-shrink-0">€{rec.price}/mese</span>
                                </div>
                            ))}
                        </div>
                        {config.recurring.includes('hosting') && (
                            <div className="mt-3 p-2 bg-slate-50 rounded-lg border border-slate-200">
                                <p className="text-xs text-slate-700 font-medium">I Primi 6 mesi di hosting sono gratuiti!</p>
                            </div>
                        )}
                    </div>
                )}

                {selectedExtras.length > 0 && (
                    <div className="border-b border-slate-200 pb-3 sm:pb-4 mb-3 sm:mb-4">
                        <h5 className="font-bold text-slate-900 mb-2 sm:mb-3 text-xs sm:text-sm">Servizi extra</h5>
                        <div className="space-y-1.5 sm:space-y-2 max-h-28 sm:max-h-32 overflow-y-auto">
                            {selectedExtras.map((extra) => (
                                <div key={extra.id} className="flex items-center justify-between">
                                    <span className="text-slate-600 text-xs sm:text-sm pr-2">{extra.name}</span>
                                    <span className="font-semibold text-slate-900 text-xs sm:text-sm flex-shrink-0">
                                        {extra.price === 0 && extra.id === 'social-management' ? 'Da accordare' : `€${extra.price}`}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="text-center mb-4 sm:mb-6">
                    <div className="flex items-center justify-between text-lg sm:text-xl font-bold text-slate-900 mb-2">
                        <span>Totale una tantum</span>
                        <span>€{total}</span>
                    </div>
                    {calculateRecurringTotal() > 0 && (
                        <div className="flex items-center justify-between text-base sm:text-lg font-bold text-slate-700">
                            <span>Totale mensile</span>
                            <span>€{calculateRecurringTotal()}/mese</span>
                        </div>
                    )}
                </div>

                <div className="space-y-3 text-center">
                    {quoteSuccess ? (
                        <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                            <p className="text-green-700 font-medium">Preventivo inviato! Controlla la tua email.</p>
                        </div>
                    ) : (
                        <>
                            {quoteError && (
                                <p className="text-red-600 text-sm">{quoteError}</p>
                            )}
                            <input
                                type="email"
                                value={emailInput}
                                onChange={(e) => setEmailInput(e.target.value)}
                                placeholder="La tua email per ricevere il preventivo"
                                className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-slate-400 focus:outline-none transition-colors text-base"
                            />
                            <label className="flex items-start gap-3 cursor-pointer ms-1 !my-3">
                                <input
                                    type="checkbox"
                                    checked={privacyConsent}
                                    onChange={(e) => setPrivacyConsent(e.target.checked)}
                                    className="mt-1 w-5 h-5 rounded border-slate-300 text-slate-900 focus:ring-slate-900"
                                />
                                <span className="text-sm text-slate-600 pt-1">
                                    Accetto la{' '}
                                    <Link to="/privacy" className="text-slate-900 font-medium hover:underline">
                                        Privacy Policy
                                    </Link>
                                    {' '}e i{' '}
                                    <Link to="/terms" className="text-slate-900 font-medium hover:underline">
                                        Termini e Condizioni
                                    </Link>
                                </span>
                            </label>
                            <button
                                onClick={() => handleSendQuote(emailInput)}
                                disabled={isSendingQuote || !emailInput.trim() || !privacyConsent}
                                className="w-full bg-gradient-to-r from-slate-700 to-slate-600 text-white py-3 px-4 sm:px-6 rounded-xl font-bold hover:from-slate-800 hover:to-slate-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                {isSendingQuote ? 'Invio in corso...' : 'Inviami il preventivo'}
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default React.memo(Step4);
