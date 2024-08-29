import styles from './HeroStyles.module.css'
import heroImg from '../../assets/HeroImg.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'

import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'

import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'

import CV from '../../assets/OmkarG.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
    const {theme, toggleTheme} = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;




  return <section id='hero' className={styles.container}>
    <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profile Image" />
        <img className={styles.colorMode} src={themeIcon} alt="Color Mode Icon" onClick={toggleTheme}/>
    </div>
    <div className={styles.info}>
        <h1>OMKAR <br /> GHADIGAONAR</h1>
        <h2>Full-Stack Developer</h2>
        <span>
            <a href="https://www.linkedin.com/in/omkar-g-9bb406248/" target='_blank'>
            <img src={linkedinIcon} alt="Linkedin Icon" />
            </a>
            <a href="https://github.com/Lucifer-Aspire-A315" target='_blank'>
            <img src={githubIcon} alt="Github Icon" />
            </a>
             <a href="https://x.com/omkarom183" target='_blank'>
            <img src={twitterIcon} alt="Twitter Icon" />
            </a>
        </span>
        <p className={styles.description}>With a passion of developing App's and website's in JavaScript and Flutter.</p>
        <a href={CV} target='_blank'>
            <button className='hover' >Resume</button>
        </a>
    </div>
  </section>
}

export default Hero