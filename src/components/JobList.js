"use client";

import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FadeInSection from "./FadeInSection";
import styles from "@/styles/Experience.module.css";
import experienceItems from "@/json/experienceData.json";

function TabPanel(props) {
  const { children, value, index, componentType = "p", isMobile, ...other } = props;

  if (isMobile) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={styles[`full-width-tabpanel-${index}`]}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={2}>
            <Typography component={componentType}>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={styles[`vertical-tabpanel`]}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={2}>
            <Typography style={{ maxWidth: "34vw" }} component={componentType}>
              {children}
            </Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
  componentType: PropTypes.elementType,
};

function a11yProps(index, isMobile) {
  if (isMobile) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  } else {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }
}

const DivRoot = styled("div")(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  "@media only screen and (max-width: 600px)": {
    flexDirection: "column",
  },
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  borderRight: `1px solid ${theme.palette.divider}`,
  "& .MuiTabs-indicator": {
    backgroundColor: theme.palette.primary.main,
  },
  "& .MuiTabs-scrollButtons": {
    color: theme.palette.primary.main,
  },
  // "&.MuiButtonBase-root": {
  //   outline: "none !important",
  //   color: `${theme.palette.title.main} !important`,

  //   "&:hover": {
  //     color: `${theme.palette.primary.main} !important`,
  //   },
  // },
  // "&.PrivateTabIndicator-colorSecondary-5": {
  //   backgroundColor: `${theme.palette.primary.main} !important`,
  // },
  // "&.jss5": {
  //   backgroundColor: `${theme.palette.primary.main} !important`,
  // },
  // "&.makeStyles-tabs-2": {
  //   borderRight: `1px solid ${theme.palette.lightestBg.main} !important`,
  // },
  // "@media only screen and (max-width: 600px)": {
  //   "&.jss1": {
  //     height: "unset !important",
  //     flexDirection: "column !important",
  //   },
  //   "&.makeStyles-root-1": {
  //     height: "unset !important",
  //     width: "unset",
  //     flexDirection: "column",
  //   },
  // },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  color: theme.palette.title.main,
  fontSize: "17px",
  fontFamily: "--font-ntr, ",
  "&.Mui-selected": {
    color: theme.palette.primary.main,
  },
  alignItems: "flex-start",
  alignContent: "flex-start",
  textAlign: "left",
  "&.MuiTab-wrapper": {
    fontSize: "16px",
    textAlign: "left",
    alignItems: "flex-start !important",
    fontFamily: "--font-ntr, ",
  },
  "&.MuiTab-root": {
    padding: "6px 20px",
  },
  "@media only screen and (max-width: 600px)": {
    border: `${theme.palette.primary.main} 1px solid`,
    alignItems: "center",
    alignContent: "center",
    textAlign: "center",
  },
}));

export default function JobList() {
  const [value, setValue] = useState(0);
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <DivRoot>
      <StyledTabs
        orientation={isMobile ? null : "vertical"}
        // variant={isMobile ? "fullWidth" : "scrollable"}
        variant="scrollable"
        value={value}
        onChange={handleChange}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <StyledTab
            key={key}
            label={isMobile ? `0${i + 1}.` : key}
            {...a11yProps(i, isMobile)}
          />
        ))}
      </StyledTabs>

      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel componentType="div" key={key} value={value} index={i} isMobile={isMobile}>
          <span className={styles["joblist-job-title"]}>
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className={styles["joblist-job-company"]}>{key}</span>
          <div className={styles["joblist-info"]}>
            <div>{experienceItems[key]["duration"]}</div>
            <div>{experienceItems[key]["location"]}</div>
          </div>
          <ul className={styles["job-description"]}>
            {experienceItems[key]["desc"].map((descItem, i) => (
              <FadeInSection key={i} delay={`${i + 1}00ms`}>
                <li key={i}>{descItem}</li>
              </FadeInSection>
            ))}
          </ul>
        </TabPanel>
      ))}
    </DivRoot>
  );
}
