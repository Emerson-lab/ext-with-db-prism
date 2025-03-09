import { ElementType } from "react";

type TitleType = {
  title: string;
  subtitle: string;
  icon: ElementType;
};


export default function Title(props: TitleType) {
  return (
    <div className="flex gap-2">
      {props.icon && <props.icon size={55} stroke={1} />}
      <div>
        <h1 className="text-2xl font-bold">{props.title}</h1>
        <h2 className="text-zinc-400 font-semibold">{props.subtitle}</h2>
      </div>
    </div>
  )
};