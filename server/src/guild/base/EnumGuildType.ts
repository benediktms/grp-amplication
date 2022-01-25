import { registerEnumType } from "@nestjs/graphql";

export enum EnumGuildType {
  Flat = "Flat",
  Group = "Group",
}

registerEnumType(EnumGuildType, {
  name: "EnumGuildType",
});
