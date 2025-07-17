export type IdentifyClientMessage = {
    op: 2,
    d: {
        token: string,
        intents: number,
        properties: {
            os: string,
            browser: string,
            device: string,
        },
    },
};