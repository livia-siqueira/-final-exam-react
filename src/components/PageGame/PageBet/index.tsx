import { FormEvent, useCallback, useEffect, useState } from "react";
import { Header } from "../Header";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store";
import { AppDispatch } from "src/store";
import { fetchGamesData } from "src/store/games/thunks";
import { gameSelected } from "src/store/games";
import { Button } from "../ButtonsGame/ButtonsGame";
import { Container, Main, Title } from "./styles";
import { UserActionGame } from "../UserActionGame";
import { PageCart } from "../PageCart/index";
import { BetArea } from "./BetArea";
import toast from "react-hot-toast";
import { addBetInUser } from "src/store/users/controlUsers/index";

export default function PageBet() {
  const dispatch: AppDispatch = useDispatch();
  const [numberBet, setNumbersBet] = useState<number[]>([]);

  useEffect(() => {
    dispatch(fetchGamesData());
  }, [dispatch]);

  const userLogged = useSelector(
    (state: RootState) => state.users.userAuthenticated
  );
  const games = useSelector((state: RootState) => state.games);
  const gameActive = games.isGameAtivate;

  const gameActual = games.typesGame.find((game) => {
    if (game.type === gameActive) return game;
  });

  const ArrayMaxNumber: number[] = Array.from({
    length: gameActual?.range ? gameActual?.range : 0,
  });

  const numberGame: number[] = ArrayMaxNumber.map((_, index) => index + 1);

  function changeGameActual(type: string) {
    dispatch(gameSelected(type));
  }

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
          if (!getNumbers.includes(numberGame)) {
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
          return numbers;
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
        `Hi, select the right amount of numbers\nPara ${gameActual?.type} selecione ${gameActual?.range}\nFaltam ${game} números 😉`
      );
    const newBet = {
      bet: {
        numbers: numberBet,
        type: gameActual ? gameActual.type : "erro",
        price: gameActual ? gameActual.price : 0,
        color: gameActual ? gameActual.color : "erro",
      },
      user: userLogged ? userLogged.email : "erro",
    };
    dispatch(addBetInUser(newBet));
  }, [dispatch, handleClearGame, gameActual, numberBet]);

  return (
    <>
      <Header />
      <Container>
        <Main>
          <Title>
            <b>New bet </b> for
            <span> {gameActual?.type}</span>
          </Title>
          <h3>Choose a game</h3>
          {games.typesGame.map((item) => (
            <Button
              key={item.id}
              color={item.color}
              onClick={changeGameActual.bind(null, item.type)}
            >
              {item.type}
            </Button>
          ))}
          <BetArea
            arrayNumbersBet={numberGame}
            numberBet={numberBet}
            handleCompleteGame={handleCompleteGame}
            handleSelectNumber={handleSelectNumber}
            handleNoSelectedNumber={handleNoSelectNumber}
            gameActual={gameActual ? gameActual : null}
          />
          <UserActionGame
            handleCompleteGame={handleCompleteGame}
            handleClearGame={handleClearGame}
            handleAddCart={handleAddCart}
          />
        </Main>
        <PageCart />
      </Container>
    </>
  );
}
