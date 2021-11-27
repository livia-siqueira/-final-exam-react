import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import { AppDispatch, RootState } from "../../index";
import { updatePassword } from ".";
import { Usuario } from "src/shared/utils/types";


interface ChangePasswordUser {
    user: Usuario,
    newPassword: string
}

export const changePassword = createAsyncThunk<
  void,
  ChangePasswordUser,
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>("user/updatePassword", (updatedUser, thunkApi) => {

    const user = {
        ...updatedUser.user,
        password: updatedUser.newPassword 
    }
  thunkApi.dispatch(updatePassword(user));
  toast.success("Change successfully")
});
