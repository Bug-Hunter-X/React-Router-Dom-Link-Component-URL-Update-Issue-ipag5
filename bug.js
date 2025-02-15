import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* other routes */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>This is the home page.</p>
      <Link to="/about">Go to About</Link> 
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page.</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
}

//The bug is that the Link component is not correctly updating the URL in the browser.  It seems to be ignoring the changes and keeping the same url.