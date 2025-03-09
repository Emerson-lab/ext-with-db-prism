import { User } from "@/core/model/User";
import { PrismaClient } from "@prisma/client";

export default class UserRepo {
  private static db: PrismaClient = new PrismaClient();

  static async getAllUsers(): Promise<User[]> {
    return await this.db.user.findMany();
  };

  static async getUserById(id: string): Promise<User> {
    const user = await this.db.user.findUnique({ where: { id } });

    if (!user) throw new Error(`User com id ${id} não encontrado.`);

    return user as User;
  };

  static async salvar(user: User): Promise<User> {
    return await this.db.user.upsert({
      where: { id: user.id },
      create: user,
      update: user,
    });
  };

  static async deletar(id: string): Promise<void> {
    await this.db.user.delete({ where: { id } });
  };
};