import { Button } from "./ButtonsGame";

interface ButtonProps {
  select(type: string): void;
  type: string;
  isActive: boolean | undefined;
  color: string;
}

export function ButtonsGame(props: ButtonProps) {
  return (
    <>
          <Button
            color={props.color}
            isActive={props.isActive}
            onClick={props.select.bind(null, props.type)}
          >
            {props.type}
          </Button>
    </>
  );
}
