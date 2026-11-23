// Production-Grade Technical Insights & Engineering Guides
// Strictly adhering to Laprrk's engineering voice: specific, practitioner-led, zero marketing fluff.

export const BLOG_POSTS = [
  {
    id: "rag-chunking-hybrid-search",
    slug: "rag-chunking-hybrid-search",
    title: "Moving Beyond Toy RAG: Chunking Strategies, Metadata Filtering & Hybrid Vector Search",
    kicker: "Applied AI Systems",
    category: "Applied AI & GenAI",
    readTime: "8 min read",
    date: "November 2024",
    image: "/images/blog/rag-hybrid-search.jpg",
    lead: "Why naive cosine similarity on fixed-token chunks fails on enterprise legal and insurance documents, and how hierarchical chunking with Reciprocal Rank Fusion (RRF) cuts retrieval hallucinations below 2%.",
    takeaways: [
      "Fixed 512-token chunking destroys nested table context and cross-clause contract dependencies.",
      "Hybrid search combining dense embeddings (pgvector) with sparse lexical search (BM25) provides 34% better recall on domain acronyms.",
      "Document metadata injection at ingestion time enables deterministic pre-filtering before semantic retrieval.",
      "Re-ranking with cross-encoders filters out semantically adjacent but factually irrelevant chunks.",
    ],
    sections: [
      {
        heading: "The Failure of Fixed-Window Chunking",
        content: `Most proof-of-concept RAG systems use arbitrary text splitters that cut documents every 500 or 1,000 characters. In legal agreements, policy wordings, or regulatory filings, this invariably splits an exclusion clause from the section header it modifies. When queried, the vector database returns an isolated snippet that lacks the governing caveat, leading the LLM to generate confident but legally inverted statements.

In our production insurance document assistant, we switched from arbitrary character splitting to document-tree-aware hierarchical chunking. The parser extracts hierarchical headings (e.g., Section 4 -> Subsection B -> Clause 2) and prepends the full structural breadcrumb to every child paragraph before embedding. Even if a small clause is retrieved in isolation, the embedding captures its legal hierarchy.`,
      },
      {
        heading: "Hybrid Search: Dense Vector + Sparse BM25 via Reciprocal Rank Fusion",
        content: `Dense embeddings excel at conceptual semantic matching (e.g., matching "water ingress" with "flood damage"), but consistently fail at exact identifier retrieval—such as policy numbers, specific ISO standard codes, or statutory abbreviations like 'STPI' or 'GDPR'.

To solve this, our production pipelines run dual queries in parallel:
1. Dense vector search via pgvector (HNSW index with cosine distance).
2. Sparse lexical search using BM25 with language-specific stemming.

We combine the two candidate lists using Reciprocal Rank Fusion (RRF):
\`\`\`
RRF_Score(d) = \\sum_{m \\in M} \\frac{1}{k + r_m(d)}
\`\`\`
Setting k=60 balances dense and sparse rankings reliably, lifting domain recall by 34% compared to vector search alone.`,
      },
      {
        heading: "Cross-Encoder Re-Ranking Before Context Window Injection",
        content: `Retrieving top-10 chunks from a vector store often introduces 3 or 4 distractor chunks that share vocabulary but do not answer the prompt. Feeding these directly to the context window degrades generation accuracy.

We route the top-10 hybrid results through a lightweight cross-encoder (such as bge-reranker-large) running on a warm CPU container. The cross-encoder evaluates the query and document chunk simultaneously, assigning an absolute relevance score. Only chunks scoring above a 0.65 threshold are injected into the final LLM prompt.`,
      },
    ],
  },
  {
    id: "deterministic-playwright-testing",
    slug: "deterministic-playwright-testing",
    title: "Deterministic End-to-End Testing with Playwright: Eliminating Flaky Tests in CI/CD",
    kicker: "Quality Engineering",
    category: "Software Testing & QA",
    readTime: "6 min read",
    date: "October 2024",
    image: "/images/blog/playwright-testing.jpg",
    lead: "How to replace arbitrary sleep() delays with web-first locator assertions, manage ephemeral database state per worker, and run 400+ parallel browser tests in under 4 minutes.",
    takeaways: [
      "Hard-coded sleep calls represent race conditions waiting to fail on slower CI runners.",
      "Playwright auto-waiting and web-first assertions guarantee actionability before firing events.",
      "Database seeding must happen via isolated database schemas or tenant IDs rather than global fixtures.",
      "Sharding test suites across parallel GitHub Actions runners reduces release cycle times by 80%.",
    ],
    sections: [
      {
        heading: "The Root Cause of CI Flakiness",
        content: `Test flakiness is almost never a testing framework bug; it is an assertion timing mismatch. When developers test locally on an 8-core workstation, asynchronous DOM updates render in 50ms. On a shared GitHub Actions runner under load, the same render might take 450ms. If the test relied on a manual \`waitForTimeout(200)\`, it passes locally and randomly fails on CI.

Playwright eliminates this through web-first assertions:
\`\`\`ts
// BAD: Manual timeout waiting for a selector
await page.waitForTimeout(500);
await page.click('[data-testid="submit-btn"]');

// GOOD: Auto-waiting locator assertion
const submitBtn = page.getByRole('button', { name: 'Submit order' });
await expect(submitBtn).toBeVisible();
await expect(submitBtn).toBeEnabled();
await submitBtn.click();
\`\`\`
Playwright's locators continually poll the DOM until the element is visible, stable, enabled, and receiving pointer events.`,
      },
      {
        heading: "Isolated Ephemeral Database State Per Worker",
        content: `When running 8 parallel test workers, two tests operating on the same customer record will create collision errors. Rather than resetting the whole database between tests, we generate a unique tenant or workspace schema for each test context:
\`\`\`ts
test('processes monthly batch invoice', async ({ page }) => {
  const tenant = await createEphemeralTenant({ seed: 'active_subscription' });
  await page.goto(\`/\${tenant.id}/billing\`);
  // Test runs entirely isolated from parallel workers
});
\`\`\`
This allows 400+ end-to-end tests to execute simultaneously without data cross-contamination.`,
      },
    ],
  },
  {
    id: "why-leetcode-fails-senior-hiring",
    slug: "why-leetcode-fails-senior-hiring",
    title: "Why LeetCode Screens Fail for Senior Engineers (And How We Calibrate 45-Minute Practitioner Interviews)",
    kicker: "IT Hiring & Talent",
    category: "IT Hiring",
    readTime: "7 min read",
    date: "October 2024",
    image: "/images/blog/practitioner-hiring.jpg",
    lead: "Senior engineers don't invert binary trees in production. How our practicing senior developers test Git commit hygiene, architectural trade-offs, and live debugging while maintaining an 88% offer-to-join ratio.",
    takeaways: [
      "Competitive programming puzzles test algorithmic memorization, not production software craftsmanship.",
      "45-minute live debugging sessions reveal more about seniority than 3 hours of whiteboard syntax tests.",
      "Evaluating notice period risk upfront is what separates successful shortlists from counter-offer dropouts.",
      "Practitioner-led technical screening saves internal engineering teams over 70% of initial interview hours.",
    ],
    sections: [
      {
        heading: "The Disconnect Between Puzzles and Production",
        content: `A candidate who spends two months grinding Dynamic Programming puzzles on LeetCode can often pass automated algorithmic screens without knowing how to structure a modular database transaction, handle a distributed lock in Redis, or diagnose a memory leak in Node.js.

Conversely, a staff engineer who has maintained a high-throughput payment microservice for four years might fail a puzzle interview simply because they have not memorized Dijkstra's algorithm since college.`,
      },
      {
        heading: "The 4-Dimension Practitioner Screen",
        content: `Every candidate presented by Laprrk is interviewed by an active senior developer who writes production code in that exact stack. We structure the 45-minute technical screen around four pillars:
1. **Real Git Repository Walkthrough:** The candidate shares a real project or walks through open-source commits, explaining design choices, boundary tests, and dependencies.
2. **System Architecture Trade-Offs:** We present a realistic system failure scenario (e.g., handling 10,000 webhook events per second with sudden downstream latency) and evaluate their reasoning on queues, backpressure, and idempotency.
3. **Live Production Bug Triage:** We give the candidate a small repository with a failing integration test and observe their debugging process, log parsing, and test assertions.
4. **Notice & Stability Calibration:** We verify their actual resignation timeline, salary expectations, and counter-offer likelihood upfront.`,
      },
    ],
  },
  {
    id: "70-30-engineering-upskilling-framework",
    slug: "70-30-engineering-upskilling-framework",
    title: "The 70/30 Engineering Upskilling Framework: Moving Enterprise Teams from Slides to Production Repos",
    kicker: "Corporate Training",
    category: "Corporate Training",
    readTime: "5 min read",
    date: "September 2024",
    image: "/images/blog/engineering-upskilling.jpg",
    lead: "How our corporate cohorts achieve a verified 38% average assessment score lift by replacing theoretical slide decks with 70% hands-on cloud sandbox coding and production capstone defenses.",
    takeaways: [
      "Traditional video-and-slide training suffers from an average 80% knowledge decay within two weeks.",
      "70% hands-on lab time builds muscle memory in real cloud sandboxes and Git workflows.",
      "Pre-cohort baseline assessments paired with post-cohort defenses quantify real engineering ROI.",
      "Capstone projects built on the client's actual production stack ensure immediate day-one applicability.",
    ],
    sections: [
      {
        heading: "The PowerPoint Trap in Enterprise Training",
        content: `Most corporate technical training fails because it treats software engineering as an observational discipline. Engineers watch a four-hour slide deck on microservices or AI, complete a trivial multiple-choice quiz, and return to their desks having typed zero lines of real code.

Within fourteen days, over 80% of the theoretical knowledge evaporates. When tasked with implementing the pattern in a production repository, they run into real-world complexities—authentication middleware, database migrations, CI/CD secrets—that were never addressed in the slides.`,
      },
      {
        heading: "The Laprrk 70/30 Formula",
        content: `Every cohort run by Laprrk enforces a strict rule: 30% architectural concepts, 70% active lab time.
- **Dedicated Cloud Sandboxes:** Each engineer receives an isolated AWS/Azure/GCP environment with pre-configured dev containers.
- **Guided Broken Labs:** Rather than typing tutorial code, engineers are given repositories with intentional architectural flaws, memory leaks, and broken CI pipelines that they must diagnose and resolve.
- **Capstone Defense:** The programme concludes with a working software capstone evaluated and defended in front of engineering leadership. In our recent 120-engineer GenAI upskilling programme, this resulted in an average 38% verified assessment improvement across three engineering tracks.`,
      },
    ],
  },
  {
    id: "pragmatic-multi-region-kubernetes",
    slug: "pragmatic-multi-region-kubernetes",
    title: "Pragmatic Multi-Region Kubernetes: Balancing Resilience Against Latency and Cloud Egress Costs",
    kicker: "Cloud & DevOps Architecture",
    category: "Cloud & Infrastructure",
    image: "/images/blog/kubernetes-multi-region.jpg",
    readTime: "9 min read",
    date: "September 2024",
    lead: "When to choose active-passive failover over complex active-active multi-region clusters, and how to govern Kubernetes ingress and distributed state without doubling cloud egress bills.",
    takeaways: [
      "Active-active multi-region Kubernetes clusters introduce distributed data replication delays that complicate consistency.",
      "Active-passive regional failover with automated DNS health checks satisfies 99.95% of enterprise RTO/RPO requirements.",
      "Cross-region data transfer egress is frequently the largest unexpected line-item on cloud invoices.",
      "Terraform and GitOps (ArgoCD) must enforce regional configuration parity while decoupling stateful databases.",
    ],
    sections: [
      {
        heading: "The Active-Active Temptation",
        content: `Many engineering teams default to an active-active multi-region Kubernetes design in pursuit of 'five nines' availability. However, unless the application has partitioned users geographically with zero cross-region transactions, active-active architectures require distributed multi-master database replication (such as CockroachDB or Spanner).

For most B2B enterprise applications, synchronous cross-region replication adds 60–120ms of round-trip latency to every database write, while asynchronous replication introduces split-brain risks during network partitions.`,
      },
      {
        heading: "The Pragmatic Active-Passive Architecture",
        content: `For 95% of SaaS workloads, a cold or warm standby secondary region provides superior operational stability with a fraction of the cost:
1. Primary region handles 100% of live traffic with read-replicas in the secondary region.
2. Infrastructure as Code (Terraform) maintains identical cluster manifests in the secondary region via GitOps.
3. Automated route-53 health-check failover triggers database promotion and pod scaling within 4 minutes.
This keeps multi-region recovery point objectives (RPO) under 60 seconds while eliminating continuous cross-region data transfer egress expenses.`,
      },
    ],
  },
  {
    id: "first-forty-hires-india-gcc-roadmap",
    slug: "first-forty-hires-india-gcc-roadmap",
    title: "The First 40 Hires: An Architectural Roadmap for US Tech Firms Setting Up India Engineering Centres",
    kicker: "Leadership & GCC",
    category: "Leadership & GCC",
    image: "/images/blog/gcc-roadmap.jpg",
    readTime: "7 min read",
    date: "August 2024",
    lead: "Why hiring site leadership first anchors team culture, and how to phase from a foundation team of 10–20 to full product ownership without quality erosion.",
    takeaways: [
      "Hiring junior developers before senior site leadership leads to fragmented engineering standards and high attrition.",
      "Phase 1 must recruit a technical site leader and principal architects who set the bar for subsequent hires.",
      "Synchronizing batch offers accounts for 60 to 90-day Indian notice periods without creating project lag.",
      "A proven 88%+ offer-to-join ratio requires continuous pre-boarding engagement and formal resignation verification.",
    ],
    sections: [
      {
        heading: "The Sequence Matters More Than the Sourcing",
        content: `When US software companies set up an India Global Capability Centre (GCC), the common mistake is treating recruitment as a numbers game—attempting to hire 30 developers simultaneously through generalist staffing agencies.

Without an in-country technical leader who understands the company's architectural ethos, the early hires operate without clear technical direction. The result is inconsistent pull requests, culture friction with the US engineering team, and over 30% first-year turnover.`,
      },
      {
        heading: "The 3-Phase GCC Sourcing Playbook",
        content: `In our work establishing India centres (including our verified case study placing 40 engineers in eight months for a Louisville-based SaaS firm), we follow a strict three-phase cadence:
- **Phase 1 (Months 1–2): Site Leader & Lead Architect:** Recruit the Managing Director / VP of Engineering and Lead Architect. They review US repositories, align on engineering standards, and co-interview all subsequent candidates.
- **Phase 2 (Months 2–4): Foundation Squad (10–20 Engineers):** Staff senior backend, frontend, DevOps, and QA leads who take ownership of the first self-contained microservices.
- **Phase 3 (Months 4–8): Scale Squads (Seats 21–40):** Expand with mid-level engineers, early talent, and cross-functional feature teams under established engineering mentorship.

By managing weekly candidate engagement throughout the 60–90 day notice periods, we maintained an 88% offer-to-join ratio and a 94% first-year retention rate across all 40 hires.`,
      },
    ],
  },
];

