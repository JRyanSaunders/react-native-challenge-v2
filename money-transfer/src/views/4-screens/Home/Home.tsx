import React, { ReactElement, useContext, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button } from "../../1-atoms/Button";
import LineItem from "../../2-molecules/LineItem/LineItem";
import { Section } from "../../3-organisms/Section";
import styles from "./Home.styles";
import { Banner } from "../../2-molecules/Banner";
import { useShowComponentTimer } from "../../../hooks/use-show-timer";
import {
  validateAmount,
  validateEmailAddress,
  validateFirstName,
} from "../../../utils/validation";
import { TextInputWithLabel } from "../../2-molecules/TextInputWithLabel/TextInputWithLabel";
import { FormContext } from "../../../data/form-context";

interface IFormState {
  title: string;
  value: string;
  subTitle: string;
}

type InputValue = {
  value: string;
  error: boolean;
};

export default function Home(): ReactElement {
  const { formValues, setFormValues } = useContext(FormContext);
  const [showComponent, startShowComponentTimer] = useShowComponentTimer();
  const [firstName, setFirstName] = useState<InputValue>({
    value: "",
    error: false,
  });
  const [emailAddress, setEmailAddress] = useState<InputValue>({
    value: "",
    error: false,
  });
  const [amount, setAmount] = useState<InputValue>({
    value: "",
    error: false,
  });

  const handleSubmitForm = () => {
    const { value: firstNameValue } = firstName;
    const { value: emailAddressValue } = emailAddress;
    const { value: amountValue } = amount;

    if (!validateFirstName(firstNameValue)) {
      setFirstName({ value: firstNameValue, error: true });
      return;
    }

    if (!validateEmailAddress(emailAddressValue)) {
      setEmailAddress({ value: emailAddressValue, error: true });
      return;
    }

    if (!validateAmount(amountValue)) {
      setAmount({ value: amountValue, error: true });
      return;
    }

    const newFormValues: IFormState[] = [
      ...formValues,
      {
        title: firstNameValue,
        subTitle: emailAddressValue,
        value: amountValue,
      },
    ];

    setFormValues(newFormValues);
    startShowComponentTimer();

    setFirstName({ value: "", error: false });
    setEmailAddress({ value: "", error: false });
    setAmount({ value: "", error: false });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      {showComponent && (
        <Banner type="success" size="regular">
          The money has been sent!
        </Banner>
      )}

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContainer}
      >
        <View style={styles.form}>
          <TextInputWithLabel
            label="First name"
            value={firstName.value}
            type="text"
            error={firstName.error}
            onChangeText={(text) =>
              setFirstName({ value: text, error: !validateFirstName(text) })
            }
            accessibilityLabel="First name"
          />
          <TextInputWithLabel
            label="Email address"
            value={emailAddress.value}
            type="email"
            error={emailAddress.error}
            onChangeText={(text) =>
              setEmailAddress({
                value: text,
                error: !validateEmailAddress(text),
              })
            }
            accessibilityLabel="Email address"
          />
          <TextInputWithLabel
            label="Amount"
            value={amount.value}
            type="number"
            error={amount.error}
            onChangeText={(text) =>
              setAmount({ value: text, error: !validateAmount(text) })
            }
            accessibilityLabel="Amount"
          />

          <Button
            width="full"
            type="primary"
            onPress={handleSubmitForm}
            testId="send-button"
          >
            Send
          </Button>
        </View>

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
