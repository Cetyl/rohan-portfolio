import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Oct 2024 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior DevOps Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Ampity Infotech, Mumbai, Maharashtra, India (Remote)</h4>
            <p>
              Managed infrastructure for 5 mission-critical projects. Orchestrated containerized applications on Amazon ECS/ECR,
              including cross-account setups and automated task scheduling. Administered large-scale Kubernetes clusters, and led
              database and secure file transfer modernization with AWS RDS and AWS Transfer Family.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep 2021 - Sep 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Cloud Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Upwork (Remote)</h4>
            <p>
              Executed 80+ deployments for cloud modernization projects at a 90% customer satisfaction rate. Engineered FastAPI
              CI/CD pipelines (15% faster deployments), ran AWS cost optimization audits (30% reduction in client cloud spend),
              and consulted on Kubernetes and multi-cloud architecture.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep 2018 - Sep 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Co-Owner</h3>
            <h4 className="vertical-timeline-element-subtitle">NeuCity Hospitality And Co, Mumbai, Maharashtra, India</h4>
            <p>
              Managed daily business operations and led a cross-functional team of 23 over a 6-year tenure. Directed financial
              administration, strategic planning, and supplier relations to drive business growth.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Apr 2015 - Sep 2018"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Engineer, Quality Assurance</h3>
            <h4 className="vertical-timeline-element-subtitle">DDV Mediengruppe, Dresden, Saxony, Germany</h4>
            <p>
              Performed quality assurance checks at various stages of the printing process, and maintained records of quality
              control inspections, deviations, and corrective actions.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Master of Science, Embedded Systems"
            iconStyle={{ background: '#00A4A6', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Technische Universität Chemnitz</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Bachelor of Engineering, Instrumentation Technology"
            iconStyle={{ background: '#00A4A6', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">University of Mumbai</h3>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;