
"use client"
import React, { useEffect, useState } from 'react'
import yesterday from '../api/SattaFiles/result-ty.txt';
import resultmonthly from '../api/SattaFiles/resultmonthly.txt';
import Image from 'next/image';
import styles from './page.module.css';
import WhatsappBtn from '@/components/WhatsappBtn';
const Home = () => {   
    const [result1, setResult] = useState([]);
    const [yesterdayResult, setYesterdayResult] = useState('');
    useEffect(()=>{
        (async()=>{
            try {
                setResult(data);
                
            } catch (error) {
                console.log(error);
            }
        })()
        
    }, [])
   
   useEffect(() => {
      const fetchYesterdayResult = async () => {
        try {
          setYesterdayResult(yesterday);
        } catch (error) {
          console.error('Error fetching Yesterday result:', error);
        }
      };
      fetchYesterdayResult();
      const intervalId = setInterval(fetchYesterdayResult, 30000);
  
      return () => clearInterval(intervalId);
    }, []);

  return (
   <div>
        <div className={styles.container}>
      <Image
        src="/images/skf-logo.svg"
        alt="Satta King Bazar Logo"
        width={520}
        height={120}
        className={styles.logo}
      />
      <p
        className={styles.ads}
        style={{ color: 'black', lineHeight: '1.4rem', fontSize: '13px', backgroundColor: '#F1F1F1', }}
      >
        Daily Superfast Satta King Result of November 2024 and Leak Numbers for
        Gali, Desawar, Ghaziabad, and Faridabad With Complete Old Satta King
        Chart of 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2023 From Satta King
        Fast, Satta King Ghaziabad, Satta King Desawar, Satta King Gali, Satta
        King Faridabad.
      </p>
      <p
        className={styles.ads}
        style={{ color: 'blue', lineHeight: '1.4rem', fontSize: '13px' }}
      >
        Satta-King-Fast.com is the most popular gaming discussion forum for
        players to use freely, and we are not in partnership with any gaming
        company.
      </p>
      <p
        className={styles.ads}
        style={{ color: 'red', lineHeight: '1.4rem', fontSize: '1rem' }}
      >
        कृपया ध्यान दें, लीक गेम के नाम पर किसी को कोई पैसा न दें, ना पहले ना
        बाद में - धन्यवाद
      </p>
      <p
        className={styles.ads}
        style={{ color: 'green', lineHeight: '1.4rem', fontSize: '1rem' }}
      >
        हमसे संपर्क करने के लिए ➡️{' '}
        <a href="#" style={{ color: 'blue' }}>
          यहाँ क्लिक करें
        </a>
      </p>
      <p
        className={styles.ads}
        style={{
          color: 'green',
          lineHeight: '1.4rem',
          fontSize: '1rem',
          backgroundColor: '#F1F1F1',
        }}
      >
        Updated: <time>November 13, 2024, 14:11:22</time> IST.
      </p>
     
   
    </div>
    <section className="table_section">
        {/* <h1>Imported Table</h1> */}
        {/* Render the imported HTML content */}
        <div
          dangerouslySetInnerHTML={{ __html: resultmonthly }}
          className="table table-bordered table-result-cont"
        />
      </section>
      <section>
<WhatsappBtn />
<button class="refresh_btn">Refresh</button>
      </section>
   </div>
  )
}

export default Home




