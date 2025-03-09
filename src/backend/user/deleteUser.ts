'use server'

import UserRepo from "./UserRepo";

export default async function userDelete(id: string) {
  return UserRepo.deletar(id);
}