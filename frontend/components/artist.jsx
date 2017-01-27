import React from 'react'
import addArtist from '../actions'
import handle from '../actions'
import Form from './formContainer'
import store from '../store'


const Artist = (props)=>(
<div>

      {store.getState().text}
      {store.getState().cards}
  <button onClick={props.addArtist}>Artist</button>
  <input onChange={props.handle}/>

  {props.children}
</div>

)


export default Artist
