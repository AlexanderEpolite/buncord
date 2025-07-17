import type { AutoModerationAction } from "./AutoModerationAction";
import type { DispatchAutoModerationRuleCreateTriggerEvent } from "./DispatchAutoModerationRuleCreateTriggerEvent";
import type { DispatchAutoModerationRuleCreateTriggerMetadata } from "./DispatchAutoModerationRuleCreateTriggerMetadata";
import type { DispatchAutoModerationRuleCreateTriggerType } from "./DispatchAutoModerationRuleCreateTriggerType";

export type AutoModerationRuleObject = {
    id: string,
    guild_id: string,
    name: string,
    creator_id: string,
    event_type: DispatchAutoModerationRuleCreateTriggerEvent,
    trigger_type: DispatchAutoModerationRuleCreateTriggerType,
    trigger_metadata: DispatchAutoModerationRuleCreateTriggerMetadata,
    actions: AutoModerationAction[],
    enabled: boolean,
    exempt_roles: string[],
    exempt_channels: string[],
}