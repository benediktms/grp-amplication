import { Guild } from "../guild/Guild";

export type User = {
  createdAt: Date;
  firstName: string | null;
  guilds?: Array<Guild>;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
