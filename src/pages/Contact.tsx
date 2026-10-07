import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

const WHATSAPP_LINK = 'https://wa.me/393395375902?text=Buongiorno%20Ravai%20vorrei%20contattarvi%20per%20';
const WHATSAPP_QR_CODE = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&margin=12&data=${encodeURIComponent(WHATSAPP_LINK)}`;

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .4 5.2.4 11.7c0 2.1.6 4.1 1.6 5.9L.3 24l6.6-1.7a11.9 11.9 0 0 0 5.6 1.4h.1c6.5 0 11.7-5.2 11.7-11.7 0-3.1-1.3-6.1-3.8-8.5ZM12.6 21.7h-.1a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.9 1 1-3.8-.3-.4a9.8 9.8 0 1 1 8.7 4.8Zm5.4-7.3c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1.1-1.1 2.6s1.1 3 1.3 3.2c.2.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.2-.2-.5-.4Z" />
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    privacyConsent: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyConsent) {
      setError('Per inviare il messaggio devi accettare la Privacy Policy e i Termini e Condizioni.');
      return;
    }
    setIsLoading(true);
    setError('');

    try {
      // Configurazione EmailJS
      const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = EMAILJS_CONFIG;

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'info@ravai.it'
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '', privacyConsent: false });
    } catch (error) {
      console.error('Errore invio email:', error);
      setError('Si è verificato un errore durante l\'invio del messaggio. Riprova più tardi.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [target.name]: target.type === 'checkbox' ? target.checked : target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'info@ravai.it',
      href: 'mailto:info@ravai.it'
    },
    {
      icon: Phone,
      title: 'Telefono',
      value: '+39 334 758 3173',
      href: 'tel:+393347583173'
    },
    {
      icon: MapPin,
      title: 'Località',
      value: 'Como, Italia',
      href: '#'
    }
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="gradient-bg py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6">
            Parliamo del tuo progetto
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Siamo sempre entusiasti di nuove collaborazioni. Raccontaci la tua idea e insieme
            la trasformeremo in qualcosa di straordinario.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Invia un messaggio</h2>
              </div>

              {error && (
                <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-2xl p-8 text-center mb-6">
                  <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Errore</h3>
                  <p className="text-slate-600">{error}</p>
                </div>
              )}

              {isSubmitted ? (
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Messaggio inviato!</h3>
                  <p className="text-slate-600">
                    Grazie per averci contattato. Ti risponderemo al più presto!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Nome completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-200"
                        placeholder="Il tuo nome"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-200"
                        placeholder="la-tua-email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                      Oggetto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-200"
                      placeholder="Di cosa vuoi parlare?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Messaggio
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Raccontaci del tuo progetto..."
                    />
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer !mt-2 ms-1">
                    <input
                      type="checkbox"
                      name="privacyConsent"
                      checked={formData.privacyConsent}
                      onChange={handleChange}
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
                    type="submit"
                    disabled={isLoading}
                    className="btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Invio in corso...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Invia messaggio
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Informazioni di contatto</h2>
                <p className="text-slate-600">
                  Preferisci contattarci direttamente? Ecco i nostri recapiti.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href={WHATSAPP_LINK}
                  aria-label="Chat with us on WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col sm:flex-row sm:items-center gap-6 p-6 bg-gradient-to-r from-emerald-50 to-green-100 rounded-2xl hover:from-emerald-100 hover:to-green-200 transition-all duration-300 group"
                >
                  <div className="flex items-center flex-1 min-w-0">
                    <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shrink-0">
                      <WhatsAppIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">WhatsApp</h3>
                      <p className="text-slate-600">Chat with us on WhatsApp</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-3 shadow-sm self-start sm:self-center">
                    <img
                      src={WHATSAPP_QR_CODE}
                      alt="QR code per contattare Ravai su WhatsApp"
                      className="w-32 h-32"
                      width="128"
                      height="128"
                      loading="lazy"
                    />
                  </div>
                </a>

                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center p-6 bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 accent-gradient rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{info.title}</h3>
                      <p className="text-slate-600">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>


            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
