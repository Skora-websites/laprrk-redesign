export const CONTACT = {
  waNumber: "918860664929",
  waBase: "https://wa.me/918860664929",
  email: "info@laprrk.com",
  gmailCompose: "https://mail.google.com/mail/?view=cm&fs=1&to=info@laprrk.com",
  phoneIN: "+91 88606 64929",
  telIN: "+918860664929",
  phoneUS: "+1 (502) 309-5749",
  telUS: "+15023095749",
  addressIN:
    "Office 605, 6th floor, Raksha Addela Mart, Gaur City 2, Greater Noida West, Uttar Pradesh 201318, India",
  addressUS: "Louisville, Kentucky, United States",
  hoursIN: "Mon–Sat, 10:00–19:00 IST",
  hoursUS: "Mon–Fri, 09:00–17:00 ET",
  legal: "Laprrk Technology Solutions LLP",
};

export const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    handle: "Laprrk Technology Solutions",
    label: "Laprrk Technology Solutions: Overview | LinkedIn",
    href: "https://www.linkedin.com/company/laprrk-technology-solution/",
    icon: "brand-linkedin",
  },
  {
    name: "Facebook",
    handle: "Laprrk Technology Solutions",
    label: "Laprrk Technology Solutions | Greater Noida | Facebook",
    href: "https://www.facebook.com/laprrktechnologysolutions/",
    icon: "brand-facebook",
  },
  {
    name: "Instagram",
    handle: "@laprrktechnologysolutions",
    label: "Instagram",
    href: "https://www.instagram.com/laprrktechnologysolutions/",
    icon: "brand-instagram",
  },
  {
    name: "YouTube",
    handle: "@laprrktechnologysolutions",
    label: "LAPRRK TECHNOLOGY SOLUTIONS - YouTube",
    href: "https://www.youtube.com/@laprrktechnologysolutions",
    icon: "brand-youtube",
  },
  {
    name: "Pinterest",
    handle: "Laprrk Technology Solutions",
    label: "Laprrk Technology Solutions – Profile | Pinterest",
    href: "https://in.pinterest.com/laprrktechnologysolutions/",
    icon: "brand-pinterest",
  },
];

export const PRACTICES = [
  {
    id: "build",
    name: "Build",
    lead: "Product engineering, applied AI, data platforms and cloud.",
    meta: "17 services",
    summary:
      "Teams that ship in two-week sprints with working demos at each cadence. Everything runs in your repos and cloud.",
    services: [
      "Custom software & web platforms",
      "Applied AI & agentic workflows",
      "Cloud architecture & DevOps",
      "Data engineering, lakehouse & BI",
      "QA & test automation suites",
      "API & legacy modernisation",
    ],
    proof: "70% cut in manual document processing in six weeks for an insurance network.",
    cta: "Scope a build",
    page: "/it-services",
    pageLabel: "See IT Services",
  },
  {
    id: "hire",
    name: "Hire",
    lead: "Permanent, contract and leadership hiring, screened by engineers.",
    meta: "10 services",
    summary:
      "Vetted by active practitioners who have done the job. First calibrated shortlist in 5–7 business days with a replacement guarantee.",
    services: [
      "Full-stack & backend engineers",
      "GCC & India pod incubation",
      "Dedicated contract squads",
      "Executive & technical leadership",
      "Embedded practitioner screening",
    ],
    proof: "40 joiners in eight months for a US product firm's first India engineering centre.",
    cta: "Request a shortlist",
    page: "/hiring",
    pageLabel: "See IT Hiring",
  },
  {
    id: "train",
    name: "Train",
    lead: "Live, lab-based programmes for company teams and for colleges.",
    meta: "18 tracks",
    summary:
      "About 70% hands-on lab time with code reviews and production capstones on your tech stack.",
    services: [
      "Generative AI & LLM engineering",
      "Multi-cloud (AWS, Azure, GCP)",
      "DevOps, SRE & DevSecOps",
      "Data engineering & analytics",
      "Corporate cohort upskilling",
    ],
    proof: "120 engineers trained with a 38% average lift in assessment benchmarks.",
    cta: "Plan a programme",
    page: "/training",
    pageLabel: "See Training",
  },
];

