import React from "react";
import shield from "../Data/shield.png";
import map from "../Data/map.png";
import repeat from "../Data/repeat.png";
import "../Styles/PreFooter.css";
import '../Styles/Footer.css'

const Footer = ({footer}) => {
  return (
    <>
      <div className="PreFooter">
        <div>
          <img src={repeat} alt="" />
          <p>
            <b>Hassle-free replacement</b>
            <br />
            10-day easy replacement policy on mi.com
          </p>
        </div>
        <div>
          <img src={shield} alt="" />
          <p>
            <b>100% secure payments</b>
            <br />
            We support Cards, Wallets, EMI and COD
          </p>
        </div>
        <div>
          <img src={map} alt="" />
          <p>
            <b>Vast service network</b>
            <br />
            1000 Mi service-centers across 600 cities
          </p>
        </div>
      </div>




      <div className="PreFooter2">
            <div className="puran">          
            <p>LET'S STAY IN TOUCH</p> 
            <span>Get updates on sales specials and more</span>
                        
           
            </div>
        <div>
          <input type="email" name="emai" placeholder="Enter Email Address" />
          <button> > </button>
        </div>
        <div className="puran">
          <p>FOLLOW MI</p>
          <span>We want to hear from you!</span>
        </div>
        <div className="social">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </div>

{/* -----------------2nd Footer------------- */}

<div className="footer">
    <div>
        <p>SUPPORT</p>
        {footer.support.map((item,index)=>(
            <a key={item.url} href={item.url}>{item.name}</a>
        ))}

    </div>
    <div>
        <p>SHOP AND LEARN</p>
        {footer.shopAndLearn.map((item,index)=>(
            <a key={item.url} href={item.url}>{item.name}</a>
        ))}

    </div>
    <div>
        <p>RETAIL STORE</p>
        {footer.retailStore.map((item,index)=>(
            <a key={item.url} href={item.url}>{item.name}</a>
        ))}

    </div>
    <div>
        <p>ABOUT</p>
        {footer.aboutUS.map((item,index)=>(
            <a key={item.url} href={item.url}>{item.name}</a>
        ))}

    </div>

    <div>
        <p>CONTACT US</p>
        {footer.contactUs.map((item,index)=>(
            <a key={item.url} href={item.url}>{item.name}</a>
        ))}

    </div>
    <div>
        <div>
            Chat with our Virtual AI Bot (24/7 Live Agent Support)
        </div>
        <button>CHAT NOW</button>
    </div>
</div>
<div className="footerBorder">
    <div>Copyright © 2010-2022 Xiaomi. All Rights Reserved</div>
</div>

    </>
  );
};

export default Footer;
