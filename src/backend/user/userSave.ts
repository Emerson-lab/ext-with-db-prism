'use server'

import { User } from "@/core/model/User";
import Id from "@/core/utils/Id";
import UserRepo from "./UserRepo";

export default async function userSave(user: Partial<User>) {
  const newUser = {
    ...user,
    id: user.id ?? Id.new,
  }

  UserRepo.salvar(newUser as User);
}