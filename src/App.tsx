import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screen/Home';
import About from './screen/About';
import Sidebar from './components/Sidebar';

function App() {

  return (
    <BrowserRouter>
      <div id="Main" className="flex max-w-screen">
        {/* <!-- Sidebar --> */}
          <Sidebar />
        {/* <!-- end Sidebar --> */}
        {/* <!-- Main Content --> */}
          <div id="content" className="min-w-2/3 lg:min-w-5/6 min-h-screen" style={{backgroundColor:' #fdfdfd'}}>
              <div className="flex justify-between shadow-xl p-2 bg-stone-100">
                <h2>Home</h2>
                <ul>
                  <li>Profile</li>
                </ul>
              </div>
              <div className="p-4">
                <Routes> 
                  <Route path="/" element={<Home />} />
                  <Route path="/About" element={<About />} />
                </Routes>
              </div>
          </div>
        {/* <!-- End Main Content --> */}
      </div>
    </BrowserRouter>
  )
}

export default App
