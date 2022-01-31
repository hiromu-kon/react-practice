/* react */
import { memo, ReactNode, VFC } from 'react';

/* @mui/material */
import Badge from '@mui/material/Badge';

type Props = {
  children: ReactNode;
  badgeContent: number;
}

export const IconBadge: VFC<Props> = memo((props) => {
  const { children, badgeContent } = props;
  return (
    <Badge badgeContent={badgeContent} max={999} color="primary">
      {children}
    </Badge>
  )
})

