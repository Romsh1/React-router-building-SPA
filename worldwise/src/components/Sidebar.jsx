import AppNav from './AppNav';
import Logo from './Logo';
// import Map from '../components/Map';
import styles from './Sidebar.module.css';
// import Footer from './Footer';

function Sidebar() {
    return <div className={styles.sidebar}>
        <Logo />
        <AppNav />
        {/* <Map /> */}
        
        <p>List of cities</p>
        {/* <Footer />  */}
        <footer className={styles.footer}>
            <p className={styles.copyright}>
                &copy; Copyright {new Date().getFullYear()} by
                Worldwise Inc.
            </p>
        </footer>
        
        </div>;
}

export default Sidebar;