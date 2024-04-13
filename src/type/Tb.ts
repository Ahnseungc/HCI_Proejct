

export interface InputType {
  placeholder: string;
  readonly: boolean;
  disabled: boolean;
  value: string;
  error: string;
  type: "text" | "password";
  inputtype: "text" | "password" | "website" | "textheader";
}

export interface ButtonType {
  type: "submit" | "button" | undefined;
  buttontype: "text" | "icon" | "largebutton" | "addposition" | "middlebutton" | "smallbutton";
  disabled: boolean;
  content: string;
  icon?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
