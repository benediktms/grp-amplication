import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateGuildArgs } from "./CreateGuildArgs";
import { UpdateGuildArgs } from "./UpdateGuildArgs";
import { DeleteGuildArgs } from "./DeleteGuildArgs";
import { GuildFindManyArgs } from "./GuildFindManyArgs";
import { GuildFindUniqueArgs } from "./GuildFindUniqueArgs";
import { Guild } from "./Guild";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { GuildService } from "../guild.service";

@graphql.Resolver(() => Guild)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class GuildResolverBase {
  constructor(
    protected readonly service: GuildService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Guild",
    action: "read",
    possession: "any",
  })
  async _guildsMeta(
    @graphql.Args() args: GuildFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Guild])
  @nestAccessControl.UseRoles({
    resource: "Guild",
    action: "read",
    possession: "any",
  })
  async guilds(
    @graphql.Args() args: GuildFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Guild[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Guild",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Guild, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Guild",
    action: "read",
    possession: "own",
  })
  async guild(
    @graphql.Args() args: GuildFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Guild | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Guild",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Guild)
  @nestAccessControl.UseRoles({
    resource: "Guild",
    action: "create",
    possession: "any",
  })
  async createGuild(
    @graphql.Args() args: CreateGuildArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Guild> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Guild",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Guild"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Guild)
  @nestAccessControl.UseRoles({
    resource: "Guild",
    action: "update",
    possession: "any",
  })
  async updateGuild(
    @graphql.Args() args: UpdateGuildArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Guild | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Guild",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Guild"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Guild)
  @nestAccessControl.UseRoles({
    resource: "Guild",
    action: "delete",
    possession: "any",
  })
  async deleteGuild(
    @graphql.Args() args: DeleteGuildArgs
  ): Promise<Guild | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [User])
  @nestAccessControl.UseRoles({
    resource: "Guild",
    action: "read",
    possession: "any",
  })
  async members(
    @graphql.Parent() parent: Guild,
    @graphql.Args() args: UserFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<User[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "User",
    });
    const results = await this.service.findMembers(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }
}
