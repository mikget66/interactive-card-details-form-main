import React, { useContext, useEffect, useState } from 'react'
import './form.css'
import { CardContext} from '../../App'
import {BsGithub} from 'react-icons/bs'
const Form = ({ onChange ,setSubmit}) => {

    const card = useContext(CardContext)
    

    const [isclicked, setisclicked] = useState(false);
    const [errors, setErrors] = useState({});

    const handleCardNumberChange = (event) => {
        let cardNumber = event.target.value;
        cardNumber = cardNumber.replace(/\D/g, ''); // Remove existing spaces
        let formattedCardNumber = '';

        for (let i = 0; i < cardNumber.length; i += 4) {
            formattedCardNumber += cardNumber.substr(i, 4) + ' ';
        }

        event.target.value = formattedCardNumber.trim(); // Update the input field value

        onChange(event); // Call the original onChange event handler
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(card));
        setisclicked(true)
    }
    const validate = (values) => {
        const errors = {};

        if (!values.card_holder_name) {
            errors.card_holder_name = "cant't be blank";
        }
        if (!values.card_number) {
            errors.card_number = "cant't be blank";
        }
        if (!values.mm) {
            errors.mm = "cant't be blank";
        }else if(values.mm.length< 2){
            errors.mm = "must be 2 digits";
        }else if (isNaN(values.mm)) {
            errors.mm = "must be a number";
        }

        if (!values.yy) {
            errors.yy = "cant't be blank";
        }else if(values.yy.length< 2){
            errors.yy = "must be 2 digits";
        }else if (isNaN(values.yy)) {
            errors.yy = "must be a number";
        }

        if (!values.cvc) {
            errors.cvc = "cant't be blank";
        }else if(values.cvc.length< 3){
            errors.cvc = "must be 3 digits";
        }else if (isNaN(values.cvc)) {
            errors.cvc = "must be a number";
        }


        return errors; // Add this line to return the errors object
    };
    useEffect(() => {
        if (Object.keys(errors).length === 0 && isclicked) {
            setSubmit(true)
        }
    }, [errors])

    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <div className="input-container">
                    <label htmlFor="">CARDHOLDER NAME</label>
                    <input
                        className={errors.card_holder_name ? "error" : null}
                        name='card_holder_name'
                        type="text"
                        defaultValue={card.card_holder_name}
                        onChange={onChange}
                        placeholder='e.g. Michael Anwar'
                    />
                    {errors.card_holder_name && (
                        <p className='error'>{errors.card_holder_name}</p>
                    )}
                </div>
                <div className="input-container">
                    <label htmlFor="">CARD NUMBER</label>
                    <input
                        className={errors.card_number ? "error" : null}
                        type="text"
                        name='card_number'
                        id='numberInput'
                        defaultValue={card.card_number}
                        onChange={handleCardNumberChange}
                        placeholder='e.g. 1233 1944 1213 1232'
                        maxLength="19"
                    />
                    {errors.card_number && (
                        <p className='error'>{errors.card_number}</p>
                    )}
                </div>
                <div className='row'>
                    <div className="input-container half">
                        <div className="row-grid">
                            <label htmlFor="" className='two'>EXP. DATE (MM/YY)</label>
                            <div className='input-container'>
                                <input
                                    type="text"
                                    className={`half ${errors.mm?"error":null}`}
                                    name='mm'
                                    defaultValue={card.mm}
                                    placeholder='MM'
                                    maxLength="2"
                                    onChange={onChange}
                                />
                                {errors.mm && (
                                    <p className='error'>{errors.mm}</p>
                                )}
                            </div>
                            <div className='input-container'>
                                <input
                                    type="text"
                                    className={`half ${errors.yy?"error":null}`}
                                    name='yy'
                                    defaultValue={card.yy}
                                    placeholder='YY'
                                    maxLength="2"
                                    onChange={onChange}
                                />
                                {errors.yy && (
                                    <p className='error'>{errors.yy}</p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="input-container half">
                        <label htmlFor="">CVC</label>
                        <input
                            className={errors.cvc ? "error" : null}
                            type="text"
                            name='cvc'
                            defaultValue={card.cvc}
                            placeholder='e.g. 123'
                            maxLength="3"
                            onChange={onChange}
                        />
                        {errors.cvc && (
                            <p className='error'>{errors.cvc}</p>
                        )}
                    </div>
                </div>
                <input type="submit" value="confirm" />

            </form>
            <div class="attribution">
              Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
              Coded by <a href="https://github.com/mikget66" className='github'>Michael Anwar <BsGithub/></a>.
            </div>
        </div>
    )
}

export default Form