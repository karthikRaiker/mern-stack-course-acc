const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const combineReducer = redux.combineReducers;
//middleware
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

//Actions
const BUY_CAKE = "BUY_CAKE";
const BUY_ICE_CREAM = "BUY_ICE_CREAM";

//Action Creator
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First reducer action",
  };
}
function buyIceCream() {
  return {
    type: BUY_ICE_CREAM,
    info: "Second reducer action",
  };
}

//Initial State
const initialCakeState = {
  numOfCake: 10,
};
const initialIceCreamState = {
  numOfIceCream: 25,
};

//Reducer function
// (prevState, action) => newState
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCake: state.numOfCake - 1,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducer({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial State=>", store.getState());
const unSubscribe = store.subscribe(() => {});
//   console.log("Updated State=>", store.getState())

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
console.log(store.getState().iceCream);
unSubscribe();
