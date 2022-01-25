import { PrismaService } from "nestjs-prisma";
import { Prisma, Guild, User } from "@prisma/client";

export class GuildServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.GuildFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.GuildFindManyArgs>
  ): Promise<number> {
    return this.prisma.guild.count(args);
  }

  async findMany<T extends Prisma.GuildFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.GuildFindManyArgs>
  ): Promise<Guild[]> {
    return this.prisma.guild.findMany(args);
  }
  async findOne<T extends Prisma.GuildFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.GuildFindUniqueArgs>
  ): Promise<Guild | null> {
    return this.prisma.guild.findUnique(args);
  }
  async create<T extends Prisma.GuildCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GuildCreateArgs>
  ): Promise<Guild> {
    return this.prisma.guild.create<T>(args);
  }
  async update<T extends Prisma.GuildUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GuildUpdateArgs>
  ): Promise<Guild> {
    return this.prisma.guild.update<T>(args);
  }
  async delete<T extends Prisma.GuildDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.GuildDeleteArgs>
  ): Promise<Guild> {
    return this.prisma.guild.delete(args);
  }

  async findMembers(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<User[]> {
    return this.prisma.guild
      .findUnique({
        where: { id: parentId },
      })
      .members(args);
  }
}
