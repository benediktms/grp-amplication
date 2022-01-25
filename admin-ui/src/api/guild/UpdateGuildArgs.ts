import { GuildWhereUniqueInput } from "./GuildWhereUniqueInput";
import { GuildUpdateInput } from "./GuildUpdateInput";

export type UpdateGuildArgs = {
  where: GuildWhereUniqueInput;
  data: GuildUpdateInput;
};
