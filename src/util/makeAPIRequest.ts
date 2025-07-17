
const BASE_URL = "https://discord.com/api/v10"

export default async function makeAPIRequest<T>(path: string, token: string, method: "POST" | "GET" | "PUT" | "DELETE" | "PATCH", body?: string): Promise<T> {
    let headers: HeadersInit = {};
    
    (method === "POST" || method === "PATCH" || method === "PUT") && (headers["Content-Type"] = "application/json");
    
    headers["Authorization"] = "Bot " + token;
    
    headers["User-Agent"] = "Buncord/1.0.0";
    
    const f = await fetch(BASE_URL + path, {
        headers,
        body,
    });
    
    const json = await f.json();
    
    if(!f.ok) {
        throw new Error("Discord API Request Error: " + json);
    }
    
    return json;
}