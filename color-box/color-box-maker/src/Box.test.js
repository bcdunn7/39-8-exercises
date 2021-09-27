import React from "react";
import { render } from "@testing-library/react";
import Box from "./Box";

test("it renders without crashing", function() {
	render(<Box/>);
});

test("it matches snapshot", () => {
    const { asFragment } = render(<Box/>);
    expect(asFragment()).toMatchSnapshot();
})