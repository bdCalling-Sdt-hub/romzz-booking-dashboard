import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import Notification from "./Pages/Dashboard/Notification";
import Otp from "./Pages/Auth/Otp";
import Login from "./Pages/Auth/Login";
import UpdatePassword from "./Pages/Auth/UpdatePassword";
import NotFound from "./404";
import PrivateRoute from "./routes/PrivateRoute";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import PostRequest from "./Pages/Dashboard/PostRequest";
import AdminProfile from "./Pages/Dashboard/AdminProfile";
import OurStory from "./Pages/Dashboard/Settings/OurStory";
import Terms from "./Pages/Dashboard/Settings/Terms";
import FAQ from "./Pages/Dashboard/Settings/FAQ";
import EditSlider from "./Pages/Dashboard/Settings/EditSlider";
import Users from "./Pages/Dashboard/Users";
import Properties from "./Pages/Dashboard/Properties";
import Transactions from "./Pages/Dashboard/Transactions";
import GetInTouch from "./Pages/Dashboard/Settings/GetInTouch";
import News from "./Pages/Dashboard/Settings/News";
import WebsiteReview from "./Pages/Dashboard/Settings/WebsiteReview";
import Support from "./Pages/Dashboard/Support";
import Facilities from "./Pages/Dashboard/Settings/Facilities";
import Packages from "./Pages/Dashboard/Packages";
import Subscribers from "./Pages/Dashboard/Subscribers"; 
import User from "./Pages/Dashboard/user";


function App() {
  return (
    <>
      <div className="maincontainer"> 
       
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route path="/" element={<DashboardHome />} />
              <Route path="/post-request" element={<PostRequest />} />
              <Route path="/users" element={<Users />} />
              <Route path="/properties/:id" element={<Properties />} />
              <Route path="/user/:id" element={<User/>} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/setting" element={<OurStory />} />
              <Route path="/make-admin" element={<MakeAdmin />} />
              <Route path="/support" element={<Support />} />
              <Route path="/subscribers" element={<Subscribers />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/admin-profile" element={<AdminProfile />} />

              <Route path="/our-story" element={<OurStory />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/get-in-touch" element={<GetInTouch />} />
              <Route path="/edit-slider" element={<EditSlider />} />
      
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/news" element={<News />} />
              <Route path="/website-review" element={<WebsiteReview />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/otp" element={<Otp />} />
            <Route path="/update-password" element={<UpdatePassword />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
     
    
      </div>
    </>
  );
}

export default App;
