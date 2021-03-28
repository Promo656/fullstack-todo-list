import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import TodoList from '../../components/todoLists/todoList/todoList';
import TodoListPropsType from '../../components/todoLists/todoList/todoList';

export default {
    title: 'Example/TodoList',
    component: TodoList,
    argTypes: {},
} as Meta;

// @ts-ignore
const Template: Story<TodoListPropsType> = (args) => <TodoList {...args} />;

export const TodoListExample = Template.bind({});
TodoListExample.args = {
    title: "First Todo",
    text:"Text"
};


