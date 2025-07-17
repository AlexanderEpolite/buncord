import type { KeywordPresetTypes } from "./KeywordPresetTypes";

export type DispatchAutoModerationRuleCreateTriggerMetadata = {
    keyword_filter: string[],
    regex_patterns: string[],
    presets: KeywordPresetTypes[],
    allow_list: string[],
    mention_total_limit: number,
    mention_raid_protection_enabled: boolean,
};