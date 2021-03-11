import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timeStamp } from '../firebase/config';

export const useStorage = (file: File | null) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState<any>(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const storage = projectStorage.ref(file!.name);
        const collection = projectFirestore.collection('images');
        
        storage.put(file!).on('state_changed', (snap) => {
            const percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storage.getDownloadURL();
   
            const img = new Image();
            img.src = url;
            img.onload = () => {
                const data = {
                    url,
                    name: file!.name,
                    width: img.width,
                    height: img.height,
                    createdAt: timeStamp()
                }
                collection.add(data);
                setUrl(url);
            }
        });
    }, [file]);

    return { progress, url, error };
}