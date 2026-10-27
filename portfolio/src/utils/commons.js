import { faEnvelope, faRss } from "@fortawesome/free-solid-svg-icons"
import {
  faGithub,
  faStackOverflow,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"

// Font Awesome 6.2 predates the X logo, so define it in FA's icon format.
const faXTwitter = {
  prefix: "fab",
  iconName: "x-twitter",
  icon: [
    512,
    512,
    [],
    "e61b",
    "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z",
  ],
}

export const contactItems = [
  {
    href: "mailto:krushiraj123+portfolio@gmail.com",
    icon: faEnvelope,
    title: "Mail",
  },
  {
    href: "https://github.com/krushiraj",
    icon: faGithub,
    title: "GitHub",
  },
  {
    href: "https://x.com/krushiraj123",
    icon: faXTwitter,
    title: "X",
  },
  {
    href: "https://www.linkedin.com/in/krushiraj/",
    icon: faLinkedinIn,
    title: "LinkedIn",
  },
  {
    href: "https://stackoverflow.com/users/story/4813058",
    icon: faStackOverflow,
    title: "StackOverflow",
  },
  {
    href: "https://krushiraj.github.io/rss.xml",
    icon: faRss,
    title: "RSS",
  },
]
