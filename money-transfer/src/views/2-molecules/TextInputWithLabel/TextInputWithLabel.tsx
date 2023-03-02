import { TTextInputType } from "../../1-atoms/TextInput/TextInput";
import React, { ReactElement } from "react";
import { Text, View } from "react-native";
import layoutStyles from "../../../styles/layout.styles";
import { TextInput } from "../../1-atoms/TextInput";
import { Banner } from "../Banner";

interface TextInputWithLabelProps {
  label: string;
  value: string;
  type: TTextInputType | undefined;
  error: boolean;
  onChangeText: (text: string) => void;
  accessibilityLabel: string;
}

export const TextInputWithLabel = ({
  label,
  value,
  type,
  error,
  onChangeText,
  accessibilityLabel,
}: TextInputWithLabelProps): ReactElement => {
  return (
    <View style={layoutStyles.rowM}>
      <Text>{label}</Text>
      <TextInput
        value={value}
        type={type}
        error={error}
        onChangeText={onChangeText}
        accessibilityLabel={accessibilityLabel}
      />
      {error && (
        <Banner type="error" size="small">
          Please enter a valid {label.toLowerCase()}
        </Banner>
      )}
    </View>
  );
};
