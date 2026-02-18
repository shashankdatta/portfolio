"use client";

import { useState, useEffect } from "react";
import { Sidenav, Nav } from "rsuite";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";
import styles from "@/styles/SidebarNav.module.css";
import FadeInSection from "./FadeInSection";
import ThemeSwitcherToggle from "./ThemeSwitcherToggle";
import Link from "next/link";

export default function SidebarNav() {
  const [activeKey, setActiveKey] = useState("1");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 600);
    };
    
    // Set initial value
    checkMobile();
    
    // Listen for resize events
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const navlinks = [
    ["intro", "home"],
    ["about", "about"],
    ["experience", "experience"],
    ["projects", "software-creations"],
  ];

  return (
    <div className={styles["sidebar-nav"]}>
      {!isMobile && (
        <Sidenav appearance="subtle">
          <Sidenav.Body>
            <Nav activeKey={activeKey} onSelect={setActiveKey}>
              <div className={styles["sidebar-links"]}>
                {navlinks.map((linkArr, i) => (
                  <FadeInSection delay={`${i + 1}00ms`} key={i}>
                    <Nav.Item as="div">
                      <Link href={`#${linkArr[0]}`}>/{linkArr[1]}</Link>
                    </Nav.Item>
                  </FadeInSection>
                ))}
                <FadeInSection
                  delay={`${navlinks.length + 1}00ms`}
                  key={navlinks.length + 1}
                >
                  <Nav.Item as="div" className={styles["sidebar-toggle"]}>
                    <ThemeSwitcherToggle />
                  </Nav.Item>
                </FadeInSection>
              </div>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      )}
      <div className={styles["sidebar-logos"]}>
        <FadeInSection delay={`${navlinks.length + 2}00ms`}>
          <IconButton
            target="_blank"
            className="github-icon"
            href="mailto:shashankdattabezgum@gmail.com"
            aria-label="github-icon"
            size="small"
          >
            <EmailRoundedIcon
              color="primary"
              style={{ fontSize: "49px" }}
              sx={{
                "&:hover": {
                  color: "var(--title)",
                },
              }}
            />
          </IconButton>
        </FadeInSection>
        <FadeInSection delay={`${navlinks.length + 3}00ms`}>
          <IconButton
            target="_blank"
            className="github-icon"
            href="https://github.com/shashankdatta"
            aria-label="github-icon"
            size="small"
          >
            <GitHubIcon
              color="primary"
              style={{ fontSize: "45px" }}
              sx={{
                "&:hover": {
                  color: "var(--title)",
                },
              }}
            />
          </IconButton>
        </FadeInSection>
        <FadeInSection delay={`${navlinks.length + 4}00ms`}>
          <IconButton
            target="_blank"
            href="https://www.linkedin.com/in/shashankdatta/"
            aria-label="linkedin-icon"
            size="small"
          >
            <LinkedInIcon
              color="primary"
              style={{ fontSize: "50px" }}
              sx={{
                "&:hover": {
                  color: "var(--title)",
                },
              }}
            />
          </IconButton>
        </FadeInSection>
      </div>
    </div>
  );
}
