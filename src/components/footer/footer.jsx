import styles from './footer.module.css'
import footer_logo from '../../img/footer_logo.png'

const Footer = () => {
    
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer_inner}>
                    <img className={styles.photo} src={footer_logo} alt="" />
                    <div className={styles.text}>
                        <p className={styles.inner_text}>г. Москва, Цветной б-р, 40 <br /> +7 495 771 21 11 <br /> info@skan.ru</p>
                        <p className={styles.inner_text}>Copyright. 2022</p>
                    </div>
                </div>
            </div>
        
        </footer>
    );
}

export default Footer;