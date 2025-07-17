
// https://discord.com/developers/docs/events/gateway-events#request-guild-members-request-guild-members-structure
export type RequestGuildMembersClientMessage = {
    op: 8,
    d: {
        guild_id: string,
        query?: string,
        limit: number,
        presences?: boolean,
        user_ids?: string[],
        nonce: string, //while optional on docs, the library will require this.
    }
};