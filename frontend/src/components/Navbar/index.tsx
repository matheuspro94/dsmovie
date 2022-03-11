import {ReactComponent as GithubIcon} from 'assets/img/github.svg';
import './styles.css';

function Navbar() {
  return (
    <header>
     <nav className="container">
       <div className="dsmovie-nav-content">
        <h1>DSMovie</h1>
        <p className="dsmovie-name">Matheus Proença</p>
        <a href="https://github.com/mroenca40" target="_blank" rel="noreferrer">
          <div className="dsmovie-contact-container">
            <GithubIcon />
            <p className="dsmovie-contact-link">/mroenca40</p>
          </div>
        </a>
       </div>
     </nav>
   </header>
  )
}

export default Navbar;
