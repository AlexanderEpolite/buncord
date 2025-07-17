import type { IdentifyClientMessage } from "../../../types/gateway/send/IdentifyClientMessage";

export default function formIdentityGatewayMessage(token: string, intents: number): IdentifyClientMessage {
    return {
        op: 2,
        d: {
            token,
            intents,
            properties: {
                os: process.platform,
                browser: "Buncord",
                device: "Buncord",
            },
        },
    };
}