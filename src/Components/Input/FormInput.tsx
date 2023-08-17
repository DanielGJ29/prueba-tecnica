import React from "react";

import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";

type propsFormInput = {
  register: Function;
  type: string;
  validate: {
    required: boolean;
    pattern?: string;
  };
  watch: {};
  messageError: {
    required: string;
    pattern?: string;
  };

  errors?: { [key: string]: object };
  label: string;
  name: string;
  placeholder: string;
};

const FormInput = ({
  register,
  errors,
  label,
  name,
  placeholder,
  type,
  validate,
  watch,
  messageError,
}: propsFormInput) => {
  return (
    <FormControl fullWidth size="small">
      <InputLabel htmlFor="name">{label}</InputLabel>

      <Input
        id={name}
        aria-describedby={name}
        {...register(name, { required: true })}
      />
      <FormHelperText id="name" error>
        {errors && errors[name] && `${label} es requerida.`}
      </FormHelperText>
    </FormControl>
  );
};

export default FormInput;
