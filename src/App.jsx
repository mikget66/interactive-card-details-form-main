import React, { useState, createContext } from 'react';
import './App.css'
import 'normalize.css'
import Form from './components/form/Form'
import CardFace from './components/card-face/CardFace';
import CardBack from './components/card-back/CardBack';
import Submitted from './components/submitted/Submitted';

 


export const CardContext = createContext();
export const submitContext = createContext();

function App() {
  const [card, setCard] = useState({
    card_holder_name: "",
    card_number: "",
    mm: "",
    yy: "",
    cvc: "",
  });
  const [submitted, setSubmitted] = useState(false)

  const [cn, setCn] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])
  const [changedIndex, setChangedIndex] = useState(-1);

  function handleChange(event) {
    const { name, value } = event.target;
    setCard((prevCard) => ({
      ...prevCard,
      [name]: value,
    }));
  }



  return (
    <div className="app">
      <CardContext.Provider value={card}>
        <submitContext.Provider value={submitted}>
          <div className="left">
            <CardFace 
              cn={cn}
              changedIndex={changedIndex}
            />
            <CardBack />
          </div>
          <div className="right">
            {!submitted ?
              <Form
                onChange={handleChange}
                setSubmit={setSubmitted}
                card={card}
                setCn={setCn}
                cn={cn}
                changedIndex={changedIndex}
                setChangedIndex={setChangedIndex}
                />
              :
              <Submitted />
            }
            
          </div>

        </submitContext.Provider>
      </CardContext.Provider>
    </div>
  )
}

export default App
