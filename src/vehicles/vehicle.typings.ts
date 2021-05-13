export type Vehicle = {
    _id: string;
    name: string;
    externalCode: string;
    description?: string;
    status?: string;
    category?: string;
    dailyValue?: number;
    imageUrl?: string;
    year?: string;
    conservation?: string;
    fuel?: string;
    rentedBy?: string;
};

export type FindOptions = {
    keyword?: string;
};
