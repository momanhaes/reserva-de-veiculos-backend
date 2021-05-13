export type User = {
    _id: string;
    name: string;
    email: string;
    password: string;
};

export type UserInfo = {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
};

export type LoginInfo = {
    email: string;
    password: string;
};