export const PROBLEMS = [
  {
    statement: "Delivery slows down once the demo is over.",
    detail:
      "The first build looks fine. Six months later nobody can release it without three people in a call. We take on the unglamorous part: tests, pipelines and documentation that let your team move without us.",
    link: "See how builds run",
    href: "/it-services",
  },
  {
    statement: "The role has been open for a quarter.",
    detail:
      "Job boards send volume, not fit. We screen against the actual stack and the actual team, so the shortlist you get in week one is one you can interview, not filter.",
    link: "See how hiring runs",
    href: "/hiring",
  },
  {
    statement: "The team has the tools but not the habits.",
    detail:
      "Licences were bought, a workshop was run, and nothing changed in delivery. Training only counts when it ends with a working capstone, reviewed by someone senior.",
    link: "See how training runs",
    href: "/training",
  },
];

export const ENGAGEMENTS = [
  {
    model: "Fixed-scope project",
    priced: "Quoted after discovery, billed on milestones",
    best: "A defined build with a known end date",
    start: "First sprint within two weeks",
  },
  {
    model: "Dedicated team",
    priced: "Monthly, per person-month",
    best: "An ongoing roadmap you keep extending",
    start: "Team live in two to three weeks",
  },
  {
    model: "Staff augmentation",
    priced: "Monthly, per engineer",
    best: "Filling one gap without a hiring cycle",
    start: "Profiles in five to seven days",
  },
  {
    model: "Permanent hire",
    priced: "Success fee after joining",
    best: "A key role you want on payroll",
    start: "First shortlist in five to seven days",
  },
  {
    model: "Training cohort",
    priced: "Per batch, 15 to 30 people",
    best: "A team that needs one specific capability",
    start: "Kickoff in two to three weeks",
  },
  {
    model: "Hire–train–deploy",
    priced: "Per cohort, eight to twelve weeks",
    best: "A fresher pipeline you can plan around",
    start: "Intake aligned to your calendar",
  },
];

export const EVIDENCE = [
  {
    sector: "Insurance · Build",
    title: "A document assistant that reads applications, loss runs and declarations",
    body: "A network of independent agencies was re-keying the same data three times. The assistant extracts and validates each field, and routes exceptions to a person before anything reaches the agency management system.",
    metrics: [
      { value: "70%", label: "less manual entry per document" },
      { value: "6 wks", label: "to first production release" },
      { value: "95%+", label: "field accuracy after review" },
    ],
    image: "/images/architecture-desk.jpg",
    imageAlt: "A printed system diagram on a desk beside a pencil and a phone showing code",
  },
  {
    sector: "Software products · Hire",
    title: "The first forty hires for a US product company's India centre",
    body: "Leadership first, then the foundation team, then scale. A phased programme that filled 40 seats in eight months.",
    metrics: [
      { value: "40", label: "joiners in eight months" },
      { value: "6 days", label: "to first shortlist" },
      { value: "88%", label: "offer-to-join ratio" },
    ],
  },
  {
    sector: "IT services · Train",
    title: "GenAI and cloud upskilling for 120 engineers",
    body: "A twelve-week, role-based programme with live labs, applied projects and assessments on both ends.",
    metrics: [
      { value: "120", label: "engineers across three roles" },
      { value: "38%", label: "average score improvement" },
      { value: "8", label: "projects shown to leadership" },
    ],
  },
];

export const TIMELINE = [
  {
    step: "01",
    when: "Days 1–3",
    title: "A call with the person who will run the work",
    body: "Thirty minutes, no deck. We agree on the goal, the constraint that matters most and who decides. A mutual NDA is signed here if you want one.",
  },
  {
    step: "02",
    when: "Days 4–10",
    title: "A written proposal you can forward internally",
    body: "Scope, team shape, timeline and price, plus what we would do first. Usually with you inside 48 hours of the call.",
  },
  {
    step: "03",
    when: "Weeks 2–3",
    title: "A small start, not a big commitment",
    body: "One sprint, one shortlist or one pilot batch. Your systems, your repos, your access rules.",
  },
  {
    step: "04",
    when: "Week 4",
    title: "A decision based on something you have seen",
    body: "You keep, extend or stop. If you extend, the same team and the same reporting stay in place.",
  },
];

