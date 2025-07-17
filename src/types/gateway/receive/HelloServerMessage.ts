
// https://discord.com/developers/docs/events/gateway-events#hello
export type HelloServerMessage = {
    op: 10,
    d: {
        heartbeat_interval: number,
    },
};