import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type Tcontroller = {
    name: string;
    label: string;
    type?: string;
    size?: "small" | 'medium';
    fullWidth?: boolean;
    required?: 'true' | 'false';
}

const ReUseInput = ({ name, type = 'text', size = 'small', fullWidth = true, label, required }: Tcontroller) => {
    const { control } = useFormContext()
    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState: { error } }) => (
                <TextField
                    {...field}
                    label={label}
                    type={type}
                    variant="outlined"
                    size={size}
                    fullWidth={fullWidth}
                    required={required?.toLowerCase() === 'true' ? true : false}
                    error={!!error?.message}
                    helperText={error?.message}
                />
            )}
        />
    )
}

export default ReUseInput;