export const STACK = [
  {
    group: "Build",
    items: ["React 19", "Next.js", "Node.js", ".NET 9", "Spring Boot", "FastAPI", "Flutter", "Kotlin", "Swift"],
  },
  {
    group: "AI",
    items: ["OpenAI", "Claude", "Gemini", "LangGraph", "CrewAI", "Model Context Protocol", "pgvector", "RAG", "promptfoo"],
  },
  {
    group: "Data",
    items: ["Databricks", "Snowflake", "Microsoft Fabric", "dbt", "Kafka", "Power BI", "Tableau"],
  },
  {
    group: "Platform",
    items: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Terraform", "Argo CD", "GitHub Actions", "Backstage", "Playwright", "k6"],
  },
];

export const TRAINING = {
  corporate: [
    "Generative AI and agentic AI engineering",
    "AI literacy for every employee",
    "Machine learning and MLOps",
    "Data engineering and lakehouse",
    "Analytics and BI",
    "Cloud: AWS, Azure, Google Cloud",
    "DevOps and platform engineering",
    "Testing, automation and security",
  ],
  institutes: [
    "Faculty development programmes",
    "Industry-readiness bootcamp",
    "Placement readiness: aptitude, coding, interviews",
    "NEP-aligned credit and add-on courses",
    "AI, GenAI and data science certification",
    "Cloud and DevOps certification",
  ],
};

export const INDUSTRIES = [
  { name: "BFSI and fintech", note: "Onboarding, KYC, lending workflows, UPI and payments" },
  { name: "Insurance", note: "Document AI, claims intake, policy servicing" },
  { name: "Healthcare", note: "Clinical data pipelines, scheduling, compliance reporting" },
  { name: "Education and edtech", note: "Learning platforms, assessments, faculty programmes" },
  { name: "Retail and e-commerce", note: "Catalogues, pricing, order and returns systems" },
  { name: "Manufacturing", note: "Shop-floor data, maintenance, supplier portals" },
  { name: "Energy and solar", note: "Plant telemetry, monitoring, field service apps" },
  { name: "Logistics", note: "Route planning, tracking, warehouse integrations" },
  { name: "Real estate", note: "Listing platforms, CRM, document workflows" },
  { name: "Startups and SaaS", note: "MVPs, multi-tenant platforms, usage billing" },
];

export const FAQS = [
  {
    q: "Where are you based, and who do you work with?",
    a: "Offices in Greater Noida West, India and Louisville, Kentucky. Clients are across India and the United States. The two locations overlap: US clients meet us during their own business day while delivery continues in India.",
  },
  {
    q: "Will you sign an NDA before we share details?",
    a: "Yes, from the first conversation if you prefer. Team members are bound by confidentiality terms, and access to client systems is limited to the people working on the engagement, with MFA and access removed at exit.",
  },
  {
    q: "How does an engagement actually start?",
    a: "A 30-minute call, then a written proposal inside 48 hours covering scope, approach, team, timeline and commercials. If it's right, we sign, agree a kickoff date and name one person who stays with you for the whole engagement.",
  },
  {
    q: "Who owns the code and the IP?",
    a: "You do. Work happens in repositories and cloud accounts you own, with IP assignment written into the agreement.",
  },
  {
    q: "How do you price work, and how do we pay?",
    a: "Fixed scope, monthly team or milestone billing for projects; success fees for permanent hiring; per-batch pricing for training. Indian clients are invoiced in INR with GST-compliant invoices, international clients in USD.",
  },
  {
    q: "Do you work with companies smaller than yours?",
    a: "Yes. Engagements range from one contract engineer or a single key hire to a 40-person centre build and a 120-person training programme. The model scales down as readily as it scales up.",
  },
];

export const HOME_STATS = [
  { value: "2019", label: "Founded" },
  { value: "50+", label: "Clients" },
  { value: "200+", label: "IT professionals placed" },
  { value: "500+", label: "Professionals trained" },
];

