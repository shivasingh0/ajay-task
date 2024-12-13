import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import Blog from "./pages/Blog";
import Contact from "./components/Contact";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Author from "./components/Author";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/blog-post" element={<BlogPost/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy/>} />
        <Route path="/t" element={<Author/>} />
      </Routes>
    </Layout>
  );
}

export default App;
