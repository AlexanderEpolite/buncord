import type { APIEmoji } from "./APIEmoji";

// https://discord.com/developers/docs/resources/message#reaction-object
export type APIReaction = {
    count: number,
    count_details: {
        
    },
    me: boolean,
    me_burst: boolean,
    emoji: Partial<APIEmoji>,
    burst_colors: string[], //array of hex colors
};