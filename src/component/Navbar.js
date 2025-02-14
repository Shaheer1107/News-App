import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <div>
      <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/general">News App</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><NavLink className="nav-link" to="/business" activeclasscame="active">Business</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/entertainment" activeclasscame="active">Entertainment</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/health" activeclasscame="active">Health</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/science" activeclasscame="active">Science</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/sports" activeclasscame="active">Sports</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/technology" activeclasscame="active">Technology</NavLink></li>
            </ul>
            <div className="form-check form-switch mx-1 my-1">
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                Enable {props.mode === 'light' ? 'Dark' : 'Light'} Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
