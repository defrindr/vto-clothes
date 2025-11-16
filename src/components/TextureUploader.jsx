import React, { useState } from 'react';
import { useCustomization } from '../contexts/Customization';

const TextureUploader = ({ selectedObject }) => {
  const {
    setDepankananTextureURL,
    setDepankiriTextureURL,
    texturesTextureProps, // asumsi texturesTextureProps tersedia di lingkungan ini
    depankananColor,      // asumsi depankananColor tersedia di lingkungan ini
    depankiriColor        // asumsi depankiriColor tersedia di lingkungan ini
  } = useCustomization();

  const [selectedTexture, setSelectedTexture] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        switch (selectedObject) {
          case 'depankanan':
            setDepankananTextureURL(e.target.result);
            break;
          case 'depankiri':
            setDepankiriTextureURL(e.target.result);
            break;
          default:
            break;
        }
        setSelectedTexture(file); // Memperbarui selectedTexture setelah membaca berkas
      };
      reader.readAsDataURL(file);
    }
  };

  let materialProps = {};

  switch (selectedObject) {
    case 'depankanan':
      materialProps = {
        ...texturesTextureProps,
        color: depankananColor.color 
      };
      break;
    case 'depankiri':
      materialProps = {
        ...texturesTextureProps,
        color: depankiriColor.color
      };
      break;

    default:
      materialProps = {};
      break;
  }

  return (
    <>
      <meshStandardMaterial {...materialProps} />
      <div className='upload-image'>
        <input type="file" accept="image/*" onChange={handleFileUpload} />
        {selectedTexture ? <p>Selected Texture: {selectedTexture.name}</p> : null}
      </div>
    </>
  );
};

export default TextureUploader;
