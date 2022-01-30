import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BasicTextField } from './BasicTextfield';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../../../styles/theme"

export default {
  title: 'Atoms/Textfield',
  component: BasicTextField,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={theme}>
          <BasicTextField label='ABC' variant='outlined' />
        </ThemeProvider>
      )
    },
  ],
} as ComponentMeta<typeof BasicTextField>;

const Template: ComponentStory<typeof BasicTextField> = (args) => <BasicTextField {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'ABC',
  variant: 'outlined'
};
