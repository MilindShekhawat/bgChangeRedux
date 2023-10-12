//1. Import bgChange reducer from bgSlice
import { bgChange } from '@/redux/bgSlice';
//2. Import useDispatch and useSelector
import { useDispatch, useSelector } from 'react-redux';

function Buttons() {
    const RED = "#DB4437";
    const YELLOW = "#F4B400";
    const GREEN = "#0F9D58";

    //3. Create dispatch variable and useSelector variable that reads state from store
    const dispatch = useDispatch()
    const newBG = useSelector((state) => state.bg)

    //4. Create function to dispatch button color to reducer
    function handleClick(buttonbg) {
        console.log(`Bg changed to ${buttonbg}`)
        dispatch(bgChange(buttonbg))
    }

  return (
    <body style={{display:"flex", background:`${newBG}`}}>
        <button style={{background:`${RED}`}} onClick={() => handleClick(RED)}></button>
        <button style={{background:`${YELLOW}`}} onClick={() => handleClick(YELLOW)}></button>
        <button style={{background:`${GREEN}`}} onClick={() => handleClick(GREEN)}></button>
    </body>
  )
}

export default Buttons