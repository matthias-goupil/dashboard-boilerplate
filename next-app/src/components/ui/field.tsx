import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { Input } from "./input";
import { UseFormReturn, FieldValues, Path } from "react-hook-form";

interface IFieldProps<T extends FieldValues>
  extends Omit<React.ComponentProps<"input">, "form"> {
  form: UseFormReturn<T>; 
  name: Path<T>;
  description?: string;
  label?: string;
  displayRequiredLabel?: boolean;
}

function Field<T extends FieldValues>({
  form,
  description,
  name,
  label,
  displayRequiredLabel = true,
  ...inputProps
}: IFieldProps<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && (
            <FormLabel>
              {label}{" "}
              {inputProps.required && displayRequiredLabel && (
                <span className="text-red-500">*</span>
              )}
            </FormLabel>
          )}
          <FormControl>
            <Input {...inputProps} {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default Field;
