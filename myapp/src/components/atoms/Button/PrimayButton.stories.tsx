import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PrimaryButton } from './PrimaryButton';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../../../styles/theme"

export default {
  title: 'Atoms/PrimaryButton',
  component: PrimaryButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={theme}>
          <PrimaryButton children='ABC' variant='contained' />
          <PrimaryButton children='ABC' variant='text' />
          <PrimaryButton children='ABC' variant='outlined' />
        </ThemeProvider>
      )
    }
  ],
} as ComponentMeta<typeof PrimaryButton>;

const Template: ComponentStory<typeof PrimaryButton> = (args) => <PrimaryButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "ABC",
  variant: 'contained'
};
