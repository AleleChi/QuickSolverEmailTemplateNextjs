import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function EmailVerification() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Email Verification</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={styles.logoWrapper}>
        <a href="https://quicksolver.app/">
          <img src="/assets/logo.png" alt="Logo" className={styles.centeredLogo} />
        </a>
      </div>
      <div className={styles.header}>
        <div className={styles.logoContainer}>
          <h1 className={styles.logoLeft}>QuickSolver</h1>
          <p className={styles.tagline}>An all-in-one scientific calculator app</p>
        </div>
        <img src="/assets/images.png" alt="Header Image" className={styles.headerImage} />
      </div>
      <div className={styles.content}>
        <h1>Hi Alelechi,</h1>
        <p>Here is your One Time Password (OTP).</p>
        <p>
          Please enter this code to verify your email address for QuickSolver
        </p>
        <div className={styles.flexBox}>
          <div className={styles.box}>5</div>
          <div className={styles.box}>7</div>
          <div className={styles.box}>2</div>
          <div className={styles.box}>0</div>
        </div>
        <p>OTP will expire in the next <strong>5 Mins</strong></p>
        <p>
          Best Regards,
          <span className={styles.message}><br /><br />QuickSolver Team</span>
        </p>
      </div>
      <div className={styles.footer}>
        <div className={styles.socialIcons}>
          <a href="https://www.linkedin.com/company/quicksolver-app/" target="_blank">
            <img src="/assets/mdi_linkedin.svg" alt="LinkedIn" />
          </a>
          <a href="https://x.com/quicksolverApp" target="_blank">
            <img src="/assets/x.svg" alt="Twitter" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61560741650258&_rdc=1&_rdr" target="_blank">
            <img src="/assets/la_facebook.svg" alt="Facebook" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61560741650258&_rdc=1&_rdr" target="_blank">
            <img src="/assets/instgram.svg" alt="Instagram" />
          </a>
          <a href="https://www.tiktok.com/@quicksolver_?lang=en" target="_blank">
            <img src="/assets/tiktok.svg" alt="TikTok" />
          </a>
        </div>
        <hr />
        <p className={styles.allRight}>&copy; 2024 QUICKSOLVER. All rights reserved.</p>
        <p className={styles.footerP}>
          You are receiving this mail because you registered to join the
          QUICKSOLVER platform as a user.
        </p>
        <p className={styles.privacyPolicy}>
          <a href="#">Privacy policy</a> &middot;
          <a href="#">Terms of service</a> &middot; <a href="#">Unsubscribe</a>
        </p>
      </div>
    </div>
  );
}
