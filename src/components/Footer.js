import React from 'react'
import {AiOutlineInstagram} from 'react-icons/ai'
import { FaFacebook, FaGithub, FaTiktok, FaTwitter } from 'react-icons/fa'
import ThemeToggle from './ThemeToggle'



const Footer = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <h2>Support</h2>
            <ul>
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>API Status</li>
              <li>Documentation</li>
            </ul>
          </div>
          <div>
            <h2>Info</h2>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Invest</li>
              <li>Legal</li>
            </ul>
          </div>
        </div>
        <div>
          <div>
             <div>
                <div>
                  <ThemeToggle/>
                </div>
                <p>Sing up for crypto news</p>
                <div>
                  <form>
                    <input type='email' placeholder='Enter your email'/>
                    <button>Sing Up</button>
                  </form>
                </div>
                <div>
                  <AiOutlineInstagram/>
                  <FaFacebook/>
                  <FaGithub/>
                  <FaTiktok/>
                  <FaTwitter/>
                </div>
            </div>
          </div>
        </div>
      </div>
      <p> Powered by Coin Gecko</p>
    </div>
  )
}

export default Footer