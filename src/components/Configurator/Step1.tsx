import React from 'react';
import type { ProductConfig, BusinessType } from '../../types/configurator';

interface Step1Props {
    config: ProductConfig;
    setConfig: React.Dispatch<React.SetStateAction<ProductConfig>>;
    businessTypes: BusinessType[];
}

const Step1: React.FC<Step1Props> = ({ config, setConfig, businessTypes }) => (
    <div className="space-y-6">
        <div className="text-center mb-4 sm:mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4 px-2">Come si chiama la tua attività?</h3>
            <input
                type="text"
                value={config.customerName}
                onChange={(e) => setConfig(prev => ({ ...prev, customerName: e.target.value }))}
                placeholder="Il tuo nome o nome dell'attività"
                className="w-full max-w-md mx-auto px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg border-2 border-slate-200 rounded-2xl focus:border-slate-400 focus:outline-none transition-colors"
                autoFocus
            />
        </div>

        <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 sm:mb-6 text-center px-2">Che tipo di attività hai?</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-6xl mx-auto">
                {businessTypes.map((type) => (
                    <div
                        key={type.id}
                        onClick={() => setConfig(prev => ({ ...prev, businessType: type.id }))}
                        className={`
              group relative cursor-pointer rounded-2xl py-2 px-3 sm:py-3.5 sm:px-5 border-2 transition-all duration-300 transform hover:scale-[1.02]
              ${config.businessType === type.id
                                ? 'border-slate-500 bg-slate-100 shadow-lg ring-2 ring-slate-900/20'
                                : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md'
                            }
            `}
                    >
                        <div className={`w-8 h-8 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center mx-auto mb-1.5 sm:mb-2`}>
                            <type.icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                        </div>

                        <div className="text-center">
                            <h4 className="text-[11px] sm:text-base font-bold text-slate-900 leading-tight">{type.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default React.memo(Step1);
