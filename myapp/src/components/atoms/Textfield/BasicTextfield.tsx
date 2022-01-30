/* react */
import { memo, VFC } from 'react'

/* @mui/material */
import { TextField } from '@mui/material'

/**
 * Props
 */
type Props = {
  label: string;
  variant: 'outlined' | 'filled' | 'standard'
}

/**
 * BasicTextField
 * @param props
 * @returns 
 */
export const BasicTextField: VFC<Props> = memo((props) => {
  const { label, variant } = props;

  return (
    <TextField label={label} variant={variant} />
  )
})
