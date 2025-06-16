interface IFormFieldError {
  error?: string;
}

const FormFieldError = ({ error }: IFormFieldError) => {
  if (!error) {
    return null;
  }

  return <p>{error}</p>;
};

export default FormFieldError;
