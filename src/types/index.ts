import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";
import { LunarAssistant } from "..";

export interface SlashCommandData {
  data: SlashCommandBuilder;
  execute: (
    lunarAssistant: LunarAssistant,
    interaction: CommandInteraction
  ) => Promise<void>;
}

export interface UpdateUserDiscordRolesResponse {
  activeRoles: { [guildName: string]: string[] };
  removedRoles: { [guildName: string]: string[] };
}

export interface RandomEarthUserItem {
  collection_addr: string;
  token_id: string;
}

export interface RandomEarthUserItems {
  items: RandomEarthUserItem[];
  total: number;
  page: number;
  pages: number;
}

export interface KnowhereUserItem {
  nftContract: string;
  tokenId: string;
}

export interface UserTokens {
  [nftAddress: string]: string[];
}
