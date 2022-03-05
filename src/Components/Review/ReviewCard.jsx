import React from 'react';

const ReviewCard = ({userData}) => {
  return (
        <div className='reviewCard__wrapper'>
            <div className="reviewCard__shadow"></div>
            <div className='reviewCard__data'>
                <div className="reviewCard__userDetails">
                    <img src={userData.pic} alt="" />
                    <div className="card__userData">
                        <p className='card__userName'>{userData.name}</p>
                        <p className="card__userCountry">
                            <img src={userData.countryFlag} alt="" />
                            <span>{userData.country}</span>
                        </p>
                    </div>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eos eius, sunt eveniet illo inventore vel asperiores doloremque delectus dignissimos
                </p>
            </div>
        </div>
  );
};

export default ReviewCard;
