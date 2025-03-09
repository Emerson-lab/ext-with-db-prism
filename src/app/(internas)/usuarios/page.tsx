'use client'
import Pagina from "@/app/components/template/Pagina";
import Title from "@/app/components/template/Title";
import UserForm from "@/app/components/user/UserForm";
import UserList from "@/app/components/user/UserList";
import useUsers from "@/app/data/hooks/useUsers";
import { IconPlus, IconUser } from "@tabler/icons-react";

export default function Page() {
  const { user, users, saveUser, deleteUser, changeUser } = useUsers();

  return (
    <Pagina clasName="flex flex-col gap-10">
      <Title icon={IconUser} title="Usuários" subtitle="Cadastro de usuários" />

      {user ?
        <UserForm
          user={user}
          onSave={saveUser}
          onChenge={changeUser}
          deleteUser={deleteUser}
          onCancel={() => changeUser(null)}
        />
        :
        <>
          <div className="flex justify-end">
            <button
              onClick={() => changeUser({})}
              className="flex justify-center gap-2 bg-blue-500 px-4 py-2 rounded-md"
            >
              <IconPlus />
              <span>Novo Usuário</span>
            </button>
          </div>
          <UserList onClik={changeUser} users={users} />
        </>
      }
    </Pagina>
  )
}