import { Module } from "@nestjs/common";
import { GuildModuleBase } from "./base/guild.module.base";
import { GuildService } from "./guild.service";
import { GuildController } from "./guild.controller";
import { GuildResolver } from "./guild.resolver";

@Module({
  imports: [GuildModuleBase],
  controllers: [GuildController],
  providers: [GuildService, GuildResolver],
  exports: [GuildService],
})
export class GuildModule {}
