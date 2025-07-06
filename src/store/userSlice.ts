import { createSlice } from "@reduxjs/toolkit";

interface IUserInitialState {
  name: string;
  address: string;
}

const userInitialState: IUserInitialState = {
  name: "Farindra",
  address: "KTM",
};
const usersSlice = createSlice({
  name: "userSlice",
  initialState: userInitialState,
  reducers: {
    setName: (state) => {
      state.name === "farindra" ? "farindra" : "Jivan";
    },
  },
});

const { setName } = usersSlice.actions; // calling setNames
export default usersSlice.reducer;
