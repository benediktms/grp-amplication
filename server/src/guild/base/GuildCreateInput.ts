import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsEnum } from "class-validator";
import { EnumGuildType } from "./EnumGuildType";
@InputType()
class GuildCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: true,
    enum: EnumGuildType,
  })
  @IsEnum(EnumGuildType)
  @Field(() => EnumGuildType)
  type!: "Flat" | "Group";
}
export { GuildCreateInput };