export const ABOUT = {
  hero: {
    title: "A small firm built around one team, not three departments.",
    lead: "Laprrk started in 2019. We build software, place engineers and train teams from offices in Greater Noida and Louisville. The same senior people work across all three.",
    facts: HOME_STATS,
  },
  story: {
    title: "The hand-off was the problem.",
    paragraphs: [
      "Most companies buy software from one supplier, engineers from a second and training from a third. Each supplier is measured on its own scope, so the hand-offs between them become the client's problem.",
      "Laprrk keeps the three practices on one bench. The engineer who reviews a candidate has run the same stack in production. The trainer who leads a lab has shipped the system being taught. The team that scopes a build can staff it and teach it.",
      "That does not make us the largest firm on your list. It makes one team accountable for the whole path, from the first shortlist to the code your team maintains after we leave.",
    ],
  },
  principles: {
    title: "How we work when nobody is watching the demo.",
    lead: "Four rules we apply to every engagement, whether it is one contract engineer or a 120-person programme.",
    items: [
      {
        title: "The person who scopes it runs it.",
        body: "There is no hand-off to a delivery manager you meet after signing. The lead from the proposal stays with the engagement.",
      },
      {
        title: "Write it down before building it.",
        body: "Scope, team, timeline and price arrive in writing, usually within 48 hours of a 30-minute call.",
      },
      {
        title: "Work in your accounts.",
        body: "Repositories, cloud accounts and access rules stay yours. IP assignment is written into the agreement.",
      },
      {
        title: "Leave a team that can maintain it.",
        body: "Tests, pipelines and documentation are part of the work, not a phase added at the end.",
      },
    ],
  },
};

export const CONTACT_PAGE = {
  hero: {
    title: "Tell us what is stuck.",
    lead: "A short brief is enough. You will get a reply within one business day from the person who would run the work, not a qualification form.",
  },
  routes: {
    title: "Three ways to start.",
    lead: "Choose the route that fits the question. All three reach the same team.",
    items: [
      {
        title: "Book a 30-minute call",
        body: "A working conversation with the lead who would run the engagement. No deck, no sales sequence.",
        meta: "Calendar opens over this page",
        action: "book",
      },
      {
        title: "Message on WhatsApp",
        body: "Fastest route for a short question, a role or a document you want reviewed before a call.",
        meta: "Reply within one business day",
        action: "whatsapp",
      },
      {
        title: "Send an email",
        body: "Useful when you already have a brief, a system diagram or a timeline to share.",
        meta: CONTACT.email,
        action: "email",
      },
    ],
  },
  brief: {
    title: "What to put in the first message.",
    lead: "You do not need a specification. Four lines are usually enough to make the first call useful.",
    items: [
      "The part that is stuck: a system, a role, a team or a deadline.",
      "What already exists: the stack, the team and the constraints.",
      "When it needs to happen and who signs off.",
      "What you have already tried, if anything.",
    ],
    promises: [
      "One business day for a reply.",
      "A written proposal within 48 hours of the call.",
      "A mutual NDA before sensitive details are shared.",
      "A 30-minute call, not a paid discovery project.",
    ],
  },
};

export const SERVICE_GROUPS = [
  {
    id: "apps",
    name: "Build and apps",
    lead: "Product engineering, web, mobile and commerce.",
    services: [
      "Custom software development",
      "Web application development",
      "Mobile app development",
      "UI/UX and product discovery",
      "E-commerce builds",
    ],
  },
  {
    id: "ai-data",
    name: "AI and data",
    lead: "Applied GenAI, agents, data platforms and BI.",
    services: [
      "Generative AI and LLM applications",
      "Agentic AI and workflow automation",
      "Data engineering, analytics and BI",
    ],
  },
  {
    id: "cloud",
    name: "Cloud and platform",
    lead: "Migration, DevOps, APIs and managed support.",
    services: [
      "Cloud services and migration",
      "DevOps and platform engineering",
      "API and legacy modernisation",
      "CMS and content platforms",
      "Managed support and SRE",
    ],
  },
  {
    id: "quality",
    name: "Quality, security and enterprise",
    lead: "Testing, hardening, ERP and CRM.",
    services: [
      "QA and test automation",
      "AI and LLM testing",
      "Cybersecurity and security reviews",
      "ERP, CRM and Power Platform",
    ],
  },
];

