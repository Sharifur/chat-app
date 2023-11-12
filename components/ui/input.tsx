import * as React from "react"

import { cn } from "@/lib/utils"
import { UseFormRegister,FieldValues, FieldErrors } from "react-hook-form";
import { Label } from "./label";

export interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?:boolean;
  register: UseFormRegister<FieldValues>
  errors: FieldErrors;
  disabled?: boolean,
  placeholder?: string
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  register,
  required,
  errors,
  type='text',
  disabled,
  placeholder

}) =>{

  console.log(errors);
    return (
      <div>
        <Label htmlFor={id}>{label}</Label>
      <input
        id={id}
        type={type}
        autoComplete={id}
        disabled={disabled}
        placeholder={placeholder}
        {...register(id,{required})}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          disabled && 'opacity-50 cursor-default'
        )}
      />
      </div>
    )
}

export default Input;
