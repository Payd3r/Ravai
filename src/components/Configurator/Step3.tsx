import React from 'react';
import { Globe, TrendingUp, Palette, Video, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import type { ProductConfig, Extra, Recurring } from '../../types/configurator';

interface Step3Props {
    config: ProductConfig;
    setConfig: React.Dispatch<React.SetStateAction<ProductConfig>>;
    extras: Extra[];
    recurrings: Recurring[];
    expandedExtra: string | null;
    setExpandedExtra: React.Dispatch<React.SetStateAction<string | null>>;
}

const Step3: React.FC<Step3Props> = ({ config, setConfig, extras, recurrings, expandedExtra, setExpandedExtra }) => {
    const extrasGrouped = [
        { title: 'Sviluppo Web', Icon: Globe, items: extras.filter(e => e.category === 'web') },
        { title: 'Marketing & Social', Icon: TrendingUp, items: extras.filter(e => e.category === 'marketing') },
        { title: 'Branding & Design', Icon: Palette, items: extras.filter(e => e.category === 'branding') },
        { title: 'Contenuti Video', Icon: Video, items: extras.filter(e => e.category === 'content') }
    ];

    return (
        <div className="space-y-4 sm:space-y-6">
            <div className="text-center mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3 px-2">Potenzia il tuo sito con i nostri Add-On</h3>
                <p className="text-sm sm:text-base text-slate-600 px-2">Oltre alla realizzazione del sito, puoi aggiungere servizi strategici per far crescere il tuo business:
                </p>
            </div>

            <div className="space-y-4 sm:space-y-6 py-3 px-1">
                <div className="mb-6">
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-3 sm:mb-4 flex items-center gap-2 px-1">
                        <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700" />
                        <span className="text-sm sm:text-base">Servizi Mensili Ricorrenti</span>
                    </h4>
                    <div className="space-y-2 sm:space-y-3">
                        {recurrings.map(rec => {
                            const isSelected = config.recurring.includes(rec.id);
                            return (
                                <div key={rec.id} className={`relative rounded-xl border-2 transition-all duration-300 ${isSelected ? 'border-slate-500 bg-slate-100 shadow-lg ring-2 ring-slate-900/20' : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md'}`}>
                                    {isSelected && <div className="absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 bg-slate-900 rounded-full flex items-center justify-center z-10"><CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" /></div>}
                                    <div className={`p-3 sm:p-4 flex flex-col justify-center ${rec.isRequired ? 'opacity-90 cursor-default' : 'cursor-pointer'}`}
                                         onClick={() => {
                                             if (rec.isRequired) return;
                                             setConfig(prev => ({
                                                 ...prev,
                                                 recurring: isSelected ? prev.recurring.filter(id => id !== rec.id) : [...prev.recurring, rec.id]
                                             }));
                                         }}>
                                        <div className="flex items-center justify-between">
                                            <div className="flex-1 pr-2">
                                                <h5 className={`font-bold text-sm sm:text-base mb-1 ${isSelected ? 'text-slate-900' : 'text-slate-800'}`}>{rec.name}</h5>
                                                <span className={`text-base sm:text-lg font-bold ${isSelected ? 'text-slate-900' : 'text-slate-700'}`}>€{rec.price}/mese</span>
                                            </div>
                                        </div>
                                        <div className="pt-2">
                                            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{rec.description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {extrasGrouped.map((group, groupIndex) => (
                    <div key={groupIndex}>
                        <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-3 sm:mb-4 flex items-center gap-2 px-1">
                            <group.Icon className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700" />
                            <span className="text-sm sm:text-base">{group.title}</span>
                        </h4>
                        <div className="space-y-2 sm:space-y-3">
                            {group.items.map((extra) => {
                                const isSelected = config.extras.includes(extra.id);
                                const isExpanded = expandedExtra === extra.id;

                                return (
                                    <div
                                        key={extra.id}
                                        className={`
                      relative rounded-xl border-2 transition-all duration-300
                      ${isSelected
                                                ? 'border-slate-500 bg-slate-100 shadow-lg ring-2 ring-slate-900/20'
                                                : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md'
                                            }
                    `}
                                    >
                                        {isSelected && (
                                            <div className="absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 bg-slate-900 rounded-full flex items-center justify-center z-10">
                                                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                                            </div>
                                        )}

                                        <div
                                            className="p-3 sm:p-4 cursor-pointer flex items-center justify-between"
                                            onClick={() => {
                                                const newIsSelected = !isSelected;
                                                setConfig(prev => ({
                                                    ...prev,
                                                    extras: newIsSelected
                                                        ? [...prev.extras, extra.id]
                                                        : prev.extras.filter(id => id !== extra.id)
                                                }));
                                            }}
                                        >
                                            <div className="flex-1 pr-2">
                                                <h5 className={`font-bold text-sm sm:text-base mb-1 ${isSelected ? 'text-slate-900' : 'text-slate-800'}`}>{extra.name}</h5>
                                                <span className={`text-base sm:text-lg font-bold ${isSelected ? 'text-slate-900' : 'text-slate-700'}`}>
                                                    {extra.price === 0 && extra.id === 'social-management' ? 'Da accordare' : `€${extra.price}`}
                                                </span>
                                            </div>

                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setExpandedExtra(isExpanded ? null : extra.id);
                                                }}
                                                className="ml-2 sm:ml-3 p-1.5 sm:p-2 hover:bg-slate-100 rounded-full transition-colors flex-shrink-0"
                                            >
                                                {isExpanded ? (
                                                    <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4 text-slate-600" />
                                                ) : (
                                                    <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-slate-600" />
                                                )}
                                            </button>
                                        </div>

                                        {isExpanded && (
                                            <div className="px-3 sm:px-4 pb-3 sm:pb-4 border-t border-slate-200 pt-2 sm:pt-3">
                                                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                                                    {extra.description}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            {config.extras.length > 0 && (
                <div className="text-center text-slate-600 text-xs sm:text-sm pt-3 sm:pt-4 border-t border-slate-200">
                    {config.extras.length} extra selezionati
                </div>
            )}
        </div>
    );
};

export default React.memo(Step3);
