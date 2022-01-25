import { ArgsType, Field } from "@nestjs/graphql";
import { GuildWhereUniqueInput } from "./GuildWhereUniqueInput";

@ArgsType()
class DeleteGuildArgs {
  @Field(() => GuildWhereUniqueInput, { nullable: false })
  where!: GuildWhereUniqueInput;
}

export { DeleteGuildArgs };
