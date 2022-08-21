
export interface IRegisterUserParam {
    email: string;
    password: string;
}

export interface IUser {
    isLoading: boolean;
    token: string;
    user: string;
    err: string;
}