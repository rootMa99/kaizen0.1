import { configureStore } from "@reduxjs/toolkit";
import kaizenSlice from "./kaizeninfo";




const store= configureStore({
    reducer: {
        kaizenS: kaizenSlice.reducer
    }
});


export default store;