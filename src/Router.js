import { Route, Routes } from 'react-router-dom';
import { Navigation } from 'components/molecules';
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

const Router = () => {
  return (
    <>
      <Navigation />
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
          <Route path="/hot" element={<MainCrewListSection />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default Router;
