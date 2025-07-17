
// https://discord.com/developers/docs/events/gateway-events#update-voice-state-gateway-voice-state-update-structure
export type VoiceStateUpdateClientMessage = {
    op: 4,
    d: {
        guild_id: string,
        channel_id?: string, //null to disconnect
        self_mute: boolean,
        self_deaf: boolean,
    }
};