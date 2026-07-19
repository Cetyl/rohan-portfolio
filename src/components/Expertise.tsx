import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAws, faGoogle, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "EC2 / Auto Scaling",
    "ECS Fargate",
    "Lambda",
    "EventBridge",
    "CloudWatch",
    "AWS FIS",
    "Amazon Bedrock",
    "Redshift",
    "IAM & KMS",
    "Terraform",
];

const labelsSecond = [
    "Kubernetes (EKS)",
    "Helm",
    "Docker",
    "Chaos Mesh",
    "Prometheus & Grafana",
    "Jenkins",
    "GitHub Actions",
    "Linux",
];

const labelsGCP = [
    "Google Kubernetes Engine (GKE)",
    "Cloud Storage",
    "Compute Engine",
    "Gemini 2.5 Flash",
    "Imagen 4",
    "Cloud Build",
];

const labelsThird = [
    "Claude Code",
    "Amazon Bedrock",
    "Google Gemini",
    "Python",
    "Go",
    "FastAPI",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <p className="cert-line">2x AWS Professional certified (incl. AWS Certified DevOps Engineer – Professional) · 3x GCP Professional certified</p>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faAws} size="3x"/>
                    <h3>Cloud & Infrastructure (AWS)</h3>
                    <p>I design and build resilient AWS architectures, with a focus on self-healing systems: Auto Scaling, ECS Fargate, and automated remediation pipelines validated with AWS Fault Injection Simulator. Also experienced provisioning multi-environment data warehouses with Terraform.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps, Kubernetes & Automation</h3>
                    <p>I build CI/CD pipelines and container orchestration setups on Kubernetes and EKS, and validate reliability with chaos engineering (Chaos Mesh, AWS FIS) so failure detection and recovery are proven, not assumed.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faGoogle} size="3x"/>
                    <h3>Cloud & Infrastructure (GCP)</h3>
                    <p>3x GCP Professional certified, with hands-on work building microservices on Google Kubernetes Engine and generative AI pipelines using Gemini and Imagen — including a project that migrated the same codebase between GCP and AWS with only the managed services swapped out.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsGCP.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>AI-Assisted Engineering</h3>
                    <p>I work with Amazon Bedrock, Claude Code, and Google Gemini to bring AI-assisted diagnosis and generation into infrastructure and product workflows — with strict guardrails so automation classifies and alerts, but never acts outside a fixed, pre-approved action set.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;