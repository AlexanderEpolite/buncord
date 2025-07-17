import type { DiscordIntent } from "../struct/DiscordIntent";

/**
 * Client configuration for a Gateway bot.
 * 
 * You can define intents using the {@link DiscordIntent} class, to define which events your bot will receive.
 */
export type ClientConfiguration = {
    
    /**
     * Your Discord bot token.
     */
    token: string,
    
    /**
     * Discord intents to use for the bot.  An array of intents must be provided.
     * 
     * This will define which events your bot will receive on the Gateway, and some events are
     * only available if you have it enabled on your bot through the Discord developer portal.
     */
    intents: DiscordIntent[],
    
    /**
     * Gateway version to select (Note: 6-8 are deprecated).
     * @default 10
     */
    version?: 10 | 9 | 8 | 7 | 6, //keeping 6-8 because they're technically still available on the Discord API.
    
    /**
     * Whether or not to enable Sharding.  If not defined, sharding will be enabled if Discord requires sharding be enabled.
     * 
     * If your bot is in more than 2500 servers, this cannot be false.
     */
    sharding?: boolean,
    
    /**
     * Normally, you would not set the shard count manually, as Discord will specify a shard count to use.
     * 
     * For debugging or other reasons, it is available here, otherwise it will be set by Discord.
     */
    shard_count?: number,
}