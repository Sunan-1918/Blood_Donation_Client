export interface IDonor {
    id: string;
    userId: string;
    name: string;
    age: number;
    email: string;
    status: string;
    bloodType: string;
    location: string;
    availability: boolean;
    lastDonationDate: string;
    createdAt: string;
    updatedAt: string;
}

export interface IRequester {
    id: string;
    userId: string;
    name: string;
    email: string;
    status: string;
    bloodType: string;
    location: string;
    createdAt: string;
    updatedAt: string;
}