import templeLogo from '/temple.svg'
import { CartWidget } from '../CartWidget/CartWidget'
import styles from './navbar.module.css'

export const NavBar = () => {
  return (
    <>
    <header>
        <nav className={`navbar-expand-md bg-body-tertiary ${styles.father}`}>
            <div className={`container-fluid ${styles.header}`}>
                <a className={`navbar-brand ${styles.logo}`} href="./index.html"><img src={templeLogo} alt="Logo" />{CartWidget}</a>
                <button className={`navbar-toggler ${styles.button}`} type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`nav collapse navbar-collapse ${styles.list}`} id="navbarNavAltMarkup">
                    <div className={`navbar-nav ${styles.alignCenter}`}>
<CartWidget/>
                        <a className={`nav-link ${styles.linkNav}`} href="#">Burguers</a>
                        <a className={`nav-link ${styles.linkNav}`} href="#">Cervezas</a>
                        <a className={`nav-link ${styles.linkNav}`} href="#">Morfi</a>
                        <a className={`nav-link ${styles.linkNav}`} href="#">Tragos</a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    </>
  )
}
