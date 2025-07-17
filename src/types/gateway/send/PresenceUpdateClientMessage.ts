import type { PresenceActivity } from "../../sub/PresenceActivity";

// https://discord.com/developers/docs/events/gateway-events#update-presence
export type PresenceUpdateClientMessage = {
    op: 3,
    d: {
        since: number,
        activities: PresenceActivity[],
        status: "online" | "dnd" | "idle" | "invisible" | "offline",
        afk: boolean,
    },
};