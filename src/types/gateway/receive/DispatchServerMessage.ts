
export type DispatchServerMessage = {
    op: 0,
    d: any, //TODO create types for all the gateway data things
    s?: number
    t?: string,
};