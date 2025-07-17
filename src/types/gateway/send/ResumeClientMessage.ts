
// https://discord.com/developers/docs/events/gateway-events#resume
export type ResumeClientMessage = {
    op: 6,
    d: {
        token: string,
        session_id: string,
        seq: number,
    }
};