"use client";
import React, { useEffect, useState } from 'react'
import Footer from '@/components/Footer';
import Header from '@/components/Header'
import game from '../../../api/SattaFiles/2021/taj-express-result-2021.txt';
const Page = () => {
    const [gameResult, setgameResult] = useState('');

    useEffect(() => {
        const fetchgameResult = async () => {
          try {
            setgameResult(game);
          } catch (error) {
            console.error('Error fetching game result:', error);
          }
        };
        fetchgameResult();
        const intervalId = setInterval(fetchgameResult, 10000);
        return () => clearInterval(intervalId);
      }, [gameResult]);
  return (
    <div>
        <Header/>
        <div className="indiResult">
              <h1>Taj Express Result 2021</h1>
              <div className="game-container game-individual-chart">
                <div dangerouslySetInnerHTML={{ __html: gameResult }} className='main_container game-container-chart' />

              </div>
            </div>
        <Footer/>
    </div>
  )
}

export default Page
