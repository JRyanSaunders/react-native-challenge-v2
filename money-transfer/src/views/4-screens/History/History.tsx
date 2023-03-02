import React, { ReactElement, useContext } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import LineItem from "../../2-molecules/LineItem/LineItem";
import { Section } from "../../3-organisms/Section";
import { StatusBar } from "expo-status-bar";
import { FormContext } from "../../../data/form-context";
import styles from "./History.styles";

export default function History(): ReactElement {
  const { formValues } = useContext(FormContext);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContainer}
      >
        <Section header="Transactions">
          {formValues.map((value, index) => (
            <LineItem
              key={index}
              title={value.title}
              value={`-£${parseInt(value.value).toFixed(2)}`}
              subtitle={value.subTitle}
              divider={false}
            />
          ))}
        </Section>
      </ScrollView>
    </SafeAreaView>
  );
}
