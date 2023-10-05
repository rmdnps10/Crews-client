import React, { useRef, useState } from 'react';
import styled from 'styled-components';

function ImageSection() {
  const [imagePreviews, setImagePreviews] = useState(Array(8).fill(null));
  const imageUploadRealButtonRef = useRef();

  const handleImageClick = () => {
    imageUploadRealButtonRef.current.click();
  };

  const getImageFiles = (e) => {
    const files = e.currentTarget.files;
    console.log(files);
    if (files.length > 8) {
      alert('이미지는 최대 8개까지 업로드 가능합니다.');
      return;
    }

    const newImagePreviews = Array(8).fill(null);
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = (event) => {
        newImagePreviews[i] = event.target.result;
        setImagePreviews([...newImagePreviews]);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <ImagePreviewList>
        {imagePreviews.map((preview, index) => (
          <ImagePreview key={index} onClick={handleImageClick}>
            {preview ? (
              <img src={preview} alt={`Preview ${index}`} />
            ) : (
              'Upload Image'
            )}
          </ImagePreview>
        ))}
      </ImagePreviewList>
      <ImageUploadButton
        type="file"
        multiple="multiple"
        accept="image/*"
        ref={imageUploadRealButtonRef}
        onChange={getImageFiles}
      />
    </>
  );
}

const ImagePreviewList = styled.div`
  flex-wrap: wrap;
  display: flex;
  gap: 10px;
`;

const ImagePreview = styled.div`
  width: 200px;
  height: 200px;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const ImageUploadButton = styled.input`
  display: none;
`;

export default ImageSection;
