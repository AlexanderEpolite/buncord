import type { APIUser } from "./APIUser";
import type { APIStickerFormatType } from "./sub/APIStickerFormatType";

export type APISticker = {
    id: string,
    pack_id?: string,
    name: string,
    description?: string,
    tags: string, //comma sep
    type: 1 | 2, //1 is official, 2 is custom
    format_type: APIStickerFormatType,
    available?: boolean,
    guild_id?: string,
    user?: APIUser,
    sort_value?: number,
};