import { Route, Routes } from 'react-router-dom';
import { Navigation } from 'components/molecules';
import {
  MakeForm,
  MakePost,
  Login,
  SignIn,
  Evaluate,
  EvaluateDetail,
} from 'pages';

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
      </Routes>
    </>
  );
};

export default Router;
