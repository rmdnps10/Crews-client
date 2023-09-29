import { Route, Routes } from 'react-router-dom';
import { Navigation } from 'components/molecules';
import { Hello, MakeForm } from 'pages';
import { SignIn } from 'pages/SignIn';

const Router = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/makeform" element={<MakeForm />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
};

export default Router;
