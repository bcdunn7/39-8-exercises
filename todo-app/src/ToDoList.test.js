import React from "react";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import ToDoList from "./ToDoList";

test("it renders without crashing", function() {
	render(<ToDoList/>);
});

test("it matches snapshot", () => {
    const { asFragment } = render(<ToDoList/>);
    expect(asFragment()).toMatchSnapshot();
})

test("can add a todo", () => {
    const { getByLabelText, queryByText } = render(<ToDoList/>);

    // No todo
    expect(queryByText("X")).not.toBeInTheDocument();

    const todoInput = getByLabelText("New Todo:");
    const submitBtn = queryByText("Add!");

    // form input
    fireEvent.change(todoInput, { target: { value: "Testing" }});
    fireEvent.click(submitBtn);

    // todo exists
    expect(queryByText("X")).toBeInTheDocument();
})

test("can remove item", () => {
    const { getByLabelText, queryByText } = render(<ToDoList/>);

    // No todo
    expect(queryByText("X")).not.toBeInTheDocument();

    const todoInput = getByLabelText("New Todo:");
    const submitBtn = queryByText("Add!");

    // form input
    fireEvent.change(todoInput, { target: { value: "Testing" }});
    fireEvent.click(submitBtn)

    // todo exists
    expect(queryByText("X")).toBeInTheDocument();

    // click remove button
    const removeBtn = queryByText("X");
    fireEvent.click(removeBtn)

    // todo does not exist
    expect(queryByText("X")).not.toBeInTheDocument();
})