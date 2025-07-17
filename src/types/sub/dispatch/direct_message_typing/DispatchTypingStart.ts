import type { APIGuildMember } from "../../../api/APIGuildMember"

export type DispatchTypingStart = {
    channel_id: string,
    guild_id: string,
    user_id: string,
    timestamp: number,
    member: APIGuildMember,
};
