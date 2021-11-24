import { Header } from "@components/PageGame/Header";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "src/store";
import { ItemBet } from "./itemBet";
import { Title, Bets, NewBet, AreaFilter, ButtonsFilter, Msg } from "./styles";
import { useNavigate } from "react-router";
import { Container } from "./styles";
import { UserActionGame } from "@components/PageGame/UserActionGame";
import { ButtonsGame } from "@components/PageGame/ButtonsGame";
import { useCallback, useEffect, useMemo, useState } from "react";
import { fetchGamesData } from "src/store/games/thunks";
import { FiArrowRight } from "react-icons/fi";
import { Bet } from "src/store/users/controlUsers";
import { type } from "os";
import { types } from "@babel/core";
import { fill, filter } from "lodash";

export default function HomeUser() {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGamesData());
  }, [dispatch]);

  const user = useSelector((state: RootState) => state.users.userAuthenticated);
  const cart = useSelector((state: RootState) => state.cart.cart);
  const {typesGame} = useSelector((state: RootState)=> state.games);
  const betsUser = cart.filter((bet) => bet.user === user?.email)

  const [bets, setTypes] = useState<Bet[]>(betsUser);
 
  const hasFilter = false;
  const navigate = useNavigate();

  const handleFilterGame = useMemo(() => (type: string) => {
    setTypes(betsUser)
    setTypes((bets) => {
      const filter = bets.filter((bet) => {
        return bet.bet.type === type
      })
      return filter;
    })
  }, [bets, user])
  return (
    <>
      <Header type="HomeUser" />
      <Container>
        <AreaFilter>
          <Title>recente games</Title>
          <ButtonsFilter>
            <span>Filters</span>
            <ButtonsGame select={handleFilterGame} />
          </ButtonsFilter>
          <NewBet to="/NewBet">
            New Bet <FiArrowRight />
          </NewBet>
        </AreaFilter>
        <Bets>
          {bets.length !== 0 ? (
            bets.map((bet) => {
              if (bet.user === user?.email) {
                const { color, price, type, numbers, date } = bet.bet;
                return (
                  <ItemBet
                    color={color}
                    price={price}
                    type={type}
                    numbers={numbers}
                    data={date}
                  />
                );
              }
            })
          ) : (
            <Msg>Não há apostas recentes</Msg>
          )}
        </Bets>
      </Container>
    </>
  );
}
