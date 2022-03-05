import React from 'react';
import ReviewCard from '../Review/ReviewCard'
import us from '../../assets/icons/us.png'
import IT from '../../assets/icons/IT.png'
import Img1 from '../../assets/reviews-images/review-img1.png';
import Img2 from '../../assets/reviews-images/review-img2.png';
import Img3 from '../../assets/reviews-images/review-img3.png';

const userData = [
    {
        pic: Img1,
        name: "Hellen Jummy",
        country: 'Palo Alto, CA',
        countryFlag: us
    },
    {
        pic: Img2,
        name: 'Isaac Oluwatemilorun',
        country: 'Metropolitan City of Milan',
        countryFlag: IT
    },
    {
        pic: Img3,
        name: 'Hellen Jummy',
        country: 'Palo Alto, CA',
        countryFlag: us
    }
]


const Review = () => {
    return (
        <div className='review__wrapper'>
            <div className="review__heading">
                <h3>Review</h3>
                <div className="navigator">
                    <span>1 <span style={{ color: 'gray', marginLeft: '0' }}>/12</span></span>
                    <span >
                        <i className="far fa-arrow-left"></i>
                    </span>
                    <span>
                        <i className="far fa-arrow-right"></i>
                    </span>
                </div>
            </div>
            <hr className='upcoming__showHr' />
            <div className="reviewCard__container">
                <ReviewCard userData={userData[0]} />
                <ReviewCard userData={userData[1]} />
                <ReviewCard userData={userData[2]} />
            </div>
        </div>
    );
};

export default Review;
