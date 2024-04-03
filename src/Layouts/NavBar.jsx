import { Fragment } from 'react'
import { Link } from 'react-router-dom';

import logo from '/logo-dark.png';
import logoLight from '/logo-light.png';

function NavBar() {

  return (
    <nav
      className="container-main flex justify-center pt-3"
    >
      <Link to="/">
        <img src={logoLight} alt="" className="h-12 lg:h-20 max-w-full" />
      </Link>

    </nav>
  );
}

export default NavBar;
