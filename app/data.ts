export const personalInfo = {
  name: "Kaveri Sharma",
  location: "Bengaluru, Karnataka",
  email: "kaveri05sharma@gmail.com",
  github: "https://github.com/kaverii11",
  linkedin: "https://www.linkedin.com/in/kaveri-sharma-aiml",
  taglines: [
    "Full-Stack Developer",
    "AI / ML Engineer",
    "GovTech Builder",
    "2nd Place @ AMD Slingshot Challenge",
  ],
  about:
    "B.Tech Computer Science student at PES University, building systems at the intersection of data engineering, applied ML, and full-stack development — from GPU-accelerated GovTech tools to AI-driven customer support platforms.",
};

export const education = {
  school: "PES University, Bengaluru",
  degree: "Bachelor of Technology in Computer Science",
  period: "Expected 2027",
  coursework: [
    "Data Science",
    "ML & Database Systems",
    "Data Structures & Algorithms",
    "Web Development",
  ],
};

export const experience = [
  {
    role: "Data & Analytics Engineering Intern",
    org: "National Capital Region Transport Corporation (NCRTC)",
    location: "New Delhi (On-site)",
    period: "Jun 2025 — Aug 2025",
    points: [
      "Built and deployed a real-time transport analytics dashboard for the PM e-Bus Sewa initiative, unifying 3+ heterogeneous fleet/ridership sources into a single CMS-integrated UI for NCR stakeholders.",
      "Translated government policy KPIs into interactive visualization workflows, cutting stakeholder time-to-insight from hours to minutes and removing analyst dependency for daily reviews.",
    ],
    tech: ["Data Visualization", "Web Development", "CMS Integration"],
  },
];

export const achievements = [
  {
    title: "National 2nd Place",
    org: "AMD Slingshot Challenge",
    period: "May 2026",
    stat: "2nd",
    statLabel: "out of 40,000+ registrations",
    detail:
      "Secured a cash prize of INR 3,00,000, ranking 2nd among 40,000+ registrations and 4,000+ competing prototypes for engineering a highly scalable geospatial AI solution — CityOS.",
    metrics: [
      { value: "₹3,00,000", label: "Cash prize" },
      { value: "40,000+", label: "Registrations" },
      { value: "4,000+", label: "Prototypes" },
    ],
  },
  {
    title: "Shortlisted",
    org: "Atos SRiJAN Hackathon",
    period: "May 2026",
    stat: "Top",
    statLabel: "among 500+ participants",
    detail:
      "Ranked among winning teams out of 500+ participants, earning direct internship consideration for building a customer support orchestration platform — OptiSolve.",
    metrics: [
      { value: "500+", label: "Participants" },
      { value: "Direct", label: "Internship consideration" },
    ],
  },
];

export const featuredProjects = [
  {
    title: "CityOS",
    subtitle: "Spatial Logistics Engine",
    tag: "GovTech · Geospatial AI",
    color: "orange",
    description:
      "A GovTech spatial logistics engine using AMD-accelerated graph routing across 300,000+ street nodes to minimize urban inequality (Spatial Gini Coefficient) — 4,064x faster than a CPU baseline.",
    points: [
      "Accelerated computations 4,064x (14 hrs → 12 sec) on AMD ROCm GPUs.",
      "Replaced outdated census data with Sentinel-2 satellite imagery + OpenStreetMap to map informal settlements using true walkable street distances.",
      "Live React dashboard with 5-second GPU-accelerated re-optimization (8.5x faster than CPU) — generalized beyond schools to healthcare, fire stations, and warehouse siting.",
    ],
    tech: ["Python", "React", "AMD ROCm", "Sentinel-2", "OpenStreetMap"],
    link: "https://github.com/kaverii11/Spatial-Engine",
    private: false,
    badge: "🏆 2nd, AMD Slingshot Challenge",
  },
  {
    title: "OptiSolve",
    subtitle: "Customer Support Orchestration Platform",
    tag: "Applied AI · RAG",
    color: "pink",
    description:
      "A 3-tier customer support orchestration platform routing tickets across auto-resolve, AI-assisted, and escalate tiers based on AI confidence scores and real-time sentiment analysis.",
    points: [
      "RAG pipeline (ChromaDB, Groq Llama 3.3 for drafts, SambaNova/Llama 3.1 for sentiment) with a human-in-the-loop engine updating the knowledge base from agent corrections — 30–40% reduction in MTTR.",
      "Built a pre-submission 'Gatekeeper' layer that analyzes drafts in real time and suggests fixes before ticket creation — 20–30% ticket deflection.",
    ],
    tech: ["React", "FastAPI", "LangChain", "ChromaDB", "Groq", "SambaNova"],
    link: "https://github.com/kaverii11/Optisolve",
    private: false,
    badge: "Shortlisted, Atos SRiJAN Hackathon",
  },
  {
    title: "Digital Twin",
    subtitle: "Heart Failure Decompensation Prediction",
    tag: "Health Tech · Simulation",
    color: "purple",
    description:
      "A heart-failure decompensation monitoring system integrating the Kitware Pulse physiology simulation engine, translating patient vitals into simulated trajectories via a rule-based clinical triage layer.",
    points: [
      "Interpretable HF staging and risk-scoring model (LOW/MODERATE/HIGH across NYHA stages A–D) — chose a hand-tuned weighted scorer over a black-box XGBoost model, plus 7/14/30-day risk forecasting.",
      "Engineered a synthetic data pipeline from clinical literature and wearable trend regimes, prioritizing high recall to minimize missed high-risk cases.",
      "Currently authoring a research paper formalizing this methodology for peer-reviewed publication.",
    ],
    tech: ["Python", "Docker", "XGBoost", "Kitware Pulse"],
    link: "https://github.com/Mrunmayi019/M2K-HF-PULSE",
    private: true,
    badge: "Research paper in progress",
  },
];

