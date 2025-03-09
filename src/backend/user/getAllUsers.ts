'use server'
import UserRepo from "./UserRepo";

export default async function getAllUsers() {
  return UserRepo.getAllUsers();
}