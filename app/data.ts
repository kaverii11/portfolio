export const personalInfo = {
  name: "Kaveri Sharma",
  location: "Bengaluru, Karnataka",
  email: "kaverisharma05@gmail.com",
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
    title: "Finalist",
    org: "Atos SRiJAN Hackathon",
    period: "Sep 2026",
    stat: "Top 5",
    statLabel: "finalist teams",
    detail:
      "1 of only 5 finalist teams (2 university teams, the rest startups) for OptiSolve, a customer support orchestration platform. Pitched to Atos UKI & India leadership, who showed interest in adoption and internship consideration.",
    metrics: [
      { value: "Top 5", label: "Finalist teams" },
      { value: "UKI & India", label: "Leadership pitch" },
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
      "A RAG support-ticket platform that scores its confidence in every answer from knowledge-base match strength and LLM sentiment analysis, then routes the ticket: Tier 1 auto-resolves, Tier 2 goes to human-in-the-loop review, Tier 3 escalates.",
    points: [
      "Self-learning loop: every human correction is saved back into the knowledge base, so similar tickets later auto-resolve — it learns from each company's own documents and agents, so it adapts to any platform in any sector.",
      "OptiSolve-Docs extension: a document-parsing pipeline (PDF/DOCX/TXT) plus a cross-encoder reranker that re-scores retrieved chunks.",
      "Evaluated on a held-out set: auto-resolves on document-only questions went from 0 to 3 of 6, with zero wrong auto-resolves on 27 near-topic and off-topic questions; backed by 19 unit tests.",
    ],
    tech: ["Python", "FastAPI", "React", "ChromaDB", "Groq"],
    link: "https://github.com/kaverii11/optisolve-docs",
    private: false,
    badge: "Finalist, Atos SRiJAN Hackathon",
  },
  {
    title: "SEBI Knowledge Graph Agent",
    subtitle: "Regulatory PDFs to a Queryable Knowledge Graph",
    tag: "Agentic AI · Document AI",
    color: "blue",
    description:
      "Turns unstructured SEBI regulatory circulars into a Neo4j knowledge graph of circulars and the acts, regulations and circulars they reference or modify — then answers compliance questions in plain English, for people or for other AI agents over MCP.",
    points: [
      "LangGraph pipeline: a regex catches circular numbers (old and new SEBI formats), a fast LLM extracts the rest as Pydantic-validated structured output, and anything below 0.7 confidence is re-checked by a stronger model.",
      "MCP server with 6 read-only tools (validated inputs, parameterised queries, write queries blocked twice) so Claude or any agent can query the graph; MLflow tracing of every graph step, LLM call and tool call.",
      "Evals on 3 real 2026 circulars: a hand-labelled answer key, an LLM-as-a-judge Q&A eval and a tool-selection eval, gated by pytest. Fixing what they caught (context leaks, page bugs, duplicate entities) raised extraction F1 from 0.74 to 0.94; 88% of test questions answered correctly.",
    ],
    tech: ["Python", "LangGraph", "MCP", "MLflow", "Neo4j", "Docker"],
    link: "https://github.com/kaverii11/Knowledge-Graph-Agent-",
    private: false,
    badge: "Built solo, end-to-end",
  },
  {
    title: "Aymora",
    subtitle: "AI Matchmaking App",
    tag: "Full Stack · Backend",
    color: "orange",
    description:
      "A deployed AI matchmaking app: Gemini turns questionnaire answers into a structured profile and an embedding, and users are matched by vector similarity plus rule-based re-ranking.",
    points: [
      "TypeScript/Fastify backend with 12 SQL migrations and Zod validation; truncated the 3072-dim (Matryoshka) Gemini embeddings to 768 to fit pgvector's ivfflat index limit.",
      "Two-stage matching — pgvector cosine-similarity candidates, then rule-based re-ranking — run as BullMQ background jobs on Redis with retries and exponential backoff.",
      "Razorpay payments with HMAC-SHA256 webhook signature verification, rate limiting, OTP attempt limits, moderation, and data deletion; deployed on Render + Supabase.",
    ],
    tech: ["TypeScript", "Fastify", "PostgreSQL", "pgvector", "Redis", "Gemini"],
    link: "https://github.com/kaverii11/aymora",
    private: false,
    badge: "Built solo, deployed",
  },
  {
    title: "BreakRadar",
    subtitle: "Trade-Break Reconciliation Engine",
    tag: "Agentic Systems · FinTech",
    color: "pink",
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
      "A personalized digital twin that follows each patient's daily vitals in a continuous loop: a Random Forest classifier sorts each day into 5 clinical scenarios at 91.3% held-out accuracy, a severity regressor sets intensity, and the Pulse engine simulates that patient's heart to produce a risk score (low/moderate/high), a 4-stage NYHA class (I–IV), and a forward projection.",
      "Diagnosed and fixed a scoring-logic defect that was silently inflating severity error, cutting MAE 34x (0.271 → 0.008).",
      "Validated the risk mechanism against real outcomes across 17,129 MIMIC-IV admissions (Google BigQuery) plus an independent cohort, benchmarking against richer clinical models to identify missing data signals.",
    ],
    tech: ["Python", "Scikit-learn", "XGBoost", "Docker", "BigQuery", "Kitware Pulse"],
    link: "https://github.com/Mrunmayi019/M2K-HF-PULSE",
    private: true,
    badge: "Capstone — publication in progress",
  },
];

