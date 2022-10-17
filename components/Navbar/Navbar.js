import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav>
        <menu>
          <Link href="/">
            <a>Menu</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
        </menu>
      </nav>
    </div>
  );
};

export default Navbar;
