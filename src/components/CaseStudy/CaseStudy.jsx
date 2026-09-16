import { motion } from "framer-motion";
import { navigateTo } from "../../utils/navigation";
import Footer from "../Footer/Footer";
import "./CaseStudy.css";

const fifa = {
  theme: "fifa-case",
  label: "01 · Full-stack game",
  title: "FIFA WC\nBattle",
  subtitle: "Choose your weapon. Read the matchup. Climb the rankings.",
  intro: "A football-card battle game that turns real player attributes into fast, strategic duels—with progression, live-feeling commentary, and a global competitive loop.",
  quote: "Talent is only the starting point. The system makes every decision count.",
  stats: [["6", "battle attributes"], ["Global", "ranked leaderboard"], ["AI", "match commentary"]],
  problem: "Football data is usually something you browse. I wanted to make it playable: select a player, choose the attribute you trust, and let the match engine find a fair counter.",
  flow: ["Authenticate", "Scout a player", "Choose an attribute", "Battle an opponent", "Earn XP + streak"],
  features: [
    ["Match engine", "Pairs closely rated players, resolves attribute counters, and applies XP changes without turning each round into a coin flip."],
    ["Competitive loop", "Match history, win streaks, cooldowns, and a fast global leaderboard create reasons to return."],
    ["AI commentary", "An agentic AI layer generates each match call while deterministic fallbacks keep the experience responsive when AI is unavailable."],
    ["Production boundaries", "Managed authentication protects the backend while persistent storage keeps user profiles and match history safe."],
  ],
  stack: ["Frontend", "Backend", "Persistent data", "Managed cache", "Authentication", "Agentic AI"],
  github: "https://github.com/ad1820/fifa_wc_battle_client",
  secondaryGithub: "https://github.com/ad1820/fifa_wc_battle_server",
  demo: "https://fifa-wc-battle-client.vercel.app/",
};

const applybot = {
  theme: "apply-case",
  label: "02 · Local-first AI automation",
  title: "ApplyBot",
  subtitle: "The most employed member of the team.",
  intro: "A personal job-hunting agent that finds relevant roles, scores them against a resume, and keeps the entire application pipeline manageable through chat.",
  quote: "Odd jobs found. Junk jobs rejected. LinkedIn credentials left completely alone.",
  stats: [["200+", "offline tests"], ["3", "AI failover providers"], ["1", "very tired applicant"]],
  problem: "Job boards create more noise than opportunity. ApplyBot reduces the repetitive work while deliberately keeping the final application—and every important decision—in human hands.",
  flow: ["Discover sources", "Normalize + dedupe", "Score locally", "Send a notification", "Track progress"],
  features: [
    ["Open discovery", "Pulls roles from public job APIs and ATS boards including Greenhouse, Lever, and Ashby—without brittle scraping."],
    ["Deterministic filtering", "Rejects obviously irrelevant seniority and role categories before spending AI tokens, then scores the remaining jobs against real skills."],
    ["Resilient AI routing", "Moves between multiple AI providers when one is rate-limited, while keeping useful core behavior even when every provider is unavailable."],
    ["Human-controlled workflow", "Chat commands handle review and status tracking, while applications remain manual and third-party credentials are never stored."],
  ],
  stack: ["Automation engine", "Managed data", "Chat interface", "Progress tracking", "Agentic AI", "Provider failover"],
  github: "https://github.com/ad1820/ApplyBot",
};

const CaseStudy = ({ type }) => {
  const project = type === "fifa" ? fifa : applybot;

  return (
    <main className={`case-study ${project.theme}`}>
      <nav className="case-nav">
        <button onClick={() => navigateTo("/")} className="case-brand">AP<span>／</span></button>
        <button onClick={() => navigateTo("/#projects")} className="back-link">← All projects</button>
      </nav>

      <section className="case-hero">
        <div className="case-atmosphere" />
        <motion.div className="case-hero-copy" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
          <span className="case-label">{project.label}</span>
          <h1>{project.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h1>
          <p className="case-subtitle">{project.subtitle}</p>
          <p className="case-intro">{project.intro}</p>
          <div className="case-actions">
            {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="primary-action">Launch project ↗</a>}
            <a href={project.github} target="_blank" rel="noreferrer" className="secondary-action">View source ↗</a>
          </div>
        </motion.div>
        <motion.aside className="case-quote" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .3 }}>
          <span>Project note</span><p>“{project.quote}”</p>
        </motion.aside>
      </section>

      <section className="case-stats">
        {project.stats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
      </section>

      <section className="case-content">
        <div className="case-section split-section">
          <span className="section-number">01 / Challenge</span>
          <div><h2>Turning repetitive work into a focused system.</h2><p>{project.problem}</p></div>
        </div>

        <div className="case-section">
          <span className="section-number">02 / Core loop</span>
          <h2>From input to outcome.</h2>
          <div className="process-line">
            {project.flow.map((step, index) => <div className="process-step" key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></div>)}
          </div>
        </div>

        <div className="case-section">
          <span className="section-number">03 / Engineering</span>
          <h2>What makes it hold together.</h2>
          <div className="feature-grid">
            {project.features.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>

        <div className="case-section split-section stack-section">
          <span className="section-number">04 / Architecture</span>
          <div><h2>The pieces working together.</h2><div className="stack-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div>
        </div>

        <section className="case-cta">
          <span>{type === "fifa" ? "Ready for kickoff?" : "Need an odd job handled?"}</span>
          <h2>{type === "fifa" ? "Enter the arena." : "Inspect the operation."}</h2>
          <div className="case-actions">
            {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="primary-action">Live project ↗</a>}
            <a href={project.github} target="_blank" rel="noreferrer" className="secondary-action">{type === "fifa" ? "Client source" : "GitHub repository"} ↗</a>
            {project.secondaryGithub && <a href={project.secondaryGithub} target="_blank" rel="noreferrer" className="secondary-action">Server source ↗</a>}
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
};

export default CaseStudy;
