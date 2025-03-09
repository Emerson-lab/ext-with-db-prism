import Link from "next/link";
import { ElementType } from "react";

type MenuItemType = {
  icon: ElementType,
  text: string,
  url: string
}

export function MenuItem(props: MenuItemType) {
  return (
    <Link href={props.url} className="flex gap-2 px-4 py-2 hover:bg-black">
      <props.icon className="text-zinc-200" size={24} stroke={1} />
      <span className="text-zinc-200">{props.text}</span>
    </Link>
  )
}