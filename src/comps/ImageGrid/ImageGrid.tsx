import React from 'react'
import { useFireStore } from '../../hooks/useFireStore'
import { Image } from './Image';

import './ImageGrid.css';

export const ImageGrid = ({ onSelect, viewMode }: any) => {
    const { docs } = useFireStore('images');
    
    return (
        <div className={`img-${viewMode}`}>
            {
                docs && docs.map((doc, idx) => (
                    <Image
                        key={doc.id}
                        src={doc.url}
                        delay={idx}
                        alt={doc.name}
                        width={doc.width}
                        height={doc.height}
                        onClick={onSelect}
                    />
                ))
            }
        </div>
    )
}
