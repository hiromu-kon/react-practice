import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconBadge } from './IconBadge';
import { ThemeProvider } from '@mui/material/styles';
import MailIcon from '@mui/icons-material/Mail';
import theme from "../../../styles/theme"

export default {
  title: 'Molecules/IconBadge',
  component: IconBadge,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={theme}>
          <IconBadge badgeContent={4}><MailIcon color="action" /></IconBadge>
        </ThemeProvider>
      )
    },
  ],
} as ComponentMeta<typeof IconBadge>;

const Template: ComponentStory<typeof IconBadge> = (args) => <IconBadge {...args}><MailIcon color="action" /></IconBadge>;

export const Primary = Template.bind({});
Primary.args = {

};
