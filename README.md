# Rohan Poojari Portfolio — Detailed Project Guide

A complete record of everything done to build and publish the portfolio site, from content sourcing through to going live on a custom domain.

**Live site:** https://portfolio.rpoojari.space
**Repository:** https://github.com/Cetyl/rohan-portfolio

---

## 1. Content Research

Before writing any code, all real content was gathered from existing sources rather than invented:

- **Certifications and AWS training history** extracted from a personal AWS Certifications PDF and AWS Training & Certification completion certificates.
- **Project details** pulled from existing build guides and write-ups already on file: the AWS self-healing architecture guide, the Amazon EKS self-healing guide (with Amazon Bedrock diagnosis), the Kubernetes self-healing guide (with Chaos Mesh), the Claude Code on Amazon Bedrock proof-of-concept guide, and the Terraform-managed Redshift blog post.
- **GitHub profile** (`github.com/Cetyl`) reviewed for public repositories, bio, and pinned projects — used to source real project links: `FastAPI-jenkins`, `Microservices-Application`, `django-CICD-app`, `gke-ai-ticket-triage`, and `cloud-frequencies`.
- **LinkedIn profile** (`linkedin.com/in/rohan-cetyl`) reviewed for the professional headline, About section, full work history (Senior DevOps Engineer at Ampity Infotech, Cloud Engineer at Upwork, Co-Owner at NeuCity Hospitality, QA Engineer at DDV Mediengruppe), education (Technische Universität Chemnitz, University of Mumbai), and licenses/certifications (AWS Certified DevOps Engineer – Professional, AWS Certified Solutions Architect – Professional, plus GCP Professional certifications).

## 2. Template Foundation

- Started from the open-source `react-portfolio-template` (React 18 + TypeScript + SCSS, originally by Yuji Sato), chosen for its clean multi-section layout: header/about, expertise, career timeline, projects grid, and contact form.
- Cloned the template and used it as the structural base, replacing every piece of placeholder content with real material.

## 3. Header / About Section (`src/components/Main.tsx`)

- Name, title, and tagline updated to match the actual LinkedIn headline: "Cloud Platform Engineer | 2x AWS & 3x GCP Professional Certified | DevOps, Terraform & Automation."
- Bio rewritten using the real About section from LinkedIn — cloud cost optimization, CI/CD automation, Kubernetes cluster design, and Infrastructure as Code with Terraform, Ansible, and CloudFormation.
- Social links wired to the real accounts: GitHub (`github.com/Cetyl`), LinkedIn (`linkedin.com/in/rohan-cetyl`), and X (`x.com/rrOOaANn`).
- Profile photo integrated: the real photo was saved to `src/assets/images/avatar.jpg` and imported directly into the component so it displays correctly across environments.
- A subtle animated gradient overlay was added behind the header (`src/assets/styles/Main.scss`), layered on top of the existing background image using a CSS keyframe animation that slowly shifts a purple/teal/orange gradient across the section.

## 4. Expertise Section (`src/components/Expertise.tsx`)

Restructured into four distinct categories, each with its own icon and technology chip list:

1. **Cloud & Infrastructure (AWS)** — Auto Scaling, ECS Fargate, Lambda, EventBridge, CloudWatch, AWS FIS, Amazon Bedrock, Redshift, IAM/KMS, Terraform.
2. **DevOps, Kubernetes & Automation** — EKS, Helm, Docker, Chaos Mesh, Prometheus & Grafana, Jenkins, GitHub Actions, Linux.
3. **Cloud & Infrastructure (GCP)** — Google Kubernetes Engine, Cloud Storage, Compute Engine, Gemini 2.5 Flash, Imagen 4, Cloud Build.
4. **AI-Assisted Engineering** — Claude Code, Amazon Bedrock, Google Gemini, Python, Go, FastAPI.

A certifications line was added directly under the section heading, calling out the 2x AWS Professional and 3x GCP Professional certifications.

## 5. Career History (`src/components/Timeline.tsx`)

Built out as a full vertical timeline using the verified LinkedIn work history, in reverse-chronological order:

