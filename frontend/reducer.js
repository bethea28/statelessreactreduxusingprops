import {ADD_CARD} from "./actions";
import store from './store'

const _defaultState = {
  cards: '',
  text:''
}

const reducer = (oldState = _defaultState, action) => {
  switch(action.type) {
    case "handle":
      return Object.assign({},oldState, {text: store.getState().text += action.data})
      console.log(store.getState().text)
    case 'addArtist':
      return Object.assign({},oldState, {cards: store.getState().cards += action.data})

    default:
      return oldState;
  console.log(store.getState().text)
  }

}

export default reducer;
