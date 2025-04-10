import { Outlet } from 'react-router-dom';

function Index() {
  return (
    <>
      <div>layout</div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Index;
