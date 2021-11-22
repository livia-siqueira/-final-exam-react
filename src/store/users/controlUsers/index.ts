import { UsuarioState, Usuario } from "./types";
import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { validatePassword, validationEmail } from "src/store/general";
import {toast} from 'react-hot-toast'

interface LoginData {
  email?: string;
  password?: string;
}
type Auth = {
  users: Usuario[];
  isAutenthicated: boolean;
  id_userAuthenticated: Usuario | null;
};

const initialState: Auth = {
  users: [],
  isAutenthicated: false,
  id_userAuthenticated: null,
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
            bets: []
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
            state.id_userAuthenticated = existentUser;
            toast.success(`Olá, ${existentUser.name}! Boa sorte em suas apostas 🤞`)
          }else{
             toast.error('Credenciais inválidas')
             return;
          }
        }
      }
    },
    logoutUser(state, {payload}: PayloadAction<LoginData>){

    }
  },
});

export default userSlice.reducer;
export const { addUser, loginUser } = userSlice.actions;
