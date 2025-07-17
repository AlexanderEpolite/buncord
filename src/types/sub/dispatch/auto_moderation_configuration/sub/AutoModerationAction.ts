import type { DispatchAutoModerationRuleCreateTriggerMetadata } from "./DispatchAutoModerationRuleCreateTriggerMetadata";
import type { AutoModerationActionType } from "./sub/AutoModerationActionType";

export type AutoModerationAction = {
    type: AutoModerationActionType,
    metadata: {
        channel_id: string,
        duration_seconds: number,
        custom_message?: string,
    },
};