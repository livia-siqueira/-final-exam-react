import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { validatePassword, validationEmail } from "src/shared/utils/index";
import { toast } from "react-hot-toast";
import {Auth, Usuario, LoginData, AddToCartData, Bet, propsRemoveBet, AddUser} from 'src/shared/utils/types'

const initialState: Auth = {
  users: [],
  isAutenthicated: false,
  userAuthenticated: null,
};

const controlUser = createSlice({
  name: "@users",
  initialState: initialState,
  reducers: {
    addUser(state, { payload }: PayloadAction<AddUser>) {
      const { name, email, password } = payload;
      const hasUser = state.users.some((user) => {
        return email === user.email;
      });
      if (!hasUser) {
        if (
          email !== undefined &&
          password !== undefined &&
          name !== undefined
        ) {
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
            toast.success("Registration performed successfully, log in")
          }
          else{
            toast.error("Password must have a capital character and at least 9 characters")
          }
        }
      }
      else{
        toast.success("You are already registered, log in");
      }
      return state;
    },
    loginUser(state, { payload }: PayloadAction<LoginData>) {
      const { email, password } = payload;
      if (email !== undefined && password !== undefined) {
          const existentUser = state.users.find(
            (user) => user.email === email && user.password === password
          );
          if (existentUser) {
            state.isAutenthicated = true;
            state.userAuthenticated = existentUser;
            toast.success(`Olá, ${existentUser.name}! Bem vindo ✨`);
            return state;
          } else {
            const hasEmail = state.users.some((user) => {
              return user.email === email;
            });
            if (hasEmail) {
              toast.error("Incorrect password 😥");
            } else {
              toast.error("Sign up to play 😉");
            }
            return;
          }
      }
    },
    addBetInUser(state, { payload }: PayloadAction<AddToCartData>) {
      const idBet = Math.floor(Math.random() * 1000);
      const newBet: Bet = {
        bet: {
          ...payload.bet,
          id: `${idBet}`,
          date: new Date().toString(),
        },
        user: payload.user,
      };

      state.users.map((user) => {
        if (user.email === payload.user) {
          user.bets.push(newBet);
          if (state.userAuthenticated?.bets) {
            state.userAuthenticated.bets = user.bets;
          }
        }
        return state;
      });
      return state;
    },
    removeBet(state, { payload }: PayloadAction<propsRemoveBet>) {
      const user = state.users.find((user) => {
        return user.email === payload.user;
      });
      if (user) {
        const newBets = user.bets.filter((bet) => {
          return bet.bet.id !== payload.id;
        });

        if (state.userAuthenticated?.bets) {
          state.userAuthenticated.bets = newBets;
          state.users.map((user) => {
            if (user.email === payload.user) {
              user.bets = newBets;
            }
            return state;
          });
        }
      }
    },
    addBetsInCart(state, { payload }: PayloadAction<Usuario>) {
      if (!state.userAuthenticated) return;
      state.userAuthenticated.bets = [];
      state.users.map((user) => {
        if (user.id === payload.id) {
          user.bets = [];
        }
        return state;
      });
    },
    logoutUser(state) {
      state.userAuthenticated = null;
      state.isAutenthicated = false;
    },
    updatePassword(state, {payload} : PayloadAction<Usuario>){
      state.users = state.users.map((user) => {
        if(user.email === payload.email) {
          user = payload;
          state.userAuthenticated = payload;
        }
        return user;
      })
    }
  },
});

export default controlUser.reducer;
export const {
  addUser,
  loginUser,
  addBetInUser,
  removeBet,
  addBetsInCart,
  logoutUser,
  updatePassword,
} = controlUser.actions;
