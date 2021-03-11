import React from 'react';
import { motion } from 'framer-motion';
import Tippy from '@tippyjs/react';
import './Modal.css';

interface image {
    src: string
    alt: string
}

export const Modal = ({ selectedImage, deselect }: any) => {
    if (!selectedImage) return <div>loading</div>
    
    const {
        src,
        alt
    } = selectedImage;

    const handleDeselect = (event: any) => {
        if (event.target.classList.contains('backdrop')) {
            deselect(null);
        }
    }

    const handleClick = (event: any) => {
        window.open(event.target.src, "_blank");
    }

    return (        
        <motion.div 
            className="backdrop" 
            onClick={handleDeselect}
        >
            <Tippy
                content={<div className="tooltip">View Full Size</div>}
                
                animation="scale-subtle"
            >
                <motion.img 
                src={src!} 
                alt={alt!}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ ease: "easeOut", duration: 0.5 }}
                onClick={handleClick}              
            />
            </Tippy>
            
        </motion.div>
    )
}
