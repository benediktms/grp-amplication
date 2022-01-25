import { ArgsType, Field } from "@nestjs/graphql";
import { GuildWhereUniqueInput } from "./GuildWhereUniqueInput";
import { GuildUpdateInput } from "./GuildUpdateInput";

@ArgsType()
class UpdateGuildArgs {
  @Field(() => GuildWhereUniqueInput, { nullable: false })
  where!: GuildWhereUniqueInput;
  @Field(() => GuildUpdateInput, { nullable: false })
  data!: GuildUpdateInput;
}

export { UpdateGuildArgs };
