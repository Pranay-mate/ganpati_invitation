import React, { Component } from 'react';
import Imgg from './images/1.jpg';
// import Imgg from './images/2.jpg';
import Img5 from './images/ganesh5.gif';
import Img2 from './images/download.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faMapMarkerAlt, faStar } from '@fortawesome/free-solid-svg-icons'

class ganeshaCard extends Component {

    state = {
    };
    render(){
        return(
            <div className="container pt-4">
                <span style={{display:'none'}}>
                 <a href='https://pngtree.com/free-backgrounds'>free background photos from pngtree.com/</a>
                </span>
               {/* <img className="backImg" src={Img2}  /> */}
               <span className="inline_header">
                    {/* <span className='header_msg'>Happy Ganesh Chaturthi</span> */}
                    <span className='header_msg'>Ganapati Bappa Moraya</span>
                    <img className="header_img px-2" src={Img5}  />
               </span>
               <div className="invitation_msg">
                    <p className="mt-4">I invite you all to the Ganpati festival to be held on 10th Sept 2021. I would  await your gracious presence</p>
                    <p>To join us in praying the Lord Ganesha and Ask for blessings for prosperity of all.</p>
                </div>
               <p className="blessings mt-4">May Lord Ganesh shower you with success in all your endeavours</p>

               <h4 className="venue"><FontAwesomeIcon icon={faStar}  size="xs" /> Venue <FontAwesomeIcon icon={faStar} size="xs" /></h4>
                    
                    <h5 className="address">
                    <a href="https://maps.app.goo.gl/FqYMnBoAw3nCnb6v6">Maratha sec-32, Ulhasnagar-4 
                    <FontAwesomeIcon icon={faMapMarkerAlt} size="sm" className="ml-2" /></a>
                </h5>
           </div>
        );
    }
}

export default ganeshaCard;