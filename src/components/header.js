import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Menu, X } from "react-feather"
import {
  Container,
  Flex,
  FlexList,
  Space,
  NavLink,
  Button,
  InteractiveIcon,
  Nudge,
  VisuallyHidden,
} from "./ui"
import * as styles from "./header.css"
import NavItemGroup from "./nav-item-group"
import BrandLogo from "./brand-logo"
import CubgsaLogo from "./cubgsa-logo"

const MENU_ITEMS = [
  { title: "Home", url: "/" },
  { title: "Mission & Values", url: "/mission-and-values" },
  { title: "Events", url: "/events" },
  { title: "Council", url: "/council" },
  { title: "Documents", url: "/documents" },
  { title: "Get in touch", url: "/get-in-touch" },
]

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className="logo-container">
        <CubgsaLogo height={100} />
      </div>
      <nav className={styles.linksContainer}>
        {MENU_ITEMS.map((item) => (
          <a className={styles.link} href={item.url}>
            {item.title}
          </a>
        ))}
      </nav>
    </header>
  )
}
