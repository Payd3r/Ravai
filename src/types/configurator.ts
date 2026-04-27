export type BusinessTypeId = 'airbnb' | 'restaurant' | 'beauty' | 'workshop' | 'ecommerce' | 'fitness' | 'consulting' | 'medical' | 'construction' | 'real-estate' | 'education' | 'photography';
export type PackageId = 'base' | 'pro' | 'premium';

export interface ProductConfig {
    customerName: string;
    businessType: BusinessTypeId | null;
    package: PackageId | null;
    extras: string[];
    recurring: string[];
    email: string;
}

export interface BusinessType {
    id: BusinessTypeId;
    title: string;
    icon: any;
    description: string;
    color: string;
}

export interface Package {
    id: PackageId;
    name: string;
    price: number;
    icon: any;
    color: string;
    isPopular?: boolean;
    features: string[];
}

export interface Extra {
    id: string;
    name: string;
    price: number;
    category: 'web' | 'marketing' | 'branding' | 'content';
    description: string;
}

export interface Recurring {
    id: string;
    name: string;
    price: number;
    description: string;
    isRequired?: boolean;
}
