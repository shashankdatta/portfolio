"use client";

import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import DownloadIcon from "@mui/icons-material/Download";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Link from "next/link";

import Typist from "react-typist";
import FadeInSection from "./FadeInSection";

// Typist Related CSS
import "react-typist/dist/Typist.css";
import "@/styles/MyTypist.css";

import styles from "@/styles/Intro.module.css";

const RESUME_URL = "https://exwvhdq2io3rbn15.public.blob.vercel-storage.com/Shashank_Bezgam_Resume.pdf";

const handleDownloadResume = () => {
  const link = document.createElement("a");
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.href = RESUME_URL;
  link.download = "Shashank_Bezgam_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function Intro() {
  return (
    <div id="intro" className={styles.intro}>
      <div className={styles["cmd-style"]}>
        <div className={styles["intro-name"]}>{`SHDB:-/$\u00A0`}</div>
        <Typist cursor={{ element: "_" }} avgTypingDelay={120}>
          <span className={styles["intro-title"]}>
            {"hi, "}
            <span className={styles["intro-name"]}>{"shashank"}</span>
            {" here"}
          </span>
        </Typist>
      </div>
      <FadeInSection>
        <div className={styles["intro-subtitle"]}>
          Coding with a Dash of Caffeine.
        </div>
        <div className={styles["intro-desc"]}>
          I&apos;m a software engineer with a passion for full-stack
          development, artificial intelligence, and machine learning. Let&apos;s
          build something amazing together!
        </div>
        <Box display="flex" gap={2} className={styles["content-btn-box"]}>
          <Button
            color="primary"
            variant="outlined"
            startIcon={<EmailRoundedIcon />}
            component={Link}
            href="mailto:shashankdattabezgum@gmail.com"
            size="extraLarge"
            sx={{
              fontWeight: "bolder",
              textTransform: "unset !important",
            }}
          >
            Say hi!
          </Button>
          <Button
            color="primary"
            variant="contained"
            startIcon={<DownloadIcon />}
            onClick={handleDownloadResume}
            size="extraLarge"
            sx={{
              fontWeight: "bolder",
              textTransform: "unset !important",
            }}
          >
            Resume
          </Button>
        </Box>
      </FadeInSection>
    </div>
  );
}
