export interface IConnectionProvider {
    connect(): Promise<void | never>;
    disconnect(): Promise<void | never>;
};
