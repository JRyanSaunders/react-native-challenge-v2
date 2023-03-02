import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Home from "../../views/4-screens/Home/Home";

describe("Home component", () => {
  test("should update form values and clears inputs on form submission", () => {
    const { getByTestId, getByLabelText } = render(<Home />);
    const firstNameInput = getByLabelText("First name");
    const emailInput = getByLabelText("Email address");
    const amountInput = getByLabelText("Amount");
    const sendButton = getByTestId("send-button");

    fireEvent.changeText(firstNameInput, "John");
    fireEvent.changeText(emailInput, "john@example.com");
    fireEvent.changeText(amountInput, "100");

    expect(firstNameInput.props.value).toEqual("John");
    expect(emailInput.props.value).toEqual("john@example.com");
    expect(amountInput.props.value).toEqual("100");

    fireEvent.press(sendButton);

    expect(firstNameInput.props.value).toEqual("");
    expect(emailInput.props.value).toEqual("");
    expect(amountInput.props.value).toEqual("");
  });
});
