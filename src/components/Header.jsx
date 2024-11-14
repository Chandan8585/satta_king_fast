import React, { useEffect, useState } from 'react';
// import axios from 'axios';

import searchImg from '../../public/searchImg.png';
import logo from '../../public/Satta King 365.png';
import Image from 'next/image';
import latest from '../api/SattaFiles/latest-result.txt';
import Link from 'next/link';
const Header = () => {
  const [timer, setTimer] = useState(10);
  const [latestResult, setLatestResult] = useState('');


 function handleChange(){
    
 }
  useEffect(() => {
    const fetchLatestResult = async () => {
      try {
        setLatestResult(latest);
      } catch (error) {
        console.error('Error fetching latest result:', error);
      }
    };
    fetchLatestResult();
    const intervalId = setInterval(fetchLatestResult, 10000);
    return () => clearInterval(intervalId);
  }, [latestResult]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    if (timer === 0) {
      clearInterval(intervalId);
      setTimer(10);
    }

    return () => clearInterval(intervalId);
  }, [timer]);

  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.toLocaleString('default', { month: 'short' });
  const year = currentDate.getFullYear();

  let hours = currentDate.getHours();
  const minutes = ('0' + currentDate.getMinutes()).slice(-2); 
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  const formattedDate = `${day}-${month}-${year} ${hours}:${minutes} ${ampm}`;

  return (
    <div>
      <header>
        <div className='logo'>
          <Link  href='/'>
          <Image src={logo} alt='logo' className='img' />
          </Link>
          
        </div>

        <div className='nav_items'>
          <div>
            <a href="https://sattakingdj.com">Satta Result</a>
          </div>
          <div>
            <a href="https://sattakingdj.com/deshawar-result-2023.php">Satta King 786</a>
          </div>
          <div>
            <a href="https://sattakingdj.com/gali-result-2023.php" id="gali_result_btn">Gali Result</a>
          </div>
          <div>
            <a href="https://sattakingdj.com/gali-result-2023.php" id="gali_result_btn">Satta king Dj</a>
          </div>
        </div>
      </header>
      <section className="search-section">
        <h2>Satta King Live Result</h2>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="search-container">
                <input
                  type="text"
                  id="searchInput"
                  name="q"
                  size="30"
                  maxLength="1800"
                  value="satta king"
                  className="search-input"
                  placeholder="Search..."
                 onChange={()=>handleChange}
                />
                <button className="search-button" type="submit" onClick={() => window.open('https://www.google.com/search?q=hello+site%3Ahttps%3A%2F%2Fsattaking365.com', '_blank')}>
                  <Image src={searchImg} alt="search_btn" width={50} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="result_container">
        <div className="container">
          <div className="col-12 text-center">
            <h3 className="result-date">{formattedDate}</h3>
            <h1 className="currenttext">Satta king Fast Live Result </h1>
            <div className='timer'>
              <h2>Satta King Live Result update in Every 10 seconds</h2>
              <p>Timer: {timer} seconds</p>
            </div>
            <div className="result_box_container">
              <div className="game-container">
                <div dangerouslySetInnerHTML={{ __html: latestResult }} className='main_container' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
