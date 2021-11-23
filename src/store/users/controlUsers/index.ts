import { UsuarioState, Usuario } from "./types";
import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { validatePassword, validationEmail } from "src/store/general";
import { toast } from "react-hot-toast";

interface LoginData {
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

export interface usuario {
  name: string;
  email: string;
  password: string;
  bets: Bet[];
  id: string;
}

type Auth = {
  users: usuario[];
  isAutenthicated: boolean;
  userAuthenticated: usuario | null;
};

type UpdateUser = Omit<usuario, "name" | "password" | "id">;

type AddToCartData = {
  bet: {
    type: string;
    color: string;
    numbers: number[];
    price: number;
  },
  user: string;
};

const initialState: Auth = {
  users: [],
  isAutenthicated: false,
  userAuthenticated: null,
};

const userSlice = createSlice({
  name: "@users",
  initialState: initialState,
  reducers: {
    addUser(state, { payload }: PayloadAction<Usuario>) {
      const { name, email, password } = payload;
      if (email !== undefined && password !== undefined && name !== undefined) {
        if (
          validatePassword(password) &&
          validationEmail(email) &&
          name.length > 0
        ) {
          const newUser = {
            name,
            email,
            password,
            id: email,
            bets: [],
          };
          state.users.push(newUser);
        }
      }
    },
    loginUser(state, { payload }: PayloadAction<LoginData>) {
      const { email, password } = payload;
      if (email !== undefined && password !== undefined) {
        if (validationEmail(email) && validatePassword(password)) {
          const existentUser = state.users.find(
            (user) => user.email === email && user.password === password
          );
          if (existentUser) {
            state.isAutenthicated = true;
            state.userAuthenticated = existentUser;
            toast.success(
              `Olá, ${existentUser.name}! Boa sorte em suas apostas 🤞`
            );
          } else {
            toast.error("Credenciais inválidas");
            return;
          }
        }
      }
    },
    addBetInUser(state, { payload }: PayloadAction<AddToCartData>) {
      const newBet: Bet = {
        bet: {
          ...payload.bet,
          id: "1",
          date: new Date().toString(),
        },
        user: payload.user,
      };

      state.users.map((user) => {
        if (user.email === payload.user) {
          return user.bets.push(newBet)
        }
      });
      console.log(payload)
    },
  },
});

export default userSlice.reducer;
export const { addUser, loginUser, addBetInUser } = userSlice.actions;
