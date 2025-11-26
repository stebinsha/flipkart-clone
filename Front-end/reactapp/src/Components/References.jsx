import React from "react";
import "../styles/References.css"; 
import { 
  FaFacebook, 
  FaXTwitter, 
  FaYoutube, 
  FaInstagram, 
  FaStore, 
  FaBullhorn, 
  FaGift 
} from "react-icons/fa6";
import { FaQuestionCircle } from "react-icons/fa";  

const References = () => {
  return (
    <footer className="reference-section">
      <div className="references">
   
        <div className="ref-column">
          <h6>ABOUT</h6>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Flipkart Stories</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Corporate Information</a></li>
          </ul>
        </div>

      
        <div className="ref-column">
          <h6>GROUP COMPANIES</h6>
          <ul>
            <li><a href="https://www.myntra.com/" target="_blank" rel="noreferrer">Myntra</a></li>
            <li><a href="https://www.cleartrip.com" target="_blank" rel="noreferrer">Cleartrip</a></li>
            <li><a href="https://www.shopsy.in/" target="_blank" rel="noreferrer">Shopsy</a></li>
          </ul>
        </div>

      
        <div className="ref-column">
          <h6>HELP</h6>
          <ul>
            <li><a href="#">Payments</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Cancellation & Returns</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

     
        <div className="ref-column">
          <h6>CONSUMER POLICY</h6>
          <ul>
            <li><a href="#">Cancellation & Returns</a></li>
            <li><a href="#">Terms Of Use</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Sitemap</a></li>
            <li><a href="#">Grievance Redressal</a></li>
            <li><a href="#">EPR Compliance</a></li>
          </ul>
        </div>
 
        <div className="vertical-divider"></div>

   
        <div className="ref-column">
          <h6>Mail Us:</h6>
          <ul>
            <li>Flipkart Internet Private Limited,</li>
            <li>Buildings Alyssa, Begonia &</li>
            <li>Clove Embassy Tech Village,</li>
            <li>Outer Ring Road, Devarabeesanahalli Village,</li>
            <li>Bengaluru, 560103,</li>
            <li>Karnataka, India</li>
          </ul>

          <h6 className="social">Social:</h6>
          <div className="bottom-icons">
            <a href="https://www.facebook.com/flipkart"><FaFacebook size={20} /></a>
            <a href="https://x.com/flipkart"><FaXTwitter size={20} /></a>
            <a href="https://www.youtube.com/flipkart"><FaYoutube size={20} /></a>
            <a href="https://www.instagram.com/flipkart/"><FaInstagram size={20} /></a>
          </div>
        </div>

      
        <div className="ref-column">
          <h6>Registered Office Address:</h6>
          <ul>
            <li>Flipkart Internet Private Limited,</li>
            <li>Buildings Alyssa, Begonia &</li>
            <li>Clove Embassy Tech Village,</li>
            <li>Outer Ring Road, Devarabeesanahalli Village,</li>
            <li>Bengaluru, 560103,</li>
            <li>Karnataka, India</li>
            <li>CIN: U51109KA2012PTC066107</li>
            <li>Telephone: <a href="#">044-45614700 / 044-67415800</a></li>
          </ul>
        </div>
      </div>
 
      <div className="horizontal-divider"></div>
 
      <div className="footer-section">
        <div className="footer-content">
          <span><FaStore /> <a href="#">Become a Seller</a></span>
          <span><FaBullhorn /> <a href="#">Advertise</a></span>
          <span><FaGift /> <a href="#">Gift Cards</a></span>
          <span><FaQuestionCircle /> <a href="#">Help Center</a></span>
          <span>© 2007-2025 Flipkart.com</span>
         <img src="/images/footer-icon1.svg" alt="Visa" />
        </div>
      </div>
    </footer>
  );
};

export default References;
