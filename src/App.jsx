import profilePicture from './assets/profile-photo.png'
import projectLaporInfrastructure from './assets/project-lapor-infrastructure.png'
import projectCropYieldPrediction from './assets/project-cropyield-prediction.png'
import './App.css'

const navItems = ['Skills', 'Works', 'Contact']

const skillGroups = [
  {
    title: 'Programming',
    skills: ['Python', 'C', 'C++', 'Java'],
  },
  {
    title: 'Data Management',
    skills: ['SQL', 'PostgreSQL', 'Spark', 'Hive', 'Pentaho', 'Airflow'],
  },
  {
    title: 'Data Visualization',
    skills: ['Power BI', 'Tableau'],
  },
  {
    title: 'Software Development',
    skills: ['HTML', 'CSS', 'Tailwind CSS', 'React'],
  },
]

const toId = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

const profileDetails = [
  'Tangerang-Jakarta, Indonesia',
  'Undergraduate at Bina Nusantara University (2024-Present)',
  'Current GPA: 3.68',
]

const projects = [
  {
    name: 'Lapor Infrastructure',
    status: 'Finished',
    summary:
      'Aplikasi pelaporan dengan dashboard admin, data laporan, dan tampilan mobile untuk membantu pengguna mengirim laporan dengan lebih mudah.',
    link: 'https://github.com/bonahandsome5G/Lapor-Infrastructure',
    image: projectLaporInfrastructure,
    meta: 'Infrastructure / Software Engineering',
  },
  {
    name: 'CropYield Analysis',
    status: 'Finished',
    summary:
      'Project prediksi hasil panen menggunakan data cuaca dan tanah untuk memperkirakan produktivitas tanaman.',
    link: 'https://github.com/Tristy17/CropYield-Analysis',
    image: projectCropYieldPrediction,
    meta: 'Prediction / Artificial Intelligence',
  },
]

const contacts = [
  { label: 'Email', value: 'tristanp.w8330@gmail.com', href: 'mailto:tristanp.w8330@gmail.com' },
  { label: 'WhatsApp', value: '+62 813-1696-2279', href: 'https://wa.me/6281316962279' },
  { label: 'GitHub', value: 'github.com/Tristy17', href: 'https://github.com/Tristy17' },
]

function App() {
  return (
    <main className="site-shell">
      <article className="portfolio-frame">
        <header className="topbar" aria-label="Navigasi utama">
          <a className="brand" href="#home" aria-label="Kembali ke awal halaman">
            Portfolio CV
          </a>
          <nav>
            {navItems.map((item) => (
              <a href={`#${item.toLowerCase()}`} key={item}>
                {item}
              </a>
            ))}
          </nav>
          <a className="download-link" href="#contact">
            Contact
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
              I am a fifth-semester Computer Science student at BINUS University.
              I am interested in data, machine learning, software engineering, and
              application development. I have worked on college projects related to
              data analysis, prediction models, and web applications. I also have
              experience selling Roblox game items through Indonesian and
              international marketplaces, which helped me become more confident in
              communication, time management, and solving problems directly with
              customers.
            </p>
            <ul className="profile-details" aria-label="Profile details">
              {profileDetails.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            <div className="hero-actions" aria-label="Aksi utama">
              <a className="call-button" href="#works">
                View Works
              </a>
              <a className="ghost-button" href="#skills">
                See Skills
              </a>
            </div>
          </div>
          <div className="portrait-field">
            <img src={profilePicture} alt="Foto profil" />
          </div>
        </section>

        <section className="skills-section" id="skills" aria-labelledby="skills-title">
          <div className="section-title-row compact">
            <h2 id="skills-title">Skill Set</h2>
          </div>
          <div className="skill-grid">
            {skillGroups.map((group) => {
              const titleId = `${toId(group.title)}-title`

              return (
                <section className="skill-card" key={group.title} aria-labelledby={titleId}>
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

        <section className="works" id="works" aria-labelledby="works-title">
          <div className="section-title-row">
            <h2 id="works-title">Project GitHub</h2>
          </div>

          <div className="showcase-list">
            {projects.map((project, index) => (
              <a
                className="showcase-card"
                href={project.link}
                target="_blank"
                rel="noreferrer"
                key={project.name}
              >
                <img src={project.image} alt={`Preview ${project.name}`} />
                <div className="showcase-overlay">
                  <p className="work-meta">
                    0{index + 1} / {project.meta}
                  </p>
                  <h3>
                    {project.name} - {project.status}
                  </h3>
                  <p>{project.summary}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="contact-panel" id="contact" aria-labelledby="contact-title">
          <div>
            <p className="eyebrow">Let's Talk</p>
            <h2 id="contact-title">Contact Saya</h2>
            <p>
              Terbuka untuk kesempatan internship terutama di bidang data dan AI.
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
