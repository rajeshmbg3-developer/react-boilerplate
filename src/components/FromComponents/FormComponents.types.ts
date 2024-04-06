import { TextFieldVariants } from "@mui/material";
import { Control } from "react-hook-form";

export type SimpleInputType = {
  inputId?: string;
  dataTestId?: string;
  name: string;
  control: Control<any>;
  defaultValue?: string;
  error?: any;
  isPasswordField?: boolean;
  hideEndAdornment?: boolean;
  label?: string;
  variant?: TextFieldVariants;
  fullWidth?: boolean;
  disabled?: boolean;
  placeHolder?: string;
  readOnly?: boolean;
  autoFocus?: boolean;
  onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
