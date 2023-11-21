import { Route, Routes } from 'react-router-dom';
import { Header } from 'components/molecules';

import { MakeForm, MakePost, Login, SignIn } from 'pages';

const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/makeform" element={<MakeForm />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/makepost" element={<MakePost />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Router;
