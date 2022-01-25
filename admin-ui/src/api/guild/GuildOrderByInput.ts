import { SortOrder } from "../../util/SortOrder";

export type GuildOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  type?: SortOrder;
  updatedAt?: SortOrder;
};
