import React from 'react'
import { Link } from 'react-router-dom'
import style from "./index.module.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Navbar = () => {
  return (
    <div>
        <header className={style.header}>
            <div className={style.topnav}>
<div className={style.social}>
<TwitterIcon style={{fontSize:"13px",marginLeft:"10px"}}/> <FacebookIcon style={{fontSize:"13px",marginLeft:"10px"}}/> <InstagramIcon style={{fontSize:"13px",marginLeft:"10px"}}/> <LinkedInIcon style={{fontSize:"13px",marginLeft:"10px"}}/>
</div>
<div className={style.navlog}>
    <a className={style.sponsor} href="#">Sponsor</a>
    <a className={style.login} href="#">Login</a>
</div>
            </div>
            <nav className={style.nav}>
                <h1>ADOPTED</h1>
                <ul className={style.ul}>
                    <li className={style.li}><Link className={style.link} to="/">Home</Link></li>
                    <li className={style.li}><Link className={style.link} to="/add">Add</Link></li>
                    <li className={style.li}><Link className={style.link}>Success Stories</Link></li>
                    <li className={style.li}><Link className={style.link}>About</Link></li>
                    <li className={style.li}><Link className={style.link}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Navbar