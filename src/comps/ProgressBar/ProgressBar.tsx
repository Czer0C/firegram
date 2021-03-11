import React from 'react';
import { useStorage } from '../../hooks/useStorage';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

import './ProgressBar.css';

interface ProgressBarProps {
    file: File
    setFile: any
}

export const ProgressBar = ({ file, setFile } : ProgressBarProps) => {
    const { url, progress } = useStorage(file);
    
    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url, setFile])

    return (
        <motion.div 
            className="progress-bar"
            initial={{ width: 0 }}
            animate={{ width: progress + '%' }}
        />
    )
}