export const moreProjects = [
  {
    title: "Movieflix AI",
    tag: "Deep Learning & NLP",
    description:
      "A content-based recommendation engine using SBERT to understand semantic similarity in movie plots.",
    tech: ["Python", "Streamlit", "BERT", "Scikit-Learn", "TMDB API"],
    link: "https://github.com/kaverii11/movieflix-ai",
  },
  {
    title: "Amazon Inventory AI",
    tag: "Computer Vision & ML",
    description:
      "Replication of Stanford research to automate inventory counting in storage bins — SVM baselines plus deep learning approaches.",
    tech: ["PyTorch", "ResNet18/34", "GCS", "SVM"],
    link: "https://github.com/kaverii11/amazon_inventory",
  },
  {
    title: "Student-Alumni Portal",
    tag: "Database Systems",
    description:
      "A database-driven mentorship platform with role-based access and smart search, using stored procedures for filtering.",
    tech: ["MySQL", "Streamlit", "Stored Procedures", "3NF"],
    link: "https://github.com/kaverii11/Student-Alumni-Mentorship-Portal",
  },
  {
    title: "Secure CRM Platform",
    tag: "Software Engineering",
    description:
      "A GDPR-compliant CRM built with Flask & Firestore — RBAC, JWT auth, 99.9% uptime with micro-services.",
    tech: ["Flask", "Firebase", "Bandit", "Pytest"],
    link: "https://github.com/kaverii11/CRM-APP-CLONE",
  },
];

export const skillGroups = [
  {
    label: "Languages",
    skills: ["Python", "C++", "Java", "SQL", "JavaScript", "TypeScript"],
  },
  {
    label: "Data & ML",
    skills: ["PyTorch", "Keras", "TensorFlow", "Pandas", "NumPy", "Scikit-learn"],
  },
  {
    label: "Full Stack & App Integration",
    skills: ["Next.js", "React", "REST APIs", "JSON", "Data Visualization"],
  },
  {
    label: "Tools & Databases",
    skills: ["MySQL", "Firebase Firestore", "Git / GitHub", "Docker"],
  },
  {
    label: "Generative AI & NLP",
    skills: ["LLMs", "RAG", "NLP", "Prompt Engineering", "Hugging Face"],
  },
];

export const leadership = [
  {
    role: "Web Development Domain Head",
    org: "Encode AI",
    period: "Oct 2024 — Present",
    detail:
      "Organized workshops on emerging AI tech and rapid development frameworks, democratizing AI skills for 100+ students.",
  },
  {
    role: "Research and Content Domain Head",
    org: "ACM-W",
    period: "Oct 2024 — Present",
    detail:
      "Researched trending topics and designed engaging challenge formats for hackathons, and curated messaging, headlines, and speeches for club events.",
  },
];
