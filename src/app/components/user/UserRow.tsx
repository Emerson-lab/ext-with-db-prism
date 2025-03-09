import { User } from "@/core/model/User";
import Image from "next/image";

export type UserRowType = {
  user: User;
  onClick?: (user: User) => void;
};

export default function UserRow(props: UserRowType) {
  return (
    <div
      className="flex bg-zinc-900 p-4 rounded-md cursor-pointer"
      onClick={() => props.onClick?.(props.user)}
    >
      <Image
        width={80}
        height={80}
        alt="Avatar"
        className="rounded-full"
        src={`https://api.dicebear.com/7.x/adventurer/png?seed=${props.user.id}&size=80`}
      />
      <div className="flex flex-col">
        <span className="text-xl font-black">{props.user.name}</span>
        <span className="text-[12px]">{props.user.email}</span>
      </div>
    </div>
  )
}