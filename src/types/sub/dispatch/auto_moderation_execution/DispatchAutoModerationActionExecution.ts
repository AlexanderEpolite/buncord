import type { AutoModerationRuleObject } from "../auto_moderation_configuration/sub/AutoModerationRuleObject"
import type { DispatchAutoModerationRuleCreateTriggerEvent } from "../auto_moderation_configuration/sub/DispatchAutoModerationRuleCreateTriggerEvent"
import type { DispatchAutoModerationRuleCreateTriggerType } from "../auto_moderation_configuration/sub/DispatchAutoModerationRuleCreateTriggerType"

// https://discord.com/developers/docs/events/gateway-events#auto-moderation-action-execution-auto-moderation-action-execution-event-fields
export type DispatchAutoModerationActionExecution = {
    guild_id: string,
    action: AutoModerationRuleObject,
    rule_id: string,
    rule_trigger_type: DispatchAutoModerationRuleCreateTriggerType,
    user_id: string,
    channel_id?: string,
    message_id?: string,
    alert_system_message_id?: string,
    content: string, //only available with message content intent
    matched_keyword?: string,
    matched_content?: string, //only available with message content intent
};
