import * as React from "react"
import "../styles.css"
import { Slice } from "gatsby"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <section>{children}</section>
      <footer>Footer</footer>
    </>
  )
}

export default Layout
