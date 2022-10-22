import React from "react";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <div className="border-2 py-12 px-14 bg-slate-800 text-slate-400 flex justify-around items-center md:flex-row flex-col text-center">
      
      <div className="text-center">
        <h1 className="text-4xl">Portfoli</h1>
        <p className="my-2">Follow us on</p>

        <ul>
          <li className="py-2">
            <SocialIcon className="w-[]" url="https://twitter.com" />
          </li>
          <li className="py-2"> 
          <SocialIcon url="https://facebook.com" />
          </li>
          <li className="py-2">
            <SocialIcon url="https://instagram.com" />
          </li>
        </ul>
      </div>

       <div className="my-3 py-4">
        <h3 className="text-3xl font-bold">What We Offers</h3>
        <ul>
          <li className="py-1 my-1">Full Stact Website</li>
          <li className="py-1">Attractive FrontEnd</li>
          <li className="py-1">Strong Backend</li>
          <li className="py-1">Full Control Management System</li>
          <li className="py-1">24/7 services</li>
          
          
        </ul>
       </div>

       <div>
        <h3 className="text-3xl font-bold">
           Contact
        </h3>
        <ul>
        <li className="py-1">portfolio@gmail.com</li>
        <li className="py-1">9999955555</li>
        <li className="py-1">Support team</li>

        
          
        </ul>
       </div>


    </div>
  );
}
