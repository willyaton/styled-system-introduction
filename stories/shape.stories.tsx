import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Shape } from '../src/shape/shape';

export default {
  title: 'Components/Shape',
  component: Shape,
  argTypes: {
    bgShape: {
      options: ['circle', 'square', 'rectangle'],
      control: { type: 'select' },
    },
    bgColor: {
      options: ['blue', 'navy', 'red', 'yellow'],
      control: { type: 'select' },
    },
    fontFamily: {
      options: ['courier', 'franklin', 'gill', 'lucida'],
      control: { type: 'select' },
    },
    fontSize: {
      options: ['small', 'medium', 'large', 'xtraLarge'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Shape>;

const Template: ComponentStory<typeof Shape> = args => <Shape {...args} />;

export const Default = Template.bind({});

Default.args = {
  bgShape: 'square',
  bgColor: 'blue',
  fontFamily: 'gill',
  fontSize: 'large',
  text: 'MOVE',
};
