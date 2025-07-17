
export default function(message: string, ...params: any[]) {
    process.env["BUNCORD_DEBUG"] && console.log("[BUNCORD-DEBUG]: " + message, params);
}