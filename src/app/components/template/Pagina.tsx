import { ReactNode } from "react";
import Menu from "./Menu";

type PageType = {
  children: ReactNode;
  clasName?: string;
}

export default function Pagina(props: PageType) {
  return (
    <div className="flex">
      <Menu />
      <main className={`flex-1 p-7 ${props.clasName ?? ""}`}>{props.children}</main>
    </div>
  )
}