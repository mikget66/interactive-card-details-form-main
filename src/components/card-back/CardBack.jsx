import {useContext} from 'react'
import { CardContext } from '../../App';

import './cardback.css'

const CardBack = () => {

    const card = useContext(CardContext);

    return (
        <div className='cardback card'>
                    <span>{card.cvc?card.cvc:"000"}</span>
        </div>)
}

export default CardBack