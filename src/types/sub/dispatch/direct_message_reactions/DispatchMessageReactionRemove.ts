import type { APIEmoji } from "../../../api/APIEmoji";

export type DispatchMessageReactionRemove = {
    user_id: string,
    channel_id: string,
    message_id: string,
    guild_id: string,
    emoji: APIEmoji,
    burst: boolean,
    
    /**
     * 0 is normal, 1 is burst (super reaction)
     * 
     * Why Discord needed to specify this and have a burst parameter is beyond me
     */
    type: 0 | 1,
}
