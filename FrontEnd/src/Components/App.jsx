import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar";
import Register from "./Login/Register";
import Account from "./Login/Account";
import TeacherHome from "./TeacherHome";
import StudentHome from "./StudentHome";
import axios from "axios";
import Create from "../Components/Create-Component/Create";
import Read from "../Components/Read-Component/Read";
import Footer from "../Components/Home-Component/Footer";
import AddReview from "../Components/Home-Component/AddReview";
import About from "../Components/Home-Component/About";
import Upload from "../Components/Upload-Component/Upload";
import ContactUs from "../Components/Home-Component/ContactUs";
import Chatbot from "../Components/Chatbot-Component/Chatbot";
import OurTeam from "../Components/Home-Component/OurTeam";
import LearnMore from "../Components/Home-Component/LearnMore";

function App() {
  const [isStudent, setIsstudent] = useState(true);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setIsstudent(localStorage.getItem("isStudent")|| "true");
  }, [token, localStorage]);
  let flag= isStudent.toString().toLowerCase();
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Register" exact element={<Register />} />
        <Route
          path="/"
          exact
          element={<HomePage token={token} isStudent={isStudent} />}
        />
        <Route path="/create" element={(token&&(flag=="false"))?<Create />:<Register />} />
        <Route path="/read" element={(token)?<Read />:<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/upload" element={(token&&(flag=="false"))?<Upload />:<Register />} />
        <Route path="/chatbot" element={(token&&(flag=="true"))?<Chatbot />:<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/account" element={token?<Account />:null} />
        <Route path="/learnmore" element={<LearnMore />} />
        <Route path="/teacher" element={(token&&(flag=="false"))?<TeacherHome />:<Register />} />
        <Route path="/student" element={(token&&(flag=="true"))?<StudentHome />:<Register />} />
        <Route path="/review" element={token?<AddReview />:<Register />} />
        <Route path="/soon" element={<h1>Will be updated soon</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
}

const HomePage = (props) => {
  if (props.token) {
    if (props.isStudent.toString().toLowerCase()==="true") {
      return <StudentHome />;
    } else {
      return <TeacherHome />;
    }
  } else {
    return <Register />;
  }
};

export default App;
