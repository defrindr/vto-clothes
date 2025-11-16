import React, { useState, useRef, useEffect } from 'react';
import { Canvas } from "@react-three/fiber";
import { PresentationControls, Stage } from "@react-three/drei";
import './Custom.css';
import Configurator from "./Configurator";
import { CustomizationalProvider, useCustomization } from '../contexts/Customization';
import Femaleshirt from "./Femaleshirt";
import Maleshirt from "./Maleshirt";
import Maletshirt from "./Maletshirt";
import Femaletshirt from './Femaletshirt';
import Malesuit from './Malesuit';
import Dress from './Dress';
import Blouse from './Blouse';
import Skirt from './Skirt';
import Pants from './Pants';
import Navbar from './Navbar';
import { takeScreenshot } from "./screenshotHelper";

const Custom = () => {
  const [currentObject, setCurrentObject] = useState('femaleshirt');
  const [showModelDropdown, setShowModelDropdown] = useState(false);
  const [showMaletshirtDropdown, setShowMaletshirtDropdown] = useState(false);
  const [showMalesuitDropdown, setShowMalesuitDropdown] = useState(false);
  const [showDressDropdown, setShowDressDropdown] = useState(false); 
  const [showBlouseDropdown, setShowBlouseDropdown] = useState(false); 
  const [showSkirtDropdown, setShowSkirtDropdown] = useState(false);
  const [showPantsDropdown, setShowPantsDropdown] = useState(false);

  const handleObjectChange = (selectedObject) => {
    setCurrentObject(selectedObject);
    setShowModelDropdown(false);
    setShowMaletshirtDropdown(false);
    setShowMalesuitDropdown(false);
    setShowDressDropdown(false); 
    setShowBlouseDropdown(false); 
    setShowSkirtDropdown(false);
    setShowPantsDropdown(false);
  };

  const getCurrentObjectComponent = () => {
    switch (currentObject) {
      case 'femaleshirt':
        return <Femaleshirt />;
      case 'maleshirt':
        return <Maleshirt />;
      case 'maletshirt':
        return <Maletshirt />;
      case 'femaletshirt':
        return <Femaletshirt />;
      case 'malesuit':
        return <Malesuit />;
      case 'dress': 
        return <Dress />;
      case 'blouse': 
        return <Blouse />;
      case 'skirt': 
        return <Skirt />;
      case 'pants': 
        return <Pants />;
      default:
        return null;
    }
  };

  const { takeScreenshot: shouldTakeScreenshot, setTakeScreenshot } = useCustomization();

  const canvasRef = useRef();

  useEffect(() => {
    if (shouldTakeScreenshot) {
      takeScreenshot(canvasRef);
      setTakeScreenshot(false);
    }
  }, [shouldTakeScreenshot, setTakeScreenshot]);

  return (
    <CustomizationalProvider>
      <Navbar />
      <div className="Custom">
      <button className="take-picture-button" onClick={() => setTakeScreenshot(true)}>Take Picture</button>
        <Canvas 
          style={{ touchAction: 'none' }} 
          ref={canvasRef}
          gl={{ preserveDrawingBuffer: true }}
        >
          <PresentationControls
            speed={1.5}
            global
            polar={[-0.1, Math.PI / 4]}
            rotation={[Math.PI / 8, Math.PI / 4, 0]}
          >
            <Stage environment="city" intensity={0.6} castShadow={false}>
              <group>
                {getCurrentObjectComponent()}
              </group>
            </Stage>
          </PresentationControls>
        </Canvas>

        <div className="kotak" />
        <div className='padupadan'> Padupadan</div>

        <Configurator />
        <div className="dropdown-wrapper">
          <div className="dropdown">
            <button className="dropdown-button" onClick={() => setShowModelDropdown(!showModelDropdown)}>
              Shirt
            </button>
            {showModelDropdown && (
              <div className="dropdown-content">
                <div className="dropdown-group1">
                  <button onClick={() => handleObjectChange('femaleshirt')}>Female Shirt</button>
                </div>
                <div className="dropdown-group2">
                  <button onClick={() => handleObjectChange('maleshirt')}>Male Shirt</button>
                </div>
              </div>
            )}
          </div>

          <div className="dropdown">
            <button className="dropdown-button2" onClick={() => setShowMaletshirtDropdown(!showMaletshirtDropdown)}>
              T-Shirt
            </button>
            {showMaletshirtDropdown && (
              <div className="dropdown-content">
                <div className="dropdown-group3">
                  <button onClick={() => handleObjectChange('maletshirt')}>Male T-Shirt</button>
                </div>
                <div className="dropdown-group4">
                  <button onClick={() => handleObjectChange('femaletshirt')}>Female T-Shirt</button>
                </div>
              </div>
            )}
          </div>
          <div className="dropdown">
            <button className="dropdown-button3" onClick={() => setShowMalesuitDropdown(!showMalesuitDropdown)}>
              Suit
            </button>
            {showMalesuitDropdown && (
              <div className="dropdown-content">
                <div className="dropdown-group5">
                  <button onClick={() => handleObjectChange('malesuit')}>Male Suit</button>
                </div>
              </div>
            )}
          </div>

          <div className="dropdown">
            <button className="dropdown-button4" onClick={() => setShowDressDropdown(!showDressDropdown)}>
              Dress
            </button>
            {showDressDropdown && (
              <div className="dropdown-content">
                <div className="dropdown-group6">
                  <button onClick={() => handleObjectChange('dress')}>Dress</button>
                </div>
              </div>
            )}
          </div>

          <div className="dropdown">
            <button className="dropdown-button5" onClick={() => setShowBlouseDropdown(!showBlouseDropdown)}>
              Blouse
            </button>
            {showBlouseDropdown && (
              <div className="dropdown-content">
                <div className="dropdown-group7">
                  <button onClick={() => handleObjectChange('blouse')}>Blouse</button>
                </div>
              </div>
            )}
          </div>
          <div className="dropdown">
            <button className="dropdown-button6" onClick={() => setShowSkirtDropdown(!showSkirtDropdown)}>
              Skirt
            </button>
            {showSkirtDropdown && (
              <div className="dropdown-content">
                <div className="dropdown-group8">
                  <button onClick={() => handleObjectChange('skirt')}>Skirt</button>
                </div>
              </div>
            )}
          </div>

          <div className="dropdown">
            <button className="dropdown-button7" onClick={() => setShowPantsDropdown(!showPantsDropdown)}>
              Pants 
            </button>
            {showPantsDropdown && (
              <div className="dropdown-content">
                <div className="dropdown-group9">
                  <button onClick={() => handleObjectChange('pants')}>Pants</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </CustomizationalProvider>
  );
}

export default Custom;
