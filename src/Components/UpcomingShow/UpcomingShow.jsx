import React from 'react';
import ShowCard from './ShowCard';
import img1 from '../../assets/upcoming-show-images/upcoming-show-img1.png';
import img2 from '../../assets/upcoming-show-images/upcoming-show-img2.png';
import img3 from '../../assets/upcoming-show-images/upcoming-show-img3.png';
import img4 from '../../assets/upcoming-show-images/upcoming-show-img4.png';


const userDetails = [
    {
        img: img1,
        name: "Bennyl Dayal",
        genre: "Folk"
    },
    {
        img: img2,
        name: "Vijay Yesudas",
        genre: "Bollywood"
    },
    {
        img: img3,
        name: "Andrea Jeremiah",
        genre: "Folk"
    },
    {
        img: img4,
        name: "Shilpa Rao",
        genre: "Folk"
    }
]

const UpcomingShow = () => {
    return (
        <div className='upcoming__showWrapper'>
            <div className="upcoming__showHeader">
                <h1>Upcoming Show</h1>
                <p>View All</p>
            </div>
            <hr className='upcoming__showHr' />
            

            <div className="show__contactFlex">
                <ShowCard userDetails={userDetails[0]} />
                <ShowCard userDetails={userDetails[1]} />
                <ShowCard userDetails={userDetails[2]} />
                <ShowCard userDetails={userDetails[3]} />
            </div>
        </div>
    )
};

export default UpcomingShow;
