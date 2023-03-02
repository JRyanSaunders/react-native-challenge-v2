import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { TextInputWithLabel } from "../../views/2-molecules/TextInputWithLabel/TextInputWithLabel";

describe("TextInputWithLabel component", () => {
  test("renders correctly", () => {
    const { getByLabelText } = render(
      <TextInputWithLabel
        label="Test Label"
        value="Test Value"
        type="text"
        error={false}
        onChangeText={() => {}}
        accessibilityLabel={"Test Label"}
      />
    );
    expect(getByLabelText("Test Label")).toBeDefined();
  });

  test("updates input value when onChangeText is called", () => {
    const onChangeText = jest.fn();
    const { getByLabelText } = render(
      <TextInputWithLabel
        label="Test Label"
        value="Test Value"
        type="text"
        error={false}
        onChangeText={onChangeText}
        accessibilityLabel={"Test Label"}
      />
    );

    const input = getByLabelText("Test Label");
    fireEvent.changeText(input, "New Value");

    expect(onChangeText).toHaveBeenCalledWith("New Value");
  });

  test("displays error banner when error prop is true", () => {
    const { getByText } = render(
      <TextInputWithLabel
        label="Test Label"
        value="Test Value"
        type="text"
        error={true}
        onChangeText={() => {}}
        accessibilityLabel={"Test Label"}
      />
    );

    expect(getByText(/Please enter a valid test label/)).toBeDefined();
  });
});
