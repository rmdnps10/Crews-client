// 페이지별로 요청할 URL

//홈페이지

export const homePageRequest = {
  normalPostInfo: 'home/normal-get-main/',
  specificPostInfo: 'home/search-post/',
  likePost: '/post/like-post/',
};

// 마이페이지
export const myPageRequest = {
  // 액세스 토큰의 유형에 따라서 get요청을 선택적으로 보내기 (normal user/ operoator user)?
  normalUserInfo: 'mypage/get-normal-user-info',
  operatorUserInfo: 'mypage/get-operator-user-info/',
  appliedList: 'mypage/get-applied-list/',
  likedPost: 'mypage/get-liked-post/',
  crewsPost: 'mypage/get-crews-posts/',
  allInOne: 'mypage/get-all-mypage-info/',
};
// 모집공고페이지
export const applyPostPageRequest = {
  applyPost: 'apply/post/',
};

//로그인 페이지
export const loginRequest = {
  loginPost: 'accounts/login/',
};
