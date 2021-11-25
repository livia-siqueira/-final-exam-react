export interface AddUser {
    name: string;
    email: string;
    password: string;
}

export interface Usuario {
    name: string;
    email: string;
    password: string;
    bets: Bet[];
    id: string;
  }

  export interface LoginData {
    email?: string;
    password?: string;
  }
  
  export interface Bet {
    bet: {
      id: string;
      type: string;
      color: string;
      numbers: number[];
      price: number;
      date: string;
    };
    user: string;
  }

  export type Auth = {
    users: Usuario[];
    isAutenthicated: boolean;
    userAuthenticated: Usuario | null;
  };
  
  export type AddToCartData = {
    bet: {
      type: string;
      color: string;
      numbers: number[];
      price: number;
    };
    user: string;
  };

  export interface propsRemoveBet {
    user?: string;
    id: string;
  }
  
  export interface betInCart {
    cart: Bet[],
    totalPrice: number
    
  }
  
  export interface propsActionAddCart {
    bet: Bet[]
  }

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