import React from 'react'
import { motion } from "framer-motion";


function Framer() {
    const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
  return (
      <>
    <div className="example-container">
       
                      <motion.img
                        src={require(`../assets/images/compressed-image.jpg`)}
                        alt='Yasmeen Tariq'
                        whileHover={{ scale: 1.1 }}
                        transition={transition}
                      />
        
    </div>
    </>
  )
}

export default Framer