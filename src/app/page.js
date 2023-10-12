//1.Set page to CSR
'use client'
//2. Import Buttons, provider and store
import Buttons from './components/Buttons'
import { Provider } from 'react-redux'
import {store} from '../redux/store'

export default function Home() {
  //3. Encapsulate the Button component with provider.
  return (
    <Provider store = {store}>
      <Buttons />
    </Provider>
  )
}
