import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { GuildWhereInput } from "./GuildWhereInput";
import { Type } from "class-transformer";
import { GuildOrderByInput } from "./GuildOrderByInput";

@ArgsType()
class GuildFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => GuildWhereInput,
  })
  @Field(() => GuildWhereInput, { nullable: true })
  @Type(() => GuildWhereInput)
  where?: GuildWhereInput;

  @ApiProperty({
    required: false,
    type: GuildOrderByInput,
  })
  @Field(() => GuildOrderByInput, { nullable: true })
  @Type(() => GuildOrderByInput)
  orderBy?: GuildOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { GuildFindManyArgs };
