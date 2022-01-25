import { GuildWhereInput } from "./GuildWhereInput";
import { GuildOrderByInput } from "./GuildOrderByInput";

export type GuildFindManyArgs = {
  where?: GuildWhereInput;
  orderBy?: GuildOrderByInput;
  skip?: number;
  take?: number;
};
