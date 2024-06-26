"use client"
import assets from "@/assets";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import ReUseForm from "@/components/Shared/Form/ReForm";
import ReUseInput from "@/components/Shared/Form/ReInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { z } from "zod";
import { useChangePasswordMutation } from "@/Redux/api/auth/authApi";

const changePasswordZodSchema = z.object({
    oldPassword: z.string().min(8, "Password must be at least 8 characters"),
    newPassword: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(8, "Password must be at least 8 characters"),
}).refine(data => data.newPassword === data.confirmPassword, {
    message: "New Password and Confirm Password must match",
    path: ["confirmPassword"]
});

const defaultValues = {
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
}

const changePasswordPage = () => {
    const router = useRouter()
    const [error, setError] = useState('')
    const [changePassword] = useChangePasswordMutation()
    const handlePasswordChange = async (data: FieldValues) => {

        const loadingId = toast.loading("Changing...")
        try {
            const response: any = await changePassword(data).unwrap();



            if (Object.keys(response).length > 0) {
                toast.success("Password Change Successfully", { id: loadingId })
                router.push('/')
            }
            else {
                setError(response.message)
                throw new Error()
            }
        } catch (error: any) {
            toast.error("Failed to change", { id: loadingId })
        }

    }
    return (
        <Container>
            <Stack
                height="100vh"
                justifyContent='center'
                alignItems='center'>
                <Box
                    sx={{
                        boxShadow: 1,
                        maxWidth: 600,
                        width: "100%",
                        borderRadius: 1,
                        p: 4
                    }}
                >
                    <Stack justifyContent='center'
                        alignItems='center'>
                        <Box>
                            <Image src={assets.svgs.logo} alt="logo" width={50} height={50} />
                        </Box>
                        <Box>
                            <Typography component='h1' variant="h5" fontWeight={600}>
                                Change Password
                            </Typography>
                        </Box>
                    </Stack>
                    <Box sx={{ backgroundColor: 'red', margin: "8px", borderRadius: '10px' }}>
                        {
                            error &&
                            <Typography sx={{ padding: '10px', color: 'white' }} textAlign='center' >{error}</Typography>
                        }
                    </Box>
                    <Box sx={{ margin: '30px 0px' }}>
                        <ReUseForm onSubmit={handlePasswordChange} resolver={zodResolver(changePasswordZodSchema)} defaultValues={defaultValues} >
                            <Grid container spacing={2} marginBottom={1}>
                                <Grid item md={6}>
                                    <ReUseInput
                                        name="oldPassword"
                                        label="Old Password"
                                        type="password"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <ReUseInput
                                        name="newPassword"
                                        label="New Password"
                                        type="password"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid item md={12}>
                                    <ReUseInput
                                        name="confirmPassword"
                                        label="Confirm Password"
                                        type="password"
                                        fullWidth={true}
                                    />
                                </Grid>
                            </Grid>
                            <Button type="submit" sx={{ margin: '5px 0px 15px 0px' }} fullWidth={true}>Change</Button>
                        </ReUseForm>
                    </Box>
                </Box>
            </Stack>
        </Container>
    );
};

export default changePasswordPage;