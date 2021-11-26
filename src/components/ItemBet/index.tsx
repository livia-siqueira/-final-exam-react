import {
  Container,
  ContentBet,
  Data,
  Main,
  Numbers,
  Price,
  Section,
} from "./styles";

interface AddToCartData {
  color: string;
  price: number;
  type: string;
  numbers: number[];
  data: string;
}

export function ItemBet(props: AddToCartData) {
  const Year = props.data ? props.data.match(/\w{3}\d+/) : "";
  const MonthString = props.data ? props.data.match(/\w{3}/g) : "";
  const Day = props.data ? props.data.match(/\d{1,2}/) : "";
  let MonthInt: string = "0";

  if (MonthString) {
    switch (MonthString[1]) {
      case "Jan":
        MonthInt = "01";
        break;
      case "Feb":
        MonthInt = "02";
        break;
      case "Mar":
        MonthInt = "03";
        break;
      case "Apr":
        MonthInt = "04";
        break;
      case "May":
        MonthInt = "05";
        break;
      case "Jun":
        MonthInt = "06";
        break;
      case "Jul":
        MonthInt = "07";
        break;
      case "Aug":
        MonthInt = "08";
        break;
      case "Sep":
        MonthInt = "09";
        break;
      case "Oct":
        MonthInt = "10";
        break;
      case "Nov":
        MonthInt = "11";
        break;
      case "Dec":
        MonthInt = "12";
        break;
    }
  }

  return (
    <Container>
      <Main color={props.color}>
        <Numbers>{props.numbers.join(",")}</Numbers>
        <Section color={props.color}>
          <ContentBet>
            <Data>
              {Day}/{MonthInt}/{Year}
              <span>-</span>
            </Data>
            <Price>
              ({" "}
              {new Intl.NumberFormat("pt-br", {
                style: "currency",
                currency: "BRL",
              }).format(props.price)}
              )
            </Price>
          </ContentBet>
          <div>
            <span>{props.type}</span>
          </div>
        </Section>
      </Main>
    </Container>
  );
}
