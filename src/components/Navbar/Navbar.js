import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const NavItem = ({ href, children }) => {
  const router = useRouter();
  const [active, setActive] = useState(router.pathname);

  const updateRoute = (url) => {
    setActive(url); };

  useEffect(() => {
    router.events.on('routeChangeStart', updateRoute);
    });
  return (
    <li className={active === href ? styles.active : styles.li}>
      <Link href={href} passHref>
        <a className={active === href ? styles.active : styles.li}>
          {children}
        </a>
      </Link>
    </li>
  );
}

const Navbar = () => {
  return (
    <header className={styles.nav}>
      <ul className={styles.navbar}>
        <NavItem href="/">Home</NavItem>
        <NavItem href="/interactivemap">Interactive Map</NavItem>
        <NavItem href="/farmmap">Janky Map</NavItem>
      </ul>
    </header>
  );
}

export default Navbar;