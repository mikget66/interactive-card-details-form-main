import React, { useContext } from 'react';
import './cardface.css';
import { CardContext } from '../../App';
import image_bg from '../../assets/bg-card-front.png'

const CardFace = ({ cn, changedIndex }) => {
  const card = useContext(CardContext);

  return (
    <div className='CardFace card'>
      <svg width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84 47">
        <ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff" />
        <path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff" />
      </svg>
      <div className="card-info">

        <span className="card-number">
          {cn.map((number, index) => (
            <React.Fragment key={index}>
              {index > 0 && index % 4 === 0 && <span className="space"> </span>}
              <span
                className={`number ${index === changedIndex ? 'fade-in' : ''}`}
              >
                {number}
              </span>
            </React.Fragment>
          ))}
        </span>

        <div className="last_info">
          <span>{card.card_holder_name ? card.card_holder_name : "Your Name"}</span>
          <span>{card.mm ? `${card.mm}` : "00"}/{card.yy ? `${card.yy}` : "00"}</span>
        </div>
      </div>
    </div>
  );
};

export default CardFace;