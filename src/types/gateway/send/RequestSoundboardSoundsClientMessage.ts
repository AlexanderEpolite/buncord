
// https://discord.com/developers/docs/events/gateway-events#request-soundboard-sounds
export type RequestSoundboardSoundsClientMessage = {
    op: 31,
    d: {
        guild_ids: number[],
    }
};