//1.Set page to CSR
'use client'
import React from 'react'
//2. Import Buttons, provider and store
import Buttons from './Buttons'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'

function ButtonContainer() {
    //3. Encapsulate the Button component with provider.
  return (
        <Provider store={store}>    
                <Buttons/>
        </Provider>
  )
}

export default ButtonContainer