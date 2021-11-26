import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { AppDispatch, RootState } from "src/store";
import {
  Title,
  Bets,
  NewBet,
  AreaFilter,
  ButtonsFilter,
  Container,
  ButtonNeutralFilter,
} from "./styles";
import { Msg } from "../../stylesGlobal/global";
import { ItemBet } from "@components/ItemBet";
import { Header } from "@components/Header";
import { ButtonsGame } from "@components/ButtonsGame";
import { fetchGamesData } from "@storeGames/thunks";
import { Bet } from "src/shared/utils/types";
import { gameSelected } from "@storeGames/index";
import { useNavigate } from "react-router";

export function Home() {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchGamesData());
  }, [dispatch]);

  const user = useSelector((state: RootState) => state.users.userAuthenticated);
  const typesGames = useSelector((state: RootState) => state.games.typesGame)
  const cart = useSelector((state: RootState) => state.cart.cart);
  const betsUser = cart.filter((bet) => bet.user === user?.email);
  const [bets, setTypes] = useState<Bet[]>(betsUser);

  const handleFilterGame = useMemo(
    () => (type: string) => {
      setTypes(betsUser);
      setTypes((bets) => {
        const filter = bets.filter((bet) => {
          return bet.bet.type === type;
        });
        return filter;
      });
    },
    [betsUser]
  );

  
  const typeSelected = typesGames.filter((game) => {
    const g = bets.find((bet) => {
      return bet.bet.type === game.type;
    })

    return g ? game.type : undefined;
  }) 
  const clearFilter = () => {
    setTypes(betsUser);
  }

  const changeGameActive = () => {
    dispatch(gameSelected('Lotofácil'));
    navigate("/NewBet")
  }

  return (
    <>
      <Header type="HomeUser" />
      <Container>
        <AreaFilter>
          <Title>recente games</Title>
          <ButtonsFilter>
            <span>Filters</span>
            <ButtonsGame select={handleFilterGame} type={typeSelected.length > 0 ? typeSelected[0].type : undefined } />
            <ButtonNeutralFilter onClick={clearFilter}>Limpar filtro</ButtonNeutralFilter>
          </ButtonsFilter>
          <NewBet onClick={changeGameActive}>
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
              return '';
            })
          ) : (
            <Msg>You don't have recent bets. <br/>Start betting now. Click on the "New Bet" button</Msg>
          )}
        </Bets>
      </Container>
    </>
  );
}
