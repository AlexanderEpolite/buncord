import Elysia from "elysia";

/**
 * Creates a Buncord server using Elysia.
 * 
 * The Buncord server will allow your bot to receive events as HTTP endpoints, without the need for a gateway connection.
 * 
 * You should only use this feature if you do not intend to receive other non-command gateway messages.
 */
export default class BuncordServer {
    
    public readonly server: Elysia;
    
    public constructor(port: number) {
        this.server = new Elysia()
            .post("/", async (ctx) => {
                
            })
            .listen(port);
    }
}