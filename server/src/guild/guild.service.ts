import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { GuildServiceBase } from "./base/guild.service.base";

@Injectable()
export class GuildService extends GuildServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
