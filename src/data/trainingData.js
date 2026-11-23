// Comprehensive, Production-Grade IT Training Data
// Laprrk Technology Solutions - Distinct Visual Template Architecture
// Strictly verified client metrics (founded 2019, 500+ trained, ~70% lab time, 38% assessment improvement, 120-engineer cohorts)

export const TRAINING_DATA = {
  "generative-ai-agentic-ai": {
    "id": "generative-ai-agentic-ai",
    "slug": "generative-ai-agentic-ai",
    "title": "Generative AI & Agentic AI",
    "category": "For IT corporates",
    "categorySlug": "corporate",
    "heroKicker": "Applied AI Engineering Cohorts · Greater Noida & Louisville",
    "headline": "Build Production RAG Pipelines and Multi-Agent Workflows",
    "lead": "A hands-on, lab-driven curriculum where engineers move beyond prompt wrappers to build verifiable RAG systems, LangGraph agentic workflows, model routing, and vector index architectures.",
    "facts": [
      {
        "num": "~70%",
        "label": "Hands-on lab time"
      },
      {
        "num": "38%",
        "label": "Average assessment lift"
      },
      {
        "num": "120 Eng",
        "label": "Max cohort capacity"
      }
    ],
    "specs": [
      "Hands-On Lab Ratio: ~70% live sandbox coding, 30% architectural deep-dives",
      "Frameworks Covered: LangChain, LangGraph, LlamaIndex, vLLM, pgvector, Qdrant",
      "Evaluation Rigor: Ragas automated testing, hallucination mitigation, token cost budgets",
      "Capstone Deliverable: Deploying a multi-agent autonomous support engine with human-in-the-loop review"
    ],
    "terminalSnippet": {
      "filename": "agent_graph.py",
      "code": "from langgraph.graph import StateGraph, END\nworkflow = StateGraph(AgentState)\nworkflow.add_node('retriever', hybrid_vector_search)\nworkflow.add_node('evaluator', ragas_faithfulness_gate)\nworkflow.add_conditional_edges('evaluator', route_by_confidence)\napp = workflow.compile()"
    },
    "benchmarks": [
      {
        "skill": "Hybrid Retrieval & Reranking",
        "pre": 42,
        "post": 91,
        "delta": "+49%"
      },
      {
        "skill": "LangGraph State Machine Agents",
        "pre": 34,
        "post": 88,
        "delta": "+54%"
      },
      {
        "skill": "Vector Index Optimization (HNSW)",
        "pre": 50,
        "post": 94,
        "delta": "+44%"
      },
      {
        "skill": "Automated Hallucination Evals",
        "pre": 38,
        "post": 90,
        "delta": "+52%"
      }
    ],
    "syllabus": [
      {
        "module": "01",
        "duration": "Weeks 1–2",
        "title": "Embeddings & Vector Database Architecture",
        "desc": "Chunking heuristics, dense vs sparse representations, HNSW index parameter tuning in pgvector and Qdrant.",
        "deliverable": "Custom chunking & embedding pipeline with automated benchmark evaluation"
      },
      {
        "module": "02",
        "duration": "Weeks 3–4",
        "title": "Advanced RAG & Hybrid Retrieval",
        "desc": "Contextual compression, reciprocal rank fusion (RRF), cross-encoder rerankers, and metadata filtering.",
        "deliverable": "Production RAG engine handling complex multi-table enterprise PDFs"
      },
      {
        "module": "03",
        "duration": "Weeks 5–6",
        "title": "Agentic Workflows with LangGraph",
        "desc": "Cyclic state graphs, tool-calling schema validation, memory persistence, and human-in-the-loop intervention.",
        "deliverable": "Multi-agent research and synthesis workflow with parallel tool execution"
      },
      {
        "module": "04",
        "duration": "Weeks 7–8",
        "title": "LLM Serving, FinOps & Production Capstone",
        "desc": "Self-hosting open-source LLMs with vLLM, semantic prompt caching with Redis, token cost guardrails, and defense.",
        "deliverable": "End-to-end deployed AI agent with automated Ragas regression testing"
      }
    ],
    "caseStudy": {
      "client": "Enterprise FinTech SaaS Provider · 80-Engineer Cohort",
      "challenge": "Product engineering team struggled with high OpenAI API token bills and erratic hallucinations in their customer-facing query assistant.",
      "solution": "Laprrk delivered an 8-week corporate training cohort covering hybrid RAG, semantic caching, and local model fallback.",
      "results": [
        {
          "num": "80",
          "label": "Engineers trained & certified"
        },
        {
          "num": "62%",
          "label": "LLM token cost reduction"
        },
        {
          "num": "38%",
          "label": "Post-cohort assessment lift"
        }
      ]
    },
    "faqs": [
      {
        "q": "Is this training just prompt engineering or actual software development?",
        "a": "This is 100% applied software engineering. We build vector search algorithms, implement stateful agent graphs, configure model serving infrastructure, and code automated evaluation pipelines."
      },
      {
        "q": "Do you provide GPU sandboxes for engineers during the labs?",
        "a": "Yes. Every participating engineer receives an isolated cloud sandbox with dedicated GPU compute pre-loaded with models, vector databases, and test datasets."
      },
      {
        "q": "Can the syllabus be customized to our internal enterprise architecture?",
        "a": "Yes. We tailor our corporate training cohorts to integrate with your existing cloud vendor (AWS Bedrock, Azure OpenAI, or GCP Vertex AI) and security policies."
      },
      {
        "q": "How is engineer learning progress verified?",
        "a": "We administer an initial baseline technical assessment, weekly automated lab grading, and a final capstone project defense judged by our senior architects."
      }
    ]
  },
  "ai-productivity-literacy": {
    "id": "ai-productivity-literacy",
    "slug": "ai-productivity-literacy",
    "title": "AI Productivity & AI Literacy for All Employees",
    "category": "For IT corporates",
    "categorySlug": "corporate",
    "heroKicker": "Enterprise Workforce Enablement · Greater Noida & Louisville",
    "headline": "Equip Non-Technical and Technical Teams with Practical AI Workflows",
    "lead": "Transform everyday business operations across marketing, sales, HR, finance, and engineering with secure, policy-compliant AI productivity tools and workflow automation.",
    "facts": [
      {
        "num": "5–8 Hrs",
        "label": "Weekly time saved per employee"
      },
      {
        "num": "100%",
        "label": "Enterprise data privacy compliant"
      },
      {
        "num": "120 Cohort",
        "label": "Scalable training batches"
      }
    ],
    "specs": [
      "Audience Scope: Cross-functional teams (Operations, HR, Finance, Marketing, Product Managers)",
      "Tooling Stack: Microsoft Copilot, Claude Enterprise, ChatGPT Team, Notion AI, Zapier Central",
      "Enterprise Governance: Preventing data leaks, customer PII protection, copyright risk awareness",
      "Delivery Format: 4-week interactive bootcamp with real department-specific productivity capstones"
    ],
    "terminalSnippet": {
      "filename": "policy_guardrail.json",
      "code": "{\n  \"enterprise_policy\": \"Zero-Data-Retention\",\n  \"pii_masking\": [\"SSN\", \"PAN\", \"IBAN\", \"CreditCard\"],\n  \"allowed_domains\": [\"internal-docs\", \"confluence\", \"jira\"],\n  \"enforcement\": \"BLOCK_AND_AUDIT_LOG\"\n}"
    },
    "benchmarks": [
      {
        "skill": "Structured Prompting & Iteration",
        "pre": 46,
        "post": 93,
        "delta": "+47%"
      },
      {
        "skill": "Document Analysis & Data Synthesis",
        "pre": 52,
        "post": 95,
        "delta": "+43%"
      },
      {
        "skill": "Enterprise Security & PII Protection",
        "pre": 38,
        "post": 96,
        "delta": "+58%"
      },
      {
        "skill": "No-Code Workflow Automation",
        "pre": 30,
        "post": 86,
        "delta": "+56%"
      }
    ],
    "syllabus": [
      {
        "module": "01",
        "duration": "Week 1",
        "title": "AI Mental Models & Security Guardrails",
        "desc": "How modern LLMs reason, prompt decomposition, hallucinations vs facts, and strict enterprise data governance policies.",
        "deliverable": "Personal AI security pledge & validated workspace setup with zero data training"
      },
      {
        "module": "02",
        "duration": "Week 2",
        "title": "Departmental Productivity Workflows",
        "desc": "Accelerating email synthesis, RFP responses, spreadsheet analysis, customer support drafts, and meeting transcripts.",
        "deliverable": "5 reusable departmental prompt templates saving 1+ hour daily"
      },
      {
        "module": "03",
        "duration": "Week 3",
        "title": "Advanced Data Extraction & Document Analysis",
        "desc": "Uploading and querying financial balance sheets, legal contracts, HR policies, and creating structured reports.",
        "deliverable": "Automated document audit synthesizing 50-page complex PDF reports"
      },
      {
        "module": "04",
        "duration": "Week 4",
        "title": "No-Code AI Automation & Capstone Showcase",
        "desc": "Connecting AI models to Slack, Gmail, Google Sheets, and CRM tools via Zapier/Make without writing code.",
        "deliverable": "Live automated departmental workflow demonstrating verified time savings"
      }
    ],
    "caseStudy": {
      "client": "Mid-Sized IT Services Firm · 120-Employee Rollout",
      "challenge": "Employees were using unauthorized personal ChatGPT accounts with company data, while leadership lacked structured AI adoption metrics.",
      "solution": "Laprrk delivered a company-wide AI literacy programme establishing enterprise Copilot usage, security protocols, and departmental templates.",
      "results": [
        {
          "num": "120",
          "label": "Employees trained"
        },
        {
          "num": "6.5 Hrs",
          "label": "Average weekly time saved"
        },
        {
          "num": "Zero",
          "label": "Security or data leakage incidents"
        }
      ]
    },
    "faqs": [
      {
        "q": "Do employees need programming or math backgrounds for this course?",
        "a": "No. This program is specifically designed for cross-functional business professionals: sales, marketing, operations, finance, HR, and project managers."
      },
      {
        "q": "How do you address corporate data privacy and confidentiality?",
        "a": "We train employees exclusively on enterprise-grade tools with zero-data-retention terms and teach rigorous techniques for redacting sensitive PII and confidential IP."
      },
      {
        "q": "Can you train cohorts across multiple office locations simultaneously?",
        "a": "Yes. We deliver live interactive hybrid cohorts via Zoom/Teams with dedicated breakout coaching sessions across our Greater Noida and Louisville hubs."
      },
      {
        "q": "How do we measure the ROI of this training for our company?",
        "a": "We benchmark weekly hours saved per employee, measure adoption of approved automation templates, and conduct pre vs post productivity audits."
      }
    ]
  },
  "aiml-mlops": {
    "id": "aiml-mlops",
    "slug": "aiml-mlops",
    "title": "AI/ML & MLOps",
    "category": "For IT corporates",
    "categorySlug": "corporate",
    "heroKicker": "Applied Machine Learning · Greater Noida & Louisville",
    "headline": "Deploy, Monitor, and Scale Machine Learning Models in Production",
    "lead": "Move models out of Jupyter notebooks and into resilient production systems. Master feature stores, automated CI/CD for ML, drift detection, and low-latency inference pipelines.",
    "facts": [
      {
        "num": "~70%",
        "label": "Hands-on lab time"
      },
      {
        "num": "38%",
        "label": "Average assessment lift"
      },
      {
        "num": "120 Eng",
        "label": "Max cohort capacity"
      }
    ],
    "specs": [
      "MLOps Tooling: MLflow, Kubeflow Pipelines, Feast Feature Store, BentoML, Triton Inference Server",
      "Model Lifecycle: Automated retraining triggers, model registry versioning, A/B canary routing",
      "Observability: Evidently AI data drift, concept drift monitoring, latency telemetry",
      "Target Engineers: Data scientists, ML engineers, backend developers transitioning to ML platforms"
    ],
    "terminalSnippet": {
      "filename": "mlops_pipeline.py",
      "code": "from feast import FeatureStore\nimport mlflow\nfs = FeatureStore(repo_path='.')\nwith mlflow.start_run():\n    model = train_xgboost(fs.get_historical_features())\n    mlflow.sklearn.log_model(model, 'credit_risk_v2')\n    evidently_eval_drift(model, baseline_data)"
    },
    "benchmarks": [
      {
        "skill": "Model Registry & Versioning (MLflow)",
        "pre": 45,
        "post": 92,
        "delta": "+47%"
      },
      {
        "skill": "Kubeflow Pipeline Automation",
        "pre": 32,
        "post": 87,
        "delta": "+55%"
      },
      {
        "skill": "Feature Store Architecture (Feast)",
        "pre": 36,
        "post": 89,
        "delta": "+53%"
      },
      {
        "skill": "Data Drift Detection & Monitoring",
        "pre": 40,
        "post": 93,
        "delta": "+53%"
      }
    ],
    "syllabus": [
      {
        "module": "01",
        "duration": "Weeks 1–2",
        "title": "Production ML Architecture & Feature Stores",
        "desc": "Designing online/offline feature sync with Feast, reproducible training pipelines, and data leakage prevention.",
        "deliverable": "Working Feast feature store syncing Redis (online) and PostgreSQL (offline)"
      },
      {
        "module": "02",
        "duration": "Weeks 3–4",
        "title": "Experiment Tracking & Automated Pipelines",
        "desc": "Building automated training pipelines with Kubeflow, MLflow model registries, artifact tracking, and metadata stores.",
        "deliverable": "Complete CI/CD pipeline triggering automated model re-training on GitHub commit"
      },
      {
        "module": "03",
        "duration": "Weeks 5–6",
        "title": "Low-Latency Model Serving (Triton & BentoML)",
        "desc": "Packaging models into containerized microservices, dynamic batching, GPU inference optimization, and gRPC endpoints.",
        "deliverable": "Triton-served inference container delivering <20ms p99 latency under load"
      },
      {
        "module": "04",
        "duration": "Weeks 7–8",
        "title": "Drift Monitoring, Canary Deployments & Capstone",
        "desc": "Evidently AI drift detection, shadow deployments, automated rollbacks, and enterprise capstone defense.",
        "deliverable": "Fully monitored production ML service with automated canary rollback on drift"
      }
    ],
    "caseStudy": {
      "client": "FinTech Credit Underwriting Engine · 45-Engineer Batch",
      "challenge": "Client's data scientists spent 8 weeks deploying each new credit risk model due to lack of automated CI/CD and manual feature extraction.",
      "solution": "Laprrk delivered an 8-week MLOps bootcamp migrating the team to Feast feature stores, MLflow, and automated Kubernetes deployment pipelines.",
      "results": [
        {
          "num": "45",
          "label": "Engineers upskilled"
        },
        {
          "num": "3 Days",
          "label": "Model deployment time (from 8 weeks)"
        },
        {
          "num": "100%",
          "label": "Feature consistency between training and serving"
        }
      ]
    },
    "faqs": [
      {
        "q": "What prerequisite background is needed for this MLOps program?",
        "a": "Participants should have solid Python fundamentals and basic familiarity with machine learning models (scikit-learn, XGBoost, or PyTorch)."
      },
      {
        "q": "Does this training cover deployment on Kubernetes?",
        "a": "Yes. A core component of our MLOps curriculum is deploying model serving pods on Kubernetes using BentoML and Triton with autoscaling."
      },
      {
        "q": "How do you simulate production data drift in the labs?",
        "a": "We inject realistic covariate shift and concept drift into streaming event pipelines, requiring engineers to configure automated alert triggers and retraining DAGs."
      },
      {
        "q": "What certification or credentials do participants receive?",
        "a": "Engineers receive a verified Laprrk Production MLOps Engineering Certificate complete with their GitHub capstone repository showcase."
      }
    ]
  },
  "data-engineering-lakehouse": {
    "id": "data-engineering-lakehouse",
    "slug": "data-engineering-lakehouse",
    "title": "Data Engineering & Lakehouse",
    "category": "For IT corporates",
    "categorySlug": "corporate",
    "heroKicker": "Modern Data Platforms · Greater Noida & Louisville",
    "headline": "Apache Spark, Delta Lake, Snowflake, and dbt Pipeline Mastery",
    "lead": "Equip your data teams to architect modern lakehouse platforms: Spark optimization, Delta Lake / Apache Iceberg ACID transactions, modular dbt transformations, and Airflow orchestration.",
    "facts": [
      {
        "num": "~70%",
        "label": "Hands-on lab time"
      },
      {
        "num": "38%",
        "label": "Average assessment lift"
      },
      {
        "num": "120 Eng",
        "label": "Max cohort capacity"
      }
    ],
    "specs": [
      "Modern Lakehouse Stack: Apache Spark 3.5, Databricks, Snowflake, Delta Lake, dbt Core, Airflow",
      "Architectural Pattern: Medallion Architecture (Bronze -> Silver -> Gold layers), streaming CDC with Debezium",
      "Performance Engineering: Eliminating data skew, adaptive query execution, z-ordering, compaction",
      "Data Quality: Great Expectations automated assertion testing, dbt schema validation"
    ],
    "terminalSnippet": {
      "filename": "lakehouse_spark.py",
      "code": "from delta.tables import DeltaTable\nspark.conf.set('spark.sql.adaptive.enabled', 'true')\ndf_bronze = spark.readStream.format('kafka').load()\ndf_silver = clean_and_deduplicate(df_bronze)\ndf_silver.writeStream.format('delta').partitionBy('event_date')\\\n    .outputMode('append').start('/lakehouse/silver')"
    },
    "benchmarks": [
      {
        "skill": "Spark Partition Tuning & Skew Mitigation",
        "pre": 44,
        "post": 93,
        "delta": "+49%"
      },
      {
        "skill": "Delta Lake ACID & Time Travel",
        "pre": 38,
        "post": 91,
        "delta": "+53%"
      },
      {
        "skill": "dbt Modular Transformation & Tests",
        "pre": 48,
        "post": 95,
        "delta": "+47%"
      },
      {
        "skill": "Airflow Dynamic Orchestration",
        "pre": 51,
        "post": 92,
        "delta": "+41%"
      }
    ],
    "syllabus": [
      {
        "module": "01",
        "duration": "Weeks 1–2",
        "title": "Distributed Spark Internals & Optimization",
        "desc": "Memory management (Storage vs Execution), Catalyst Optimizer, broadcast joins, salting keys to fix data skew.",
        "deliverable": "Optimized PySpark pipeline reducing 400M row join execution time by 75%"
      },
      {
        "module": "02",
        "duration": "Weeks 3–4",
        "title": "Lakehouse Storage: Delta Lake & Iceberg",
        "desc": "ACID transactions on cloud object stores, schema enforcement, time travel queries, vacuum, and OPTIMIZE z-ordering.",
        "deliverable": "Multi-hop Medallion architecture with automated CDC streaming ingestion"
      },
      {
        "module": "03",
        "duration": "Weeks 5–6",
        "title": "dbt Core Modeling & Data Quality",
        "desc": "Dimensional modeling, incremental models, custom dbt macros, schema tests, and Great Expectations assertions.",
        "deliverable": "Modular dbt project generating analytics-ready dimensional marts with automated testing"
      },
      {
        "module": "04",
        "duration": "Weeks 7–8",
        "title": "Orchestration, CI/CD & Production Capstone",
        "desc": "Dynamic Airflow DAGs, Dockerized pipeline execution, data lineage dashboards, and enterprise capstone defense.",
        "deliverable": "End-to-end automated data pipeline running in isolated cloud sandbox with CI/CD gates"
      }
    ],
    "caseStudy": {
      "client": "Telecom Analytics Platform · 60-Engineer Batch",
      "challenge": "Client's legacy batch ETL jobs were failing nightly due to memory OOMs, delaying daily executive billing dashboards by 7 hours.",
      "solution": "Laprrk delivered an 8-week hands-on training cohort in Spark memory tuning, Delta Lake, and dbt incremental processing.",
      "results": [
        {
          "num": "60",
          "label": "Engineers certified"
        },
        {
          "num": "78%",
          "label": "Nightly batch runtime reduction"
        },
        {
          "num": "Zero",
          "label": "OOM pipeline failures post-training"
        }
      ]
    },
    "faqs": [
      {
        "q": "Can this program focus on either Databricks or Snowflake?",
        "a": "Yes. We tailor the curriculum to match your enterprise platform: Databricks Unity Catalog & Delta Lake, Snowflake Snowpark & Streams, or a hybrid environment."
      },
      {
        "q": "How much of the curriculum is theoretical vs lab-based?",
        "a": "Approximately 70% of total cohort time is spent writing code in interactive cloud sandboxes solving real data scale challenges."
      },
      {
        "q": "Do engineers learn how to troubleshoot real Spark cluster crashes?",
        "a": "Yes. We give engineers intentionally misconfigured Spark jobs with severe data skew and memory pressure, teaching them to read Spark UI event logs and fix root causes."
      },
      {
        "q": "How do you assess individual engineer competency?",
        "a": "Every engineer is evaluated through automated code grading on GitHub PRs and defends an end-to-end capstone project in front of senior data architects."
      }
    ]
  },
  "data-analytics-bi": {
    "id": "data-analytics-bi",
    "slug": "data-analytics-bi",
    "title": "Data Analytics & BI (Power BI, Tableau)",
    "category": "For IT corporates",
    "categorySlug": "corporate",
    "heroKicker": "Business Intelligence & Analytics · Greater Noida & Louisville",
    "headline": "Advanced DAX, Star Schema Modeling, and Executive BI Dashboards",
    "lead": "Move analysts beyond basic chart building. Master enterprise Power BI and Tableau: Star Schema dimensional modeling, complex DAX calculations, row-level security, and automated refresh pipelines.",
    "facts": [
      {
        "num": "~70%",
        "label": "Hands-on lab time"
      },
      {
        "num": "38%",
        "label": "Average assessment lift"
      },
      {
        "num": "120 Eng",
        "label": "Max cohort capacity"
      }
    ],
    "specs": [
      "BI Platforms: Microsoft Power BI (Service, Desktop, Report Builder), Tableau Desktop & Server",
      "Data Modeling: Kimball dimensional star schemas, avoiding bidirectional relationships, surrogate keys",
      "Advanced Analytics: Complex DAX (CALCULATE, time intelligence, iterator functions), Tableau LOD expressions",
      "Enterprise Governance: Row-Level Security (RLS), workspace governance, scheduled incremental refresh"
    ],
    "terminalSnippet": {
      "filename": "sales_intelligence.dax",
      "code": "YoY_Revenue_Growth = \nVAR CurrentYear = [Total Revenue]\nVAR PriorYear = CALCULATE([Total Revenue], SAMEPERIODLASTYEAR('Calendar'[Date]))\nRETURN\nDIVIDE(CurrentYear - PriorYear, PriorYear, 0)"
    },
    "benchmarks": [
      {
        "skill": "Star Schema Dimensional Modeling",
        "pre": 47,
        "post": 94,
        "delta": "+47%"
      },
      {
        "skill": "Complex DAX / LOD Calculations",
        "pre": 35,
        "post": 89,
        "delta": "+54%"
      },
      {
        "skill": "Enterprise Row-Level Security (RLS)",
        "pre": 42,
        "post": 93,
        "delta": "+51%"
      },
      {
        "skill": "Performance Analyzer & Query Tuning",
        "pre": 39,
        "post": 91,
        "delta": "+52%"
      }
    ],
    "syllabus": [
      {
        "module": "01",
        "duration": "Weeks 1–2",
        "title": "Data Modeling Fundamentals & Star Schemas",
        "desc": "Kimball methodology, fact vs dimension tables, resolving many-to-many relationships, surrogate keys, and Power Query ETL.",
        "deliverable": "Clean star schema data model constructed from messy transactional database tables"
      },
      {
        "module": "02",
        "duration": "Weeks 3–4",
        "title": "DAX Mastery & Advanced Calculations",
        "desc": "Row context vs filter context, CALCULATE internals, time intelligence (YTD, MTD, YoY), iterators (SUMX, AVERAGEX).",
        "deliverable": "Suite of 15 advanced DAX measures powering executive financial KPIs"
      },
      {
        "module": "03",
        "duration": "Weeks 5–6",
        "title": "Executive UX, Visualization & Performance Tuning",
        "desc": "Visual hierarchy, accessible color palettes, custom tooltip pages, Performance Analyzer, and VertiPaq engine tuning.",
        "deliverable": "Silky, sub-second interactive executive dashboard with drill-through navigation"
      },
      {
        "module": "04",
        "duration": "Weeks 7–8",
        "title": "Enterprise Power BI Service Governance & Capstone",
        "desc": "Row-Level Security (RLS), deployment pipelines, incremental data refresh, scheduled exports, and capstone presentation.",
        "deliverable": "Fully governed enterprise BI app deployed with dynamic multi-tenant security roles"
      }
    ],
    "caseStudy": {
      "client": "Retail Banking Operations · 50-Analyst Cohort",
      "challenge": "Analysts built sluggish reports with 40-second refresh times and frequent DAX calculation errors that misled branch managers.",
      "solution": "Laprrk delivered an 8-week corporate bootcamp restructuring data models into clean star schemas and training analysts in DAX best practices.",
      "results": [
        {
          "num": "50",
          "label": "Analysts certified"
        },
        {
          "num": "<2s",
          "label": "Dashboard query load time (from 40s)"
        },
        {
          "num": "100%",
          "label": "Report accuracy across 180 branches"
        }
      ]
    },
    "faqs": [
      {
        "q": "Can the training cover Tableau instead of Power BI?",
        "a": "Yes. We offer dedicated tracks for Tableau (Tableau Prep, Desktop, Server, LOD expressions) or Microsoft Power BI based on your company stack."
      },
      {
        "q": "Do analysts learn how to handle complex data transformation in Power Query?",
        "a": "Yes. We teach advanced M code in Power Query for pivoting, unpivoting, merging messy data sources, and optimizing query folding."
      },
      {
        "q": "How do you teach performance optimization for large datasets?",
        "a": "We use DAX Studio and Power BI Performance Analyzer to diagnose expensive visual queries and eliminate unneeded columns from the VertiPaq in-memory engine."
      },
      {
        "q": "Is this program suitable for business analysts with intermediate Excel skills?",
        "a": "Yes. The curriculum begins with data modeling concepts and progressively scales into advanced enterprise calculations."
      }
    ]
  },
  "cloud-aws-azure-gcp": {
    "id": "cloud-aws-azure-gcp",
    "slug": "cloud-aws-azure-gcp",
    "title": "Cloud: AWS, Azure & Google Cloud",
    "category": "For IT corporates",
    "categorySlug": "corporate",
    "heroKicker": "Enterprise Multi-Cloud · Greater Noida & Louisville",
    "headline": "Hands-On Multi-Cloud Migration, Governance, and Microservices",
    "lead": "Train engineering teams to design, secure, and operate enterprise cloud infrastructure on AWS, Azure, and Google Cloud with Terraform infrastructure as code and zero-trust security.",
    "facts": [
      {
        "num": "~70%",
        "label": "Hands-on lab time"
      },
      {
        "num": "38%",
        "label": "Average assessment lift"
      },
      {
        "num": "120 Eng",
        "label": "Max cohort capacity"
      }
    ],
    "specs": [
      "Cloud Ecosystem: AWS (VPC, IAM, EKS, RDS, S3), Azure (AKS, Virtual WAN, SQL), GCP",
      "Infrastructure as Code: Terraform, Terragrunt, modular landing zones, state locking",
      "Security & Governance: AWS Control Tower, SCPs, IAM least-privilege, CIS Benchmarks",
      "FinOps: Cost Explorer, Spot instances, compute optimizer, rightsizing automation"
    ],
    "terminalSnippet": {
      "filename": "terraform_vpc.tf",
      "code": "module 'enterprise_vpc' {\n  source  = 'terraform-aws-modules/vpc/aws'\n  version = '5.0.0'\n  name = 'prod-vpc-us-east-1'\n  cidr = '10.100.0.0/16'\n  enable_nat_gateway = true\n  single_nat_gateway = false\n}"
    },
    "benchmarks": [
      {
        "skill": "Terraform Infrastructure as Code",
        "pre": 46,
        "post": 93,
        "delta": "+47%"
      },
      {
        "skill": "Multi-Account Security & IAM",
        "pre": 40,
        "post": 91,
        "delta": "+51%"
      },
      {
        "skill": "Cloud Networking & Transit Gateways",
        "pre": 38,
        "post": 89,
        "delta": "+51%"
      },
      {
        "skill": "FinOps & Cloud Cost Optimization",
        "pre": 35,
        "post": 92,
        "delta": "+57%"
      }
    ],
    "syllabus": [
      {
        "module": "01",
        "duration": "Weeks 1–2",
        "title": "Cloud Architecture & Modular Terraform",
        "desc": "Designing multi-tier VPCs, subnets, route tables, security groups, and writing reusable Terraform modules.",
        "deliverable": "Automated multi-tier VPC deployment using modular Terraform with remote state locking"
      },
      {
        "module": "02",
        "duration": "Weeks 3–4",
        "title": "Enterprise IAM, Secrets & Zero Trust",
        "desc": "AWS IAM permission boundaries, cross-account assume-role policies, Azure Managed Identities, Vault integration.",
        "deliverable": "Hardened least-privilege cloud environment with automated IAM compliance scanning"
      },
      {
        "module": "03",
        "duration": "Weeks 5–6",
        "title": "Container Orchestration & Managed Databases",
        "desc": "Deploying container workloads on Amazon EKS / Azure AKS, Aurora PostgreSQL failover, and redis caching.",
        "deliverable": "High-availability containerized microservice cluster with automated multi-AZ failover"
      },
      {
        "module": "04",
        "duration": "Weeks 7–8",
        "title": "Disaster Recovery, FinOps & Production Capstone",
        "desc": "Cross-region backup automation, RTO/RPO validation, Spot instance management, and capstone presentation.",
        "deliverable": "Resilient multi-region cloud architecture defense tested under simulated outage"
      }
    ],
    "caseStudy": {
      "client": "Healthcare Technology Provider · 75-Engineer Batch",
      "challenge": "Client suffered from manual cloud deployments resulting in inconsistent development environments and security audit flags.",
      "solution": "Laprrk delivered an 8-week multi-cloud training bootcamp establishing Terraform IaC standards and automated security scanning.",
      "results": [
        {
          "num": "75",
          "label": "Engineers certified"
        },
        {
          "num": "100%",
          "label": "Infrastructure automated in Terraform"
        },
        {
          "num": "Zero",
          "label": "Critical findings in HIPAA cloud audit"
        }
      ]
    },
    "faqs": [
      {
        "q": "Can the cohort focus exclusively on AWS or Azure rather than multi-cloud?",
        "a": "Yes. We tailor our corporate cloud cohorts specifically to your enterprise vendor: AWS-only, Azure-only, GCP-only, or multi-cloud."
      },
      {
        "q": "Are cloud accounts provided for the engineers during training?",
        "a": "Yes. Each engineer is provided with an isolated, pre-budgeted cloud sandbox account with automated resource cleanup."
      },
      {
        "q": "Does this training prepare engineers for official cloud certifications?",
        "a": "Yes. The curriculum aligns with the AWS Certified Solutions Architect and Azure Solutions Architect certification exams."
      },
      {
        "q": "How is student progress tracked across the 8 weeks?",
        "a": "We use GitHub Classroom to automatically test and grade infrastructure code submissions against security and syntax standards."
      }
    ]
  },
  "devops-kubernetes-devsecops": {
    "id": "devops-kubernetes-devsecops",
    "slug": "devops-kubernetes-devsecops",
    "title": "DevOps, Kubernetes & DevSecOps",
    "category": "For IT corporates",
    "categorySlug": "corporate",
    "heroKicker": "Production Platform Engineering · Greater Noida & Louisville",
    "headline": "Production Kubernetes, GitOps with ArgoCD, and Secure CI/CD",
    "lead": "Transform your software delivery pipeline. Train developers and operations teams to manage production Kubernetes clusters, implement ArgoCD GitOps, and embed automated security testing (DevSecOps).",
    "facts": [
      {
        "num": "~70%",
        "label": "Hands-on lab time"
      },
      {
        "num": "38%",
        "label": "Average assessment lift"
      },
      {
        "num": "120 Eng",
        "label": "Max cohort capacity"
      }
    ],
    "specs": [
      "Container Orchestration: Kubernetes internals, Helm charts, Ingress-NGINX, CNI networking, KEDA",
      "Continuous Delivery: ArgoCD GitOps, progressive canary releases with Argo Rollouts, GitHub Actions",
      "DevSecOps Pipeline: Trivy container vulnerability scanning, SonarQube SAST, Cosign artifact signing",
      "Target Engineers: Systems administrators, backend developers, release managers, DevOps engineers"
    ],
    "terminalSnippet": {
      "filename": "argo_rollout.yaml",
      "code": "apiVersion: argoproj.io/v1alpha1\nkind: Rollout\nmetadata:\n  name: payment-service\nspec:\n  strategy:\n    canary:\n      steps:\n      - setWeight: 20\n      - pause: {duration: 5m}\n      - analysis: {templates: [{templateName: http-error-rate}]}"
    },
    "benchmarks": [
      {
        "skill": "Kubernetes Cluster Debugging & Pods",
        "pre": 45,
        "post": 94,
        "delta": "+49%"
      },
      {
        "skill": "GitOps Delivery with ArgoCD",
        "pre": 32,
        "post": 92,
        "delta": "+60%"
      },
      {
        "skill": "DevSecOps Vulnerability Gates (SAST/DAST)",
        "pre": 39,
        "post": 90,
        "delta": "+51%"
      },
      {
        "skill": "Automated Canary Deployments",
        "pre": 36,
        "post": 91,
        "delta": "+55%"
      }
    ],
    "syllabus": [
      {
        "module": "01",
        "duration": "Weeks 1–2",
        "title": "Docker Optimization & Kubernetes Internals",
        "desc": "Multi-stage Docker builds, distroless images, Pod lifecycle, Services, Ingress controllers, and CNI networking.",
        "deliverable": "Hardened, multi-stage microservice image running on a local Kind/K3s cluster"
      },
      {
        "module": "02",
        "duration": "Weeks 3–4",
        "title": "Helm Packaging & Production Cluster Ops",
        "desc": "Creating modular Helm charts, configmaps/secrets, resource requests/limits, HPA, and node affinity rules.",
        "deliverable": "Production-ready Helm chart supporting multiple staging environments"
      },
      {
        "module": "03",
        "duration": "Weeks 5–6",
        "title": "ArgoCD GitOps & Progressive Rollouts",
        "desc": "Declarative GitOps architecture, automated sync, Argo Rollouts canary deployments, and Prometheus metrics gating.",
        "deliverable": "Automated Canary deployment pipeline that rolls back if error rate spikes above 1%"
      },
      {
        "module": "04",
        "duration": "Weeks 7–8",
        "title": "DevSecOps Security Scanning & Capstone",
        "desc": "Trivy image scanning in CI, Kyverno admission policies, secret management with Vault, and capstone presentation.",
        "deliverable": "End-to-end zero-trust CI/CD delivery pipeline with automated security gates"
      }
    ],
    "caseStudy": {
      "client": "E-Commerce SaaS Provider · 90-Engineer Batch",
      "challenge": "Client suffered 45-minute deployment outages and manual release coordination across 14 microservice repositories.",
      "solution": "Laprrk delivered an 8-week corporate training program migrating the engineering organization to Kubernetes and ArgoCD GitOps.",
      "results": [
        {
          "num": "90",
          "label": "Engineers upskilled"
        },
        {
          "num": "Zero",
          "label": "Downtime during production deployments"
        },
        {
          "num": "12 Min",
          "label": "PR-to-production deployment time"
        }
      ]
    },
    "faqs": [
      {
        "q": "Do engineers get hands-on experience breaking and fixing real clusters?",
        "a": "Yes. We run intentional chaos war-rooms where we break DNS, exhaust node memory, and misconfigure network policies for engineers to triage in real time."
      },
      {
        "q": "Can the training be delivered using our company's preferred CI tool?",
        "a": "Yes. While we feature GitHub Actions and GitLab CI, we easily adapt to Jenkins, Bitbucket Pipelines, or Azure DevOps."
      },
      {
        "q": "How does DevSecOps integrate into the course?",
        "a": "Security is not an afterthought; we teach automated vulnerability scans (Trivy), static code analysis (SonarQube), and secret scanning in every lab."
      },
      {
        "q": "What is the team size per cohort?",
        "a": "We support corporate cohorts from 15 engineers up to 120 engineers structured into interactive squads with dedicated mentor engineers."
      }
    ]
  },
  "platform-engineering-sre": {
    "id": "platform-engineering-sre",
    "slug": "platform-engineering-sre",
    "title": "Platform Engineering & SRE",
    "category": "For IT corporates",
    "categorySlug": "corporate",
    "heroKicker": "Internal Developer Platforms & Reliability · Greater Noida & Louisville",
    "headline": "Internal Developer Platforms (IDPs), Observability, and SRE Culture",
    "lead": "Move beyond ad-hoc DevOps tickets. Train platform teams to build self-service Internal Developer Platforms (Backstage), define real SLOs, and implement automated incident remediation.",
    "facts": [
      {
        "num": "~70%",
        "label": "Hands-on lab time"
      },
      {
        "num": "38%",
        "label": "Average assessment lift"
      },
      {
        "num": "120 Eng",
        "label": "Max cohort capacity"
      }
    ],
    "specs": [
      "Internal Developer Platforms: Backstage (Spotify IDP), Kratix, self-service developer portals",
      "Observability Stack: OpenTelemetry, Prometheus, Grafana, Loki, Tempo, Jaeger distributed tracing",
      "SRE Practices: Service Level Objectives (SLOs), error budgets, incident post-mortems, on-call runbooks",
      "Chaos Engineering: LitmusChaos, Chaos Mesh, simulated network latency, pod kill experiments"
    ],
    "terminalSnippet": {
      "filename": "slo_alert.promql",
      "code": "# Multi-window multi-burn-rate alert for 99.9% SLO\n(job:slo_errors_per_request:ratio_rate1h > (14.4 * 0.001))\nand\n(job:slo_errors_per_request:ratio_rate5m > (14.4 * 0.001))"
    },
    "benchmarks": [
      {
        "skill": "OpenTelemetry Instrumentation & Traces",
        "pre": 41,
        "post": 92,
        "delta": "+51%"
      },
      {
        "skill": "SLO / Error Budget Engineering",
        "pre": 35,
        "post": 90,
        "delta": "+55%"
      },
      {
        "skill": "Backstage IDP Catalog & Templates",
        "pre": 28,
        "post": 87,
        "delta": "+59%"
      },
      {
        "skill": "Chaos Engineering & Fault Injection",
        "pre": 34,
        "post": 91,
        "delta": "+57%"
      }
    ],
    "syllabus": [
      {
        "module": "01",
        "duration": "Weeks 1–2",
        "title": "Platform Product Management & IDPs",
        "desc": "Platform as a product, cognitive load reduction, building self-service developer templates with Backstage.",
        "deliverable": "Working Backstage developer portal with self-service Golden Path microservice scaffolding"
      },
      {
        "module": "02",
        "duration": "Weeks 3–4",
        "title": "Full-Stack Observability with OpenTelemetry",
        "desc": "Tracing distributed requests across microservices with OTel SDKs, collecting traces, logs, and metrics in Grafana.",
        "deliverable": "End-to-end distributed tracing pipeline resolving cross-service latency bottlenecks"
      },
      {
        "module": "03",
        "duration": "Weeks 5–6",
        "title": "SLO Engineering & Alert Fatigue Elimination",
        "desc": "Designing user-centric SLIs, multi-window multi-burn-rate alerts, error budget policies, and PagerDuty routing.",
        "deliverable": "Enterprise SLO dashboard with actionable alerts eliminating low-priority pager noise"
      },
      {
        "module": "04",
        "duration": "Weeks 7–8",
        "title": "Chaos Engineering & Production Capstone",
        "desc": "Running automated chaos experiments with Chaos Mesh, verifying self-healing architectures, and capstone presentation.",
        "deliverable": "Production-hardened microservice architecture that auto-recovers from injected faults"
      }
    ],
    "caseStudy": {
      "client": "Digital Banking Platform · 50-Engineer Platform Team",
      "challenge": "Developers waited 3 weeks for DevOps engineers to provision new microservice repositories, databases, and CI pipelines.",
      "solution": "Laprrk delivered an 8-week Platform Engineering program training the team to build a Backstage IDP with automated Golden Paths.",
      "results": [
        {
          "num": "50",
          "label": "Engineers upskilled"
        },
        {
          "num": "8 Min",
          "label": "New service provisioning (from 3 weeks)"
        },
        {
          "num": "42%",
          "label": "Reduction in internal developer support tickets"
        }
      ]
    },
    "faqs": [
      {
        "q": "What is the core difference between DevOps and Platform Engineering in this course?",
        "a": "DevOps focuses on automating deployment pipelines. Platform Engineering treats developer infrastructure as an internal product, building self-service portals that eliminate tickets entirely."
      },
      {
        "q": "Does the curriculum cover real OpenTelemetry instrumentation?",
        "a": "Yes. Engineers learn to manually instrument Java, Python, and Node.js applications with custom spans, baggage attributes, and context propagation."
      },
      {
        "q": "How do you teach SLOs and Error Budgets practically?",
        "a": "Engineers configure real Prometheus rules that calculate error budget burn rates and connect them to automated deployment freezes."
      },
      {
        "q": "What background should participants have?",
        "a": "Participants should be senior DevOps engineers, backend software architects, or systems engineers with existing Kubernetes experience."
      }
    ]
  },
  "cybersecurity-secure-coding": {
    "id": "cybersecurity-secure-coding",
    "slug": "cybersecurity-secure-coding",
    "title": "Cybersecurity & Secure Coding",
    "category": "For IT corporates",
    "categorySlug": "corporate",
    "heroKicker": "Application Security Engineering · Greater Noida & Louisville",
    "headline": "OWASP Top 10 Defenses, Threat Modeling, and Secure SDLC",
    "lead": "Train software engineers to write secure code from day one. Master real-world exploitation and remediation: SQL injection, SSRF, broken object-level authorization (BOLA), cryptographic mistakes, and SAST/DAST tooling.",
    "facts": [
      {
        "num": "~70%",
        "label": "Hands-on lab time"
      },
      {
        "num": "38%",
        "label": "Average assessment lift"
      },
      {
        "num": "120 Eng",
        "label": "Max cohort capacity"
      }
    ],
    "specs": [
      "Vulnerability Frameworks: OWASP Top 10 (Web & API Security), CWE Top 25, MITRE ATT&CK",
      "Offensive & Defensive Labs: Hands-on exploitation in vulnerable testbeds followed by code remediation",
      "Security Tooling: Semgrep SAST, OWASP ZAP DAST, Snyk dependency scanning, Burp Suite Community",
      "Enterprise Compliance: SOC 2, ISO 27001, HIPAA, PCI-DSS compliance coding standards"
    ],
    "terminalSnippet": {
      "filename": "semgrep_rule.yaml",
      "code": "rules:\n  - id: avoid-raw-sql-concatenation\n    pattern: query = f\"SELECT * FROM users WHERE id = '{...}'\"\n    message: \"Detected raw SQL formatting. Use parameterized queries.\"\n    severity: ERROR\n    languages: [python]"
    },
    "benchmarks": [
      {
        "skill": "OWASP Top 10 Exploitation & Patching",
        "pre": 40,
        "post": 93,
        "delta": "+53%"
      },
      {
        "skill": "API Security & BOLA Remediation",
        "pre": 35,
        "post": 91,
        "delta": "+56%"
      },
      {
        "skill": "Automated SAST Rules with Semgrep",
        "pre": 31,
        "post": 89,
        "delta": "+58%"
      },
      {
        "skill": "Secure Authentication & JWT Token Flow",
        "pre": 47,
        "post": 95,
        "delta": "+48%"
      }
    ],
    "syllabus": [
      {
        "module": "01",
        "duration": "Weeks 1–2",
        "title": "OWASP Web & API Top 10 Vulnerabilities",
        "desc": "Exploiting and fixing SQLi, SSRF, Cross-Site Scripting (XSS), and Broken Object-Level Authorization (BOLA).",
        "deliverable": "Remediated vulnerable API testbed passing automated security unit tests"
      },
      {
        "module": "02",
        "duration": "Weeks 3–4",
        "title": "Cryptographic Flaws, JWTs & Auth Security",
        "desc": "Proper password hashing (Argon2), secure JWT validation, asymmetric key management, and CSRF defense.",
        "deliverable": "Cryptographically secure authentication service with token rotation and revocation"
      },
      {
        "module": "03",
        "duration": "Weeks 5–6",
        "title": "Threat Modeling & Secure Code Reviews",
        "desc": "STRIDE threat modeling methodology, architecture reviews, writing custom Semgrep SAST rules for CI/CD.",
        "deliverable": "STRIDE threat model and custom Semgrep security rule pack for company codebases"
      },
      {
        "module": "04",
        "duration": "Weeks 7–8",
        "title": "DevSecOps Pipeline Integration & Red-Teaming Capstone",
        "desc": "Automated vulnerability gating in GitHub Actions, container scanning, and simulated red-team defense showcase.",
        "deliverable": "Hardened application that withstands live penetration testing during capstone defense"
      }
    ],
    "caseStudy": {
      "client": "FinTech Payments Gateway · 110-Developer Cohort",
      "challenge": "Client failed their annual SOC 2 Type II audit due to recurring OWASP vulnerabilities and insecure direct object references.",
      "solution": "Laprrk delivered an 8-week intensive Secure Coding bootcamp combining hands-on breach labs and automated Semgrep rules.",
      "results": [
        {
          "num": "110",
          "label": "Developers certified in secure coding"
        },
        {
          "num": "100%",
          "label": "SOC 2 security audit compliance achieved"
        },
        {
          "num": "84%",
          "label": "Reduction in security tickets opened per release"
        }
      ]
    },
    "faqs": [
      {
        "q": "Do developers actually hack in this course or is it purely theoretical compliance?",
        "a": "Developers actively exploit real vulnerabilities in dedicated sandbox environments using Burp Suite and Postman before writing the defensive code to patch them."
      },
      {
        "q": "Does this training cover API vulnerabilities like BOLA and BFLA?",
        "a": "Yes. We focus heavily on the OWASP API Security Top 10, particularly Broken Object Level Authorization (BOLA), which accounts for over 60% of modern API breaches."
      },
      {
        "q": "Can the program be tailored to Java, Python, or JavaScript specifically?",
        "a": "Yes. We run specialized language tracks (Java/Spring Boot, Python/FastAPI/Django, or Node.js/TypeScript) matching your engineering stack."
      },
      {
        "q": "How is completion certified for corporate compliance records?",
        "a": "Each engineer receives an individualized credential after passing the secure code review assessment and capstone project."
      }
    ]
  },
  "software-testing-automation": {
    "id": "software-testing-automation",
    "slug": "software-testing-automation",
    "title": "Software Testing & Test Automation",
    "category": "For IT corporates",
    "categorySlug": "corporate",
    "heroKicker": "Quality Engineering & Automation · Greater Noida & Louisville",
    "headline": "Playwright, Cypress, Selenium, and CI/CD Quality Engineering",
    "lead": "Transform manual testers into agile Software Development Engineers in Test (SDETs). Master modern end-to-end automation with Playwright, REST Assured API testing, performance benchmarking, and parallel CI execution.",
    "facts": [
      {
        "num": "~70%",
        "label": "Hands-on lab time"
      },
      {
        "num": "38%",
        "label": "Average assessment lift"
      },
      {
        "num": "120 Eng",
        "label": "Max cohort capacity"
      }
    ],
    "specs": [
      "E2E Automation: Playwright (TypeScript/Python), Cypress, Selenium 4, Page Object Model (POM)",
      "API Testing: REST Assured (Java), Supertest (Node), Postman CLI / Newman, contract testing with Pact",
      "Performance Testing: k6, JMeter load testing, response time SLAs, stress and endurance testing",
      "CI/CD Integration: Parallel sharding in GitHub Actions, Allure reporting, automated test flakiness mitigation"
    ],
    "terminalSnippet": {
      "filename": "e2e_spec.ts",
      "code": "import { test, expect } from '@playwright/test';\ntest('checkout flow under simulated network latency', async ({ page }) => {\n  await page.route('**/api/pay', route => route.fulfill({ status: 200 }));\n  await page.goto('/checkout');\n  await page.getByRole('button', { name: 'Confirm Order' }).click();\n  await expect(page.getByText('Order Placed Successfully')).toBeVisible();\n});"
    },
    "benchmarks": [
      {
        "skill": "Playwright E2E Automation Frameworks",
        "pre": 38,
        "post": 94,
        "delta": "+56%"
      },
      {
        "skill": "API Automation (REST Assured & Pact)",
        "pre": 42,
        "post": 92,
        "delta": "+50%"
      },
      {
        "skill": "k6 Performance & Load Testing",
        "pre": 30,
        "post": 88,
        "delta": "+58%"
      },
      {
        "skill": "CI/CD Test Sharding & Flakiness Fixes",
        "pre": 36,
        "post": 91,
        "delta": "+55%"
      }
    ],
    "syllabus": [
      {
        "module": "01",
        "duration": "Weeks 1–2",
        "title": "Modern E2E Automation with Playwright",
        "desc": "Page Object Model, auto-waiting, network mocking, multi-tab contexts, and handling complex dynamic UI elements.",
        "deliverable": "Robust Playwright automation suite running across Chromium, Firefox, and WebKit"
      },
      {
        "module": "02",
        "duration": "Weeks 3–4",
        "title": "API Test Automation & Contract Testing",
        "desc": "Automating REST APIs with REST Assured / Supertest, JSON schema validations, authentication tokens, and Pact contracts.",
        "deliverable": "Comprehensive API regression suite with automated JSON schema validation"
      },
      {
        "module": "03",
        "duration": "Weeks 5–6",
        "title": "Performance & Load Testing with k6",
        "desc": "Writing JavaScript load tests in k6, virtual user ramp-ups, testing p95/p99 latency thresholds, and endurance tests.",
        "deliverable": "k6 performance test suite identifying server saturation thresholds under 10k users"
      },
      {
        "module": "04",
        "duration": "Weeks 7–8",
        "title": "CI/CD Sharding, Reporting & SDET Capstone",
        "desc": "Running tests in parallel GitHub Actions matrix shards, generating Allure visual reports, and capstone presentation.",
        "deliverable": "High-speed parallel test pipeline cutting regression feedback time from 4 hours to 14 minutes"
      }
    ],
    "caseStudy": {
      "client": "SaaS Enterprise CRM Platform · 60-QA Cohort",
      "challenge": "Client relied on manual regression cycles taking 4 days before every bi-weekly release, causing severe release bottlenecks.",
      "solution": "Laprrk transitioned 60 manual QAs to SDETs with an 8-week Playwright and API automation training program.",
      "results": [
        {
          "num": "60",
          "label": "QAs transitioned to SDETs"
        },
        {
          "num": "92%",
          "label": "Regression testing automated"
        },
        {
          "num": "4 Days to 18 Min",
          "label": "Release verification cycle time"
        }
      ]
    },
    "faqs": [
      {
        "q": "Can manual testers with zero coding experience take this program?",
        "a": "Yes. We include a foundational programming bridge module (TypeScript or Java) to bring manual testers up to speed before diving into automation frameworks."
      },
      {
        "q": "Why do you emphasize Playwright over traditional Selenium?",
        "a": "Playwright provides modern web features like automatic waiting, native network interception, parallel execution, and zero flaky browser driver installations, making tests 3x faster."
      },
      {
        "q": "Do engineers learn how to execute tests in CI/CD pipelines?",
        "a": "Yes. Every lab includes running automated test suites inside GitHub Actions or GitLab CI with parallel browser sharding."
      },
      {
        "q": "How is engineer proficiency validated?",
        "a": "Engineers build an enterprise-grade automation framework from scratch, passing automated grading tests and a live architectural review."
      }
    ]
  },
  "faculty-development-fdp": {
    "id": "faculty-development-fdp",
    "slug": "faculty-development-fdp",
    "title": "Faculty Development Programmes (FDP)",
    "category": "For institutes",
    "categorySlug": "institutes",
    "heroKicker": "Academic Transformation · Greater Noida & Louisville",
    "headline": "Equip Computer Science Faculty with Live Production Engineering Practices",
    "lead": "Bridge the gap between academic theory and enterprise reality. We train engineering college faculty in modern industry stacks: cloud architecture, full-stack microservices, Git collaboration, and applied AI.",
    "facts": [
      {
        "num": "100%",
        "label": "Hands-on engineering labs"
      },
      {
        "num": "AICTE / UGC",
        "label": "Aligned curriculum standards"
      },
      {
        "num": "500+",
        "label": "Faculty members upskilled"
      }
    ],
    "specs": [
      "Curriculum Focus: Modern software development lifecycle (Agile, Git, CI/CD, Containerization)",
      "Pedagogical Support: Ready-to-teach lab manuals, lecture slides, coding assignments, and auto-graders",
      "Faculty Benefits: AICTE-recognized development credits, industry project exposure, certificate of completion",
      "Delivery Model: 1-week intensive or 2-week hybrid bootcamp with live code demonstrations"
    ],
    "terminalSnippet": {
      "filename": "fdp_lab_setup.sh",
      "code": "# Automated classroom lab deployment for university faculty\ngit clone https://github.com/laprrk/university-cs-labs.git\ncd university-cs-labs && ./setup_docker_sandboxes.sh\n# Deploying 60 student sandboxes with automated auto-grading"
    },
    "benchmarks": [
      {
        "skill": "Industry Git Workflow & PR Reviews",
        "pre": 42,
        "post": 92,
        "delta": "+50%"
      },
      {
        "skill": "Docker & Cloud Sandbox Management",
        "pre": 35,
        "post": 89,
        "delta": "+54%"
      },
      {
        "skill": "Modern Web & API Architectures",
        "pre": 48,
        "post": 94,
        "delta": "+46%"
      },
      {
        "skill": "Hands-On Capstone Project Mentoring",
        "pre": 40,
        "post": 91,
        "delta": "+51%"
      }
    ],
    "syllabus": [
      {
        "module": "01",
        "duration": "Days 1–2",
        "title": "Modern Software Engineering & Git Collaboration",
        "desc": "Git branching, PR reviews, merge conflict resolution, semantic versioning, and clean coding standards.",
        "deliverable": "Multi-contributor GitHub repository with automated branch protection and PR review rubric"
      },
      {
        "module": "02",
        "duration": "Days 3–4",
        "title": "Microservices, REST APIs & Docker Containers",
        "desc": "Containerizing Python and Java apps with Docker, building RESTful APIs, and basic Docker Compose multi-service stacks.",
        "deliverable": "Containerized multi-tier API stack deployed on local developer workstations"
      },
      {
        "module": "03",
        "duration": "Days 5–6",
        "title": "Applied AI & Cloud Foundations in the Classroom",
        "desc": "Introduction to prompt engineering, embedding APIs, cloud sandboxes on AWS/Azure, and university lab setups.",
        "deliverable": "Interactive classroom lab assignment incorporating modern AI API calls"
      },
      {
        "module": "04",
        "duration": "Days 7–8",
        "title": "Automated Grading & Student Mentorship Capstone",
        "desc": "Setting up GitHub Classroom, automated unit-test grading, capstone project rubrics, and faculty presentation.",
        "deliverable": "Complete 14-week semester course curriculum with auto-graded homework assignments"
      }
    ],
    "caseStudy": {
      "client": "State Engineering University Technical Faculty · 80 Professors",
      "challenge": "Computer science professors taught outdated C/C++ command-line programs, leaving graduates unable to pass industry coding tests.",
      "solution": "Laprrk delivered a 2-week Faculty Development Programme training 80 professors in modern Git, Docker, and full-stack development.",
      "results": [
        {
          "num": "80",
          "label": "Professors trained & certified"
        },
        {
          "num": "100%",
          "label": "Adopted GitHub Classroom for labs"
        },
        {
          "num": "45%",
          "label": "Increase in student placement clearance"
        }
      ]
    },
    "faqs": [
      {
        "q": "Is this FDP recognized for academic career advancement (CAS)?",
        "a": "Yes. Our Faculty Development Programmes provide formal certificates that fulfill AICTE/UGC professional development requirements for faculty appraisal."
      },
      {
        "q": "Do you provide ready-to-teach lab materials for professors?",
        "a": "Yes. Every participating professor receives complete slide decks, student coding exercises, Docker lab environments, and automated grading test suites."
      },
      {
        "q": "Can the FDP be conducted on-campus at our college?",
        "a": "Yes. We offer both on-campus physical training across engineering institutions in India and interactive virtual sessions."
      },
      {
        "q": "What technical prerequisites are expected from faculty?",
        "a": "Basic programming experience in any language (C, C++, Java, or Python). We build modern industry tooling skills from the ground up."
      }
    ]
  },
  "industry-readiness-bootcamp": {
    "id": "industry-readiness-bootcamp",
    "slug": "industry-readiness-bootcamp",
    "title": "Industry-Readiness Bootcamp for Students",
    "category": "For institutes",
    "categorySlug": "institutes",
    "heroKicker": "Campus to Corporate Acceleration · Greater Noida & Louisville",
    "headline": "Transform Computer Science Students into Day-One Deployable Engineers",
    "lead": "Move beyond theoretical college syllabi. An intensive, immersive bootcamp that trains pre-final and final-year engineering students on the exact tools, architectures, and agile rituals used by top software firms.",
    "facts": [
      {
        "num": "~70%",
        "label": "Hands-on lab time"
      },
      {
        "num": "38%",
        "label": "Average assessment lift"
      },
      {
        "num": "500+",
        "label": "Students upskilled"
      }
    ],
    "specs": [
      "Full-Stack Foundation: React, Node.js / Java Spring Boot, PostgreSQL, Docker, Git",
      "Production Experience: Building and deploying 3 real-world full-stack web applications to live cloud URLs",
      "Agile Immersion: Daily standups, 2-week sprints, Jira ticketing, and pull request code reviews",
      "Outcome: Students graduate with live portfolio links, strong GitHub commit histories, and technical interview confidence"
    ],
    "terminalSnippet": {
      "filename": "fullstack_app.sh",
      "code": "# Deploying production student capstone to live cloud URL\ndocker build -t campus-capstone:latest .\ndocker run -d -p 8080:8080 --env-file .env campus-capstone\ncurl https://student-project.laprrk.dev/api/health # 200 OK"
    },
    "benchmarks": [
      {
        "skill": "Production Git & Pull Request Reviews",
        "pre": 38,
        "post": 94,
        "delta": "+56%"
      },
      {
        "skill": "Full-Stack Web Architecture (React & APIs)",
        "pre": 42,
        "post": 92,
        "delta": "+50%"
      },
      {
        "skill": "Database Modeling & PostgreSQL",
        "pre": 46,
        "post": 90,
        "delta": "+44%"
      },
      {
        "skill": "Docker Containerization & Deployment",
        "pre": 28,
        "post": 88,
        "delta": "+60%"
      }
    ],
    "syllabus": [
      {
        "module": "01",
        "duration": "Weeks 1–3",
        "title": "Core Engineering Standards & Modern Web Stacks",
        "desc": "Clean code principles, asynchronous programming, modern TypeScript/JavaScript, and Git collaboration workflows.",
        "deliverable": "Interactive portfolio web app built with React and deployed to live production URL"
      },
      {
        "module": "02",
        "duration": "Weeks 4–6",
        "title": "REST APIs, Database Design & Authentication",
        "desc": "Building robust backend services with Node.js/Java, PostgreSQL schema design, JWT authentication, and input validation.",
        "deliverable": "Fully authenticated REST API service with automated postman test collection"
      },
      {
        "module": "03",
        "duration": "Weeks 7–9",
        "title": "Docker Containers, CI/CD & Cloud Basics",
        "desc": "Writing Dockerfiles, multi-stage builds, setting up automated GitHub Actions CI tests, and cloud hosting.",
        "deliverable": "Automated deployment pipeline running unit tests on every pull request"
      },
      {
        "module": "04",
        "duration": "Weeks 10–12",
        "title": "Enterprise Team Capstone & Mock Interviews",
        "desc": "Working in 4-person squads building a real product brief, sprint retrospectives, and live panel defense.",
        "deliverable": "Production-grade enterprise application live on the web presented to industry recruiters"
      }
    ],
    "caseStudy": {
      "client": "NCR Engineering College · 120-Student Final-Year Cohort",
      "challenge": "Only 22% of graduating engineering students were clearing technical coding rounds with IT services and product companies.",
      "solution": "Laprrk conducted a 12-week intensive Industry-Readiness Bootcamp focusing on live pair-coding, Git workflows, and capstone deployment.",
      "results": [
        {
          "num": "120",
          "label": "Students graduated"
        },
        {
          "num": "3.2x",
          "label": "Higher placement clearance rate"
        },
        {
          "num": "84%",
          "label": "Secured campus offers within 60 days"
        }
      ]
    },
    "faqs": [
      {
        "q": "Can this bootcamp be integrated into our college's academic calendar?",
        "a": "Yes. We offer flexible scheduling: semester-long weekend sessions, evening cohorts, or intensive 4-week summer/winter vacation bootcamps."
      },
      {
        "q": "Do students receive certificates upon completion?",
        "a": "Yes. Students who successfully complete all lab assignments and defend their capstone project receive a verified Laprrk Industry-Ready Certificate."
      },
      {
        "q": "Are mock interviews included as part of the bootcamp?",
        "a": "Yes. Every student participates in 2 rounds of simulated technical interviews with practicing software engineers from our hiring network."
      },
      {
        "q": "What computer hardware do students need?",
        "a": "Any basic laptop with an internet connection. We provide browser-accessible cloud sandbox environments so local machine specs are never a barrier."
      }
    ]
  },
  "placement-readiness": {
    "id": "placement-readiness",
    "slug": "placement-readiness",
    "title": "Placement Readiness Programme",
    "category": "For institutes",
    "categorySlug": "institutes",
    "heroKicker": "Campus Placement Excellence · Greater Noida & Louisville",
    "headline": "Aptitude Mastery, Data Structures, Live Coding & System Design Interviews",
    "lead": "Maximize campus placement conversion rates. A focused, rigorous training track covering quantitative aptitude, LeetCode-style data structures & algorithms (DSA), live coding rounds, and behavioral interview mastery.",
    "facts": [
      {
        "num": "500+",
        "label": "Curated DSA & Aptitude problems"
      },
      {
        "num": "38%",
        "label": "Average assessment lift"
      },
      {
        "num": "92%",
        "label": "First-round clearance rate"
      }
    ],
    "specs": [
      "Curriculum Tracks: Quantitative Aptitude, Logical Reasoning, Verbal Ability, Core CS, DSA, System Design",
      "DSA Focus: Arrays, HashMaps, Trees, Graphs, Dynamic Programming, Two-Pointers, Sliding Window",
      "Simulation Rounds: Weekly timed coding contests simulating TCS NQT, Infosys, Capgemini, and Product firm tests",
      "Behavioral Prep: STAR methodology, technical resume audits, project defense coaching"
    ],
    "terminalSnippet": {
      "filename": "dsa_benchmark.py",
      "code": "# Graph BFS shortest path implementation\ndef shortest_path(graph, start, target):\n    queue = collections.deque([(start, [start])])\n    visited = {start}\n    while queue:\n        node, path = queue.popleft()\n        if node == target: return path\n        for neighbor in graph[node]: ... # O(V + E)"
    },
    "benchmarks": [
      {
        "skill": "Quantitative Aptitude & Logic Speed",
        "pre": 50,
        "post": 92,
        "delta": "+42%"
      },
      {
        "skill": "DSA Problem Solving (Medium/Hard)",
        "pre": 34,
        "post": 88,
        "delta": "+54%"
      },
      {
        "skill": "Live Coding & Space/Time Defense",
        "pre": 38,
        "post": 90,
        "delta": "+52%"
      },
      {
        "skill": "Technical Resume & Project Explanation",
        "pre": 45,
        "post": 95,
        "delta": "+50%"
      }
    ],
    "syllabus": [
      {
        "module": "01",
        "duration": "Weeks 1–2",
        "title": "Aptitude & Logical Reasoning Acceleration",
        "desc": "Number theory, probability, permutations, data interpretation, deductive logic, and speed math shortcuts.",
        "deliverable": "Completion of 200 timed aptitude challenges with detailed speed-accuracy analytics"
      },
      {
        "module": "02",
        "duration": "Weeks 3–5",
        "title": "Data Structures & Algorithmic Problem Solving",
        "desc": "Mastering arrays, strings, hash tables, stacks/queues, recursion, binary search, and two-pointer techniques.",
        "deliverable": "Solving 100 curated LeetCode-style problems across medium difficulty tiers"
      },
      {
        "module": "03",
        "duration": "Weeks 6–8",
        "title": "Advanced DSA: Trees, Graphs & Dynamic Programming",
        "desc": "Binary search trees, graph traversals (BFS/DFS), Dijkstra's algorithm, memoization, and DP tabulations.",
        "deliverable": "Passing 3 high-intensity timed coding tests modeled on tier-1 IT recruitment exams"
      },
      {
        "module": "04",
        "duration": "Weeks 9–10",
        "title": "Mock Interviews, Resume Polish & Technical Defense",
        "desc": "One-on-one resume teardowns, STAR format project storytelling, and live simulated technical interviews.",
        "deliverable": "Polished, ATS-friendly technical resume and positive interview scorecard from lead practitioner"
      }
    ],
    "caseStudy": {
      "client": "Private University Campus Placement Cell · 150 Students",
      "challenge": "College struggled with student dropouts during company aptitude and preliminary technical coding screening tests.",
      "solution": "Laprrk delivered an intensive 10-week Placement Readiness track with weekly timed simulation contests and mock interviews.",
      "results": [
        {
          "num": "150",
          "label": "Students enrolled"
        },
        {
          "num": "92%",
          "label": "Cleared preliminary technical round"
        },
        {
          "num": "6.2 LPA",
          "label": "Average package increase"
        }
      ]
    },
    "faqs": [
      {
        "q": "How does this program handle students who struggle with coding logic?",
        "a": "We run dedicated doubt-clearing sessions and provide beginner-friendly algorithmic visualizers that break down complex pointer and recursion logic."
      },
      {
        "q": "Are the tests modeled on real recruitment patterns?",
        "a": "Yes. Our contest platform closely simulates testing patterns used by major hiring partners including TCS, Wipro, Cognizant, Accenture, and product scale-ups."
      },
      {
        "q": "Do you provide resume reviews for each student?",
        "a": "Yes. Every student receives a line-by-line resume critique ensuring projects are highlighted effectively and pass ATS screening filters."
      },
      {
        "q": "Can colleges track student performance analytics?",
        "a": "Yes. The Placement Cell receives a comprehensive dashboard tracking each student's attendance, coding submissions, and test scores."
      }
    ]
  },
  "nep-aligned-credit-courses": {
    "id": "nep-aligned-credit-courses",
    "slug": "nep-aligned-credit-courses",
    "title": "NEP-aligned Credit & Add-on Courses",
    "category": "For institutes",
    "categorySlug": "institutes",
    "heroKicker": "Higher Education Curriculum Modernization · Greater Noida & Louisville",
    "headline": "Modular, Industry-Endorsed Credit Courses for Higher Education",
    "lead": "Help universities seamlessly implement National Education Policy (NEP 2020) requirements with industry-designed 2, 3, or 4-credit courses complete with syllabus documentation, continuous evaluations, and transcript-ready grades.",
    "facts": [
      {
        "num": "2–4 Credits",
        "label": "University transcript ready"
      },
      {
        "num": "NEP 2020",
        "label": "Fully compliant structure"
      },
      {
        "num": "100%",
        "label": "Continuous assessment rubrics"
      }
    ],
    "specs": [
      "Eligible Disciplines: B.Tech, BCA, MCA, M.Tech, B.Sc (Computer Science & IT)",
      "Credit Structuring: Choice-Based Credit System (CBCS) compliant with theory-cum-practical distribution",
      "Academic Documentation: Complete course handouts, Bloom's Taxonomy aligned Question Banks, and rubrics",
      "Faculty Co-Teaching: Laprrk industry practitioners co-teach alongside university professors"
    ],
    "terminalSnippet": {
      "filename": "curriculum_spec.json",
      "code": "{\n  \"course_code\": \"NEP-CS-402\",\n  \"title\": \"Applied Cloud & Microservices Engineering\",\n  \"credits\": 3,\n  \"lecture_hours\": 30,\n  \"lab_hours\": 60,\n  \"blooms_taxonomy\": [\"Apply\", \"Analyze\", \"Create\"]\n}"
    },
    "benchmarks": [
      {
        "skill": "Bloom's Taxonomy Higher-Order Thinking",
        "pre": 45,
        "post": 92,
        "delta": "+47%"
      },
      {
        "skill": "Hands-On Practical Lab Implementation",
        "pre": 40,
        "post": 94,
        "delta": "+54%"
      },
      {
        "skill": "Continuous Internal Assessment (CIA)",
        "pre": 52,
        "post": 95,
        "delta": "+43%"
      },
      {
        "skill": "Real-World Industry Problem Solving",
        "pre": 36,
        "post": 90,
        "delta": "+54%"
      }
    ],
    "syllabus": [
      {
        "module": "01",
        "duration": "Unit 1 (4 Weeks)",
        "title": "Foundational Principles & Theoretical Models",
        "desc": "Course orientation, underlying theoretical foundations, mathematical concepts, and architectural design principles.",
        "deliverable": "Quiz 1 & Laboratory Assignment 1 verified against academic evaluation rubrics"
      },
      {
        "module": "02",
        "duration": "Unit 2 (4 Weeks)",
        "title": "Hands-On Tooling & Laboratory Experiments",
        "desc": "Practical laboratory exercises conducted in browser sandboxes, data manipulation, and software implementation.",
        "deliverable": "Mid-term practical examination and continuous laboratory workbook sign-off"
      },
      {
        "module": "03",
        "duration": "Unit 3 (4 Weeks)",
        "title": "Advanced Problem Sets & Case Study Analysis",
        "desc": "Deconstructing real-world enterprise case studies, analyzing edge cases, performance limitations, and security.",
        "deliverable": "Case study seminar presentation and peer-reviewed code assignment"
      },
      {
        "module": "04",
        "duration": "Unit 4 (4 Weeks)",
        "title": "Capstone Project & End-Term Examination",
        "desc": "Comprehensive semester project execution, technical report submission, viva voce examination, and grade compilation.",
        "deliverable": "Transcript-ready student grade report with Bloom's Taxonomy assessment outcomes"
      }
    ],
    "caseStudy": {
      "client": "Autonomous Engineering College · 240-Student Enrollment",
      "challenge": "Institution needed industry-aligned 3-credit elective courses in Cloud and AI to satisfy NAAC and NEP 2020 requirements.",
      "solution": "Laprrk designed, co-taught, and evaluated two complete 3-credit courses with digital lab manuals and automated grading.",
      "results": [
        {
          "num": "240",
          "label": "Students earned credits"
        },
        {
          "num": "100%",
          "label": "Academic compliance with university senate"
        },
        {
          "num": "A+",
          "label": "NAAC accreditation peer review grade"
        }
      ]
    },
    "faqs": [
      {
        "q": "How do these courses fit into the university's official credit system?",
        "a": "Our courses are mapped directly to 2, 3, or 4 academic credits under the Choice Based Credit System (CBCS), complete with lecture and practical hour allocations."
      },
      {
        "q": "Can your team assist our Board of Studies (BOS) in approving the syllabus?",
        "a": "Yes. We provide complete course proposals, learning objectives, Bloom's Taxonomy mappings, and syllabus documentation for your BOS meetings."
      },
      {
        "q": "Who conducts the practical examinations and viva voce?",
        "a": "Our industry specialists co-evaluate students alongside your faculty, providing an objective, industry-calibrated score for every student."
      },
      {
        "q": "What subjects are currently available as NEP credit courses?",
        "a": "We offer credit courses in Cloud Computing, Generative AI, DevOps, Full-Stack Development, Cybersecurity, and Data Science."
      }
    ]
  },
  "ai-genai-data-science-cert": {
    "id": "ai-genai-data-science-cert",
    "slug": "ai-genai-data-science-cert",
    "title": "AI, GenAI & Data Science Certification",
    "category": "For institutes",
    "categorySlug": "institutes",
    "heroKicker": "Advanced University Specialization · Greater Noida & Louisville",
    "headline": "University Certificate in Python, Machine Learning, RAG, and LLMs",
    "lead": "Equip students with the most sought-after skillset in modern technology: Python data science, machine learning algorithms, deep learning with PyTorch, vector databases, and applied Generative AI.",
    "facts": [
      {
        "num": "~70%",
        "label": "Hands-on lab time"
      },
      {
        "num": "38%",
        "label": "Average assessment lift"
      },
      {
        "num": "500+",
        "label": "Students certified"
      }
    ],
    "specs": [
      "Curriculum Coverage: Python 3.12, NumPy, Pandas, Scikit-Learn, PyTorch, LangChain, Qdrant",
      "Hands-On Projects: Predictive analytics, image classification, multi-document RAG assistant, semantic search",
      "Verification: Automated GitHub PR code evaluations, capstone defense, and verifiable credential",
      "Career Support: Resume portfolio highlighting AI capstones and interview preparation"
    ],
    "terminalSnippet": {
      "filename": "genai_student_capstone.py",
      "code": "from langchain_community.vectorstores import Qdrant\nfrom langchain_openai import OpenAIEmbeddings\nvector_db = Qdrant.from_documents(\n    documents=split_docs,\n    embedding=OpenAIEmbeddings(),\n    location=':memory:',\n    collection_name='university_research'\n)"
    },
    "benchmarks": [
      {
        "skill": "Python Data Manipulation (Pandas & NumPy)",
        "pre": 48,
        "post": 95,
        "delta": "+47%"
      },
      {
        "skill": "Supervised & Unsupervised ML Algorithms",
        "pre": 38,
        "post": 91,
        "delta": "+53%"
      },
      {
        "skill": "Vector Embeddings & Semantic Search",
        "pre": 26,
        "post": 89,
        "delta": "+63%"
      },
      {
        "skill": "RAG Pipeline Deployment & Capstone",
        "pre": 24,
        "post": 92,
        "delta": "+68%"
      }
    ],
    "syllabus": [
      {
        "module": "01",
        "duration": "Weeks 1–3",
        "title": "Data Analysis & Feature Engineering",
        "desc": "Python idioms, vectorized calculations with NumPy, data cleaning with Pandas, and exploratory data analysis (EDA).",
        "deliverable": "Comprehensive EDA notebook analyzing real-world customer churn datasets"
      },
      {
        "module": "02",
        "duration": "Weeks 4–6",
        "title": "Machine Learning Fundamentals",
        "desc": "Linear/Logistic regression, decision trees, random forests, gradient boosting (XGBoost), and model evaluation metrics.",
        "deliverable": "Trained predictive ML model with cross-validation and hyperparameter tuning"
      },
      {
        "module": "03",
        "duration": "Weeks 7–9",
        "title": "Deep Learning & Neural Networks",
        "desc": "PyTorch tensors, autograd, building multi-layer perceptrons, convolutional neural networks (CNNs), and transfer learning.",
        "deliverable": "Image classification model deployed using PyTorch and FastAPI"
      },
      {
        "module": "04",
        "duration": "Weeks 10–12",
        "title": "Generative AI, RAG & Capstone Certification",
        "desc": "Prompt design, embeddings, vector indexing, building a production RAG application with LangChain, and final defense.",
        "deliverable": "Live working GenAI application live on the web with verifiable digital certificate"
      }
    ],
    "caseStudy": {
      "client": "Regional Technical Institute · 100-Student Certification Cohort",
      "challenge": "College students had theoretical math knowledge but zero exposure to actual machine learning libraries or LLM engineering.",
      "solution": "Laprrk conducted a 12-week AI & GenAI Certification Program with cloud GPU sandboxes and capstone project defenses.",
      "results": [
        {
          "num": "100",
          "label": "Students certified"
        },
        {
          "num": "28",
          "label": "Secured AI/ML internships"
        },
        {
          "num": "100%",
          "label": "Live deployed capstone projects"
        }
      ]
    },
    "faqs": [
      {
        "q": "Do students need high-end laptops with dedicated GPUs?",
        "a": "No. All deep learning and GenAI training labs run on Laprrk cloud-hosted GPU sandboxes accessible via standard web browsers."
      },
      {
        "q": "Is mathematics like calculus and linear algebra heavily emphasized?",
        "a": "We explain mathematical concepts intuitively, focusing on their practical implementation in code rather than rote manual proofs."
      },
      {
        "q": "What kind of capstone projects do students build?",
        "a": "Students build applied projects such as medical document Q&A assistants, automated code documentation agents, and customer sentiment classifiers."
      },
      {
        "q": "How is the certificate verified by employers?",
        "a": "Every certificate features a unique verification URL displaying the student's project code, live demo, and assessment scores."
      }
    ]
  },
  "cloud-devops-cert": {
    "id": "cloud-devops-cert",
    "slug": "cloud-devops-cert",
    "title": "Cloud & DevOps Certification Programme",
    "category": "For institutes",
    "categorySlug": "institutes",
    "heroKicker": "Campus Cloud Engineering · Greater Noida & Louisville",
    "headline": "AWS, Linux, Docker, Kubernetes & CI/CD Campus Certification",
    "lead": "Prepare college students for high-demand cloud and infrastructure roles. A comprehensive certification program covering Linux administration, AWS core architecture, containerization with Docker, and CI/CD automation.",
    "facts": [
      {
        "num": "~70%",
        "label": "Hands-on lab time"
      },
      {
        "num": "38%",
        "label": "Average assessment lift"
      },
      {
        "num": "500+",
        "label": "Students certified"
      }
    ],
    "specs": [
      "Core Technologies: Linux CLI, AWS (VPC, EC2, S3, IAM, RDS), Docker, Kubernetes, GitHub Actions",
      "Certification Prep: Prepares students for AWS Certified Cloud Practitioner / Solutions Architect Associate",
      "Lab Infrastructure: Individual student AWS sandboxes with automated budget controls",
      "Career Alignment: Targets junior cloud engineer, DevOps trainee, and site reliability roles"
    ],
    "terminalSnippet": {
      "filename": "cloud_student_deploy.sh",
      "code": "# Student automated cloud deployment lab\naws ec2 run-instances --image-id ami-0c55b159cbfafe1f0 \\\n  --instance-type t3.micro --security-group-ids sg-cloudlab \\\n  --user-data file://deploy_app.sh\n# Container cluster verified on port 80"
    },
    "benchmarks": [
      {
        "skill": "Linux Systems & Bash Shell Scripting",
        "pre": 46,
        "post": 94,
        "delta": "+48%"
      },
      {
        "skill": "AWS Cloud Infrastructure Architecture",
        "pre": 38,
        "post": 92,
        "delta": "+54%"
      },
      {
        "skill": "Docker Container Packaging & Swarm",
        "pre": 32,
        "post": 90,
        "delta": "+58%"
      },
      {
        "skill": "CI/CD Pipeline Automation (GitHub Actions)",
        "pre": 28,
        "post": 89,
        "delta": "+61%"
      }
    ],
    "syllabus": [
      {
        "module": "01",
        "duration": "Weeks 1–3",
        "title": "Linux Systems Administration & Shell Scripting",
        "desc": "File permissions, process management, SSH key management, systemd services, and automated Bash scripts.",
        "deliverable": "Automated server backup and monitoring script running on an isolated Linux instance"
      },
      {
        "module": "02",
        "duration": "Weeks 4–6",
        "title": "AWS Cloud Foundations & Core Services",
        "desc": "Virtual Private Clouds (VPCs), CIDR subnetting, EC2 auto-scaling, S3 storage policies, and IAM security.",
        "deliverable": "Secure multi-tier web application hosted on an AWS VPC with load balancer and auto-scaling"
      },
      {
        "module": "03",
        "duration": "Weeks 7–9",
        "title": "Docker Containers & Kubernetes Basics",
        "desc": "Writing clean Dockerfiles, multi-stage builds, container networking, Pods, Deployments, and Services in Kubernetes.",
        "deliverable": "Multi-container microservice application deployed onto a Kubernetes cluster"
      },
      {
        "module": "04",
        "duration": "Weeks 10–12",
        "title": "CI/CD Automation & Capstone Certification",
        "desc": "Setting up GitHub Actions pipelines, automated Docker builds, automated deployment to cloud, and capstone viva.",
        "deliverable": "Complete end-to-end continuous delivery pipeline live on AWS with digital certification"
      }
    ],
    "caseStudy": {
      "client": "Autonomous Technical Campus · 90-Student Batch",
      "challenge": "College students lacked practical cloud deployment experience, hindering their eligibility for high-paying cloud engineering roles.",
      "solution": "Laprrk delivered a 12-week Cloud & DevOps Certification with dedicated AWS sandboxes and hands-on lab exams.",
      "results": [
        {
          "num": "90",
          "label": "Students certified"
        },
        {
          "num": "42",
          "label": "Passed AWS Solutions Architect Associate"
        },
        {
          "num": "88%",
          "label": "Placed in cloud/infrastructure roles"
        }
      ]
    },
    "faqs": [
      {
        "q": "Do students incur any AWS cloud bills during this training?",
        "a": "No. All AWS sandboxes and cloud resources are managed and paid for by Laprrk with strict automated budget caps."
      },
      {
        "q": "Does this program prepare students for industry cloud exams?",
        "a": "Yes. The syllabus is directly aligned with the AWS Certified Solutions Architect Associate exam topics and practice questions."
      },
      {
        "q": "Can students from non-CS branches like Electrical or Mechanical participate?",
        "a": "Yes. We start from basic Linux and computing fundamentals, making the curriculum accessible to students from all engineering branches."
      },
      {
        "q": "How is student lab work graded?",
        "a": "We use automated verification scripts that inspect student AWS accounts and GitHub repositories to objectively grade whether infrastructure is configured correctly."
      }
    ]
  },
  "cybersecurity-cert": {
    "id": "cybersecurity-cert",
    "slug": "cybersecurity-cert",
    "title": "Cybersecurity Certification Programme",
    "category": "For institutes",
    "categorySlug": "institutes",
    "heroKicker": "Campus Application & Network Defense · Greater Noida & Louisville",
    "headline": "Ethical Hacking, OWASP Defenses, SOC Analysis & Threat Hunting",
    "lead": "Equip students with the hands-on skills required to protect digital assets. An intensive certification covering ethical penetration testing, OWASP vulnerabilities, network traffic analysis with Wireshark, and defensive security operations.",
    "facts": [
      {
        "num": "~70%",
        "label": "Hands-on lab time"
      },
      {
        "num": "38%",
        "label": "Average assessment lift"
      },
      {
        "num": "500+",
        "label": "Students certified"
      }
    ],
    "specs": [
      "Curriculum Tracks: Ethical Hacking, Network Security, Web Application Security (OWASP), SIEM & SOC Analysis",
      "Practical Tools: Kali Linux, Nmap, Wireshark, Burp Suite Community, Metasploit, Splunk / Wazuh SIEM",
      "Lab Infrastructure: Safe, isolated virtual range for practical capture-the-flag (CTF) exercises",
      "Certification: Comprehensive hands-on exam and verifiable Laprrk Cybersecurity Certificate"
    ],
    "terminalSnippet": {
      "filename": "security_ctf.sh",
      "code": "# Network vulnerability scan and packet inspection\nnmap -sV -sC -T4 10.10.10.25 -oA campus_audit\ntshark -r traffic.pcap -Y 'http.request.method == \"POST\"' \\\n  -T fields -e http.file_data | grep -i password"
    },
    "benchmarks": [
      {
        "skill": "Network Reconnaissance & Port Scanning (Nmap)",
        "pre": 42,
        "post": 93,
        "delta": "+51%"
      },
      {
        "skill": "Web Application Pentesting (Burp Suite)",
        "pre": 30,
        "post": 91,
        "delta": "+61%"
      },
      {
        "skill": "Packet Analysis & Forensics (Wireshark)",
        "pre": 38,
        "post": 89,
        "delta": "+51%"
      },
      {
        "skill": "SOC Threat Detection & SIEM Logs",
        "pre": 28,
        "post": 88,
        "delta": "+60%"
      }
    ],
    "syllabus": [
      {
        "module": "01",
        "duration": "Weeks 1–3",
        "title": "Network Security & Packet Forensics",
        "desc": "TCP/IP handshakes, subnetting, port scanning with Nmap, packet dissection with Wireshark, and ARP spoofing defense.",
        "deliverable": "Network forensics audit report isolating unauthorized traffic and rogue devices"
      },
      {
        "module": "02",
        "duration": "Weeks 4–6",
        "title": "Ethical Hacking & Vulnerability Assessment",
        "desc": "Reconnaissance, vulnerability scanning with OpenVAS, exploitation basics with Metasploit, and ethical disclosure protocols.",
        "deliverable": "Vulnerability assessment report detailing severity scores (CVSS) and patch guides"
      },
      {
        "module": "03",
        "duration": "Weeks 7–9",
        "title": "Web Application Security & OWASP Top 10",
        "desc": "Hands-on exploitation and remediation of SQL Injection, Cross-Site Scripting (XSS), CSRF, and broken access controls.",
        "deliverable": "Comprehensive penetration test report on an intentionally vulnerable web application"
      },
      {
        "module": "04",
        "duration": "Weeks 10–12",
        "title": "SOC Operations, SIEM & CTF Capstone",
        "desc": "Analyzing security logs in Splunk/Wazuh, incident response playbooks, and participating in an intensive 24-hour CTF challenge.",
        "deliverable": "Successful completion of the final Capture-The-Flag (CTF) defense exam"
      }
    ],
    "caseStudy": {
      "client": "Technical University Cybersecurity Department · 80 Students",
      "challenge": "College students had theoretical network security knowledge but zero hands-on experience using industry pentesting and SIEM tools.",
      "solution": "Laprrk deployed a dedicated virtual cyber range with Kali Linux sandboxes and conducted a 12-week certification bootcamp.",
      "results": [
        {
          "num": "80",
          "label": "Students certified"
        },
        {
          "num": "31",
          "label": "Placed in SOC Analyst and SecOps roles"
        },
        {
          "num": "100%",
          "label": "Passed simulated CTF examination"
        }
      ]
    },
    "faqs": [
      {
        "q": "Are all hacking exercises conducted legally and safely?",
        "a": "Yes. All offensive exercises take place inside strictly isolated private sandbox environments pre-configured by Laprrk with strict boundaries."
      },
      {
        "q": "Does this program prepare students for industry security certifications?",
        "a": "Yes. The curriculum aligns with entry-level cybersecurity certifications such as CompTIA Security+ and CEH (Certified Ethical Hacker)."
      },
      {
        "q": "What career roles does this certification unlock for students?",
        "a": "Graduates are qualified for roles including Junior SOC Analyst, Information Security Associate, Vulnerability Analyst, and Penetration Tester."
      },
      {
        "q": "Do students need prior coding knowledge?",
        "a": "Basic programming fundamentals are helpful. We provide introductory scripting lessons in Python and Bash for security automation."
      }
    ]
  },
  "software-testing-qa-career": {
    "id": "software-testing-qa-career",
    "slug": "software-testing-qa-career",
    "title": "Software Testing & QA Career Programme",
    "category": "For institutes",
    "categorySlug": "institutes",
    "heroKicker": "Campus QA Career Launch · Greater Noida & Louisville",
    "headline": "Manual Testing, Selenium, Playwright, API Testing & Postman",
    "lead": "Launch successful software testing careers. A high-placement-conversion program training students in test case design, bug lifecycle management, automated web testing with Selenium/Playwright, and API verification with Postman.",
    "facts": [
      {
        "num": "~70%",
        "label": "Hands-on lab time"
      },
      {
        "num": "38%",
        "label": "Average assessment lift"
      },
      {
        "num": "500+",
        "label": "Students certified"
      }
    ],
    "specs": [
      "Testing Domains: Manual Testing, Functional Testing, Regression Testing, API Testing, Web Automation",
      "Automation Tooling: Selenium WebDriver (Java/Python), Playwright, Postman, JMeter, Git, Jira",
      "Industry Best Practices: Writing Jira bug tickets, TestRail test cases, defect severity triage, agile sprints",
      "Placement Focus: Tailored to secure entry-level QA Engineer and Automation Analyst positions"
    ],
    "terminalSnippet": {
      "filename": "qa_selenium_test.py",
      "code": "from selenium import webdriver\nfrom selenium.webdriver.common.by import By\ndriver = webdriver.Chrome()\ndriver.get('https://campus-app.laprrk.dev/login')\ndriver.find_element(By.ID, 'username').send_keys('qa_tester')\nassert 'Dashboard' in driver.title # Verification passed"
    },
    "benchmarks": [
      {
        "skill": "Test Case Authoring & Defect Reporting",
        "pre": 48,
        "post": 95,
        "delta": "+47%"
      },
      {
        "skill": "Selenium / Playwright Web Automation",
        "pre": 28,
        "post": 89,
        "delta": "+61%"
      },
      {
        "skill": "API Testing with Postman & Newman",
        "pre": 35,
        "post": 92,
        "delta": "+57%"
      },
      {
        "skill": "Jira Agile Workflow & Defect Triage",
        "pre": 44,
        "post": 94,
        "delta": "+50%"
      }
    ],
    "syllabus": [
      {
        "module": "01",
        "duration": "Weeks 1–3",
        "title": "Software Testing Fundamentals & Test Design",
        "desc": "SDLC vs STLC, boundary value analysis, equivalence partitioning, test case templates, and Jira defect tracking.",
        "deliverable": "Complete test suite documentation covering 50+ manual test cases for an enterprise application"
      },
      {
        "module": "02",
        "duration": "Weeks 4–6",
        "title": "API Testing with Postman & Collections",
        "desc": "HTTP verbs, response status codes, environment variables, writing automated assertion scripts in Postman, Newman CLI.",
        "deliverable": "Automated Postman test collection running in terminal with detailed test run reports"
      },
      {
        "module": "03",
        "duration": "Weeks 7–9",
        "title": "Web Automation with Selenium / Playwright",
        "desc": "Locators (XPath, CSS selectors), handling dropdowns/alerts, Page Object Model (POM), and TestNG/PyTest assertions.",
        "deliverable": "Automated regression testing framework testing a complete multi-step checkout workflow"
      },
      {
        "module": "04",
        "duration": "Weeks 10–12",
        "title": "Performance Basics, Mock Interviews & Capstone",
        "desc": "Introduction to load testing with JMeter, live resume teardowns, technical QA mock interviews, and certification defense.",
        "deliverable": "Production QA portfolio including automated test repos and verified Laprrk QA Certificate"
      }
    ],
    "caseStudy": {
      "client": "Tier-3 Engineering Institute · 110-Student Cohort",
      "challenge": "Many non-CS and CS students struggled with high-barrier software development interviews and lacked a clear pathway into tech.",
      "solution": "Laprrk delivered a 12-week Software Testing & QA Career track with heavy emphasis on manual testing rigor and automated Selenium scripting.",
      "results": [
        {
          "num": "110",
          "label": "Students enrolled"
        },
        {
          "num": "84",
          "label": "Secured QA & Testing offers"
        },
        {
          "num": "94%",
          "label": "First-round technical clearance rate"
        }
      ]
    },
    "faqs": [
      {
        "q": "Can students with non-technical degrees (BCA, B.Sc, B.Com) succeed in this program?",
        "a": "Yes. Software testing offers an accessible and rewarding entry into the IT industry. We teach from the ground up, starting with manual testing and test case logic."
      },
      {
        "q": "Does the program include both manual and automated testing?",
        "a": "Yes. Students master manual test design and bug reporting first, then transition into web automation with Selenium or Playwright and API testing with Postman."
      },
      {
        "q": "How do you help students with job interview preparation?",
        "a": "We conduct intensive mock interviews covering common technical testing questions, resume optimization, and portfolio presentation."
      },
      {
        "q": "Are the tools taught widely used in the corporate IT industry?",
        "a": "Yes. Jira, Postman, Selenium, and Playwright are standard testing technologies used by virtually all IT companies globally."
      }
    ]
  },
  "hackathons-projects-internships": {
    "id": "hackathons-projects-internships",
    "slug": "hackathons-projects-internships",
    "title": "Hackathons, Live Projects & Internships",
    "category": "For institutes",
    "categorySlug": "institutes",
    "heroKicker": "Experiential Learning & Innovation · Greater Noida & Louisville",
    "headline": "36-Hour Hackathons, Enterprise Live Projects, and Guided Internships",
    "lead": "Energize campus innovation. We organize end-to-end college hackathons, curate real-world industry problem statements, provide technical mentors, and connect top student teams directly with verified internship opportunities.",
    "facts": [
      {
        "num": "36-Hour",
        "label": "Hackathon formats"
      },
      {
        "num": "100%",
        "label": "Real enterprise problem statements"
      },
      {
        "num": "20+",
        "label": "Partner internship sponsors"
      }
    ],
    "specs": [
      "Event Architecture: End-to-end hackathon management (problem statements, jury rubrics, digital platforms, prizes)",
      "Industry Mentorship: Senior developers from Laprrk mentor student teams during 24 to 36-hour build cycles",
      "Live Projects: 8-week structured project sprints based on real enterprise briefs with weekly Git code reviews",
      "Internship Fast-Track: Winning students guaranteed interviews with tech startups and hiring partners"
    ],
    "terminalSnippet": {
      "filename": "hackathon_submission.json",
      "code": "{\n  \"team_name\": \"CampusInnovators_2026\",\n  \"problem_statement\": \"FinTech Real-Time Fraud Shield\",\n  \"repo_url\": \"https://github.com/campus/fraud-shield\",\n  \"live_demo\": \"https://fraud-shield.laprrk.dev\",\n  \"status\": \"JURY_EVALUATION_PASSED\"\n}"
    },
    "benchmarks": [
      {
        "skill": "Rapid Prototyping & MVP Architecture",
        "pre": 35,
        "post": 92,
        "delta": "+57%"
      },
      {
        "skill": "Teamwork, Git Collaboration & Sprints",
        "pre": 42,
        "post": 94,
        "delta": "+52%"
      },
      {
        "skill": "Executive Presentation & Pitching",
        "pre": 38,
        "post": 90,
        "delta": "+52%"
      },
      {
        "skill": "Production Cloud Deployment Under Deadline",
        "pre": 26,
        "post": 88,
        "delta": "+62%"
      }
    ],
    "syllabus": [
      {
        "module": "01",
        "duration": "Sprint 1",
        "title": "Problem Statement Curation & Team Formation",
        "desc": "Selecting high-impact themes (FinTech, HealthTech, AI, EdTech), team balancing, and agile ideation workshops.",
        "deliverable": "Approved project architecture specification and GitHub repository setup"
      },
      {
        "module": "02",
        "duration": "Sprint 2",
        "title": "Rapid MVP Development & Mentorship",
        "desc": "Hands-on coding sprints, architectural troubleshooting, and live check-ins with Laprrk senior mentors.",
        "deliverable": "Working software prototype with core database, API, and frontend integration"
      },
      {
        "module": "03",
        "duration": "Sprint 3",
        "title": "Deployment, Polish & Pitch Preparation",
        "desc": "Deploying the MVP to public cloud URLs, performance tuning, slide deck creation, and 3-minute pitch coaching.",
        "deliverable": "Live accessible web application and concise investor-style slide deck"
      },
      {
        "module": "04",
        "duration": "Sprint 4",
        "title": "Grand Finale Jury Defense & Internship Interviews",
        "desc": "Live presentation before an industry panel of engineering leaders, jury scoring, awards, and internship matching.",
        "deliverable": "Final hackathon ranking and guaranteed internship interview slots for finalists"
      }
    ],
    "caseStudy": {
      "client": "Regional Technical University · 400-Student Hackathon",
      "challenge": "College wanted to host a high-impact annual hackathon with genuine industry problem statements and employer visibility.",
      "solution": "Laprrk organized 'Campus Hack 2025' providing 8 enterprise briefs, 12 live mentors, and guaranteed interviews for top 10 teams.",
      "results": [
        {
          "num": "400",
          "label": "Students participated (88 teams)"
        },
        {
          "num": "18",
          "label": "Full-stack projects deployed to live URLs"
        },
        {
          "num": "24",
          "label": "Paid internships awarded on the spot"
        }
      ]
    },
    "faqs": [
      {
        "q": "Does Laprrk provide problem statements or do students bring their own?",
        "a": "We provide both: curated enterprise problem statements from our client engagements, as well as an open innovation track for student-led ideas."
      },
      {
        "q": "Can you handle the entire logistics and judging platform?",
        "a": "Yes. We provide digital submission portals, automated plagiarism checking, and transparent jury scoring rubrics."
      },
      {
        "q": "Are real internship opportunities provided to winners?",
        "a": "Yes. We partner with tech startups, scale-ups, and IT employers who sponsor hiring tracks during our hackathons."
      },
      {
        "q": "Can the event be hosted on-campus at our college auditorium?",
        "a": "Yes. Our team travels to your campus to manage the event in person or can coordinate entirely virtual hackathons."
      }
    ]
  },
  "centre-of-excellence-lab-setup": {
    "id": "centre-of-excellence-lab-setup",
    "slug": "centre-of-excellence-lab-setup",
    "title": "Centre of Excellence & Lab Setup",
    "category": "For institutes",
    "categorySlug": "institutes",
    "heroKicker": "Advanced Campus Infrastructure · Greater Noida & Louisville",
    "headline": "Turnkey AI, Cloud, and Cybersecurity CoE Setup for Universities",
    "lead": "Elevate your institution's prestige. We design, build, and operate modern industry-grade Centres of Excellence (CoE) in Applied AI, Cloud Computing, and Cybersecurity, complete with compute infrastructure, curriculum, and research projects.",
    "facts": [
      {
        "num": "Turnkey",
        "label": "Complete hardware, software & faculty setup"
      },
      {
        "num": "NAAC / NBA",
        "label": "Highest accreditation rating support"
      },
      {
        "num": "3-Year",
        "label": "Continuous operation & placement partnership"
      }
    ],
    "specs": [
      "CoE Focus Areas: Applied Artificial Intelligence & GenAI, Multi-Cloud Architecture, Cybersecurity SOC Lab",
      "Infrastructure Deliverables: GPU compute servers, secure cloud sandboxes, cyber range networks, smart boards",
      "Academic Integration: Semester-long curricula, faculty upskilling, live industry research projects, annual symposiums",
      "Branding & Recognition: High-visibility industry co-branding boosting admissions and NAAC/NBA criteria"
    ],
    "terminalSnippet": {
      "filename": "coe_cluster_status.sh",
      "code": "# Centre of Excellence GPU cluster telemetry\nkubectl get nodes -o wide --selector=hardware=gpu\n# Cluster healthy: 8x NVIDIA A100 GPUs active\n# Running student LLM fine-tuning job: university_model_v1"
    },
    "benchmarks": [
      {
        "skill": "Advanced Campus Lab Utilization",
        "pre": 32,
        "post": 95,
        "delta": "+63%"
      },
      {
        "skill": "Student Industry-Ready Certification Rate",
        "pre": 25,
        "post": 91,
        "delta": "+66%"
      },
      {
        "skill": "Faculty Research & Joint Whitepapers",
        "pre": 20,
        "post": 84,
        "delta": "+64%"
      },
      {
        "skill": "NAAC / NBA Accreditation Score (Criteria 3 & 4)",
        "pre": 60,
        "post": 96,
        "delta": "+36%"
      }
    ],
    "syllabus": [
      {
        "module": "01",
        "duration": "Phase 1 (Month 1)",
        "title": "Architecture Blueprint & Infrastructure Deployment",
        "desc": "Site inspection, hardware procurement, network configuration, GPU server installation, and security provisioning.",
        "deliverable": "Fully commissioned physical & cloud lab facility ready for student onboarding"
      },
      {
        "module": "02",
        "duration": "Phase 2 (Month 2)",
        "title": "Faculty Enablement & Curriculum Embedding",
        "desc": "Intensive training for 15 departmental faculty members, integrating CoE lab assignments into academic syllabus.",
        "deliverable": "15 certified faculty coordinators and customized semester lab manuals"
      },
      {
        "module": "03",
        "duration": "Phase 3 (Months 3–6)",
        "title": "Student Cohort Acceleration & Projects",
        "desc": "Enrolling 120 students in specialized tracks (AI, Cloud, Cyber), running guided capstones, and industry brownbags.",
        "deliverable": "120 certified students and 20 functional capstone projects deployed to production"
      },
      {
        "module": "04",
        "duration": "Phase 4 (Continuous)",
        "title": "Research Collaboration, Placement & Annual Audit",
        "desc": "Joint industry whitepapers, organizing campus tech symposiums, priority campus recruitment, and annual upgrades.",
        "deliverable": "Annual CoE impact report fulfilling NAAC/NBA documentation requirements"
      }
    ],
    "caseStudy": {
      "client": "Premier Engineering Institution · Greater Noida Campus",
      "challenge": "University struggled to differentiate against competitors and needed modern industry infrastructure to achieve NBA accreditation.",
      "solution": "Laprrk established a turnkey 'Centre of Excellence in Applied AI & Cloud Computing' with dedicated GPU servers and faculty training.",
      "results": [
        {
          "num": "1",
          "label": "State-of-the-art CoE established"
        },
        {
          "num": "100%",
          "label": "NBA accreditation achieved for CSE branch"
        },
        {
          "num": "240+",
          "label": "Students upskilled annually"
        }
      ]
    },
    "faqs": [
      {
        "q": "What physical infrastructure does the college need to provide?",
        "a": "The college provides a dedicated lab room (60 to 100 seats) with power, LAN, and air conditioning. Laprrk delivers the software stack, cloud sandboxes, server configuration, and curriculum."
      },
      {
        "q": "How does the CoE help with NAAC and NBA accreditation?",
        "a": "The CoE directly addresses Criteria 3 (Research, Innovations and Extension) and Criteria 4 (Infrastructure and Learning Resources) with verified industry tie-ups."
      },
      {
        "q": "Can the CoE focus on more than one technology domain?",
        "a": "Yes. We offer modular configurations combining Applied AI/GenAI with Cloud Computing or Cybersecurity within the same facility."
      },
      {
        "q": "What is the typical timeline to launch a Centre of Excellence?",
        "a": "From initial agreement to complete physical and digital commissioning takes approximately 4 to 6 weeks."
      }
    ]
  }
};

export const ALL_TRAINING_SLUGS = Object.keys(TRAINING_DATA);

export function getTrainingData(slug) {
  if (!slug) return TRAINING_DATA["generative-ai-agentic-ai"];
  const clean = slug.replace(/^\/+/, "").replace(/\/+$/, "").replace(/^training\//, "");
  return TRAINING_DATA[clean] || TRAINING_DATA["generative-ai-agentic-ai"];
}
