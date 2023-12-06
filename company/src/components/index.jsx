import React,{useState} from 'react'
import styles from'./index.module.css'
import image from './image.png'
import {motion, spring} from "framer-motion"
function Index(){
    const [isAnimating,setisAnimating]=useState(false);
    return(
        <div>


<div className={styles.container}>
        <div className={styles.left}>
        <motion.div className={styles.box} id="yo"
            
            initial={{ 
            x:100,
            
                scale:0.6
            
            }}
               whileInView={{ 
               
                x:0,
                scale:1.0 }}
               transition={{
                type:"spring",
                duration:1,
                damping:30
            }}>
               <motion.div 
               initial={{
                x:80,
                scale:0,
                opacity:0
               }}
               whileInView={{
                x:0,
                scale:1,
                opacity:1
               }}
               transition={{
                
                type:"spring",
                duration:1,
                damping:30
               }}
               >
                <p>Extensive delivery capability ensures the reach of high quality support to the end user</p>
               </motion.div>
                
            </motion.div>
            <motion.div className={styles.box} id="yo"
            
            initial={{ 
            x:100,
            
                scale:0.6
            
            }}
               whileInView={{ 
               
                x:0,
                scale:1.0 }}
               transition={{
                type:"spring",
                duration:1,
                damping:30
            }}>
               <motion.div 
               initial={{
                x:80,
                scale:0,
                opacity:0
               }}
               whileInView={{
                x:0,
                scale:1,
                opacity:1
               }}
               transition={{
                
                type:"spring",
                duration:1,
                damping:30
               }}
               >
                <p>Extensive delivery capability ensures the reach of high quality support to the end user</p>
               </motion.div>
                
            </motion.div>
            <motion.div className={styles.box} id="yo"
            
            initial={{ 
            x:100,
            
                scale:0.6
            
            }}
               whileInView={{ 
               
                x:0,
                scale:1.0 }}
               transition={{
                type:"spring",
                duration:1,
                damping:30
            }}>
               <motion.div 
               initial={{
                x:80,
                scale:0,
                opacity:0
               }}
               whileInView={{
                x:0,
                scale:1,
                opacity:1
               }}
               transition={{
                
                type:"spring",
                duration:1,
                damping:30
               }}
               >
                <p>Extensive delivery capability ensures the reach of high quality support to the end user</p>
               </motion.div>
                
            </motion.div>
        </div>
        <img className={styles.image} src={image} alt="Image"/>
        <div className={styles.right}>
        <motion.div className={styles.box} id="yo"
            
            initial={{ 
            x:-100,
            
                scale:0.6
            
            }}
               whileInView={{ 
               
                x:0,
                scale:1.0 }}
               transition={{
                type:"spring",
                duration:1,
                damping:30
            }}>
               <motion.div 
               initial={{
                x:-100,
                scale:0,
                opacity:0
               }}
               whileInView={{
                x:0,
                scale:1,
                opacity:1
               }}
               transition={{
                
                type:"spring",
                duration:1,
                damping:30
               }}
               >
                <p>Extensive delivery capability ensures the reach of high quality support to the end user</p>
               </motion.div>
                
            </motion.div>
            <motion.div className={styles.box} id="yo"
            
            initial={{ 
            x:-100,
            
                scale:0.6
            
            }}
               whileInView={{ 
               
                x:0,
                scale:1.0 }}
               transition={{
                type:"spring",
                duration:1,
                damping:30
            }}>
               <motion.div 
               initial={{
                x:-100,
                scale:0,
                opacity:0
               }}
               whileInView={{
                x:0,
                scale:1,
                opacity:1
               }}
               transition={{
                
                type:"spring",
                duration:1,
                damping:30
               }}
               >
                <p>Extensive delivery capability ensures the reach of high quality support to the end user</p>
               </motion.div>
                
            </motion.div>
            <motion.div className={styles.box} id="yo"
            
            initial={{ 
            x:-100,
            
                scale:0.6
            
            }}
               whileInView={{ 
               
                x:0,
                scale:1.0 }}
               transition={{
                type:"spring",
                duration:1,
                damping:30
            }}>
               <motion.div 
               initial={{
                x:-100,
                scale:0,
                opacity:0
               }}
               whileInView={{
                x:0,
                scale:1,
                opacity:1
               }}
               transition={{
                
                type:"spring",
                duration:1,
                damping:30
               }}
               >
                <p>Extensive delivery capability ensures the reach of high quality support to the end user</p>
               </motion.div>
                
            </motion.div>
        </div>
    </div>
            </div>
        
    

        
    );
}
export default Index;