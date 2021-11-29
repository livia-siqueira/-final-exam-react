import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { ChoiceGame, Container, Main, Title, Text } from "./styles";
import { RootState, AppDispatch } from "src/store";
import { fetchGamesData, gameSelected, addBetInUser  } from "@storeReducers/index";
import { orderNumber } from "@sharedUtils/index";
import {
  Cart,
  GameControls,
  GameArea,
  Header,
  ButtonsGame,
  FooterPage,
  PageError,
} from "@components/index";

interface propsPageBet{
  authenticated: boolean
}


export function PageBet(props: propsPageBet) {
  const dispatch: AppDispatch = useDispatch();
  const [numberBet, setNumbersBet] = useState<number[]>([]);

  useEffect(() => {
    dispatch(fetchGamesData());
  }, [dispatch]);

  const userLogged = useSelector(
    (state: RootState) => state.users.userAuthenticated
  );

  const games = useSelector((state: RootState) => state.games.typesGame);
  const gameActive = useSelector((state: RootState) => state.games.isGameAtivate);

  const gameActual = games.find((game) => {
    if (game.type === gameActive) return game;
    return "";
  });

  const ArrayMaxNumber: number[] = Array.from({
    length: gameActual?.range ? gameActual?.range : 0,
  });

  const numberGame: number[] = ArrayMaxNumber.map((_, index) => index + 1);

  const changeGameActual = (type: string) => {
    dispatch(gameSelected(type));
    handleClearGame();
  };

  function handleClearGame() {
    setNumbersBet([]);
  }

  const handleCompleteGame = useCallback(() => {
    setNumbersBet((number) => {
      const getNumbers = [...number];
      const maxNumbersSorted = gameActual?.["max-number"]
        ? gameActual?.["max-number"]
        : 0;
      const qtdNumberSorted = gameActual?.range ? gameActual?.range : 0;
      if (maxNumbersSorted !== 0) {
        while (getNumbers.length < maxNumbersSorted) {
          const numberGame = Math.floor(Math.random() * qtdNumberSorted);
          if (!getNumbers.includes(numberGame) && numberGame !== 0) {
            getNumbers.push(numberGame);
          }
        }
      }
      return getNumbers;
    });
  }, [gameActual]);

  const handleNoSelectNumber = useCallback((number: number) => {
    setNumbersBet((numbers) => {
      return numbers.filter((numberSelect) => numberSelect !== number);
    });
  }, []);

  const handleSelectNumber = useCallback(
    (number: number) => {
      setNumbersBet((numbers) => {
        const existQtdNumber = numbers.length;
        const maxNumber = gameActual ? gameActual["max-number"] : 0;
        if (existQtdNumber >= maxNumber) {
          if (existQtdNumber === maxNumber) {
            toast.error("Já foram selecionados números suficientes");
            return numbers;
          }
        }

        return [...numbers, number];
      });
    },
    [gameActual]
  );

  const handleAddCart = useCallback(() => {
    const numbersInCar = numberBet.length;
    const maxNumberGame = gameActual ? gameActual["max-number"] : 0;
    const game = maxNumberGame - numbersInCar;
    if (game !== 0)
      return toast.error(
        `Hi, select the right amount of numbers. \nFor ${gameActual?.type} select ${maxNumberGame} numbers. \n ${game} numbers are missing 😉`
      );
    const newBet = {
      bet: {
        numbers: orderNumber(numberBet),
        type: gameActual ? gameActual.type : "erro",
        price: gameActual ? gameActual.price : 0,
        color: gameActual ? gameActual.color : "erro",
      },
      user: userLogged ? userLogged.email : "erro",
    };

    dispatch(addBetInUser(newBet));
    handleClearGame();
  }, [dispatch, gameActual, numberBet, userLogged]);

  if(!props.authenticated) return <PageError/>

  return (
    <>
      <Header type="Home" />
      <Container>
        <Main>
          <Title>
            <b>new bet </b> for
            <span> {gameActual?.type}</span>
          </Title>
          <Text>Choose a game</Text>
          <ChoiceGame>
            {games.map((item) => {
              const isType = gameActual?.type === item.type ? true : false;
              return (
                <ButtonsGame
                  key={item.id}
                  type={item.type}
                  color={item.color}
                  isActive={isType}
                  select={changeGameActual}
                  />
              );
            })}
          </ChoiceGame>
          <GameArea
            arrayNumbersBet={numberGame}
            numberBet={numberBet}
            handleCompleteGame={handleCompleteGame}
            handleSelectNumber={handleSelectNumber}
            handleNoSelectedNumber={handleNoSelectNumber}
            gameActual={gameActual ? gameActual : null}
          />
          <GameControls
            handleCompleteGame={handleCompleteGame}
            handleClearGame={handleClearGame}
            handleAddCart={handleAddCart}
          />
        </Main>
        <Cart bets={userLogged ? userLogged.bets : []} />
      </Container>
      <FooterPage />
    </>
  );
}