export const SERVICES_PAGE = {
  hero: {
    title: "Software built to keep running after the demo.",
    lead: "Product engineering, applied AI, data platforms and cloud. Work happens in your repositories and your cloud accounts, with a working demo at the end of every two-week sprint.",
    facts: [
      { value: "17", label: "Build services" },
      { value: "2 weeks", label: "Sprint length" },
      { value: "48h", label: "Written proposal" },
    ],
  },
  scope: {
    title: "Four groups, one delivery team.",
    lead: "The service list is long because the work is. Every group is delivered by the same bench, with one lead who stays accountable from scope to release.",
  },
  standards: {
    title: "What is in the repository when we leave.",
    lead: "A working demo is not a deliverable on its own. These four things ship with every build, because they are what lets your team keep moving without us.",
    items: [
      {
        title: "Tests that run on every change",
        body: "Unit and integration coverage around the parts that break, wired into the pipeline rather than kept on a laptop.",
      },
      {
        title: "A pipeline you can read",
        body: "Build, test and deploy steps in your CI, with environments named the same way your team names them.",
      },
      {
        title: "Documentation at the point of change",
        body: "Architecture decisions, runbooks and setup notes kept next to the code, not in a folder nobody opens.",
      },
      {
        title: "A handover that happens early",
        body: "Your engineers join code review from the first sprint, so the knowledge transfer is continuous rather than a final meeting.",
      },
    ],
  },
};

export const HIRING_PAGE = {
  hero: {
    title: "A shortlist you can interview, not a stack of CVs.",
    lead: "Permanent, contract and leadership hiring, screened by engineers who have done the job. The first shortlist arrives in five to seven business days.",
    facts: [
      { value: "5–7 days", label: "To first shortlist" },
      { value: "200+", label: "IT professionals placed" },
      { value: "19", label: "Hiring routes & roles" },
    ],
  },
  categories: [
    {
      id: "services",
      name: "Hiring services",
      lead: "Engagement models spanning permanent search, contract-to-hire, staff augmentation, and GCC setup.",
      items: [
        { label: "Permanent IT Recruitment", slug: "permanent-recruitment", note: "Direct hire engineers who stay with 90-day replacement" },
        { label: "Contract Staffing & Contract-to-Hire", slug: "contract-staffing", note: "Immediate capacity with zero conversion fee after 6 months" },
        { label: "IT Staff Augmentation & Dedicated Teams", slug: "staff-augmentation", note: "Embedded engineering squads working inside your repos" },
        { label: "GCC & India Team Setup Hiring", slug: "gcc-setup", note: "Site leadership first, then foundation squads of 20–50" },
        { label: "Executive & Leadership Search", slug: "executive-search", note: "Discreet search for VPs, CTOs and Directors of Engineering" },
        { label: "Recruitment Process Outsourcing (RPO)", slug: "rpo", note: "Embedded technical recruiters and interviewers for your pipeline" },
        { label: "Campus Hiring & Hire-Train-Deploy", slug: "campus-hiring", note: "Top graduates trained on your tech stack before Day One" },
        { label: "US IT Staffing (W2, C2C & Contract-to-Hire)", slug: "us-it-staffing", note: "Compliant US talent managed from our Louisville office" },
        { label: "Technical Assessment & Interview-as-a-Service", slug: "technical-assessment", note: "45-minute live coding screens conducted by senior developers" },
        { label: "Diversity & Women-in-Tech Hiring", slug: "diversity-hiring", note: "Targeted sourcing for high-performing, balanced engineering teams" },
      ],
    },
    {
      id: "roles",
      name: "Roles we recruit",
      lead: "Practitioner-vetted talent across core distributed systems, cloud, data, and applied AI.",
      items: [
        { label: "Java & JVM", slug: "role-java-jvm", note: "Spring Boot, high-throughput microservices, memory optimization" },
        { label: ".NET & Microsoft", slug: "role-dotnet-microsoft", note: ".NET 8, C#, Azure cloud-native architectures, EF Core" },
        { label: "Python, Go & Backend", slug: "role-python-backend", note: "FastAPI, Goroutines, gRPC, distributed queues (Kafka/RabbitMQ)" },
        { label: "JavaScript & Frontend", slug: "role-javascript-frontend", note: "React, Next.js, TypeScript, Core Web Vitals, state management" },
        { label: "Mobile", slug: "role-mobile", note: "React Native, Flutter, Swift, Kotlin, offline-first architectures" },
        { label: "Cloud & Infrastructure", slug: "role-cloud-infrastructure", note: "AWS, Azure, GCP, multi-region failover, Kubernetes, FinOps" },
        { label: "DevOps, SRE & Platform", slug: "role-devops-platform", note: "Terraform IaC, ArgoCD GitOps, observability, zero-downtime CI/CD" },
        { label: "Data Engineering & Analytics", slug: "role-data-engineering", note: "Databricks, Snowflake, dbt, lakehouses, idempotent pipelines" },
        { label: "Data Science, AI/ML & GenAI", slug: "role-ai-ml-genai", note: "LLM engineering, RAG pipelines, LangGraph/CrewAI, MLOps" },
      ],
    },
  ],
  process: {
    title: "From brief to shortlist.",
    lead: "A short, dated process. You should know whether the search is working by the end of the first week.",
    steps: [
      {
        when: "Day 0",
        title: "A 30-minute calibration call",
        body: "The stack, the team, the must-haves and the compromises you will not make.",
      },
      {
        when: "Days 1–3",
        title: "Screening by engineers",
        body: "Candidates are checked against the actual work, not keyword overlap.",
      },
      {
        when: "Days 5–7",
        title: "First shortlist",
        body: "A small set you can interview, with notes on what each person has shipped.",
      },
      {
        when: "Weeks 2–4",
        title: "Interviews and offer",
        body: "We stay in the process through feedback, offer and joining.",
      },
    ],
  },
  models: {
    title: "Ways to hire.",
    lead: "The commercial shape follows the role. Every option starts with the same calibration call.",
    rows: [
      {
        model: "Permanent hire",
        priced: "Success fee after joining",
        best: "A key role you want on payroll",
        start: "First shortlist in 5–7 days",
      },
      {
        model: "Contract staffing",
        priced: "Monthly, per engineer",
        best: "Short-term capacity with a known end date",
        start: "Profiles in 5–7 days",
      },
      {
        model: "Dedicated team",
        priced: "Monthly, per person-month",
        best: "An ongoing roadmap you keep extending",
        start: "Team live in 2–3 weeks",
      },
      {
        model: "Hire–train–deploy",
        priced: "Per cohort, 8–12 weeks",
        best: "A fresher pipeline you can plan around",
        start: "Intake aligned to your calendar",
      },
    ],
  },
};

