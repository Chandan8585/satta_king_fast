'use client'
import React, { useEffect, useState } from 'react'
import { data } from '../db/Result';
import ResultCard from './ResultCard';
import Link from 'next/link';
import logo from '../../public/Satta King 365.png';
import Image from 'next/image';
// import Privacy from '@/pages/privacy';
const Footer = () => {
    const [result1, setResult] = useState([]);
    
    useEffect(()=>{
        (async()=>{
            try {
                setResult(data);
                
            } catch (error) {
                console.log(error);
            }
        })()
        
    }, [])
  return (
    <div>
          <section className='disclaimer'>
    
  <div className="container-fluid">
    <div className="row g-3">
      <div className="col-lg-12">
        <div className="ad-notice-box">
          <h2 className="ad-notice-heading">:- Notice Board -:</h2>
          <h3 className="ad-mobtext">मोहन भाई ONLINE KHAIWAL</h3>
          <div className='para'>
          <p>जोड़ी रेट : 10 Ka 950</p>
          <p>Harf ka rate : 100ka 1000</p>
          <p>👇 गेम लिखवाने का लास्ट टाइम <span className="mirror-effect">👇</span></p>
          <p>फरीदाबाद-05:50 PM</p>
          <p>गाजियाबाद-08:20 PM</p>
          <p>गली-11:30 PM</p>
          <p>दिसावर-02:00 AM</p>
          <p>श्री गणेश - 01:00AM</p>
          <p>PAYMENT OPTION</p>
          <p>Gpay, Phonepe, Paytm &amp; UPI</p>
          <p>😍 रिजल्ट आने पर तुरंत भुगतान 😍</p>
          <p>खाईवालो में भरोसेमंद नाम</p>
          <p>मोहन भाई खाईवाल</p>
          <p>9058099847</p>
          <p className='contact'>ईमानदारी हमारी पहचान है</p>
          </div>
          <div className="btn-group">
            <a href="https://wa.me/9058099847" className="btn-click btn-whatsapp">  <i className="fa-brands fa-whatsapp"></i> WHATSAPP ME</a>
            <a href="tel:9058099847" className="btn-click btn-callnow"><i className="fa fa-phone"></i> CALL NOW</a>
          </div>
        </div>
      </div>
    </div>
  </div>

       </section>
       <section className='before_footer'>
    
       {
       
        result1.map((item)=> <ResultCard item={item} key={item.id}/>)
       }
      
       </section>
         <section className='hero_section'>
        <div className='card_container'>
         <div className="col-lg-6 card">
        <div className="ad-board-1-box">
          <h2 className="ad-board-1-heading">CEO</h2>
          <h3 className="ad-mobtext">Garima Yadav</h3>
          <p>गली दिसावर गाजियाबाद फरीदाबाद दीपावली पर होगी सबके घर में खुशियाँ।
            गेम लो सिंगल जोड़ी में दिसावर &amp; कंपनी से लीक गेम जो होगा 100% फिक्स।</p>
          <p>कंपनी के खाते में पैसा जमा करवाकर कंपनी से गेम लें।</p>
          <p>गली और दिसावर कंपनी से लीक और फास्ट गेम बुक करवाएं और अपना लॉस वापस करें।</p>
          <p>डेट फिक्स गेम मिलेगी।</p>
          <p>जिस भाई का कभी गेम पास नहीं हुआ हो और परेशान हो, तो हमसे संपर्क करें।</p>
          <p><a href="tel:8881322698">8881322698</a></p>
          <div className="btn-group">
            <a href="https://wa.me/qr/J4RS2BIYDXGDE1" target="_blank" rel="noreferrer nofollow" className="btn-click btn-whatsapp">  <i className="fa-brands fa-whatsapp"></i> WHATSAPP ME</a>
            <a href="tel:8881322698" className="btn-click btn-callnow"><i className="fa fa-phone"></i> CALL NOW</a>
          </div>
        </div>
      </div>
         </div>
         <div className='card_container'>
         <div className="col-lg-6 card">
        <div className="ad-board-1-box">
          <h2 className="ad-board-1-heading">गली देसावर की सिंगल लीक जोड़ी 1001% Fix</h2>
          <h3 className="ad-mobtext">Ruby Saxena CEO & Md</h3>
          <p><a href="tel:8982704054">8982704054</a></p>
          <div className="btn-group">
            <a href="https://wa.me/qr/XR22Z5CJCO6HP1" target="_blank" rel="noreferrer nofollow" className="btn-click btn-whatsapp">  <i className="fa-brands fa-whatsapp"></i> WHATSAPP ME</a>
            <a href="tel:8982704054" className="btn-click btn-callnow"><i className="fa fa-phone"></i> CALL NOW</a>
          </div>
        </div>
      </div>
         </div>
       </section>
        <div className='footer'>
    <div className='footer_logo'>
    {/* <img src={logo} alt="logo"  /> */}
    <Image src={logo} alt='logo'/>

            <p>Satta 365 Result</p>
            </div>
       
        <div className='footer_navigation'>
            <div>
        
            <ul>
                <li>  <a href="https://sattakingdj.com">Satta Result</a></li>
                <li>            <a href="https://sattakingdj.com/deshawar-result-2023.php">Satta King 786</a></li>
                <li>            <a href="https://sattakingdj.com/gali-result-2023.php" >Gali Result</a>
</li>
                <li>            <a href="https://sattakingdj.com/gali-result-2023.php">Satta king Dj</a>
</li>
              </ul>
          
            
           
            </div>
        </div>
        <div>
  <p>
    <Link href="/privacy" style={{ color: 'white', textDecoration: 'none' }}>
      Privacy Policy
    </Link>
  </p>
  <p>
    <Link href="/disclaimer" style={{ color: 'white', textDecoration: 'none' }}>
      Disclaimer
    </Link>
  </p>
  <p>
    <Link href="/terms" style={{ color: 'white', textDecoration: 'none' }}>
      Terms and Condition
    </Link>
  </p>
  <p>
    <Link href="/contact" style={{ color: 'white', textDecoration: 'none' }}>
      Contact Us
    </Link>
  </p>
</div>
        <div>SUBSCRIBE TO NEWSLETTER 
        </div>
        <div>
            <p>Copyright © 2024 Sattaking | DESIGNED WITH ❤️</p>
                
        </div>
    </div>
    </div>
    
  )
}

export default Footer