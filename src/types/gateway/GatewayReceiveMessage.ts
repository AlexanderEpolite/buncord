import type { DispatchServerMessage } from "./receive/DispatchServerMessage";
import type { HeartbeatAckServerMessage } from "./receive/HeartbeatAckServerMessage";
import type { HelloServerMessage } from "./receive/HelloServerMessage";
import type { ReconnectServerMessage } from "./receive/ReconnectServerMessage";

export type GatewayReceiveMessage
    = DispatchServerMessage
    | HeartbeatAckServerMessage
    | HelloServerMessage
    | ReconnectServerMessage;