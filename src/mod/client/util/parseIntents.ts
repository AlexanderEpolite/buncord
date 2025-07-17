import type { DiscordIntent } from "../../../struct/DiscordIntent";

export default function parseIntents(intents: DiscordIntent[]): number {
    return intents.reduce((total, i) => total + i, 0);
}
