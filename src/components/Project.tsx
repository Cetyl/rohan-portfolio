import React from "react";
// Generated gradient thumbnails standing in for real screenshots/diagrams.
// TODO: swap any of these for an actual screenshot or architecture diagram whenever you have one.
import thumbAwsSelfheal from '../assets/images/thumbnails/aws-selfheal.svg';
import thumbEksSelfheal from '../assets/images/thumbnails/eks-selfheal.svg';
import thumbK8sSelfheal from '../assets/images/thumbnails/k8s-selfheal.svg';
import thumbAiTriage from '../assets/images/thumbnails/ai-triage.svg';
import thumbEksManual from '../assets/images/thumbnails/eks-manual.svg';
import thumbClaudeBedrock from '../assets/images/thumbnails/claude-bedrock.svg';
import thumbRedshiftTf from '../assets/images/thumbnails/redshift-tf.svg';
import thumbMicroservices from '../assets/images/thumbnails/microservices.svg';
import thumbFastapiJenkins from '../assets/images/thumbnails/fastapi-jenkins.svg';
import thumbDjangoCicd from '../assets/images/thumbnails/django-cicd.svg';
import thumbCloudFrequencies from '../assets/images/thumbnails/cloud-frequencies.svg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Cetyl/cloud-frequencies" target="_blank" rel="noreferrer"><img src={thumbCloudFrequencies} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Cetyl/cloud-frequencies" target="_blank" rel="noreferrer"><h2>Cloud Frequencies</h2></a>
                <p>Drop an MP3, get an AI-generated concert poster. Gemini 2.5 Flash analyses the audio to detect genre and mood and maps it to an iconic visual aesthetic, then Imagen 4 generates a custom poster in that style. Also notable as a case study in AI-assisted building: a manual build took 2-3 hours a day over a week, then a single guided prompt in Cowork replicated the result in hours.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Cetyl/gke-ai-ticket-triage" target="_blank" rel="noreferrer"><img src={thumbAiTriage} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Cetyl/gke-ai-ticket-triage" target="_blank" rel="noreferrer"><h2>AI Ticket Triage: GKE to EKS</h2></a>
                <p>A support-ticket triage microservices system originally built on GKE, then migrated to Amazon EKS (EKS, ECR, S3, IAM/IRSA in place of the GCP equivalents) with the same codebase. The AI model runs locally via Ollama and Qwen2.5 — Kubernetes only orchestrates, keeping inference cost at zero and sensitive data on-device. Includes Prometheus/Grafana observability.</p>
            </div>
            <div className="project">
                <img src={thumbAwsSelfheal} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Self-Healing Architecture on AWS</h2>
                <p>3-tier self-healing POC on AWS: EC2 Auto Scaling for infra-layer recovery, ECS Fargate for container-layer recovery, and a CloudWatch → EventBridge → Lambda remediation loop, validated end-to-end with AWS Fault Injection Simulator.</p>
            </div>
            <div className="project">
                <img src={thumbEksSelfheal} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Self-Healing Architecture on Amazon EKS</h2>
                <p>AWS-native self-healing on EKS: ALB ingress, kubelet pod-level healing, managed node group node-level healing, and CloudWatch/EventBridge/Lambda remediation with Amazon Bedrock classifying failures before a fixed, pre-approved action executes. Proven with FIS's native EKS fault actions.</p>
            </div>
            <div className="project">
                <img src={thumbK8sSelfheal} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Self-Healing Architecture on Kubernetes</h2>
                <p>The CNCF-native counterpart: kubelet and ReplicaSet-level recovery, a Prometheus/Alertmanager-driven remediation webhook with cooldowns and circuit breakers, and Chaos Mesh for repeatable pod/network fault injection and MTTR measurement.</p>
            </div>
            <div className="project">
                {/* TODO: add the AWS Builder Center write-up + GitHub runbook links once you share the full URLs (they were shortened lnkd.in links on your post) */}
                <img src={thumbEksManual} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Manual EKS Build — No Automation</h2>
                <p>Built a full application on EKS entirely by hand: no eksctl, no Terraform, just the AWS Console, kubectl, and patience. 13 phases covering a custom VPC, IAM, IRSA, storage, and load balancing — done deliberately slow to understand what automation tools normally hide, with a detailed write-up of every bug hit along the way.</p>
            </div>
            <div className="project">
                <a href="https://code.claude.com/docs/en/amazon-bedrock" target="_blank" rel="noreferrer"><img src={thumbClaudeBedrock} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://code.claude.com/docs/en/amazon-bedrock" target="_blank" rel="noreferrer"><h2>Claude Code on Amazon Bedrock</h2></a>
                <p>Hands-on POC running Claude Code against Claude models hosted in Amazon Bedrock, keeping code and prompts inside AWS. Covers settings configuration, IAM/SSO auth, cross-region inference, prompt caching, cost attribution, and Bedrock Guardrails — then used it to build and deploy a real serverless AWS service.</p>
            </div>
            <div className="project">
                <img src={thumbRedshiftTf} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Terraform-Managed Multi-Environment Redshift</h2>
                <p>Reusable Terraform modules provisioning Amazon Redshift across dev/staging/prod: KMS encryption, locked-down security groups, IAM roles for Redshift Spectrum, and tuned parameter groups — cutting environment provisioning from ~3 hours to under 12 minutes.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Cetyl/Microservices-Application" target="_blank" rel="noreferrer"><img src={thumbMicroservices} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Cetyl/Microservices-Application" target="_blank" rel="noreferrer"><h2>Multi-Cloud Microservices Application</h2></a>
                <p>A 10-microservices application designed and deployed across both AWS and GCP.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Cetyl/FastAPI-jenkins" target="_blank" rel="noreferrer"><img src={thumbFastapiJenkins} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Cetyl/FastAPI-jenkins" target="_blank" rel="noreferrer"><h2>FastAPI CI/CD with Jenkins on GCP</h2></a>
                <p>A FastAPI application deployed to GCP with a Jenkins-driven CI/CD pipeline.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Cetyl/django-CICD-app" target="_blank" rel="noreferrer"><img src={thumbDjangoCicd} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Cetyl/django-CICD-app" target="_blank" rel="noreferrer"><h2>Django CI/CD with Jenkins</h2></a>
                <p>A Django application with an automated Jenkins CI/CD pipeline.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;