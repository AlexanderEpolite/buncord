import type { APIUser } from "./APIUser";

export type APIEmoji = {
    id: string,
    name?: string,
    roles?: string[],
    user?: APIUser,
    require_colons?: boolean,
    managed?: boolean,
    animated?: boolean,
    available?: boolean,
};