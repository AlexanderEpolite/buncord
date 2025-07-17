
// https://discord.com/developers/docs/events/gateway-events#activity-object

import type { PresenceActivityButton } from "./PresenceActivityButton";
import type { PresenceActivityType } from "./PresenceActivityType";

export type PresenceActivity = {
    name: string,
    type: PresenceActivityType,
    url?: string,
    created_at: number,
    timestamps: {
        start?: number,
        end?: number,
    },
    application_id?: string,
    details?: string,
    state?: string,
    emoji?: { // https://discord.com/developers/docs/events/gateway-events#activity-object-activity-emoji
        name: string,
        id?: string,
        animated?: boolean,
    },
    party?: {
        id?: string,
        size: [number, number],
    },
    assets?: {
        large_image?: string,
        large_text?: string,
        small_image?: string,
        small_text?: string,
    },
    secrets?: {
        join?: string,
        spectate?: string,
        match?: string,
    },
    flags?: number,
    buttons?: [PresenceActivityButton] | [PresenceActivityButton, PresenceActivityButton], //1-2 buttons
};
