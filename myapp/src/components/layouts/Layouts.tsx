/* react */
import { ReactNode, VFC } from "react"

/* components */
import { Header } from "./Header/Header"
import { Footer } from "./Footer/Footer"

/**
 * Props
 */
type Props = {
  children: ReactNode;
}

/**
 * Layout
 * @param props
 * @returns
 */
export const Layout: VFC<Props> = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  )
}
