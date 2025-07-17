import { Opcode } from "../const/Opcode";
import type { ClientConfiguration } from "../types/ClientConfiguration";
import type { GatewayReceiveMessage } from "../types/gateway/GatewayReceiveMessage";

export default class BuncordClient {
    
    public readonly configuration;
    
    private socket?: WebSocket;
    
    private heartbeat_interval: number;
    private resume_token: string;
    
    private shard_id?: number; //undefined if sharding not enabled
    
    public constructor(configuration: ClientConfiguration) {
        this.configuration = configuration;
    }
    
    public start() {
        const gatewayVersion = this.configuration.version || 10;
        
        //TODO add compression support
        this.socket = new WebSocket("https://gateway.discord.gg/v" + gatewayVersion + "?encoding=json");
        
        this.socket.onmessage = this.receiveGatewayMessage;
    }
    
    private receiveGatewayMessage(data: MessageEvent) {
        const event = JSON.parse(data.data) as GatewayReceiveMessage;
        
        switch(event.op) {
            case Opcode.HELLO: {
                this.heartbeat_interval = event.d.heartbeat_interval;
                
                
            }
        }
    }
    
    public downloadServerMembers() {
        
    }
    
    
}