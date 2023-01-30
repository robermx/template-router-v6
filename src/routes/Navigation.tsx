import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import logo from '../assets/react.svg';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav className="py px">
          <img src={logo} alt="React Logo" width="100%" className="pt" />
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/users">User</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="about" element={<h1>About Page</h1>} />
          <Route path="users" element={<h1>Users Page</h1>} />
          <Route path="/" element={<h1>Home Page</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
