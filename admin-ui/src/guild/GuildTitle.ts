import { Guild as TGuild } from "../api/guild/Guild";

export const GUILD_TITLE_FIELD = "name";

export const GuildTitle = (record: TGuild): string => {
  return record.name || record.id;
};
