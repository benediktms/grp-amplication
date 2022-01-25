import { ArgsType, Field } from "@nestjs/graphql";
import { GuildCreateInput } from "./GuildCreateInput";

@ArgsType()
class CreateGuildArgs {
  @Field(() => GuildCreateInput, { nullable: false })
  data!: GuildCreateInput;
}

export { CreateGuildArgs };
