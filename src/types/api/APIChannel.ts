import type { APIChannelType } from "./sub/APIChannelType";

export type APIChannel = {
    id: string,
    type: APIChannelType,
    guild_id?: string,
    position?: number,
    permission_overwrites?: {
        id: string,
        type: 0 | 1, //0 role, 1 member
        allow: string,
        deny: string,
    }[],
    name?: string,
    topic?: string,
    nsfw?: boolean,
};