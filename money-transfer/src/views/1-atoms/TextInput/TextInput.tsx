import React, { useState, useEffect } from "react";
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput as RNTextInput,
  TextInputFocusEventData,
  TextInputProps,
  View,
} from "react-native";
import { colors } from "../../../styles/colors";

export type TTextInputFocusEvent =
  NativeSyntheticEvent<TextInputFocusEventData>;
export type TTextInputType = "text" | "email" | "number";

export interface ITextInputProps extends TextInputProps {
  error?: boolean;
  clearButton?: boolean;
  onFocus?: (e: TTextInputFocusEvent) => void;
  onBlur?: (e: TTextInputFocusEvent) => void;
  onChangeText?: (text: string) => void;
  type?: TTextInputType;
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.grey,
    backgroundColor: colors.white,
    borderRadius: 8,
    marginVertical: 4,
    minHeight: 50,
    position: "relative",
    flexDirection: "row",
  },
  containerFocused: {
    borderColor: colors.brand,
    backgroundColor: colors.white,
  },
  containerError: {
    borderColor: colors.alert,
    backgroundColor: colors.white,
  },
  textInput: {
    padding: 12,
    paddingTop: 10,
    flex: 1,
    color: colors.greyDark,
    fontSize: 16,
  },
});

const TextInput = ({
  error,
  onFocus,
  onBlur,
  onChangeText,
  type,
  value,
  ...rest
}: ITextInputProps) => {
  const [focused, setFocused] = useState(false);
  const [textValue, setTextValue] = useState(value);
  let typeProps: TextInputProps = {};

  switch (type) {
    case "text":
      typeProps = {
        keyboardType: "default",
        autoCapitalize: "none",
        autoCorrect: false,
      };
      break;
    case "email":
      typeProps = {
        keyboardType: "email-address",
        autoCapitalize: "none",
        autoCorrect: false,
      };
      break;
    case "number":
      typeProps = {
        autoCapitalize: "none",
        autoCorrect: false,
        keyboardType: "number-pad",
      };
      break;
  }

  const handleOnFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocused(true);
    onFocus && onFocus(e);
  };

  const handleOnBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocused(false);
    onBlur && onBlur(e);
  };

  const handleOnChangeText = (text: string) => {
    setTextValue(text);
    onChangeText && onChangeText(text);
  };

  useEffect(() => {
    setTextValue(value);
  }, [value]);

  return (
    <View
      style={[
        styles.container,
        error && styles.containerError,
        focused && styles.containerFocused,
      ]}
    >
      <RNTextInput
        {...rest}
        {...typeProps}
        style={styles.textInput}
        placeholderTextColor={colors.grey}
        underlineColorAndroid="transparent"
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        onChangeText={handleOnChangeText}
        value={textValue}
      />
    </View>
  );
};

export default TextInput;
