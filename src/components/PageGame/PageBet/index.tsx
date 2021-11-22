import { FormEvent, useCallback, useEffect, useState } from "react";
import { Header } from "../Header";
import { ButtonsBet } from "@components/PageGame/ButtonsBet/index";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store";
import { AppDispatch } from "src/store";
import { fetchGamesData } from "src/store/games/thunks";
import { gameSelected } from "src/store/games";
import { Button } from "../ButtonsGame/ButtonsGame";
import { Container, Main, Title } from "./styles";
import { UserActionGame } from "../UserActionGame";
import { PageCart } from "../PageCart/index";
import toast from "react-hot-toast";
import { BetArea } from "./BetArea";

function PageBet() {
  const dispatch: AppDispatch = useDispatch();
  const [numberBet, setNumbersBet] = useState<number[]>([]);
  let btClick = false;

  useEffect(() => {
    dispatch(fetchGamesData());
  }, [dispatch]);

  const games = useSelector((state: RootState) => state.games);
  const gameActive = games.isGameAtivate;

  const gameActual = games.typesGame.find((game) => {
    if (game.type === gameActive) return game;
  });

  const ArrayMaxNumber: number[] = Array.from({
    length: gameActual?.range ? gameActual?.range : 0,
  });

  const numberGame : number[]= ArrayMaxNumber.map((number, index) => (
    number = index + 1
  ))

  function changeGameActual(type: string) {
    dispatch(gameSelected(type));
  }
function handleClearGame(){
  setNumbersBet([])
}
  const handleCompleteGame = useCallback(() => {
    setNumbersBet((number) => {
      const getNumbers = [...number];
      console.log(gameActual)
      const maxNumbersSorted = gameActual?.["max-number"]
        ? gameActual?.["max-number"]
        : 0;
      const qtdNumberSorted = gameActual?.range ? gameActual?.range : 0;
      console.log(maxNumbersSorted)
      if (maxNumbersSorted !== 0) {
        while (getNumbers.length <= maxNumbersSorted) {
          const numberGame = Math.floor(Math.random() * qtdNumberSorted);
          if (!getNumbers.includes(numberGame)) {
            getNumbers.push(numberGame);
          }
        }
      }
      return getNumbers;
    });
  }, [gameActual]);

  function handlerEliminateNumberBet() {}

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
          <BetArea arrayNumbersBet={numberGame}
            numberBet={numberBet}
            handleSelectedNumber={handleCompleteGame}
            handleNoSelectedNumber={handlerEliminateNumberBet}
            gameActual={gameActual ? gameActual : null}/>
          <UserActionGame handleCompleteGame={handleCompleteGame} handleClearGame={handleClearGame} />
        </Main>
        <PageCart />
      </Container>
    </>
  );
}

export default PageBet;
