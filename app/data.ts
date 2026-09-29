export const personalInfo = {
  name: "Kaveri Sharma",
  location: "Bengaluru, Karnataka",
  email: "kaveri05sharma@gmail.com",
  github: "https://github.com/kaverii11",
  linkedin: "https://www.linkedin.com/in/kaveri-sharma-aiml",
  taglines: [
    "Full-Stack Developer",
    "AI / ML Engineer",
    "Agentic Systems Builder",
    "2nd Place @ AMD Slingshot Challenge",
  ],
  about:
    "B.Tech Computer Science student at PES University, building systems at the intersection of data engineering, applied ML, and full-stack development — from AI agents that reconcile trades and route support tickets, to GovTech logistics tools and clinical risk models.",
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
      "A GovTech engine that measures how fairly public facilities are distributed across a city using real Dijkstra shortest-path routing over live geospatial street maps — not straight-line estimates — across a 300,000+ node Bengaluru street network.",
    points: [
      "Multi-source Dijkstra routing (NetworkX/OSMnx) to quantify facility-access inequality, plus a global search that can simulate any city worldwide via OpenStreetMap geocoding.",
      "Replaced outdated census data with Sentinel-2 satellite imagery + OpenStreetMap to map informal settlements using true walkable street distances.",
      "Live dashboard where recommended facility placements respect a real budget cap (₹10–150 Cr) and target the most underserved areas first — generalized beyond schools to healthcare, fire stations, and warehouses.",
    ],
    tech: ["Python", "React", "FastAPI", "NetworkX", "GeoPandas", "OpenStreetMap"],
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
      "RAG pipeline (ChromaDB + SentenceTransformer embeddings, Groq Llama 3.3 for drafts, SambaNova/Llama 3.1 for sentiment) with a human-in-the-loop engine updating the knowledge base from agent corrections — 30–40% reduction in MTTR.",
      "Applied the same confidence-threshold model to pre-submission drafts, surfacing fix suggestions to the customer before a ticket is even created.",
    ],
    tech: ["React", "FastAPI", "ChromaDB", "Groq", "SambaNova"],
    link: "https://github.com/kaverii11/Optisolve",
    private: false,
    badge: "Shortlisted, Atos SRiJAN Hackathon",
  },
  {
    title: "BreakRadar",
    subtitle: "Trade-Break Reconciliation Engine",
    tag: "Agentic Systems · FinTech",
    color: "blue",
    description:
      "A reconciliation engine that catches and prioritizes errors before they become financial risk — agents that act autonomously, not a dashboard someone has to babysit.",
    points: [
      "Reconciles two independent trade feeds, auto-classifies mismatches into 5 break types, and scores severity from real-time $ exposure with asset-class-tuned tolerance thresholds.",
      "Rule-based escalation engine routes high-risk breaks to human review with an auto-generated justification, and logs a timestamped audit trail for every auto-resolved case — nothing closes without a traceable reason.",
      "Live KRI dashboard (total $ exposure, breaks by type, case aging) where an LLM (Groq) translates each deterministic verdict into a plain-English explanation.",
    ],
    tech: ["Python", "FastAPI", "Groq"],
    link: "https://github.com/kaverii11/BreakRadar",
    private: false,
    badge: "Built solo, end-to-end",
  },
  {
    title: "HeartGuard AI",
    subtitle: "Personalized Digital Twin for Heart Failure",
    tag: "Health Tech · Data Science",
    color: "purple",
    description:
      "A multimodal deterioration-monitoring pipeline (ECG, BCG, echocardiography, wearable trends) built around the Pulse physiology simulation engine — a 7-model pipeline spanning simulation, severity scoring, and deterioration classification.",
    points: [
      "Interpretable HF staging and risk-scoring model (LOW/MODERATE/HIGH across NYHA stages A–D) — chose a hand-tuned weighted scorer over a black-box model, plus 7/14/30-day risk forecasting.",
      "Diagnosed and fixed a scoring-logic defect that was silently inflating severity error, cutting MAE 34x (0.271 → 0.008) after root-causing it against real-patient validation data (16/16 correct classifications).",
      "Validated the risk mechanism against real outcomes across 17,129 MIMIC-IV ICU admissions (Google BigQuery) plus an independent cohort, benchmarking against richer clinical models to identify missing data signals.",
    ],
    tech: ["Python", "Docker", "BigQuery", "Kitware Pulse"],
    link: "https://github.com/Mrunmayi019/M2K-HF-PULSE",
    private: true,
    badge: "Capstone — publication in progress",
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
