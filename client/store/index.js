import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import wines from './wine'
import cart from './cart'
import beers from './beer'
import spirits from './spirit'
import products from './product'
import paymentIntent from './shipping'
import payment from './payment'
import order from './order'

const reducer = combineReducers({
  user,
  wines,
  beers,
  spirits,
  products,
  cart,
  paymentIntent,
  payment,
  order
})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)

const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './wine'
export * from './spirit'
export * from './cart'
export * from './beer'
export * from './product'
export * from './shipping'
export * from './payment'
export * from './order'
