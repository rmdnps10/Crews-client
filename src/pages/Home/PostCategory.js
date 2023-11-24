import React from 'react';
function PostCategoryData({ category }) {
  console.log(category);
  let categoryText = '';
  // 카테고리에 따라 텍스트 설정
  if (category === 'it') {
    categoryText = 'IT / 코딩';
  } else if (category === 'art') {
    categoryText = '예술 / 공연';
  } else if (category === 'game') {
    categoryText = '게임';
  } else if (category === 'vol') {
    categoryText = '봉사';
  } else if (category === 'sports') {
    categoryText = '스포츠';
  } else if (category === 'eng') {
    categoryText = '어학';
  } else if (category === 'friends') {
    categoryText = '친목';
  } else if (category === 'etc') {
    categoryText = '기타';
  } else if (category === 'jobs') {
    categoryText = '친목';
  } else {
    categoryText = 'IT / 코딩';
  }

  return <>{categoryText}</>;
}

export default PostCategoryData;
