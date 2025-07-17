import type { APIGuildMember } from "../APIGuildMember";

export type APIThreadMember = {
    id?: string,
    user_id?: string,
    join_timestamp: string, //ISO8601
    flags: number,
    member?: APIGuildMember,
};