import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import styles from './footer.module.css'
import { Link } from "react-router-dom";




const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.logoFooterContainer}>
        <span>Mom Baby And Home</span>
      </div>
      <div className={styles.madeFooterContainer}>Creado por </div>
      <div className={styles.networkContainer}>Redes</div>
    </footer>
  )

};

export default Footer;

