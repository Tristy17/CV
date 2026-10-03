import profilePicture from './assets/profile-photo.png'
import projectLoanCustomerRisk from './assets/project-loan-customer-risk.png'
import projectLaporInfrastructure from './assets/project-lapor-infrastructure.png'
import projectCropYieldPrediction from './assets/project-cropyield-prediction.png'
import projectDataEng from './assets/project-data-engineering.png'   // <-- baris baru
import projectDataViz from './assets/data-visualization.png'
import './App.css'


const navItems = ['Skills', 'Works', 'Contact']

const skillGroups = [
  {
    title: 'Tech Skill',
    skills: [
      'SQL',
      'PostgreSQL',
      'Spark',
      'Hive',
      'Pentaho',
      'Airflow',
      'Power BI',
      'Tableau',
      'Python',
      'C',
      'C++',
      'Java',
      'HTML',
      'CSS',
      'Java Script',
      'React',
      'Vite',
    ],
  },
]

const toId = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

const profileDetails = [
  'Tangerang-Jakarta, Indonesia',
  'Undergraduate at Bina Nusantara University (2024-Present)',
  'Current GPA: 3.68',
]

const projects = [
  {
    name: 'Loan Customer Risk',
    status: 'Finished',
    summary:
      'Built a customer risk prediction model based on available customer characteristics.',
    link: 'https://github.com/Tristy17/LoanCustomerRisk',
    image: projectLoanCustomerRisk,
    meta: 'Clustering / Big Data Processing',
    fit: 'contain',
  },
  {
    name: 'Loan Customer Risk Data Pipeline',
    status: 'Finished',
    summary:
      'A data engineering project that builds transformations and a job to process loan data, deployed on Ubuntu using the data model from the Loan Customer Risk project.',
    link: 'https://github.com/Tristy17/Data-Engineering-Project',
    image: projectDataEng,
    meta: 'Data Pipeline, OLTP, OLAP / Data Engineering',
    fit: 'contain',
  },
    {
    name: 'Coffee Sales Dashboard',
    status: 'Finished',
    summary:
      'An interactive Tableau dashboard analyzing coffee sales from Mar 2024 to Mar 2025, using time series analysis to compare revenue by product, time of day, weekday, and month to optimize operations around daily product shifts.',
    link: 'https://github.com/bonahandsome5G/Coffee-Sales-Dash',
    image: projectDataViz,
    meta: 'Coffee Shop Dashboard / Data Visualization',
    fit: 'contain',
  },
  {
    name: 'Lapor Infrastructure',
    status: 'Finished',
    summary:
      'A reporting application with an admin dashboard, report data management, and a mobile view to help users submit reports more easily.',
    link: 'https://github.com/bonahandsome5G/Lapor-Infrastructure',
    image: projectLaporInfrastructure,
    meta: 'Infrastructure / Software Engineering',
    fit: 'contain',
  },
  {
    name: 'CropYield Analysis',
    status: 'Finished',
    summary:
      'A crop yield prediction project that uses weather and soil data to estimate agricultural productivity.',
    link: 'https://github.com/Tristy17/CropYield-Analysis',
    image: projectCropYieldPrediction,
    meta: 'Prediction / Artificial Intelligence',
    fit: 'contain',
  },
]

const contacts = [
  {
    label: 'Email',
    value: 'tristanp.w8330@gmail.com',
    href: 'mailto:tristanp.w8330@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/tristan-putra',
    href: 'https://www.linkedin.com/in/tristan-putra',
  },
  {
    label: 'GitHub',
    value: 'github.com/Tristy17',
    href: 'https://github.com/Tristy17',
  },
]

function App() {
  return (
    <main className="site-shell">
      <article className="portfolio-frame">
        <header className="topbar" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label="Back to top">
            Portfolio CV
          </a>

          <nav>
            {navItems.map((item) => (
              <a href={`#${item.toLowerCase()}`} key={item}>
                {item}
              </a>
            ))}
          </nav>

          <a
            className="download-link"
            href="/Tristan Putra Wilau CV.pdf"
            download="Tristan-Putra-CV.pdf"
          >
            Download My CV
          </a>
        </header>

        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Portfolio CV</p>

            <h1 id="hero-title">
              Tristan Putra
              <span>Wilau</span>
            </h1>

            <p>
              Fifth-semester Computer Science student at BINUS University with
              interests in Big Data Processing, Data Analytics, Data
              Engineering, Data Science, and Business Analytics. Experienced in
              data-driven projects and Roblox game item sales across Indonesian
              and international marketplaces, with strong communication, time
              management, and problem-solving skills.
            </p>

            <ul className="profile-details" aria-label="Profile details">
              {profileDetails.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>

            <div className="hero-actions" aria-label="Primary actions">
              <a className="call-button" href="#works">
                View Works
              </a>

              <a
                className="ghost-button"
                href="/CV.pdf"
                download="Tristan-Putra-CV.pdf"
              >
                Download My CV
              </a>
            </div>
          </div>

          <div className="portrait-field">
            <img src={profilePicture} alt="Profile portrait" />
          </div>
        </section>

        <section
          className="skills-section"
          id="skills"
          aria-labelledby="skills-title"
        >
          <div className="section-title-row compact">
            <h2 id="skills-title">Tech Skill</h2>
          </div>

          <div className="skill-grid">
            {skillGroups.map((group) => {
              const titleId = `${toId(group.title)}-title`

              return (
                <section
                  className="skill-card"
                  key={group.title}
                  aria-labelledby={titleId}
                >
                  <h3 id={titleId}>{group.title}</h3>

                  <div className="skill-tags">
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </section>
              )
            })}
          </div>
        </section>

        <section
          className="works"
          id="works"
          aria-labelledby="works-title"
        >
          <div className="section-title-row">
            <h2 id="works-title">GitHub Projects</h2>
          </div>

          <div className="showcase-list">
            {projects.map((project, index) => {
              const Card = project.link ? 'a' : 'article'

              const cardProps = project.link
                ? {
                    href: project.link,
                    target: '_blank',
                    rel: 'noreferrer',
                  }
                : {}

              return (
                <Card
                  className="showcase-card"
                  key={project.name}
                  {...cardProps}
                >
                  <img
                    src={project.image}
                    alt={`Preview ${project.name}`}
                    className={project.fit === 'contain' ? 'fit-contain' : ''}
                  />

                  <div className="showcase-overlay">
                    <p className="work-meta">
                      0{index + 1} / {project.meta}
                    </p>

                    <h3>
                      {project.name} - {project.status}
                    </h3>

                    <p>{project.summary}</p>
                  </div>
                </Card>
              )
            })}
          </div>
        </section>

        <section
          className="contact-panel"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div>
            <p className="eyebrow">Let's Talk</p>

            <h2 id="contact-title">Contact Me</h2>

            <p>
              I have a strong interest in data-related fields, particularly
              databases. I hope to have the opportunity to work on
              database-related projects and further develop my skills through
              practical experience.
            </p>
          </div>

          <div className="contact-links">
            {contacts.map((contact) => (
              <a href={contact.href} key={contact.label}>
                <span>{contact.label}</span>
                {contact.value}
              </a>
            ))}
          </div>
        </section>
      </article>
    </main>
  )
}

export default App