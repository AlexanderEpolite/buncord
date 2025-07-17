import type { APIEmoji } from "../../../api/APIEmoji"
import type { APIGuildMember } from "../../../api/APIGuildMember"

export type DispatchMessageReactionAdd = {
    user_id: string,
    channel_id: string,
    message_id: string,
    guild_id: string,
    member?: APIGuildMember,
    emoji: APIEmoji,
    message_author_id?: string,
    burst: boolean,
    burst_colors?: string[],
    
    /**
     * 0 is normal, 1 is burst (super reaction)
     * 
     * Why Discord needed to specify this and have a burst parameter is beyond me
     */
    type: 0 | 1,
};
