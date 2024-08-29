import styles from './ProjectsStyles.module.css'
import IdealSkills from '../../assets/IdealSkills.png'
import ProjectCard from '../../common/ProjectCard'
import IdealThreads from '../../assets/ideal-threads.png'



function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={IdealSkills}
          link={"https://github.com/Lucifer-Aspire-A315/ideal_skills"}
          name={"Ideal Skills"}
          desc={"Social Media App"} />

        <ProjectCard src={IdealThreads}
          link={"https://github.com/Lucifer-Aspire-A315/threads"}
          name={"Ideal Threads"}
          desc={"Threads Clone App"} />
      </div>
    </section>
  );
}

export default Projects