import React, { useState } from 'react';
import '../styles/ImageUploader.scss';

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [error, setError] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('Only image files are allowed.');
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setError('Image must be less than 2MB.');
      return;
    }

    setError('');
    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  return (
    <div className="uploaderContainer">
      <h2>Upload Image</h2>
      <input
        type="file"
        id="image-upload"
        onChange={handleImageChange}
        accept="image/*"
      />
      <label htmlFor="image-upload">Choose Image</label>

      {error && <div className="error">{error}</div>}

      {previewUrl && (
        <div className="preview">
          <img src={previewUrl} alt="Preview" />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
