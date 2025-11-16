import { useState } from 'react';
import { Button, Form, Alert, Card } from 'react-bootstrap';
import { useCustomization } from '../contexts/Customization';
import PropTypes from 'prop-types';

const TextureUploader = ({ selectedObject }) => {
  const {
    setDepankananTextureURL,
    setDepankiriTextureURL,
    texturesTextureProps,
    depankananColor,
    depankiriColor
  } = useCustomization();

  const [selectedTexture, setSelectedTexture] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setUploadStatus('error');
        setTimeout(() => setUploadStatus(''), 3000);
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setUploadStatus('size-error');
        setTimeout(() => setUploadStatus(''), 3000);
        return;
      }

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
        setSelectedTexture(file);
        setUploadStatus('success');
        setTimeout(() => setUploadStatus(''), 3000);
      };
      reader.readAsDataURL(file);
    }
  };

  const getMaterialProps = () => {
    switch (selectedObject) {
      case 'depankanan':
        return {
          ...texturesTextureProps,
          color: depankananColor?.color || '#ffffff'
        };
      case 'depankiri':
        return {
          ...texturesTextureProps,
          color: depankiriColor?.color || '#ffffff'
        };
      default:
        return {};
    }
  };

  return (
    <>
      <meshStandardMaterial {...getMaterialProps()} />

      <div className="texture-uploader">
        <Form.Group className="mb-3">
          <Form.Label className="fw-bold text-dark small">
            <i className="fas fa-upload me-2"></i>
            Upload Texture Image
          </Form.Label>

          <Form.Control
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="mb-2"
            size="sm"
          />

          <Form.Text className="text-muted small">
            Supported formats: PNG, JPG, JPEG. Max size: 5MB
          </Form.Text>
        </Form.Group>

        {uploadStatus === 'success' && (
          <Alert variant="success" className="py-2 mb-3">
            <i className="fas fa-check-circle me-2"></i>
            Texture uploaded successfully!
          </Alert>
        )}

        {uploadStatus === 'error' && (
          <Alert variant="danger" className="py-2 mb-3">
            <i className="fas fa-exclamation-triangle me-2"></i>
            Please select a valid image file.
          </Alert>
        )}

        {uploadStatus === 'size-error' && (
          <Alert variant="warning" className="py-2 mb-3">
            <i className="fas fa-exclamation-triangle me-2"></i>
            File size too large. Please choose a file under 5MB.
          </Alert>
        )}

        {selectedTexture && (
          <Card className="border-0 bg-light">
            <Card.Body className="p-3">
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <i className="fas fa-image text-primary fs-4"></i>
                </div>
                <div className="grow">
                  <div className="fw-bold small text-dark">{selectedTexture.name}</div>
                  <div className="text-muted small">
                    {(selectedTexture.size / 1024).toFixed(1)} KB • {selectedTexture.type}
                  </div>
                </div>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => {
                    setSelectedTexture(null);
                    setUploadStatus('');
                  }}
                >
                  <i className="fas fa-times"></i>
                </Button>
              </div>
            </Card.Body>
          </Card>
        )}

        {!selectedTexture && (
          <Card className="border-2 border-dashed text-center p-4 bg-light">
            <Card.Body>
              <i className="fas fa-cloud-upload-alt text-muted fs-1 mb-3"></i>
              <p className="text-muted mb-2">No texture uploaded</p>
              <small className="text-muted">
                Upload an image to apply texture to the selected part
              </small>
            </Card.Body>
          </Card>
        )}
      </div>
    </>
  );
};

TextureUploader.propTypes = {
  selectedObject: PropTypes.string.isRequired,
};

export default TextureUploader;
