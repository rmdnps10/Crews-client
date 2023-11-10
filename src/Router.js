import { Route, Routes } from 'react-router-dom';
import { Navigation } from 'components/molecules';
import { MakeForm, MakePost, Login, SignIn, Evalute } from 'pages';

const Router = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/makeform" element={<MakeForm />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/makepost" element={<MakePost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/evaluate" element={<Evalute />}></Route>
      </Routes>
    </>
  );
};

export default Router;
