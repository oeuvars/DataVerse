import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import WebDevdelopment from '../pages/services/WebDevelopment';
import WebResearch from '../pages/services/WebResearch';
import GraphicDesign from '../pages/services/GraphicDesign';
import DigitalMarketing from '../pages/services/DigitalMarketing';
import DataEntry from '../pages/services/DataEntry';
import DataAnalytics from '../pages/services/DataAnalytics';
import Upload from '../pages/blogs/Upload';
import BlogList from '../pages/blogs/BlogList';
import Blog from '../pages/blogs/Blog';
import Login from '../pages/blogs/Login';

const AppRoutes = () => {
  return (
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/webdev" element={<WebDevdelopment />}/>
      <Route path="/webresearch" element={<WebResearch />} />
      <Route path="/graphicdesign" element={<GraphicDesign />} />
      <Route path='/digitalmarketing' element={<DigitalMarketing />} />
      <Route path='/dataentry' element={<DataEntry />} />
      <Route path='/dataanalytics' element={<DataAnalytics />} />
      <Route path='/blogs-upload' element={<Upload />}/>
      <Route path='/blogs' element={<BlogList />} />
      <Route path="/blogs/:id" element={<Blog />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default AppRoutes
