export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export interface Game {
  id: number;
  type: string;
  description: string;
  range: number;
  price: number;
  "max-number": number;
  color: string;
}

export interface Games {
  typesGame: Game[],
  "min-cart-value": number,
  isGameAtivate: string 
}

export interface GameState{
    games: Game[],
    gameIsActive: string
}