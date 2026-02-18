import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import { IconButton } from "@mui/material";
import Link from "next/link";

export default function ExternalLinks(props) {
  return (
    <span>
      {props.githubLink && (
        <Link href={props.githubLink} target="_blank">
          <IconButton
            aria-label="github-icon"
            size="small"
            color="primary"
          >
            <GitHubIcon color="title" fontSize="small" />
          </IconButton>
        </Link>
      )}

      {props.openLink && (
        <Link href={props.openLink} target="_blank">
          <IconButton
            aria-label="open-icon"
            size="small"
            color="primary"
          >
            <OpenInBrowserIcon color="title" fontSize="medium" />
          </IconButton>
        </Link>
      )}
    </span>
  );
}
