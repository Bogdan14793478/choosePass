export interface InputProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export interface InputData {
  formData: InputProps;
}
