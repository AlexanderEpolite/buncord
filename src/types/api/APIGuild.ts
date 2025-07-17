import type { APIEmoji } from "./APIEmoji";
import type { APIRole } from "./APIRole";
import type { APISticker } from "./APISticker";
import type { APIGuildExplicitContentFilterLevel } from "./sub/APIGuildExplicitContentFilterLevel";
import type { APIGuildFeature } from "./sub/APIGuildFeature";
import type { APIGuildMessageNotificationLevel } from "./sub/APIGuildMessageNotificationLevel";
import type { APIGuildNSFWLevel } from "./sub/APIGuildNSFWLevel";
import type { APIGuildVerificationLevel } from "./sub/APIGuildVerificationLevel";

export type APIGuild = {
    id: string,
    name: string,
    icon?: string,
    icon_hash?: string,
    splash?: string,
    discovery_splash?: string,
    owner?: boolean,
    owner_id: string,
    permissions?: string,
    region?: string,
    afk_channel_id?: string,
    afk_timeout: number,
    widget_enabled?: boolean,
    widget_channel_id?: string,
    verification_level: APIGuildVerificationLevel,
    default_message_notifications: APIGuildMessageNotificationLevel,
    explicit_content_filter: APIGuildExplicitContentFilterLevel,
    roles: APIRole[],
    emojis: APIEmoji[],
    features: APIGuildFeature[],
    mfa_level: 0 | 1,
    application_id?: string,
    system_channel_id?: string,
    system_channel_flags: number,
    rules_channel_id?: string,
    max_presences?: number,
    max_members?: number,
    vanity_url_code?: string,
    description?: string,
    banner?: string,
    premium_tier: number,
    premium_subscription_count?: number,
    preferred_locale: string,
    public_updates_channel_id?: string,
    max_video_channel_users?: number,
    max_stage_video_channel_users?: number,
    approximate_member_count?: number,
    approximate_presence_count?: number,
    welcome_screen?: {
        description?: string,
        welcome_channels: {
            channel_id: string,
            description: string,
            emoji_id?: string,
            emoji_name?: string,
        }[],
    },
    nsfw_level: APIGuildNSFWLevel,
    stickers?: APISticker[],
    premium_progress_bar_enabled: boolean,
    safety_alerts_channel_id?: string,
};