export const TRAINING_PAGE = {
  hero: {
    title: "Training that ends with something built.",
    lead: "Live, lab-based programmes for corporate engineering teams and institutes. About 70% of every programme is hands-on, and each track closes with a production capstone reviewed by a senior engineer.",
    facts: [
      { value: "500+", label: "Professionals trained" },
      { value: "~70%", label: "Lab time" },
      { value: "38%", label: "Average score lift" },
    ],
  },
  categories: [
    {
      id: "corporate",
      name: "For IT corporates",
      lead: "Role-based engineering tracks built on your actual production stack, cloud infrastructure, and repos.",
      items: [
        { label: "Generative AI & Agentic AI", slug: "generative-ai-agentic-ai", note: "Build production RAG pipelines, LangGraph agents, and model routing" },
        { label: "AI Productivity & AI Literacy for All Employees", slug: "ai-productivity-literacy", note: "Copilot integration, structured prompt engineering, and report automation" },
        { label: "AI/ML & MLOps", slug: "aiml-mlops", note: "Package models into Docker containers, automate feature stores, and monitor drift" },
        { label: "Data Engineering & Lakehouse", slug: "data-engineering-lakehouse", note: "Databricks, Snowflake, dbt transformations, and Medallion architectures" },
        { label: "Data Analytics & BI (Power BI, Tableau)", slug: "data-analytics-bi", note: "Advanced DAX, Star Schema data modeling, and executive dashboards" },
        { label: "Cloud: AWS, Azure & Google Cloud", slug: "cloud-aws-azure-gcp", note: "Cloud-native microservices, serverless compute, and cost governance" },
        { label: "DevOps, Kubernetes & DevSecOps", slug: "devops-kubernetes-devsecops", note: "Helm charts, ingress controllers, ArgoCD GitOps, and container security" },
        { label: "Platform Engineering & SRE", slug: "platform-engineering-sre", note: "Backstage developer portals, Terraform IaC, and SLO/SLI monitoring" },
        { label: "Cybersecurity & Secure Coding", slug: "cybersecurity-secure-coding", note: "OWASP Top 10 remediation, threat modeling, and SAST/DAST pipelines" },
        { label: "Software Testing & Test Automation", slug: "software-testing-automation", note: "Playwright, Cypress, microservice contract tests, and k6 performance" },
      ],
    },
    {
      id: "institutes",
      name: "For institutes",
      lead: "Faculty programmes, student bootcamps, NEP-aligned credit courses, and Centre of Excellence setup.",
      items: [
        { label: "Faculty Development Programmes (FDP)", slug: "faculty-development-fdp", note: "Equipping CS faculty with modern cloud, GenAI, and Git workflows" },
        { label: "Industry-Readiness Bootcamp for Students", slug: "industry-readiness-bootcamp", note: "Immersive 8–12 week full-stack bootcamps with production code reviews" },
        { label: "Placement Readiness Programme", slug: "placement-readiness", note: "Aptitude mastery, live coding screens, and system design interviews" },
        { label: "NEP-aligned Credit & Add-on Courses", slug: "nep-aligned-credit-courses", note: "Outcome-based credit courses with formal university grading rubrics" },
        { label: "AI, GenAI & Data Science Certification", slug: "ai-genai-data-science-cert", note: "Hands-on predictive models, fine-tuning, and cloud deployments" },
        { label: "Cloud & DevOps Certification Programme", slug: "cloud-devops-cert", note: "Practical Linux, Docker containerization, and GitHub Actions" },
        { label: "Cybersecurity Certification Programme", slug: "cybersecurity-cert", note: "Ethical hacking, packet inspection, Linux hardening, and web defense" },
        { label: "Software Testing & QA Career Programme", slug: "software-testing-qa-career", note: "Test case design, Playwright automation, and Postman API testing" },
        { label: "Hackathons, Live Projects & Internships", slug: "hackathons-projects-internships", note: "48-hour hackathons and semester capstones mentored by practitioners" },
        { label: "Centre of Excellence & Lab Setup", slug: "centre-of-excellence-lab-setup", note: "Turnkey AI, Cloud & Cyber lab infrastructure for university campuses" },
      ],
    },
  ],
  process: {
    title: "How a programme runs.",
    lead: "The format is fixed even when the content changes. That is what makes the result measurable.",
    steps: [
      {
        when: "Week 1",
        title: "Role map and baseline",
        body: "We agree the roles, the starting point and what good looks like after the programme.",
      },
      {
        when: "Weeks 1–2",
        title: "Assessment",
        body: "A short assessment sets the baseline, so the lift can be measured at the end.",
      },
      {
        when: "Weeks 2–11",
        title: "Labs and code review",
        body: "Roughly 70% of the time is hands-on, on the stack your team actually uses.",
      },
      {
        when: "Week 12",
        title: "Capstone and re-assessment",
        body: "Each participant ships a reviewed project and sits the same assessment again.",
      },
    ],
  },
};

