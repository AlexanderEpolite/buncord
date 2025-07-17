import type { APIUser } from "./APIUser";

export type APIGuildMember = {
    user: APIUser,
    nick?: string,
    avatar?: string,
    banner?: string,
    roles: string[],
    joined_at: string, //ISO8601
    premium_since?: string, //ISO8601
    deaf: boolean,
    mute: boolean,
    flags: number,
    pending?: boolean,
    permissions?: string,
    communication_disabled_until?: string, //ISO8601
    avatar_decoration_data?: {
        asset: string,
        sku_id: string,
    },
};