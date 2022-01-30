import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AvatarIcon } from './AvatarIcon';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../../../styles/theme"

export default {
  title: 'Atoms/AvatarIcon',
  component: AvatarIcon,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={theme}>
          <AvatarIcon children='AB' />
        </ThemeProvider>
      )
    }
  ],
} as ComponentMeta<typeof AvatarIcon>;

const Template: ComponentStory<typeof AvatarIcon> = (args) => <AvatarIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "ABC"
};
