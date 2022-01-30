/* react */
import { memo, ReactNode, VFC } from "react"

/* @mui/material */
import { Avatar } from "@mui/material"

type Props = {
  children: ReactNode;
}

export const AvatarIcon: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <Avatar>{children}</Avatar>
  )
})