- **Senior DevOps Engineer**, Ampity Infotech, Mumbai (Oct 2024 – Present) — infrastructure management across 5 mission-critical projects, ECS/ECR container orchestration, large-scale Kubernetes administration, and database/file-transfer modernization with AWS RDS and AWS Transfer Family.
- **Cloud Engineer**, Upwork (Sep 2021 – Sep 2024) — 80+ cloud modernization deployments at 90% customer satisfaction, FastAPI CI/CD pipelines, AWS cost optimization audits, and Kubernetes/multi-cloud consulting.
- **Co-Owner**, NeuCity Hospitality And Co, Mumbai (Sep 2018 – Sep 2024) — business operations and a 23-person team over a 6-year tenure.
- **Engineer, Quality Assurance**, DDV Mediengruppe, Dresden (Apr 2015 – Sep 2018) — quality assurance across the printing process.
- **Education** — Master of Science, Embedded Systems (Technische Universität Chemnitz) and Bachelor of Engineering, Instrumentation Technology (University of Mumbai), added as timeline entries with a graduation-cap icon.

## 6. Projects Section (`src/components/Project.tsx`)

Eleven projects populated, each with a description and, where a public repository exists, a direct GitHub link:

- **Cloud Frequencies** — Gemini 2.5 Flash + Imagen 4 concert poster generator (linked to `github.com/Cetyl/cloud-frequencies`).
- **AI Ticket Triage: GKE to EKS** — microservices ticket triage system migrated from GKE to Amazon EKS with the same codebase (linked to `github.com/Cetyl/gke-ai-ticket-triage`).
- **Self-Healing Architecture on AWS** — EC2 Auto Scaling, ECS Fargate, and Lambda-based remediation validated with AWS Fault Injection Simulator.
- **Self-Healing Architecture on Amazon EKS** — ALB ingress, managed node group healing, and Amazon Bedrock-assisted failure classification.
- **Self-Healing Architecture on Kubernetes** — the CNCF-native counterpart, validated with Chaos Mesh.
- **Manual EKS Build — No Automation** — a 13-phase, hand-built EKS deployment covering custom VPC, IAM, and IRSA.
- **Claude Code on Amazon Bedrock** — running Claude Code against Bedrock-hosted models, covering configuration, cross-region inference, and Bedrock Guardrails.
- **Terraform-Managed Multi-Environment Redshift** — reusable Terraform modules across dev/staging/prod.
- **Multi-Cloud Microservices Application** — a 10-microservices system across AWS and GCP (linked to `github.com/Cetyl/Microservices-Application`).
- **FastAPI CI/CD with Jenkins on GCP** (linked to `github.com/Cetyl/FastAPI-jenkins`).
- **Django CI/CD with Jenkins** (linked to `github.com/Cetyl/django-CICD-app`).

Every project's thumbnail was custom-built rather than sourced externally: a set of generated SVG graphics with themed color palettes and distinct visual styles per project — node/connection diagrams for architecture-focused projects, hexagon grids for Kubernetes-related projects, pipeline-stage diagrams for CI/CD projects, and waveform art for the audio-based Cloud Frequencies project.

## 7. Contact and Footer

- Contact section (`src/components/Contact.tsx`) updated with a direct mailto link to the personal email address alongside the existing contact form.
- Footer (`src/components/Footer.tsx`) updated with the same social links and a clean copyright line.
- Page title and meta description (`public/index.html`) updated to reflect the actual name and role for search engines and browser tabs.

## 8. Initial Deployment to GitHub Pages

- `package.json` configured with the project name and a `homepage` field pointing at the GitHub Pages URL, plus `gh-pages` added as a dev dependency with `predeploy`/`deploy` scripts already present in the template.
- A new GitHub repository (`github.com/Cetyl/rohan-portfolio`) created and the project pushed to the `main` branch.
- `npm run deploy` run to build the site and publish it to a `gh-pages` branch, which GitHub Pages serves automatically.
- Site went live at `https://cetyl.github.io/rohan-portfolio`.

## 9. Custom Subdomain Setup

- Domain (`rpoojari.space`, registered via Hostinger) connected using a subdomain: `portfolio.rpoojari.space`.
- A `CNAME` file added to the project's `public/` directory containing the subdomain, so it's included automatically in every deployed build.
- A CNAME DNS record added in Hostinger, pointing the `portfolio` subdomain to `cetyl.github.io`.
- The custom domain registered in the GitHub repository's Pages settings, with HTTPS enforcement enabled once the certificate was issued.
- `package.json`'s `homepage` field updated to the new custom domain so all built asset paths resolve correctly from the site's actual root.
- Site rebuilt and redeployed, now live at `https://portfolio.rpoojari.space`.

## 10. Ongoing Workflow

The project lives in a standard local git clone. Any future update follows the same pattern:

```bash
cd ~/Documents/Projects/rohan-portfolio
# edit source files
git add .
git commit -m "Describe the change"
git push
npm run deploy
```
