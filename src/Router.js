import { Route, Routes } from 'react-router-dom';
import { Navigation } from 'components/molecules';
<<<<<<< HEAD
import { Hello, MakeForm, MakePost, Login, SignIn, PostDetail } from 'pages';
=======
import {
  MakeForm,
  MakePost,
  Login,
  SignIn,
  Evaluate,
  EvaluateDetail,
  MyPage,
} from 'pages';
import { Home } from 'pages/Home';
import MainCrewListSection from 'pages/Home/MainCrewListSection';
import MainPopularSection from 'pages/Home/MainPopularSection';
import MainHowToUseSection from 'pages/Home/MainHowToUseSection';
import MainCollaborateSection from 'pages/Home/MainCollaborateSection';
>>>>>>> 7df8c8b5c0e646382bbed2ef555bb456550f2b09

const Router = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/makeform" element={<MakeForm />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/makepost" element={<MakePost />} />
        <Route path="/login" element={<Login />} />
<<<<<<< HEAD
        <Route path="/postdetail" element={<PostDetail />} />
=======
        <Route path="/evaluate" element={<Evaluate />} />
        <Route path="/evaluatedetail" element={<EvaluateDetail />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/" element={<Home />}>
          <Route path="" element={<MainCrewListSection />}></Route>
          <Route path="/hot" element={<MainPopularSection />}></Route>
          <Route path="/how" element={<MainHowToUseSection />}></Route>
          <Route path="/crews" element={<MainCollaborateSection />}></Route>
        </Route>
>>>>>>> 7df8c8b5c0e646382bbed2ef555bb456550f2b09
      </Routes>
    </>
  );
};

export default Router;
