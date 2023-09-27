import { Route, Routes } from 'react-router-dom';
import { Navigation } from 'components/molecules';
import { Hello, MakeForm, MakePost } from 'pages';

const Router = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/makeform" element={<MakeForm />} />
        <Route path="/makepost" element={<MakePost/>}/>
      </Routes>
    </>
  );
};

export default Router;
