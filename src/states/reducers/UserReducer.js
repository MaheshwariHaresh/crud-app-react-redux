import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../UserList";

const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      let userId = Number(id);
      const updateUser = state.find((item) => item.id === userId);

      if (updateUser) {
        updateUser.name = name;
        updateUser.email = email;
        console.log("User Updated Successfully");
      } else {
        console.log("Error While Updating User");
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const user = state.find((item) => item.id === id);
      if (user) {
        return state.filter((item) => item.id !== id);
      } else {
        console.log("Error While Deleting User");
      }
    },
  },
});
export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
