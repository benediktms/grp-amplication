import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GuildService } from "./guild.service";
import { GuildControllerBase } from "./base/guild.controller.base";

@swagger.ApiTags("guilds")
@common.Controller("guilds")
export class GuildController extends GuildControllerBase {
  constructor(
    protected readonly service: GuildService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
