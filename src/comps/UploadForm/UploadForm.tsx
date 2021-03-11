import React, { ChangeEvent, useState } from 'react';
import './UploadForm.css';
import { ProgressBar } from '../ProgressBar/ProgressBar';

export const UploadForm = ({ handleViewChange } : any) => {
    const [file, setFile] = useState<File | null>(null);
    const [error, setError] = useState('');

    const fileTypes = ['image/png', 'image/jpeg']

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files![0];
    
        if (selectedFile && fileTypes.includes(selectedFile.type)) {
            setFile(selectedFile);
            setError('');
        } else {
            setFile(null);
            setError('Only PNG and JPEG allowed!');
        }    
    }

    return (
        <form>
            <div className="file-controller">
                <label className="btn-add">
                    <input type="file" onChange={handleChange}/>
                    <span>+</span>
                </label>
                <label className="select-label">
                    <div className="select">
                        <select id="select-view" name="view-mode" onChange={handleViewChange}>
                            <option value="grid">Grid View</option>
                            <option value="masonry">Masonry</option>
                        </select>
                        <span className="focus"></span>
                    </div>
                </label>
            </div>
            <div className="output">
                { error && <div className="error">{ error }</div> }
                { file && <div>{ file.name }</div> }
                { file && <ProgressBar file={file} setFile={setFile} /> }
            </div>
        </form>
    )
}
