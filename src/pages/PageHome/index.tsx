import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { AppDispatch, RootState } from "src/store";
import * as Styles from "./styles";
import { ItemBet, Header, ButtonsGame } from "@components/index";
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
  const typesGames = useSelector((state: RootState) => state.games.typesGame);
  const cart = useSelector((state: RootState) => state.cart.cart);
  const betsUser = cart.filter((bet) => bet.user === user?.email);
  const [bets, setTypes] = useState<Bet[]>(betsUser);

  console.log(bets);

  const handleFilterGame = useMemo(
    () => (type: string) => {
      setTypes((bets) => {
        const newBet: Bet[] = betsUser.filter((bet) => {
          if (bet.bet.type === type) {
            const arrayFilter = bets?.filter((Bet) => {
              return Bet.bet.type !== type;
            });
            return arrayFilter;
          } else {
            return bets?.push(bet);
          }
        });
        return newBet
      });
    },
    [betsUser]
  );

  const typeSelected = typesGames.filter((game) => {
    const g = bets?.find((bet) => {
      return bet.bet.type === game.type;
    });

    return g ? game.type : undefined;
  });

  const clearFilter = () => {
    setTypes(betsUser);
  };

  const changeGameActive = () => {
    dispatch(gameSelected("Lotofácil"));
    navigate("/NewBet");
  };
  return (
    <>
      <Header type="HomeUser" />
      <Styles.Container>
        <Styles.AreaFilter>
          <Styles.Title>recente games</Styles.Title>
          <Styles.ButtonsFilter>
            <span>Filters</span>
            <ButtonsGame
              select={handleFilterGame}
              type={typeSelected.length > 0 ? typeSelected[0].type : undefined}
            />
            <Styles.ButtonNeutralFilter onClick={clearFilter}>
              Limpar filtro
            </Styles.ButtonNeutralFilter>
          </Styles.ButtonsFilter>
          <Styles.NewBet onClick={changeGameActive}>
            New Bet <FiArrowRight />
          </Styles.NewBet>
        </Styles.AreaFilter>
        <Styles.Bets>
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
              return "";
            })
          ) : (
            <p>hi</p>
          )}
        </Styles.Bets>
      </Styles.Container>
    </>
  );
}
