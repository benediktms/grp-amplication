import { ArgsType, Field } from "@nestjs/graphql";
import { GuildWhereUniqueInput } from "./GuildWhereUniqueInput";

@ArgsType()
class GuildFindUniqueArgs {
  @Field(() => GuildWhereUniqueInput, { nullable: false })
  where!: GuildWhereUniqueInput;
}

export { GuildFindUniqueArgs };
