import { Route, Routes } from 'react-router-dom';
import { Navigation } from 'components/molecules';
import { Hello, MakeForm, MakePost, Login, SignIn, PostDetail } from 'pages';

const Router = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/makeform" element={<MakeForm />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/makepost" element={<MakePost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/postdetail" element={<PostDetail />} />
      </Routes>
    </>
  );
};

export default Router;
