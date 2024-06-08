"use client"
import { Controller, useFormContext } from "react-hook-form";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
type Tcontroller = {
    name: string;
    label: string;
}

const ReUseDatePicker = ({ name, label }: Tcontroller) => {
    const { control } = useFormContext()
    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange, value, ...field }, fieldState: { error } }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        {...field}
                        label={label}
                        value={value}
                        onChange={(newValue) => onChange(newValue)}
                    />
                </LocalizationProvider>

            )}
        />
    )
}

export default ReUseDatePicker;