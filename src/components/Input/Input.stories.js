import React from 'react';
import Input from '.';

export default {
   title: 'Form/Input',
   component: Input 
}

const Template = (args) => <Input {...args} />;

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'Enter name'
};