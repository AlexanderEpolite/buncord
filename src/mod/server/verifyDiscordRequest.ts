import { verifyKey } from "discord-interactions";

//Migrated from https://github.com/discord/cloudflare-sample-app/blob/main/src/server.js
export default async function verifyDiscordRequest(body: string, signature_ed25519: string, signature_timestamp: string, public_key: string) {
    const isValidRequest = signature_ed25519 && signature_timestamp && (await verifyKey(body, signature_ed25519, signature_timestamp, public_key));
    
    if(!isValidRequest) {
        return {
            isValid: false
        };
    }
    
    return {
        interaction: JSON.parse(body),
        isValid: true
    };
}