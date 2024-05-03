import { useState } from "react";

/* eslint-disable react/prop-types */
const Nav = ({ image_url }) => {
  const [dropdown, setDropdown] = useState(false);
  const [signedIn, setSignIn] = useState(false);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  const handleClick = () => {
    setSignIn((prevSignin) => !prevSignin);
  };

  return (
    <nav>
      <h3>const(--blog)</h3>
      <div>
        {signedIn ? (
          <div>
            <a href="#" onMouseEnter={onMouseEnter}>
              <img src={image_url} alt="" />
              <div className="nav-links" onMouseLeave={onMouseLeave}>
                <ul>
                  {dropdown && (
                    <>
                      <li>Home</li>
                      <li>Blogs</li>
                      <li>Contact</li>
                      <li onClick={handleClick}>Log-out</li>
                    </>
                  )}
                </ul>
              </div>
            </a>
          </div>
        ) : (
          <p onClick={handleClick}>Sign In</p>
        )}
      </div>
    </nav>
  );
};

export default Nav;
