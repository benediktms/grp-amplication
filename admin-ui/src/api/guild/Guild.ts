import { User } from "../user/User";

export type Guild = {
  createdAt: Date;
  id: string;
  members?: Array<User>;
  name: string | null;
  type?: "Flat" | "Group";
  updatedAt: Date;
};
