import {connect} from 'react-redux'
import React from 'react'
import {addArtist, handle} from '../actions'
import Artist from './artist'
// import store from '../store'


const artistContainer = store =>({
  text:store.text,
	cards:store.cards
})

const artistDispatch = dispatch =>({
	addArtist: (event) => {  dispatch(addArtist())},
  handle: (event) =>{
    var data = event.target.value
    dispatch(handle(data))
    console.log(data  )
    // console.log(store.getState().text)
  }
})



export default connect(
artistContainer,
artistDispatch


)(Artist)
