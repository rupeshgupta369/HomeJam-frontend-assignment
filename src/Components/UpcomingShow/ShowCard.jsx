import React from 'react';
import save from '../../assets/icons/save.png'

const ShowCard = ({ userDetails }) => {
    return <div className='show__cardContainer'>
        <div className='back__shadow'></div>
        <div className='show__cardDetails'>
            <img src={userDetails.img} alt="" />
            <div className="card__dataDetails">
                <div className='card__genre'>{userDetails.genre}</div>
                <h3 style={{ fontFamily: 'Libre baskerville' }}>{userDetails.name}</h3>
                <div className="card__moreInfo">
                    <p>
                        More Info
                        <i className="far fa-arrow-right"></i>
                    </p>
                    <img src={save} alt="" />
                </div>
            </div>
        </div>
    </div>;
};

export default ShowCard;