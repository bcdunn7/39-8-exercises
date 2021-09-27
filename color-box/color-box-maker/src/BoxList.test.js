import React from "react";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import BoxList from "./BoxList";

test("it renders without crashing", function() {
	render(<BoxList/>);
});

test("it matches snapshot", () => {
    const { asFragment } = render(<BoxList/>);
    expect(asFragment()).toMatchSnapshot();
})

test("can add new item", () => {
    const { getByLabelText, queryByText } = render(<BoxList/>);

    // no box (and therefore no button with 'X')
    expect(queryByText("X")).not.toBeInTheDocument();

    const colorInput = getByLabelText("Background Color:");
    const widthInput = getByLabelText("Width:");
    const heightInput = getByLabelText("Height:");
    const submitBtn = queryByText("Add!");

    // form
    fireEvent.change(colorInput, { target: {value: "red" }})
    fireEvent.change(widthInput, { target: {value: "30" }})
    fireEvent.change(heightInput, { target: {value: "30" }})
    fireEvent.click(submitBtn)

    // box exists
    expect(queryByText("X")).toBeInTheDocument();
})

test("can remove item", () => {
    const { getByLabelText, queryByText } = render(<BoxList/>);

    const colorInput = getByLabelText("Background Color:");
    const widthInput = getByLabelText("Width:");
    const heightInput = getByLabelText("Height:");
    const submitBtn = queryByText("Add!");

    fireEvent.change(colorInput, { target: {value: "red" }})
    fireEvent.change(widthInput, { target: {value: "30" }})
    fireEvent.change(heightInput, { target: {value: "30" }})
    fireEvent.click(submitBtn)

    // box exists
    expect(queryByText("X")).toBeInTheDocument();

    // click remove button
    const removeBtn = queryByText("X");
    fireEvent.click(removeBtn)

    // box does not exist
    expect(queryByText("X")).not.toBeInTheDocument();
})
