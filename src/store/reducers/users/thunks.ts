import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { AppDispatch, RootState } from "../../index";
import { updateAccount } from ".";
import { Usuario } from "@sharedUtils/index";

interface ChangePasswordUser {
    user: Omit<Usuario, 'bets' | 'id'>,
    newPassword: string
}

export const changeUser = createAsyncThunk<
  void,
  ChangePasswordUser,
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>("user/updateUser", (updatedUser, thunkApi) => {

    const user = {
        ...updatedUser.user,
        email: updatedUser.user.email,
        name: updatedUser.user.name,
        password: updatedUser.newPassword
    }
  thunkApi.dispatch(updateAccount(user));
  toast.success("Change successfully")
});
