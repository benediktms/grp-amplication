import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type GuildWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  type?: "Flat" | "Group";
};
