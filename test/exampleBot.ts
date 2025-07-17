import BuncordClient from "../src/mod/BuncordClient";
import { DiscordIntent } from "../src/struct/DiscordIntent";

const token = process.env["DISCORD_TOKEN"];

const client = new BuncordClient({
    token: token!,
    intents: [DiscordIntent.GUILDS],
    version: 10,
});

client.start();