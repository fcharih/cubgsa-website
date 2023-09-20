import * as React from "react"
import "../styles.css"
import * as styles from "./layout.css"
import { Slice } from "gatsby"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <section className={styles.mainSection}>{children}</section>
      <footer>Footer</footer>
    </div>
  )
}

export default Layout
