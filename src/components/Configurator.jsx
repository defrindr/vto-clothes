import React, { useState, useEffect } from 'react';
import { SketchPicker } from 'react-color'; 
import { useCustomization } from "../contexts/Customization";
import TextureUploader from "./TextureUploader.jsx"; 

const Configurator = () => {
  const { 
    depankananColor, setDepankananColor, 
    depankiriColor, setDepankiriColor,
    kancingColor, setKancingColor,
    tangankananColor, setTangankananColor,
    tangankiriColor, setTangankiriColor,
    kerahColor, setKerahColor,
    bahuColor, setBahuColor,
    belakangColor, setBelakangColor,
    depanColor, setDepanColor,
    bawahColor, setBawahColor,
    hiasanColor, setHiasanColor,
    atasColor, setAtasColor,
    kakikananColor, setKakikananColor,
    kakikiriColor, setKakikiriColor,
  } = useCustomization();

  const [selectedObject, setSelectedObject] = useState('depankanan'); 
  const [colorPickerVisible, setColorPickerVisible] = useState(true);
  const [textureVisible, setTextureVisible] = useState(true); 

  const handleColorChange = (color) => {
    switch (selectedObject) {
      case 'depankanan':
        setDepankananColor({ ...depankananColor, color: color.hex });
        break;
      case 'depankiri':
        setDepankiriColor({ ...depankiriColor, color: color.hex });
        break;
      case 'kancing':
        setKancingColor({ ...kancingColor, color: color.hex });
        break;
      case 'tangankanan':
        setTangankananColor({ ...tangankananColor, color: color.hex });
        break;
      case 'tangankiri':
        setTangankiriColor({ ...tangankiriColor, color: color.hex });
        break;
      case 'kerah':
        setKerahColor({ ...kerahColor, color: color.hex });
        break;
      case 'bahu':
        setBahuColor({ ...bahuColor, color: color.hex });
        break;
      case 'belakang':
        setBelakangColor({ ...belakangColor, color: color.hex });
        break;
      case 'depan':
        setDepanColor({ ...depanColor, color: color.hex });
          break;
      case 'bawah':
          setBawahColor({ ...bawahColor, color: color.hex });
            break;
      case 'hiasan':
          setHiasanColor({ ...hiasanColor, color: color.hex });
              break;
      case 'atas':
        setAtasColor({ ...atasColor, color: color.hex });
            break;
      case 'kakikanan':
        setKakikananColor({ ...kakikananColor, color: color.hex });
            break;
      case 'kakikiri':
        setKakikiriColor({ ...kakikiriColor, color: color.hex });
            break;
      default:
        break;
    }
  };

  const handleObjectSelect = (object) => {
    setSelectedObject(object);
    setTextureVisible(true);
  };
  

  return (
    <div className="configurator">
      <div className="configurator_section">
        <div className="configurator_section_title">Select Object</div>
        <div className="configurator_section_values">
          <button className="button1" onClick={() => handleObjectSelect('depankanan')}>Depan Kanan</button>
          <button className="button2" onClick={() => handleObjectSelect('depankiri')}>Depan Kiri</button>
          <button className="button3" onClick={() => handleObjectSelect('kancing')}>Kancing</button>
          <button className="button4" onClick={() => handleObjectSelect('tangankanan')}>Lengan Kanan</button>
          <button className="button5" onClick={() => handleObjectSelect('tangankiri')}>Lengan Kiri</button>
          <button className="button6" onClick={() => handleObjectSelect('kerah')}>Kerah</button>
          <button className="button7" onClick={() => handleObjectSelect('bahu')}>Bahu</button>
          <button className="button8" onClick={() => handleObjectSelect('belakang')}>Belakang</button>
          <button className="button9" onClick={() => handleObjectSelect('depan')}>Depan</button>
          <button className="button10" onClick={() => handleObjectSelect('bawah')}>Bawah</button>
          <button className="button11" onClick={() => handleObjectSelect('hiasan')}>Hiasan</button>
          <button className="button12" onClick={() => handleObjectSelect('atas')}>Atas</button>
          <button className="button13" onClick={() => handleObjectSelect('kakikanan')}>Kaki Kanan</button>
          <button className="button14" onClick={() => handleObjectSelect('kakikiri')}>Kaki Kiri</button>
        </div>
      </div>
      {colorPickerVisible && (
        <div className="configurator_section">
          <div className="configurator_section_warna">{selectedObject === 'depankanan' ? '' : ''}</div>
          <div className="configurator_section_values">
            <SketchPicker className="color-picker-container"
              color={
                selectedObject === 'depankanan' ? depankananColor.color :
                selectedObject === 'depankiri' ? depankiriColor.color :
                selectedObject === 'tangankanan' ? tangankananColor.color :
                selectedObject === 'tangankiri' ? tangankiriColor.color :
                selectedObject === 'kerah' ? kerahColor.color :
                selectedObject === 'bahu' ? bahuColor.color :
                selectedObject === 'belakang' ? belakangColor.color :
                selectedObject === 'depan' ? depanColor.color :
                selectedObject === 'bawah' ? bawahColor.color :
                selectedObject === 'hiasan' ? hiasanColor.color :
                selectedObject === 'atas' ? atasColor.color :
                selectedObject === 'kakikanan' ? kakikananColor.color :
                selectedObject === 'kakikiri' ? kakikiriColor.color :
                selectedObject === 'kancing' ? kancingColor.color : ''
              }
              onChange={handleColorChange}
            />
          </div>
        </div>
      )}
      {textureVisible && (
        <div className="configurator_section">
          <div className="configurator_upload_image"></div>
          <div className="configurator_section_values">
            <TextureUploader selectedObject={selectedObject} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Configurator;
