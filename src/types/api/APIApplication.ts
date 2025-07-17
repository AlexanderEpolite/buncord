import type { APIGuild } from "./APIGuild";
import type { APIUser } from "./APIUser";
import type { APIApplicationEventWebhookStatus } from "./sub/APIApplicationEventWebhookStatus";

export type APIApplication = {
    id: string,
    name: string,
    icon?: string,
    description: string,
    rpc_origins?: string,
    bot_public: boolean,
    bot_require_code_grant: boolean,
    bot?: Partial<APIUser>,
    terms_of_service_url?: string,
    privacy_policy_url?: string,
    owner?: Partial<APIUser>,
    verify_key: string,
    team?: any, //TODO find the types for this, not listed on developer documentation
    guild_id?: string,
    guild: Partial<APIGuild>,
    primary_sku_id?: string,
    slug?: string,
    cover_image?: string,
    flags?: number,
    approximate_guild_count?: number,
    approximate_user_install_count?: number,
    redirect_uris?: string[],
    interactions_endpoint_url?: string[],
    role_connections_verification_url?: string,
    event_webhooks_url?: string,
    event_webhooks_status: APIApplicationEventWebhookStatus,
    event_webhooks_types?: ("APPLICATION_AUTHORIZED" | "ENTITLEMENT_CREATE" | "QUEST_USER_ENROLLMENT")[],
    tags?: string[],
    install_params?: {
        scopes: string[],
        permissions: string,
    },
    integration_types_config?: any, //not exactly sure of the type here, documentation is vague
    custom_install_url?: string,
};