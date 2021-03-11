import React from 'react';
import { motion } from 'framer-motion';

import './Image.css';
import { useEffect } from 'react';

interface ImageProps {
    src: string
    alt: string
    onClick: any
    delay: number
    width: number
    height: number
}

export const Image = ({ src, alt, onClick, delay, width, height } : ImageProps) => {
    const display = width / height >= 1.8 ? 'card-wide' : height / width >= 1.8 ? 'card-tall' : '';
    return (
        <motion.div layout className={`img-wrap ${display}`} whileHover={{opacity: 1}} >
            <motion.img 
                src={src} 
                alt={alt} 
                onClick={() => onClick({src, alt})}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ ease: "easeOut", duration: 0.2 * delay }}              

            />
        </motion.div>
    )
}