export const moreProjects = [
  {
    title: "shoe-check",
    tag: "Computer Vision · Edge AI",
    description:
      "Flags blurry or out-of-focus sneaker photos. A MobileNetV3-Small trained only on synthetic blur scored 95.6% on 1,050 real camera photos and 96.7% on 30 real sneaker photos, vs 89% for classic OpenCV sharpness scores. Exported to ONNX: 3.1 MB, 5 ms per photo on one CPU thread.",
    tech: ["PyTorch", "OpenCV", "ONNX", "Gradio"],
    link: "https://github.com/kaverii11/shoe-check",
  },
  {
    title: "Marine Debris Detection",
    tag: "Deep Learning · Satellite Imagery",
    description:
      "ResNet-18 adapted to 11-band Sentinel-2 satellite images (MARIDA): 87% test accuracy vs a 72% baseline, debris F1 0.78, with Grad-CAM showing it focuses on the debris lines.",
    tech: ["PyTorch", "torchvision", "rasterio", "Grad-CAM"],
    link: "https://github.com/kaverii11/marine-debris_cnn",
  },
  {
    title: "Fire Detection CNN",
    tag: "Computer Vision",
    description:
      "Fire vs non-fire photos: a pretrained MobileNetV2 reaches 97% test accuracy and a CNN built from scratch 94%, vs a 75% baseline, with augmentation and class weights.",
    tech: ["TensorFlow", "Keras", "MobileNetV2", "Transfer Learning"],
    link: "https://github.com/kaverii11/forrest_fire_detection",
  },
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
      "Solo replication of Stanford research to count items in Amazon bin photos — SVMs on hand-crafted features (HOG, blob detection, PCA via OpenCV) vs fine-tuned ResNet-18/34.",
    tech: ["PyTorch", "OpenCV", "ResNet18/34", "GCS", "SVM"],
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
    title: "AgriConnect",
    tag: "Java · OOP & Design Patterns",
    description:
      "A farm-to-consumer marketplace: farmers sell produce directly to buyers, who can order together for bulk discounts or subscribe to weekly boxes. Java Spring Boot backend with 22 REST endpoints and MySQL, built on SOLID principles with Strategy (pricing rules), Observer (group-order alerts), Factory (subscription boxes) and Facade (checkout as one all-or-nothing transaction).",
    tech: ["Java 17", "Spring Boot", "JPA/Hibernate", "MySQL", "Maven"],
    link: "https://github.com/kaverii11/Agriconnect",
  },
  {
    title: "CRM Platform",
    tag: "Software Engineering",
    description:
      "A team CRM for sales and support with role-based login; I built the ticket API (validation, 24-hour SLA deadlines, logging). Shipped in Jira-tracked sprints with CI running tests, linting, and security scans on every PR.",
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
    skills: ["PyTorch", "Keras", "TensorFlow", "OpenCV", "Scikit-learn", "XGBoost", "Pandas", "NumPy"],
  },
  {
    label: "Full Stack & App Integration",
    skills: ["Next.js", "React", "FastAPI", "Fastify", "Node.js", "REST APIs", "Data Visualization"],
  },
  {
    label: "Tools & Databases",
    skills: ["PostgreSQL", "pgvector", "Neo4j", "Redis", "MySQL", "Firebase Firestore", "Git / GitHub", "Docker"],
  },
  {
    label: "Generative AI & NLP",
    skills: ["LLMs", "RAG", "LangGraph", "Embeddings", "NLP", "Prompt Engineering", "Hugging Face"],
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

// ---- Minimal layout (Nov 2026) ----
export const resumeGame = "https://kaverii11.github.io/resume-gamified/";

// Short facts the hero cycles through. Every number here is also on the resume.
export const heroFacts = [
  { text: "I build AI agents and the backends that run them.", link: null },
  { text: "I placed 2nd nationally out of 40,000+ registrations at the AMD Slingshot Challenge with ", link: { label: "CityOS", href: "https://github.com/kaverii11/Spatial-Engine" } },
  { text: "I built a knowledge-graph agent for SEBI regulations that other AI agents can query over ", link: { label: "MCP", href: "https://github.com/kaverii11/Knowledge-Graph-Agent-" } },
  { text: "Our team was 1 of 5 finalists at the Atos SRiJAN Hackathon with ", link: { label: "OptiSolve", href: "https://github.com/kaverii11/optisolve-docs" } },
  { text: "My resume is also a pixel-art town you can ", link: { label: "walk around in", href: "https://kaverii11.github.io/resume-gamified/" } },
];

// Featured projects, in order, with the one number that sums each up.
export const featuredOrder: { title: string; metric: string; metricLabel: string; image: string; caption: string }[] = [
  { title: "SEBI Knowledge Graph Agent", metric: "0.74 → 0.94", metricLabel: "extraction F1 after building evals and fixing what they caught", image: "/projects/sebi.webp", caption: "The graph the agent built from 3 real SEBI circulars (Aug–Oct 2026)" },
  { title: "Aymora", metric: "5", metricLabel: "services wired into one deployed TypeScript backend", image: "/projects/aymora.webp", caption: "Live at aymora-web.onrender.com" },
  { title: "CityOS", metric: "2nd", metricLabel: "nationally, out of 40,000+ registrations (AMD Slingshot)", image: "/projects/cityos.webp", caption: "The planning dashboard on Bengaluru. Map © OpenStreetMap contributors" },
  { title: "OptiSolve", metric: "Top 5", metricLabel: "finalist at the Atos SRiJAN Hackathon, pitched to Atos leadership", image: "/projects/optisolve.webp", caption: "From our SRiJAN pitch: how OptiSolve decides who answers" },
];


// Screenshots for the "More projects" panel (taken from each repo's README)
export const moreImages: Record<string, string> = {
  BreakRadar: "/projects/breakradar.webp",
  AgriConnect: "/projects/agriconnect.webp",
  "Marine Debris Detection": "/projects/marine.webp",
};
