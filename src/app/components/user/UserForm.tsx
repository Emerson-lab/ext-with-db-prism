'use client'
import { User } from "@/core/model/User";
import InputText from "../shared/InputText";

type UserFormType = {
  user: Partial<User>;
  onChenge: (user: Partial<User>) => void;
  onSave: () => void;
  onCancel: () => void;
  deleteUser: () => void;
};

export default function UserForm(props: UserFormType) {
  return (
    <div>
      <form className="flex flex-col gap-5">
        <InputText
          type="text"
          label="Nome"
          value={props.user.name}
          onChange={e => props.onChenge?.({ ...props.user, name: e.target.value })}
        />

        <InputText
          type="email"
          label="Email"
          value={props.user.email}
          onChange={e => props.onChenge?.({ ...props.user, email: e.target.value })}
        />

        <InputText
          label="Senha"
          type="password"
          value={props.user.password}
          onChange={e => props.onChenge?.({ ...props.user, password: e.target.value })}
        />

        <div className="flex justify-between gap-5">
          <div className="flex gap-5">
            <button
              type="submit"
              onClick={props.onSave}
              className="w-full px-4 py-2 text-white rounded-md bg-blue-500 hover:bg-blue-600"
            >
              Salvar
            </button>

            <button
              onClick={props.onCancel}
              className="w-full px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600"
            >
              Cancelar
            </button>
          </div>

          <button
            type="submit"
            onClick={props.deleteUser}
            className=" px-4 py-2 text-white rounded-md bg-red-500 hover:bg-red-600"
          >
            Excluir
          </button>
        </div>
      </form>
    </div>
  )
}