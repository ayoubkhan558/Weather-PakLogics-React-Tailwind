import { Route, Routes } from 'react-router-dom';
import 'notyf/notyf.min.css';

// layouts
import DefaultLayout from '@layouts/DefaultLayout';
// pages
import Home from '@pages/Home';
import Error from '@pages/Error';

// import BgImage from "/bg-1.jpg"
// import BgImage2 from "/bg-2.jpg"
import BgImage3 from "/bg-3.jpg";

import "./App.scss";

function App() {
  return (
    <div className="bg-cover bg-top bg-[#0492F5]"
      style={{ backgroundImage: `url(${BgImage3})` }}
    >
      <Routes>
        <Route path="/" element={
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        } />
        <Route path="*" element={
          <DefaultLayout>
            <Error />
          </DefaultLayout>
        } />
      </Routes>
    </div>
  );
}

export default App;
