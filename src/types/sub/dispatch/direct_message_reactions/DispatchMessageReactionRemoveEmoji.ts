import type { APIEmoji } from "../../../api/APIEmoji"

export type DispatchMessageReactionRemoveEmoji = {
    channel_id: string,
    guild_id?: string,
    message_id: string,
    emoji: Partial<APIEmoji>,
};
