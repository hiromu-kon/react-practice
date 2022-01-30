/* react */
import { VFC, ReactNode, memo } from "react";

/* @mui/material */
import { Button } from '@mui/material';

/**
 * Props
 */
type Props = {
  children: ReactNode;
  variant: "text" | "contained" | "outlined"
  disabled?: boolean;
}

/**
 * PrimaryButton
 * @param props
 * @returns 
 */
export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, variant, disabled = false} = props;

  return (
    <Button 
      variant={variant}
      disabled={disabled}
    >
      {children}
    </Button>
  )
})
