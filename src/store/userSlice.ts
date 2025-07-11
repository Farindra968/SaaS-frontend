import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserInitialState {
  Username: string;
  address: string;
}

const userInitialState: IUserInitialState = {
  Username: "Farindra",
  address: "KTM",
};
const usersSlice = createSlice({
  name: "userSlice",
  initialState: userInitialState,
  reducers:{
    setName:(state, action:PayloadAction<string>)=> {
      state.Username = action.payload
    },


    setAddress:(state, action:PayloadAction<string>)=> {
      state.address = action.payload
    }
  }
});

const { setName, setAddress } = usersSlice.actions; // calling setName, setAddresss
export default usersSlice.reducer;
export {setName, setAddress}