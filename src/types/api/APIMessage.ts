import type { APIMessageCreateAttachment } from "./sub/APIMessageCreateAttachment";
import type { APIEmbed } from "./APIEmbed";
import type { APIReaction } from "./APIReaction";
import type { APIUser } from "./APIUser";
import type { APIMessageType } from "./sub/APIMessageType";
import type { APIMessageActivityType } from "./sub/APIMessageActivityType";
import type { APIApplication } from "./APIApplication";
import type { APIInteractionType } from "./sub/APIInteractionType";
import type { APIGuildMember } from "./APIGuildMember";
import type { APIChannel } from "./APIChannel";
import type { APIThreadMember } from "./sub/APIThreadMember";

export type APIMessage = {
    id: string,
    channel_id: string,
    author: APIUser,
    content: string,
    timestamp: string, //ISO8601,
    edited_timestamp?: string, //ISO8601
    tts: boolean,
    mention_everyone: boolean,
    mentions: APIUser[],
    mention_roles: string[],
    mention_channels: {
        id: string,
        guild_id: string,
        type: number,
        name: string,
    }[],
    attachments: APIMessageCreateAttachment[],
    embeds: APIEmbed[],
    reactions: APIReaction[],
    nonce?: number | string, //"integer or string" thanks discord
    pinned: boolean,
    webhook_id?: string,
    type: APIMessageType,
    activity?: {
        type: APIMessageActivityType,
        party_id?: string,
    },
    application?: Partial<APIApplication>,
    application_id?: string,
    flags?: number,
    message_reference?: {
        type?: 0 | 1,
        message_id?: string,
        channel_id?: string,
        guild_id?: string,
        fail_if_not_exists?: boolean,
    },
    message_snapshots?: Partial<APIMessage>, //not even a day into making the types and I've already found a recursive type
    referenced_message?: APIMessage,
    interaction_metadata?: {
        id: string,
        type: APIInteractionType,
        user: APIUser,
        authorizing_integration_owners: any, //TODO find type
        original_response_message_id?: string,
        target_user?: APIUser,
        target_message_id?: string,
    },
    
    /**
     * @deprecated
     */
    interaction?: {
        id: string,
        type: APIInteractionType,
        name: string,
        user: APIUser,
        member?: Partial<APIGuildMember>,
    },
    thread: APIChannel & APIThreadMember,
};