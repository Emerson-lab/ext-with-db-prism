import Backend from "@/backend";
import { User } from "@/core/model/User";
import { useEffect, useState } from "react";

export default function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<Partial<User> | null>(null);

  useEffect(() => {
    Backend.users.getAllUsers().then(setUsers)
  }, []);

  async function saveUser() {
    if (!user) return;
    await Backend.users.userSave(user);
    const users = await Backend.users.getAllUsers();
    setUsers(users);
    setUser(null);
  };

  async function deleteUser() {
    if (!user || !user?.id) return;
    await Backend.users.deleteUser(user.id);
    const users = await Backend.users.getAllUsers();
    setUsers(users);
    setUser(null);
  };

  return {
    user,
    users,
    setUser,
    saveUser,
    deleteUser,
    cancel: () => setUser(null),
    changeUser: (user: Partial<User> | null) => setUser(user)
  };
}