"use client";

import styles from "@/styles/Projects.module.css";
import "@/styles/MyCarousel.css";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import Image from "next/image";
import FadeInSection from "./FadeInSection";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";
import projectsData from "@/json/projectsData.json";

export default function Projects() {
  const spotlightProjects = projectsData["Spotlight Projects"];
  const projects = projectsData["All Projects"];

  return (
    <div id="projects" className={styles.projects}>
      <div className={styles["section-header"]}>
        <span className={styles["section-title"]}>/ projects</span>
      </div>

      {/* Spotlight Projects */}
      {/* <div className={styles["spotlight-container"]}>
        <FadeInSection>
          <Carousel>
            {Object.keys(spotlightProjects).map((key, i) => (
              <Carousel.Item key={key}>
                <Image
                  src={spotlightProjects[key]["image"]}
                  alt={key}
                  placeholder="empty"
                  className="d-block w-100"
                  sizes="100vw"
                  width={0}
                  height={0}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "auto",
                    opacity: "0.5",
                  }}
                />
                <div className={styles["caption-bg"]}>
                  <Carousel.Caption>
                    <h3>{spotlightProjects[key]["title"]}</h3>
                    <div>
                      {spotlightProjects[key]["desc"]}
                      <p className="techstack">
                        {spotlightProjects[key]["techStack"]}
                      </p>
                    </div>
                    <ExternalLinks
                      githubLink={spotlightProjects[key]["link"]}
                      openLink={spotlightProjects[key]["open"]}
                    ></ExternalLinks>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </FadeInSection>
      </div> */}

      <div className="project-container">
        <ul className={styles["projects-grid"]}>
          {Object.keys(projects).map((key, i) => (
            <FadeInSection key={key} delay={`${i + 1}00ms`}>
              <li className={styles["projects-card"]}>
                <div className="card-stack">
                  <div className={styles["card-header"]}>
                    <div className={styles["folder-icon"]}>
                      <FolderOpenRoundedIcon fontSize="large" />
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <p className={styles["card-title"]}>{key}</p>
                  <div className={styles["card-desc"]}>
                    {projects[key]["desc"]}
                  </div>
                </div>
                <div className={styles["card-tech"]}>
                  {projects[key]["techStack"]}
                </div>
              </li>
            </FadeInSection>
          ))}
        </ul>
      </div>
    </div>
  );
}
