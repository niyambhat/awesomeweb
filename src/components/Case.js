
import React, { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import '../styles/global.scss'
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
    initial: {
      y: 0,
    },
    animate: {
      y: 0,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.04,
        staggerDirection: -1,
      },
    },
  }

  
      const lastName = {
        initial: {
          y: 0,
        },
        animate: {
          y: 0,
          transition: {
            delayChildren: 0.6,
            staggerChildren: 0.04,
            staggerDirection: 1,
          },
        },
      };

      const letter = {
        initial: {
          y: 400,
        },
        animate: {
          y: 0,
          transition: { duration: 1, ...transition },
        },
      };
  

function Case(imageDetails) {
    return (
        <>
  
      <div className='container fluid'>
        <div className='row center top-row'>
          <div className='top'>
       
            <motion.div className='model'>
              <motion.span className='first' variants={firstName}>
                <motion.span variants={letter}>Y</motion.span>
                <motion.span variants={letter}>a</motion.span>
                <motion.span variants={letter}>s</motion.span>
                <motion.span variants={letter}>m</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>n</motion.span>
              </motion.span>
              <motion.span className='last' variants={lastName}>
                <motion.span variants={letter}>T</motion.span>
                <motion.span variants={letter}>a</motion.span>
                <motion.span variants={letter}>r</motion.span>
                <motion.span variants={letter}>i</motion.span>
                <motion.span variants={letter}>q</motion.span>
              </motion.span>
            </motion.div>
          </div>
        </div>
        </div>
      </>
    )
}

export default Case