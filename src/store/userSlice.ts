import { createSlice } from "@reduxjs/toolkit";

createSlice({
    name:  "userSlice",
    initialState: {
        name: "Farindra",
        address:"KTM"
    },
    reducers: {
        setName:(state)=>{
            state.name === "farindra" ? "farindra" : "Jivan"
        }
    }
}

)