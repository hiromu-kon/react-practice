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
 * TextForm
 * @param props
 * @returns 
 */
export const TextForm: VFC<Props> = memo((props) => {
  const { label, variant } = props;

  return (
    <TextField label={label} variant={variant} />
  )
})
