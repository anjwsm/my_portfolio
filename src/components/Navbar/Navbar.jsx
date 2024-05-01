import React,{useState} from 'react' ;
import styles from "./Navbar.module.css" ;
import logo from '../../assets/logoak.png/';
import close from  '../../assets/close.png/';
import dropdown from  '../../assets/menubtn.png/';

export const Navbar = () => {
    const [menuOpen , setMenuOpen] = useState(false) ;
    const [menu, setMenu] = useState(" ");

  return (
    <nav className={styles.navbar}>
       <img className={styles.logo} src={logo}/>
       <div className={styles.menu}>
       <img  className={styles.menuBtn} src= {menuOpen? close : dropdown } alt='menu-button' onClick={()=> setMenuOpen(!menuOpen)}/>
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
            <li>
                <a href="#about" onClick={() => setMenu('About')} className={menu === 'About' ?`${styles.active}` : ''}>About</a>
            </li>
            <li>
                <a href="#skills"  onClick={() => setMenu('Skills')} className={menu === 'Skills' ? `${styles.active}` : ''}>Skills</a>
            </li>
            <li>
                <a href="#project"   onClick={() => setMenu('Projects')} className={menu === 'Projects' ? `${styles.active}` : ''}>Projects</a>
            </li>
            <li>
                <a href="#contact"  onClick={() => setMenu('Contact')} className={menu === 'Contact' ? `${styles.active}` : ''}>Contact</a>
            </li>
        </ul>
       </div>
    </nav>
    
  )
}
