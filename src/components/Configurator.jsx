import React, { useState, useEffect } from 'react';
import { SketchPicker } from 'react-color';
import { useCustomization } from "../contexts/Customization";
import TextureUploader from "./TextureUploader.jsx";
import { Card, Button, Badge } from 'react-bootstrap';

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
  const [activeSection, setActiveSection] = useState('parts');

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
  };

  const getCurrentColor = () => {
    switch (selectedObject) {
      case 'depankanan': return depankananColor.color;
      case 'depankiri': return depankiriColor.color;
      case 'tangankanan': return tangankananColor.color;
      case 'tangankiri': return tangankiriColor.color;
      case 'kerah': return kerahColor.color;
      case 'bahu': return bahuColor.color;
      case 'belakang': return belakangColor.color;
      case 'depan': return depanColor.color;
      case 'bawah': return bawahColor.color;
      case 'hiasan': return hiasanColor.color;
      case 'atas': return atasColor.color;
      case 'kakikanan': return kakikananColor.color;
      case 'kakikiri': return kakikiriColor.color;
      case 'kancing': return kancingColor.color;
      default: return '#ffffff';
    }
  };

  const partButtons = [
    { key: 'depankanan', label: 'Depan Kanan', icon: '🧵' },
    { key: 'depankiri', label: 'Depan Kiri', icon: '🧵' },
    { key: 'kancing', label: 'Kancing', icon: '🔘' },
    { key: 'tangankanan', label: 'Lengan Kanan', icon: '💪' },
    { key: 'tangankiri', label: 'Lengan Kiri', icon: '💪' },
    { key: 'kerah', label: 'Kerah', icon: '👔' },
    { key: 'bahu', label: 'Bahu', icon: '🦵' },
    { key: 'belakang', label: 'Belakang', icon: '🔙' },
    { key: 'depan', label: 'Depan', icon: '👕' },
    { key: 'bawah', label: 'Bawah', icon: '👖' },
    { key: 'hiasan', label: 'Hiasan', icon: '✨' },
    { key: 'atas', label: 'Atas', icon: '⬆️' },
    { key: 'kakikanan', label: 'Kaki Kanan', icon: '🦵' },
    { key: 'kakikiri', label: 'Kaki Kiri', icon: '🦵' },
  ];

  return (
    <div className="h-100 d-flex flex-column">
      {/* Navigation Tabs */}
      <div className="mb-3 border-bottom pb-2">
        <div className="d-flex gap-1 flex-wrap">
          <Button
            variant={activeSection === 'parts' ? 'primary' : 'outline-primary'}
            size="sm"
            className="rounded-pill px-3"
            onClick={() => setActiveSection('parts')}
          >
            <i className="fas fa-shapes me-1"></i>
            Parts
          </Button>
          <Button
            variant={activeSection === 'colors' ? 'primary' : 'outline-primary'}
            size="sm"
            className="rounded-pill px-3"
            onClick={() => setActiveSection('colors')}
          >
            <i className="fas fa-palette me-1"></i>
            Colors
          </Button>
          <Button
            variant={activeSection === 'textures' ? 'primary' : 'outline-primary'}
            size="sm"
            className="rounded-pill px-3"
            onClick={() => setActiveSection('textures')}
          >
            <i className="fas fa-image me-1"></i>
            Textures
          </Button>
        </div>
      </div>

      {/* Current Selection Indicator */}
      <div className="mb-3">
        <div className="d-flex justify-content-between align-items-center">
          <small className="text-muted fw-bold mb-0">Selected Part:</small>
          <Badge bg="info" className="fs-6">
            {partButtons.find(btn => btn.key === selectedObject)?.icon} {partButtons.find(btn => btn.key === selectedObject)?.label}
          </Badge>
        </div>
      </div>

      {/* Parts Selection */}
      {activeSection === 'parts' && (
        <div className="mb-3 grow">
          <h6 className="mb-3 fw-bold text-dark">
            <i className="fas fa-mouse-pointer me-2 text-primary"></i>
            Select Part to Customize
          </h6>
          <div className="row g-2">
            {partButtons.map((button) => (
              <div className="col-6 col-sm-12" key={button.key}>
                <Button
                  variant={selectedObject === button.key ? 'primary' : 'outline-secondary'}
                  size="sm"
                  className="w-100 text-start py-2"
                  onClick={() => handleObjectSelect(button.key)}
                >
                  <span className="me-2">{button.icon}</span>
                  <span className="d-none d-sm-inline">{button.label}</span>
                  <span className="d-sm-none">{button.label.split(' ')[0]}</span>
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Color Picker */}
      {activeSection === 'colors' && (
        <div className="mb-3 grow">
          <h6 className="mb-3 fw-bold text-dark">
            <i className="fas fa-palette me-2 text-primary"></i>
            Color Picker
          </h6>
          <Card className="border-0 bg-light mb-3">
            <Card.Body className="p-3">
              <div className="d-flex align-items-center justify-content-center">
                <div
                  className="rounded-circle border-2 me-3 shadow-sm"
                  style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: getCurrentColor(),
                  }}
                ></div>
                <div className="text-center">
                  <small className="text-muted d-block">Current Color</small>
                  <div className="fw-bold small font-monospace">{getCurrentColor().toUpperCase()}</div>
                </div>
              </div>
            </Card.Body>
          </Card>
          <div className="d-flex justify-content-center">
            <div className="shadow-sm rounded">
              <SketchPicker
                color={getCurrentColor()}
                onChange={handleColorChange}
              />
            </div>
          </div>
        </div>
      )}

      {/* Texture Uploader */}
      {activeSection === 'textures' && (
        <div className="mb-3 grow">
          <h6 className="mb-3 fw-bold text-dark">
            <i className="fas fa-image me-2 text-primary"></i>
            Texture Upload
          </h6>
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-3">
              <TextureUploader selectedObject={selectedObject} />
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Configurator;
