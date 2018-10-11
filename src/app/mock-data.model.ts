

export interface OfferingSingle {
    name: string;
    img: string;
}

export interface SubOffering {
    name: string;
    shortName: string;
    description: string;
    list: Array<OfferingSingle>;
}

export interface Offering {
    name: string;
    subOfferings: Array<SubOffering>;
}

