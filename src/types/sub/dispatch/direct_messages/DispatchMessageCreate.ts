import type { APIGuildMember } from "../../../api/APIGuildMember";
import type { APIUser } from "../../../api/APIUser";
import type { APIMessage } from "../../../api/APIMessage";

export type DispatchMessageCreate = APIMessage & {
    guild_id?: string,
    member?: Partial<APIGuildMember>,
    mentions: APIUser & Partial<APIGuildMember>,
};