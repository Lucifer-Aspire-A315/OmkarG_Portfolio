import styles from './SkillsStyles.module.css'
import CheckMarkIconDark from '../../assets/checkmark-dark.svg'
import CheckMarkIconLight from '../../assets/checkmark-light.svg'
import SkillList from '../../common/SkillList'
import { useTheme } from '../../common/ThemeContext'

function Skills() {
    const { theme } = useTheme();
  const CheckMarkIcon = theme === 'light' ? CheckMarkIconLight : CheckMarkIconDark;
  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={CheckMarkIcon} skill={'HTML'}/>
            <SkillList src={CheckMarkIcon} skill={'CSS'}/>
            <SkillList src={CheckMarkIcon} skill={'JavaScript'}/>
            <SkillList src={CheckMarkIcon} skill={'TypeScript'}/>
            <SkillList src={CheckMarkIcon} skill={'Java'}/>
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={CheckMarkIcon} skill={'React'}/>
            <SkillList src={CheckMarkIcon} skill={'Angular'}/>
            <SkillList src={CheckMarkIcon} skill={'Next.js'}/>
            <SkillList src={CheckMarkIcon} skill={'Node'}/>
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={CheckMarkIcon} skill={'Flutter'}/>
            <SkillList src={CheckMarkIcon} skill={'Dart'}/>
            <SkillList src={CheckMarkIcon} skill={'Firebase'}/>
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={CheckMarkIcon} skill={'Express'}/>
            <SkillList src={CheckMarkIcon} skill={'Redux'}/>
            <SkillList src={CheckMarkIcon} skill={'Git'}/>
            <SkillList src={CheckMarkIcon} skill={'Bootstrap'}/>
            <SkillList src={CheckMarkIcon} skill={'MongoDB'}/>
        </div>
    </section>
  )
}

export default Skills