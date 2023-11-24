import { Route, Routes } from 'react-router-dom';
import { Navigation } from 'components/molecules';
import { Header } from 'components/molecules';
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

const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/makeform" element={<MakeForm />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/makepost" element={<MakePost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/evaluate" element={<Evaluate />} />
        <Route path="/evaluatedetail" element={<EvaluateDetail />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/" element={<Home />}>
          <Route path="" element={<MainCrewListSection />}></Route>
          <Route path="/hot" element={<MainPopularSection />}></Route>
          <Route path="/how" element={<MainHowToUseSection />}></Route>
          <Route path="/crews" element={<MainCollaborateSection />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default Router;
