import { Route, Routes } from 'react-router-dom';
import { Navigation } from 'components/molecules';
import { Hello, MakeForm, MakePost, Login } from 'pages';

const Router = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/makeform" element={<MakeForm />} />
        <Route path="/makepost" element={<MakePost/>}/>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Router;
