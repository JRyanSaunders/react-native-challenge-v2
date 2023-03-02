import React, { FC } from "react";
import { StyleSheet, View, Text } from "react-native";
import { colors } from "../../../styles/colors";

export interface ISectionProps {
  header?: string;
  children?: React.ReactNode;
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    marginBottom: 0,
  },
  header: {
    paddingTop: 24,
    paddingBottom: 8,
    paddingHorizontal: 16,
    color: colors.greyDark,
    backgroundColor: colors.greyLightest,
  },
  divider: {
    borderBottomColor: colors.grey,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: StyleSheet.hairlineWidth,
  },
});

export const Section: FC<ISectionProps> = ({ children, header }) => (
  <View style={styles.container}>
    {header ? <Text style={styles.header}>{header}</Text> : <></>}
    <View style={styles.divider} />
    <View>{children}</View>
    <View style={styles.divider} />
  </View>
);

export default Section;
