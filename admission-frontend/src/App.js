import "./index.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/user/Login";
import { States, useStates } from "./services/States";
import ApplicationstatusDashboard from "./pages/user/ApplicationstatusDashboard";
import Home from "./pages/user/Home";
import Email from "./assets/components/Email";
import TermsCondition from "./pages/user/TermsCondition";
import PrivacyPolicy from "./pages/user/Privacy";
import AdmissionHome from "./pages/user/AdmissionHome";
import EditUser from "./pages/user/UserUpdate";
import Profile from "./pages/user/Profile";
import Dashboard from "./pages/admin/Dashboard";
import Users from "./pages/admin/Users";
import Report from "./pages/admin/Report";
import Payment from "./pages/user/Payment";
import Register from "./pages/user/Application";
import AllApplications from "./pages/admin/AllApplications";
import ProfileUpdate from "./pages/user/ProfileUpdate";
import { UserAuth } from "./services/UserAuth";
import { AdminAuth } from "./services/AdminAuth";
import InterviewScheduler from "./pages/admin/InterviewSchedule";
import ViewApplicaion from "./pages/admin/ViewApplication";
import ChatComponent from "./pages/user/ChatComponent";
import UpdateApplication from "./pages/admin/UpdateApplication";
import FeedBackForm from "./pages/user/FeedBackForm";

function App() {
  
  const role=localStorage.getItem('role');

  return (
    <div>
      <>
        <States>
        <Routes>
                  <Route path="/" exact element={<Login />}></Route>
                {/* <Route path="*" element={<Navigate to="/login" />} /> */}

                  <Route element={<UserAuth/>}>
                    <Route path="/home" exact element={<Home />}></Route>
                    <Route path="/privacy" exact element={<PrivacyPolicy />}></Route>
                    <Route path="/terms" exact element={<TermsCondition />}></Route>
                    <Route path="/car" exact element={<Email />}></Route><Route
                    path="/appstatussuccess"
                    exact
                    element={<ApplicationstatusDashboard />} />
                    <Route path="/admissionhome" exact element={<AdmissionHome />} />
                    <Route path="/profile" exact element={<Profile />} />
                    <Route path="/editprofile" exact element={<EditUser />} />
                    <Route path="/payment" exact element={<Payment />} />
                    <Route path="/application" exact element={<Register />} />
                    <Route path="/profileupdate" exact element={<ProfileUpdate />} />
                    <Route path="/chat" exact element={<ChatComponent />} />
                    <Route path="/feedback" exact element={<FeedBackForm />} />
                  </Route>

                <Route element={<AdminAuth/>}>
                  <Route path="/admin/dashboard" element={<Dashboard />} />
                  <Route path="/admin/users" element={<Users />} />
                  <Route path="/admin/reports" element={<Report />} />
                  <Route path="/admin/application" element={<AllApplications />}/>
                  <Route path="/admin/interview/:aid" element={<InterviewScheduler />}/>
                  <Route path="/admin/viewapplication/:aid" element={<ViewApplicaion />}/>
                  <Route path="/admin/chat" exact element={<ChatComponent />} />
                  <Route path="/admin/updateapplication/:aid" exact element={<UpdateApplication />} />
                </Route>
           
        </Routes>
        </States>
      </>
    </div>
  );
}

export default App;


