import type { HeartbeatClientMessage } from "./send/HeartbeatClientMessage";
import type { IdentifyClientMessage } from "./send/IdentifyClientMessage";
import type { PresenceUpdateClientMessage } from "./send/PresenceUpdateClientMessage";
import type { RequestGuildMembersClientMessage } from "./send/RequestGuildMembersClientMessage";
import type { RequestSoundboardSoundsClientMessage } from "./send/RequestSoundboardSoundsClientMessage";
import type { ResumeClientMessage } from "./send/ResumeClientMessage";
import type { VoiceStateUpdateClientMessage } from "./send/VoiceStateUpdateClientMessage";

export type GatewaySendMessage
    = IdentifyClientMessage
    | PresenceUpdateClientMessage
    | RequestGuildMembersClientMessage
    | RequestSoundboardSoundsClientMessage
    | ResumeClientMessage
    | VoiceStateUpdateClientMessage
    | HeartbeatClientMessage;