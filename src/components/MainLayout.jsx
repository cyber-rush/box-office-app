import Navs from './Navs';
import { Outlet } from 'react-router-dom';
import AppTitle from './shows/AppTitle';
const MainLayout = () => {
  return (
    <>
      <AppTitle
        title="Box Office"
        subtitle="Are you looking for a movie or an actor?"
      />
      <Navs />
      <Outlet />
    </>
  );
};

export default MainLayout;
