
import { style } from '@vanilla-extract/css';
import { vars } from './vars.css';

export const flexCenter = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  background: vars.colors.primary
});