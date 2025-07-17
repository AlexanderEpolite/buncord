
// https://discord.com/developers/docs/topics/permissions#role-object-role-tags-structure
export type APIRole = {
    id: string,
    name: string,
    color: number,
    hoist: boolean,
    icon?: string,
    unicode_emoji?: string,
    position: number,
    permissions: string,
    managed: boolean,
    mentionable: boolean,
    tags?: {
        bot_id?: string,
        integration_id: string,
        premium_subscriber?: null, //bots are not able to see this.  why discord documented this?  i don't know
        subscription_listing_id?: string,
        available_for_purchase?: null,
        guild_connections?: null,
    },
    flags: number,
};