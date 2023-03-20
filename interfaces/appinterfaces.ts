export interface histori {
    id?: number;
    url: string;
    date: string;
}

export interface data {
    id?: number
    name?: string;
}

export interface datalogin {
    username: string;
    password: string;
}

export interface globalData {
    data: data;
    checkUser: (value: datalogin) => boolean;
    logout: () => void;
    histori: histori[];
    addHistori: (value: histori) => void;
}