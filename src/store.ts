import { createStore } from "redux";
import Reducer from "./reducers/rootReducer";


const store = createStore(Reducer);


export default store;