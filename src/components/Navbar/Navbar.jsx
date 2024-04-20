import React,{useState} from 'react' ;
import styles from "./Navbar.module.css" ;
import logo from '../../assets/logoak.png/';
import close from  '../../assets/close.png/';
import dropdown from  '../../assets/menubtn.png/';

export const Navbar = () => {
    const [menuOpen , setMenuOpen] = useState(false) ;

  return (
    <nav className={styles.navbar}>
       <img className={styles.logo} src={logo}/>
       <div className={styles.menu}>
       <img  className={styles.menuBtn} src= {menuOpen? close : dropdown } alt='menu-button' onClick={()=> setMenuOpen(!menuOpen)}/>
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
            <li>
                <a href="#about"  >About</a>
            </li>
            <li>
                <a href="#skills">Skills</a>
            </li>
            <li>
                <a href="#project">Project</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
        </ul>
       </div>
    </nav>
    
  )
}
