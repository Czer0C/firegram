import { useState, useEffect } from "react"
import { projectFirestore } from "../firebase/config";

export const useFireStore = (collection: string) => {
    const [docs, setDocs] = useState<any[]>([]);

    useEffect(() => {
        const unsub = projectFirestore
        .collection(collection)
        .orderBy('createdAt', 'desc')
        .onSnapshot(snap => {
            let documents:any = [];
            snap.forEach(doc => {
                documents.push({ ...doc.data(), id: doc.id });
            });
            setDocs(documents);
        });

        return () => unsub();

    }, [collection]);

    return { docs };
}
