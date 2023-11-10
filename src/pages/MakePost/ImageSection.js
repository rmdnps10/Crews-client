import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import deleteIcon from './deleteButton.svg';
import uploadIcon from './uploadButton.svg';
// 이미지 미리보기를 포함하여 이미지를 업로드하는 컴포넌트
function ImageSection({ onImageFieldChange }) {
  // 이미지 리스트를 useState로 관리

  const [imagePreviews, setImagePreviews] = useState([]);

  const getImageFiles = async (e) => {
    const files = e.currentTarget.files;
    const newImagePreviews = [];
    const loadFilePromises = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      const loadFilePromise = new Promise((resolve) => {
        reader.onload = (event) => {
          newImagePreviews.push(event.target.result);
          resolve(); 
        };
        reader.readAsDataURL(file);
      });

      loadFilePromises.push(loadFilePromise);
    }
    await Promise.all(loadFilePromises);

    if (newImagePreviews.length + imagePreviews.length > 8) {
      alert('이미지는 최대 8개까지 업로드 가능합니다.');
      console.log(newImagePreviews);
      return;
    }

    console.log(newImagePreviews);
    setImagePreviews([...imagePreviews, ...newImagePreviews]);
    onImageFieldChange([...imagePreviews, ...newImagePreviews]);
  };

  // X누를시 해당 이미지 삭제
  const deleteImageFile = (indexToDelete) => {
    const updatedImagePreviews = [...imagePreviews];
    updatedImagePreviews.splice(indexToDelete, 1);
    setImagePreviews(updatedImagePreviews);
    onImageFieldChange(imagePreviews);
  };

  return (
    <>
      <ImagePreviewList>
        <ImageUploadItem>
          <VirtualImageUploadBox htmlFor="uploadButton">
            <ImageUploadBox
              type="file"
              id="uploadButton"
              multiple="multiple"
              accept="image/*"
              onChange={getImageFiles}
            ></ImageUploadBox>
            <ImageUploadCaption>
              <ImageUploadImage src={uploadIcon}></ImageUploadImage>
              <ImageUploadText>이미지 업로드</ImageUploadText>
            </ImageUploadCaption>
          </VirtualImageUploadBox>
        </ImageUploadItem>
        {imagePreviews
          ? imagePreviews.map((preview, index) =>
              index === 0 ? (
                <ImageFirstPreview key={index}>
                  <ImageFirstCaption>대표</ImageFirstCaption>
                  <img src={preview} alt={`Preview ${index}`} />
                  <ImageDeleteIcon
                    src={deleteIcon}
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteImageFile(index);
                    }}
                  />
                </ImageFirstPreview>
              ) : (
                <ImagePreview key={index}>
                  <img src={preview} alt={`Preview ${index}`} />
                  <ImageDeleteIcon
                    src={deleteIcon}
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteImageFile(index);
                    }}
                  />
                </ImagePreview>
              )
            )
          : ''}
      </ImagePreviewList>
    </>
  );
}

const ImagePreviewList = styled.div`
  flex-wrap: wrap;
  display: flex;
  gap: 14px;
`;

const ImageDeleteIcon = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`;

const ImageFirstCaption = styled.div`
  border-radius: 10px;
  background: var(--blue-b-05-m, #3172ea);
  position: absolute;
  top: 8px;
  left: 8px;
  display: flex;
  width: 46px;
  height: 30px;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.4px;
`;
const ImageFirstPreview = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid var(--blue-b-05-m, #3172ea);
  overflow: hidden;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const ImagePreview = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 10px;
  border-radius: 10px;
  border: 1.4px solid var(--gray-g-03, #ccc);
  background: #fff;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;
const ImageUploadItem = styled.div`
  position: relative;
`;

const ImageUploadCaption = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 41px;
  right: 33px;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const ImageUploadImage = styled.img`
  width: 34px;
  height: 34px;
`;

const ImageUploadText = styled.span`
  color: var(--gray-g-04, #b3b3b3);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.32px;
  text-decoration-line: underline;
`;

const VirtualImageUploadBox = styled.label`
  width: 140px;
  height: 140px;
  border-radius: 10px;
  display: block;
  background: var(--gray-g-01, #f2f2f2);
  cursor: pointer;
`;

const ImageUploadBox = styled.input`
  display: none;
`;

export default ImageSection;
