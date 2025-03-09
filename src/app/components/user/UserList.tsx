import { User } from "@/core/model/User";
import UserRow from "./UserRow";

export type UserListType = {
  onClik?: (user: User) => void
  users: User[] | undefined
}

export default function UserList(props: UserListType) {
  return (
    <div className="flex flex-col gap-4">
      {props.users?.map(user => (
        <UserRow key={user.id} user={user} onClick={props.onClik} />
      ))}
    </div>
  )
}