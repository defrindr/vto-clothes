import React, { useState, useRef, useEffect } from 'react';
import { Canvas } from "@react-three/fiber";
import { PresentationControls, Stage } from "@react-three/drei";
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
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
import NavbarComponent from './Navbar';
import { takeScreenshot } from "./screenshotHelper";
import './Custom.css';

const Custom = () => {
  const [currentObject, setCurrentObject] = useState('femaleshirt');
  const [cameraActive, setCameraActive] = useState(false);
  const [modelScale, setModelScale] = useState(1);
  const [modelPosition, setModelPosition] = useState([0, 0, 0]);
  const [bodyDetected, setBodyDetected] = useState(false);

  const handleObjectChange = (selectedObject) => {
    setCurrentObject(selectedObject);
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
  const videoRef = useRef();

  const handleBodyDetected = (bodyPoints) => {
    if (bodyPoints && bodyPoints.width) {
      const newScale = bodyPoints.width / 200;
      setModelScale(Math.min(Math.max(newScale, 0.5), 2));
      setBodyDetected(true);
    }
  };

  useEffect(() => {
    if (shouldTakeScreenshot) {
      takeScreenshot(canvasRef);
      setTakeScreenshot(false);
    }
  }, [shouldTakeScreenshot, setTakeScreenshot]);

  useEffect(() => {
    if (cameraActive) {
      navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: 'user'
        }
      })
        .then(stream => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch(err => {
          console.error('Error accessing camera:', err);
          alert('Tidak dapat mengakses kamera. Pastikan izin kamera sudah diberikan.');
        });
    } else {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
        videoRef.current.srcObject = null;
      }
    }
  }, [cameraActive]);

  return (
    <CustomizationalProvider>
      {/* Header */}
      {!cameraActive && <NavbarComponent />}

      {/* Main Layout */}
      <Container fluid className={`vw-100 overflow-hidden bg-light ${cameraActive ? 'vh-100' : 'vh-100'}`} style={cameraActive ? {marginTop: '0'} : {}}>
        <Row className="h-100">
          {/* Sidebar Kiri - Product Selection */}
          {!cameraActive && (
            <Col xs={12} sm={4} md={3} lg={3} xl={3} className="bg-dark text-white p-0 d-flex flex-column order-2 order-md-1">
            <div className="p-3 p-md-4 border-bottom d-none d-sm-block">
              <h3 className="mb-0 text-center h5 h-md-3">
                <i className="fas fa-tshirt me-2"></i>
                Padupadan
              </h3>
              <p className="text-muted small text-center mt-1 d-none d-md-block">Virtual Try-On</p>
            </div>

            {/* Mobile Header */}
            <div className="p-3 border-bottom d-sm-none bg-secondary">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">
                  <i className="fas fa-tshirt me-2"></i>
                  Products
                </h5>
                <Badge bg="primary" className="fs-6">
                  {currentObject.replace(/([A-Z])/g, ' $1').trim()}
                </Badge>
              </div>
            </div>

            <div className="grow p-3 overflow-auto">
              <h5 className="mb-3 d-none d-sm-block">
                <i className="fas fa-list me-2"></i>
                Choose Product
              </h5>

              {/* Product Categories */}
              <div className="mb-4">
                <h6 className="text-light mb-2 d-none d-sm-block">
                  <i className="fas fa-shirt me-2"></i>
                  Tops
                </h6>
                <div className="d-grid gap-2 mb-3">
                  <Button
                    variant={currentObject === 'femaleshirt' ? 'primary' : 'outline-light'}
                    size="sm"
                    onClick={() => handleObjectChange('femaleshirt')}
                    className="text-start"
                  >
                    👩 Female Shirt
                  </Button>
                  <Button
                    variant={currentObject === 'maleshirt' ? 'primary' : 'outline-light'}
                    size="sm"
                    onClick={() => handleObjectChange('maleshirt')}
                    className="text-start"
                  >
                    👨 Male Shirt
                  </Button>
                  <Button
                    variant={currentObject === 'maletshirt' ? 'primary' : 'outline-light'}
                    size="sm"
                    onClick={() => handleObjectChange('maletshirt')}
                    className="text-start"
                  >
                    👨 Male T-Shirt
                  </Button>
                  <Button
                    variant={currentObject === 'femaletshirt' ? 'primary' : 'outline-light'}
                    size="sm"
                    onClick={() => handleObjectChange('femaletshirt')}
                    className="text-start"
                  >
                    👩 Female T-Shirt
                  </Button>
                  <Button
                    variant={currentObject === 'blouse' ? 'primary' : 'outline-light'}
                    size="sm"
                    onClick={() => handleObjectChange('blouse')}
                    className="text-start"
                  >
                    👚 Blouse
                  </Button>
                </div>
              </div>

              <div className="mb-4">
                <h6 className="text-light mb-2 d-none d-sm-block">
                  <i className="fas fa-user-tie me-2"></i>
                  Formal Wear
                </h6>
                <div className="d-grid gap-2 mb-3">
                  <Button
                    variant={currentObject === 'malesuit' ? 'primary' : 'outline-light'}
                    size="sm"
                    onClick={() => handleObjectChange('malesuit')}
                    className="text-start"
                  >
                    👨 Male Suit
                  </Button>
                </div>
              </div>

              <div className="mb-4">
                <h6 className="text-light mb-2 d-none d-sm-block">
                  <i className="fas fa-female me-2"></i>
                  Dresses & Skirts
                </h6>
                <div className="d-grid gap-2 mb-3">
                  <Button
                    variant={currentObject === 'dress' ? 'primary' : 'outline-light'}
                    size="sm"
                    onClick={() => handleObjectChange('dress')}
                    className="text-start"
                  >
                    👗 Dress
                  </Button>
                  <Button
                    variant={currentObject === 'skirt' ? 'primary' : 'outline-light'}
                    size="sm"
                    onClick={() => handleObjectChange('skirt')}
                    className="text-start"
                  >
                    👗 Skirt
                  </Button>
                </div>
              </div>

              <div className="mb-4">
                <h6 className="text-light mb-2 d-none d-sm-block">
                  <i className="fas fa-socks me-2"></i>
                  Bottoms
                </h6>
                <div className="d-grid gap-2 mb-3">
                  <Button
                    variant={currentObject === 'pants' ? 'primary' : 'outline-light'}
                    size="sm"
                    onClick={() => handleObjectChange('pants')}
                    className="text-start"
                  >
                    👖 Pants
                  </Button>
                </div>
              </div>
            </div>

            {/* Current Selection Indicator - Desktop */}
            <div className="p-3 border-top bg-secondary d-none d-sm-block">
              <small className="text-muted">Current Selection:</small>
              <div className="fw-bold text-uppercase">
                {currentObject.replace(/([A-Z])/g, ' $1').trim()}
              </div>
            </div>
          </Col>
          )}

          {/* Main Content - 3D Canvas */}
          <Col xs={12} sm={cameraActive ? 12 : 8} md={cameraActive ? 12 : 6} lg={cameraActive ? 12 : 6} xl={cameraActive ? 12 : 6} className="p-0 position-relative order-1 order-md-2">
            {/* Action Buttons - Top Center */}
            <div className="position-absolute top-0 start-50 translate-middle-x mt-3 mt-md-4" style={{ zIndex: 4 }}>
              <div className="d-flex gap-2 gap-md-3">
                <Button
                  variant={cameraActive ? "outline-danger" : "success"}
                  size="lg"
                  onClick={() => setCameraActive(!cameraActive)}
                  className="px-3 px-md-4 py-2 shadow"
                >
                  <i className={`fas fa-${cameraActive ? 'stop' : 'camera'} me-2`}></i>
                  <span className="d-none d-sm-inline">{cameraActive ? 'Stop Try On' : 'Try On'}</span>
                  <span className="d-sm-none">{cameraActive ? 'Stop' : 'Try On'}</span>
                </Button>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => setTakeScreenshot(true)}
                  disabled={!cameraActive}
                  className="px-3 px-md-4 py-2 shadow"
                >
                  <i className="fas fa-camera me-2"></i>
                  <span className="d-none d-sm-inline">Take Picture</span>
                  <span className="d-sm-none">Photo</span>
                </Button>
              </div>
            </div>

            {/* 3D Canvas Container */}
            <div className="position-absolute top-0 start-0 w-100 h-100">
              {/* Video Overlay */}
              {cameraActive && (
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                  style={{
                    zIndex: 1,
                    transform: 'scaleX(-1)' // Mirror the video
                  }}
                />
              )}

              <Canvas
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                  zIndex: 2,
                  background: cameraActive ? 'transparent' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  touchAction: 'none'
                }}
                ref={canvasRef}
                gl={{
                  preserveDrawingBuffer: true,
                  alpha: true
                }}
                camera={{ position: [0, 0, 5], fov: 50 }}
              >
                <PresentationControls
                  speed={1.5}
                  global
                  polar={[-0.1, Math.PI / 4]}
                  rotation={[Math.PI / 8, Math.PI / 4, 0]}
                >
                  <Stage environment="city" intensity={0.6} castShadow={false}>
                    <mesh scale={modelScale} position={[modelPosition[0], modelPosition[1], modelPosition[2]]}>
                      {getCurrentObjectComponent()}
                    </mesh>
                  </Stage>
                </PresentationControls>
              </Canvas>
            </div>

            {/* Control Panel Overlay - Responsive */}
            {cameraActive && (
              <Card className="position-absolute top-0 end-0 m-2 m-md-3 control-panel" style={{ zIndex: 3, minWidth: '280px', maxWidth: '90vw' }}>
                <Card.Header className="bg-primary text-white py-2">
                  <h6 className="mb-0 h6">
                    <i className="fas fa-sliders-h me-2"></i>
                    Model Controls
                  </h6>
                </Card.Header>
                <Card.Body className="p-2 p-md-3">
                  {bodyDetected && (
                    <div className="mb-3">
                      <Badge bg="success" className="w-100 py-2">
                        <i className="fas fa-check-circle me-1"></i>
                        Body Detected - Auto-scaling active
                      </Badge>
                    </div>
                  )}

                  <div className="mb-3">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <label className="form-label small fw-bold mb-0">
                        Scale
                      </label>
                      <Badge bg="secondary">{modelScale.toFixed(2)}</Badge>
                    </div>
                    <input
                      type="range"
                      className="form-range"
                      min="0.5"
                      max="2"
                      step="0.1"
                      value={modelScale}
                      onChange={(e) => setModelScale(parseFloat(e.target.value))}
                    />
                  </div>

                  <div className="mb-3">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <label className="form-label small fw-bold mb-0">
                        Vertical Position
                      </label>
                      <Badge bg="secondary">{modelPosition[1].toFixed(2)}</Badge>
                    </div>
                    <input
                      type="range"
                      className="form-range"
                      min="-2"
                      max="2"
                      step="0.1"
                      value={modelPosition[1]}
                      onChange={(e) => setModelPosition([modelPosition[0], parseFloat(e.target.value), modelPosition[2]])}
                    />
                  </div>

                  <div className="mb-3">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <label className="form-label small fw-bold mb-0">
                        Horizontal Position
                      </label>
                      <Badge bg="secondary">{modelPosition[0].toFixed(2)}</Badge>
                    </div>
                    <input
                      type="range"
                      className="form-range"
                      min="-2"
                      max="2"
                      step="0.1"
                      value={modelPosition[0]}
                      onChange={(e) => setModelPosition([parseFloat(e.target.value), modelPosition[1], modelPosition[2]])}
                    />
                  </div>
                </Card.Body>
              </Card>
            )}

          </Col>

          {/* Sidebar Kanan - Configurator */}
          {!cameraActive && (
            <Col xs={12} sm={12} md={3} lg={3} xl={3} className="bg-white p-0 d-flex flex-column border-start order-3">
            <div className="p-3 p-md-4 border-bottom bg-light">
              <h5 className="mb-0 h6 h-md-5">
                <i className="fas fa-palette me-2"></i>
                <span className="d-none d-sm-inline">Customization</span>
                <span className="d-sm-none">Customize</span>
              </h5>
              <small className="text-muted d-none d-md-block">Adjust colors & materials</small>
            </div>

            <div className="grow overflow-auto p-3">
              <Configurator />
            </div>

            {/* Status Panel - Responsive */}
            <div className="p-2 p-md-3 border-top bg-light">
              <div className="mb-2">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <small className="text-muted fw-bold">Camera:</small>
                  <Badge bg={cameraActive ? "success" : "secondary"} className="ms-2">
                    {cameraActive ? "On" : "Off"}
                  </Badge>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <small className="text-muted fw-bold">Body:</small>
                  <Badge bg={bodyDetected ? "success" : "warning"} className="ms-2">
                    {bodyDetected ? "Yes" : "No"}
                  </Badge>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-muted fw-bold">Model:</small>
                  <Badge bg="info" className="ms-2 text-truncate" style={{maxWidth: '100px'}}>
                    {currentObject}
                  </Badge>
                </div>
              </div>
            </div>
          </Col>
          )}
        </Row>
      </Container>
    </CustomizationalProvider>
  );
};

export default Custom;
