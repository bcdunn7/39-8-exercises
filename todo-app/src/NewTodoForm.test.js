import React from "react";
import { render } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

test("it renders without crashing", function() {
	render(<NewTodoForm/>);
});

test("it matches snapshot", () => {
    const { asFragment } = render(<NewTodoForm/>);
    expect(asFragment()).toMatchSnapshot();
})