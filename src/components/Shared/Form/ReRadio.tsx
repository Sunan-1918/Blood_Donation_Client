import { Radio, RadioGroup, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type Tcontroller = {
    name: string;
    label: string;
    options: boolean[];
};

const ReUseRadio = ({ name, label, options }: Tcontroller) => {
    const { control } = useFormContext()
    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState: { error } }) => (
                <RadioGroup {...field} name={label}>
                    {options.map((option) => (
                        <Radio value={option} size="small" />
                    ))}
                </RadioGroup>
            )}
        />
    )
}

export default ReUseRadio;