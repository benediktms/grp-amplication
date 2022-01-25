import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsEnum } from "class-validator";
import { EnumGuildType } from "./EnumGuildType";
@InputType()
class GuildUpdateInput {
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
    required: false,
    enum: EnumGuildType,
  })
  @IsEnum(EnumGuildType)
  @IsOptional()
  @Field(() => EnumGuildType, {
    nullable: true,
  })
  type?: "Flat" | "Group";
}
export { GuildUpdateInput };
