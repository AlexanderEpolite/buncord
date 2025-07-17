export class Opcode {
    public static readonly DISPATCH = 0;
    public static readonly HEARTBEAT = 1;
    public static readonly IDENTIFY = 2;
    public static readonly PRESENCE_UPDATE = 3;
    public static readonly VOICE_STATE_UPDATE = 4;
    public static readonly RESUME = 6;
    public static readonly RECONNECT = 7;
    public static readonly REQUEST_GUILD_MEMBERS = 8;
    public static readonly INVALID_SESSION = 9;
    public static readonly HELLO = 10;
    public static readonly HEARTBEAT_ACK = 11;
    public static readonly REQUEST_SOUNDBOARD_SOUNDS = 31;
    
    private constructor() {}
}