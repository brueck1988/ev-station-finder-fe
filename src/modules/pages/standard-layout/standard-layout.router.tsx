import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StandardLayout from 'modules/pages/standard-layout/standard-layout.component';
import HomePage from 'modules/pages/home.page';

// The router which configures browser routes to certain pages/components
// Component elements are only shown when route matches
// React Router Tutorial: https://reactrouter.com/docs/en/v6/getting-started/tutorial
export const StandardLayoutRouter = () => (
  <BrowserRouter>
    <Routes>
      {/* A parent route (e.g. StandardLayout) renders child routes (e.g. HomePage) 
      as children via the <Outlet /> element */}
      <Route path="/" element={<StandardLayout />}>
        {/* Index routes will be displayed when their parent's route path matches */}
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default StandardLayoutRouter;