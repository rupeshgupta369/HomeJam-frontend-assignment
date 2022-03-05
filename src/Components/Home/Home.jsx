import React from 'react';
import Header from '../Header/Header';
import Like from '../../assets/icons/Like.png';
import Calendar from '../../assets/icons/Calendar.png';

import HomeStats from "../HomeStats/HomeStats"

const statsData = [
  {
    value: 60,
    title: 'label',
    icon: Like,
  },
  {
    value: 0,
    title: 'label',
    icon: Calendar,
  },
  {
    value: 0,
    title: 'label',
    icon: Calendar,
  },
  {
    value: 0,
    title: 'label',
    icon: Calendar,
  },
]

const Home = () => {
  return (
    <div className='home__wrapper'>
      <header>
        <Header />
      </header>

      <div className="home__details">
        <h1 className='home__title'>The Batman</h1>
        <p className='home__tagline'>When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.</p>
      </div>

      <div className="home__stats">
        <HomeStats statsData={statsData[0]} />
        <HomeStats statsData={statsData[1]} />
        <HomeStats statsData={statsData[2]} />
        <HomeStats statsData={statsData[3]} />
      </div>
    </div>
  );
};

export default Home;
