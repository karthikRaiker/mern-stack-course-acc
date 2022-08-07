const redux = require("redux");
const reduxLogger = require("redux-logger");
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE"; //define action
const BUY_ICE_CREME = "BUY_ICE_CAKE"; //define action

//Action creator
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First Redux Action", //action is an object which has type property
  };
}
function buyIceCream() {
  return {
    type: BUY_ICE_CREME,
    info: "Second Redux Action", //action is an object which has type property
  };
}

const initialCakeState = {
  numOfCakes: 10,
};
const initialIceCreamState = {
  numOfIceCreams: 10,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const IceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICE_CREME:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducer({
  cake: cakeReducer,
  iceCream: IceCreamReducer,
});
const store = createStore(rootReducer, applyMiddleware(logger)); //redux store holding the application state through reducer
console.log("Initial State :", store.getState());
const unSubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unSubscribe();
