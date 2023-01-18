import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard/index";
import { ProtectedRoute } from "./Layouts/ProtectedRoute";
import { Users } from "./pages/Users";
import ViewUserDetails from "./pages/ViewUserDetails/index";
import GeneralUserDetails from "./components/UserDetails/GeneralDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Login />} />
      <Route path="signin" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="users" element={<Users />} />
          <Route element={<ViewUserDetails />}>
            <Route path="users/general" element={<GeneralUserDetails />} />
          </Route>
        </Route>
      </Route>

      {/* <Route path="*" element={<NotFound />} /> */}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
