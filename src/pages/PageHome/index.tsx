import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { AppDispatch, RootState } from "src/store";
import * as Styles from "./styles";
import { ItemBet, Header, ButtonsGame, PageError } from "@components/index";
import { fetchGamesData, gameSelected } from "@storeReducers/index";
import { Bet } from "@sharedUtils/types";
import { useNavigate } from "react-router";

interface insertFilterInGame {
  type: string;
  color: string;
}

interface propsHome{
  authenticated: boolean
}

export function Home(props: propsHome) {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchGamesData());
  }, [dispatch]);

  const user = useSelector((state: RootState) => state.users.userAuthenticated);
  const typesGames = useSelector((state: RootState) => state.games.typesGame);
  const cart = useSelector((state: RootState) => state.cart.cart);
  const betsUser = cart.filter((bet) => bet.user === user?.email);
  const [bets, setTypes] = useState<string[]>();


  const typeOfGames = useMemo<insertFilterInGame[]>(() => {
    if (!betsUser.length) return [];

    return betsUser.reduce<insertFilterInGame[]>((acc, bet) => {
      const typeOfGame = { type: bet.bet.type, color: bet.bet.color };
      const isTypeExistent = acc.find(({ type }) => type === typeOfGame.type);
      return isTypeExistent ? acc : [...acc, typeOfGame];
    }, []);
  }, [user]);

  const filteredGamesByTypes = useMemo<Bet[]>(() => {
    if (user && !bets?.length) return betsUser;
    return user ? betsUser.filter((bet) => bets?.includes(bet.bet.type)) : [];
  }, [user, bets]);

  

  const changeGameActive = () => {
    dispatch(gameSelected("Lotofácil"));
    navigate("/NewBet");
  };

  const handleChangeGameType = useCallback((type: string) => {
    setTypes((itens) =>
      itens ? (itens.includes(type) ? itens : [...itens, type]) : []
    );
  }, []);

  const handleClearGameType = useCallback((type: string) => {
    setTypes((itens) =>
      itens
        ? itens.filter(
            (typeGame) => typeGame !== type
          )
        : undefined
    );
  }, []);

  if(!props.authenticated) return <PageError/>

  if(typeOfGames.length === 0){
    return (
      <>
      <Header type="HomeUser" />
      <Styles.Container>
        <Styles.AreaFilter>
          <Styles.Title>recent games</Styles.Title>
          <Styles.ButtonsFilter>
           <span>Filters:  </span>
           <h6>There are no games to be filtered</h6>
          </Styles.ButtonsFilter>
          <Styles.NewBet onClick={changeGameActive}>
            New Bet <FiArrowRight />
          </Styles.NewBet>
        </Styles.AreaFilter>
        <Styles.Bets>
        <Styles.Message>You still don't have betting history. Click on "New Bet" and start playing. Good luck.</Styles.Message>
        </Styles.Bets>
      </Styles.Container>
    </>
    )
  }

  return (
    <>
      <Header type="HomeUser" />
      <Styles.Container>
        <Styles.AreaFilter>
          <Styles.Title>recente games</Styles.Title>
          <Styles.ButtonsFilter>
            <span>Filters</span>
            {typeOfGames.map(({ type, color }) => {
              const isActive = bets ? bets.includes(type) : undefined;
              const handleClickGameType = isActive
                ? handleClearGameType.bind(null, type)
                : handleChangeGameType.bind(null, type);
              return (
               <ButtonsGame isActive={isActive ? isActive : undefined} type={type} color={color} select={handleClickGameType}/>
              )
            })}
          </Styles.ButtonsFilter>
          <Styles.NewBet onClick={changeGameActive}>
            New Bet <FiArrowRight />
          </Styles.NewBet>
        </Styles.AreaFilter>
        <Styles.Bets>
          {filteredGamesByTypes.map((bet) => {
            return (
              <ItemBet color={bet.bet.color} price={bet.bet.price} type={bet.bet.type} data={bet.bet.date} numbers={bet.bet.numbers}/>
            )
          })}
        </Styles.Bets>
      </Styles.Container>
    </>
  );
}
