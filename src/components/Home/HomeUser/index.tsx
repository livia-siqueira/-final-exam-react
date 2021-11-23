import { Header } from "@components/PageGame/Header";
import { useSelector } from "react-redux";
import { RootState } from "src/store";
import { ItemBet } from "./itemBet";
import { Main, Title , Bets } from "./styles";
import {  useNavigate } from "react-router";

export default function HomeUser() {

    const user = useSelector((state: RootState) => state.users.userAuthenticated);
    const betsUser = user ? user.bets : [];
    const navigate = useNavigate();

    const newBet = () =>{
        navigate("/PageBet");
    }

  return (
    <>
      <Header />
      <Main>
            <Title>Recente Games</Title>
            <Bets>
            { betsUser.map((bet) => {
            const { color, price, type, numbers } = bet.bet;
            return <ItemBet color={color} price={price} type={type} numbers={numbers}/>
          })}
            </Bets>
            <button onClick={newBet}>New Bet</button>
      </Main>
    </>
  );
}
