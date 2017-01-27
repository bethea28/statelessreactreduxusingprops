

import React from 'react'
import {Provider} from 'react-redux'
import {render} from 'react-dom'
import ArtistContainer from './components/artist_container'
import formContainer from './components/formContainer'
import store from './store'

const App = () =>(
  
  <Provider store = {store}>
    <ArtistContainer />
  </Provider>
)
// const Ap = () =>(
//   <Provider store = {store}>
//     <formContainer />
//   </Provider>
// )


render(
  <App />,document.getElementById('root')
)