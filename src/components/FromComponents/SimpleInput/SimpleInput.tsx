import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useController } from "react-hook-form";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import useFromComponentsStyle from "../FromComponents.styles";
import { SimpleInputType } from "../FormComponents.types";

const SimpleInput: React.FC<SimpleInputType> = ({
  inputId,
  dataTestId,
  disabled = false,
  isPasswordField = false,
  hideEndAdornment = false,
  variant = "outlined",
  fullWidth = true,
  label,
  name,
  control,
  defaultValue = "",
  error,
  placeHolder,
  readOnly = false,
  autoFocus = false,
  onInputChange = () => {},
}: SimpleInputType): JSX.Element => {
  const classes = useFromComponentsStyle();
  const {
    field: { ref, ...inputProp },
  } = useController({
    name,
    control,
    defaultValue,
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const endAdornmentRenderer = () => {
    if (isPasswordField && !hideEndAdornment) {
      return (
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      );
    } else return undefined;
  };

  let type = "text";
  if (isPasswordField) {
    type = showPassword ? "text" : "password";
  }

  return variant === "outlined" ? (
    <FormControl fullWidth={fullWidth} variant={variant}>
      {label && (
        <InputLabel htmlFor="outlined-adornment-password" error={!!error?.message}>
          {label}
        </InputLabel>
      )}
      <OutlinedInput
        data-testid={dataTestId}
        id={inputId}
        disabled={disabled}
        placeholder={placeHolder}
        type={type}
        endAdornment={endAdornmentRenderer()}
        label={label}
        inputRef={ref}
        {...inputProp}
        error={!!error?.message}
        readOnly={readOnly}
        autoFocus={autoFocus}
      />
      <FormHelperText className={error?.message && classes.errorTextColor}>
        {error ? error?.message : ""}
      </FormHelperText>
    </FormControl>
  ) : (
    <TextField
      data-testid={dataTestId}
      id={inputId}
      disabled={disabled}
      variant={variant}
      fullWidth={fullWidth}
      placeholder={placeHolder}
      type={type}
      label={label}
      inputRef={ref}
      {...inputProp}
      error={!!error?.message}
      helperText={error?.message}
      autoFocus={autoFocus}
    ></TextField>
  );
};

export default SimpleInput;
