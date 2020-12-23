export interface Site{
    _id: string;
    name: string;
    subname: string;
    category: string;
    thumbs: string[];
    description: string;
    rating: {
        like: number;
        disklike: number;
    }
    score: number;
    keywords: string[];
    review:string;
    clicks: number;
    exclusive: boolean;
    meta: {
        updated: Date;
        uploaded: Date;
    },
    url: string;
};