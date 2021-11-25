import { Button } from "./ButtonsGame";
import { useSelector } from "react-redux";
import { RootState } from "src/store";

interface ButtonProps {
  select(type: string): void;
  type?: string;
}

export function ButtonsGame(props: ButtonProps) {
  const games = useSelector((state: RootState) => state.games.typesGame);
  return (
    <>
      {games.map((item) => {
        const isType = props.type === item.type ? true : false;
        return (
          <Button
            key={item.id}
            color={item.color}
            isActive={isType}
            onClick={props.select.bind(null, item.type)}
          >
            {" "}
            {item.type}
          </Button>
        );
      })}
    </>
  );
}
