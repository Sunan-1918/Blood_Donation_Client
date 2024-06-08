import { FieldValues } from "react-hook-form";

export const login = async (data: FieldValues) => {
    const fetchData = await fetch(`https://blood-donation-server-eta.vercel.app/api/auth/login`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        },
        cache: 'no-store'
    })
    const res = await fetchData.json()
    return res;
}