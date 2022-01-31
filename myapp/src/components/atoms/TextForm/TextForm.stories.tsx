import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextForm } from './TextForm';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../../../styles/theme"

export default {
  title: 'Atoms/Textfield',
  component: TextForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={theme}>
          <TextForm label='ABC' variant='outlined' />
        </ThemeProvider>
      )
    },
  ],
} as ComponentMeta<typeof TextForm>;

const Template: ComponentStory<typeof TextForm> = (args) => <TextForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'ABC',
  variant: 'outlined'
};
