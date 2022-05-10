import "./App.css";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Project from "./Components/Project/Project.jsx";
import Login from "./Components/Login/Login.jsx";
import AdminPanel from "./Components/Admin/AdminPanel";
import Timeline from "./Components/Admin/Timeline";
import Youtube from "./Components/Admin/Youtube";
import Loader from "./Components/Loader/Loader";
import ProjectAdd from "./Components/Admin/ProjectAdd";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser, loadUser } from "./Action/user";
function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.login);
  const { loading, user } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getUser());
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  youtubes={user.youtube}
                  timelines={user.timeline}
                  skills={user.skills}
                />
              }
            />
            <Route path="/about" element={<About  about={user.about} />} />
            <Route path="/projects" element={<Project projects={user.projects}/>} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/Account"
              element={isAuthenticated ? <AdminPanel /> : <Login />}
            />
            <Route
              path="/admin/timeline"
              element={isAuthenticated ? <Timeline /> : <Login />}
            />
            <Route
              path="/admin/youtube"
              element={isAuthenticated ? <Youtube /> : <Login />}
            />

            <Route
              path="/admin/project"
              element={isAuthenticated ? <ProjectAdd /> : <Login />}
            />
          </Routes>
          <Footer />{" "}
        </>
      )}
    </Router>
  );
}

export default App;
