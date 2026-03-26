import React from 'react';
import { CheckCircle } from 'lucide-react';
import type { ProductConfig, Package } from '../../types/configurator';

interface Step2Props {
    config: ProductConfig;
    setConfig: React.Dispatch<React.SetStateAction<ProductConfig>>;
    getPackagesForType: (type: string) => Package[];
}

const Step2: React.FC<Step2Props> = ({ config, setConfig, getPackagesForType }) => {
    const packages = config.businessType ? getPackagesForType(config.businessType) : [];

    return (
        <div className="space-y-4 sm:space-y-6">
            <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3 px-2">
                    Scegli il pacchetto per {config.customerName}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 px-2">Ogni pacchetto include tutto quello di cui hai bisogno</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                {packages.map((pkg) => (
                    <div
                        key={pkg.id}
                        onClick={() => setConfig(prev => ({ ...prev, package: pkg.id }))}
                        className={`
              group relative cursor-pointer rounded-2xl p-4 sm:p-6 border-2 transition-all duration-300 transform hover:scale-105 h-full flex flex-col
              ${config.package === pkg.id
                                ? 'border-slate-400 bg-slate-50 shadow-lg'
                                : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md'
                            }
            `}
                    >
                        {pkg.isPopular && (
                            <div className="absolute -top-4 sm:-top-3 left-1/2 transform -translate-x-1/2">
                                <span className="bg-slate-900 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold">
                                    Più popolare
                                </span>
                            </div>
                        )}

                        {config.package === pkg.id && (
                            <div className="absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 bg-slate-900 rounded-full flex items-center justify-center">
                                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                            </div>
                        )}

                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${pkg.color} flex items-center justify-center mx-auto mb-3 sm:mb-4`}>
                            <pkg.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>

                        <div className="text-center mb-3 sm:mb-4">
                            <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2 sm:mb-3">{pkg.name}</h4>
                            <span className="text-xl sm:text-2xl font-bold text-slate-900">€{pkg.price}</span>
                        </div>

                        <ul className="space-y-1.5 sm:space-y-2 flex-1">
                            {pkg.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-1.5 sm:gap-2 pt-1">
                                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-slate-600 text-xs sm:text-xs leading-relaxed">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default React.memo(Step2);
