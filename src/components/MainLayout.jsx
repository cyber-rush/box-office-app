import Navs from './Navs';
import { Outlet } from 'react-router-dom';
const MainLayout = () => {
  return (
    <>
      {' '}
      <h1>Box Office</h1>
      <Navs />
      <Outlet />
    </>
  );
};

export default MainLayout;
