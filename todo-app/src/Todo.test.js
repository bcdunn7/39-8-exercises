import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

test("it renders without crashing", function() {
	render(<Todo/>);
});

test("it matches snapshot", () => {
    const { asFragment } = render(<Todo/>);
    expect(asFragment()).toMatchSnapshot();
})