export const RESOURCES_PAGE = {
  hero: {
    title: "The details buyers ask for before the first call.",
    lead: "Engagement models, a dated first month, the stack, sectors and the answers that usually come up before signing. All on one page, with no lead gate.",
  },
  links: [
    { label: "Our work", href: "#work" },
    { label: "Engagement models", href: "#engagements" },
    { label: "The first 30 days", href: "#process" },
    { label: "Technology", href: "#stack" },
    { label: "Industries", href: "#industries" },
    { label: "Questions", href: "#faq" },
  ],
};

export const BOTTOM_CTA = {
  title: "Give us thirty minutes and one real problem.",
  body: "Talk directly with a senior engineering lead. We scope your technical goals, map actionable next steps, and deliver a written proposal within 48 hours.",
  note: "NDA before details · written proposal within 48 hours · no retainer",
  primary: "Book a 30-minute call",
  secondary: "Message us on WhatsApp",
};

export const FOOTER = {
  tagline:
    "Software, engineers and trained teams from one partner. Delivery from Greater Noida, client hours from Louisville.",
  columns: [
    {
      title: "Services",
      links: [
        { label: "IT Services", href: "/it-services/custom-software" },
        { label: "Hiring", href: "/hiring/permanent-recruitment" },
        { label: "Training", href: "/training" },
        { label: "Case Studies", href: "/case-studies" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Blog & Insights", href: "/blog" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ],
};
