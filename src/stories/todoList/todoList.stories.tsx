import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/react/types-6-0';

import TodoListPropsType from '../../components/todoLists/todoList/todoList';
import TodoListsContainer from "../../path/todoListsContainer";

export default {
    title: 'Example/TodoList',
    component: TodoListsContainer,
    argTypes: {},
} as Meta;


// @ts-ignore
const Template: Story<TodoListPropsType> = (args) => <TodoListsContainer {...args} />;

export const TodoListExample = Template.bind({});
TodoListExample.args = {
    title: "First Todo",
    text: "Text"
};


