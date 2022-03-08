import React from "react";
import Framer from "../components/Framer";
import '../styles/global.scss'


const CaseStudies = ({imageDetails, image}) => {
  return (
 
    <div className='container'>
          <div className = "hero">
         <div className='row'>
           <div className="thumbnail"  ref={image}
              style={{
                width: imageDetails.width,
                height: imageDetails.height,
              }}></div>
         <div className="frame">
        <Framer/>
        </div>
        </div>
        </div>
    </div>

  );
};

export default CaseStudies;
