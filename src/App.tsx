import React, { useState } from 'react';
import { ImageGrid } from './comps/ImageGrid/ImageGrid';
import { Modal } from './comps/Modal/Modal';
import Title from './comps/Title/Title';
import { UploadForm } from './comps/UploadForm/UploadForm';

interface image {
  src: string
  alt: string
}

function App() {
  const [selectedImage, setSelectedImage] = useState<image | null>(null);
  const [viewMode, setViewMode] = useState('grid');
  const title = 'Gaftonosh';
  const header = 'Gallery';
  const description = 'Upload your photos here';

  const handleViewChange = (event: any) => {
    setViewMode(event.target.value);
  }

  return (
    <div className="App">
      <Title title={title} header={header} description={description} />
      <UploadForm handleViewChange={handleViewChange}/>
      <ImageGrid onSelect={setSelectedImage} viewMode={viewMode}/>
      {
        selectedImage && <Modal selectedImage={selectedImage} deselect={setSelectedImage} />
      }
    </div>
  );
}

export default App;
