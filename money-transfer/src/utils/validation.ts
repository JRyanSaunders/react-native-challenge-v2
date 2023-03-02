export const validateFirstName = (firstName: string): boolean => {
  const validateFirstNameRegex = /^[a-zA-Z]+$/;
  return validateFirstNameRegex.test(firstName);
};

export const validateEmailAddress = (email: string): boolean => {
  const validateEmailAddressValidationRegex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return validateEmailAddressValidationRegex.test(email);
};

export const validateAmount = (amount: string): boolean => {
  const validateAmountRegex = /^-?\d+(?:\.\d+)?$/;
  return validateAmountRegex.test(amount);
};
