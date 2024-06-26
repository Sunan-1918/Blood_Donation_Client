"use client"
import { useCreateDonorMutation, useCreateRequesterMutation } from "@/Redux/api/user/userApi";
import { saveAccessToken } from "@/Service/actions/authservice";
import { login } from "@/Service/actions/login";
import assets from "@/assets";
import ReUseDatePicker from "@/components/Shared/Form/ReDatePicker";
import ReUseForm from "@/components/Shared/Form/ReForm";
import ReUseInput from "@/components/Shared/Form/ReInput";
import ReUseSelect from "@/components/Shared/Form/ReSelect";
import { bloodGroups, bloodGroupsOption } from "@/constant/role";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";


const registrationZodSchema = z.object({
    name: z.string().min(2, 'Input Name'),
    email: z.string().email("Enter Your Email"),
    password: z.string().min(8, "Password Must be 8 characters"),
    bloodType: z.enum(bloodGroups),
    location: z.string().min(1, "Enter Your Address"),
    age: z.string().min(2, "Enter Your Age"),
    lastDonationDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    availability: z.enum(['true', 'false']),
    phone: z.string().min(11, "Enter Your Contact Number"),
    role: z.enum(['Donor', 'Requester']),
    socialMedia: z.string().optional()
})



const defaultValues = {
    name: "",
    email: "",
    password: "",
    bloodType: "",
    location: "",
    age: "",
    lastDonationDate: "",
    availability: "",
    phone: "",
    socialMedia: "",
    role: "",
}

const RegisterPage = () => {
    const router = useRouter()
    const [error, setError] = useState('')
    const [createDonor] = useCreateDonorMutation()
    const [createRequester] = useCreateRequesterMutation()

    const onSubmit = async (data: FieldValues) => {
        data.age = Number(data.age);
        data.availability = data.availability.toLowerCase() === 'true';

        const { role, ...rest } = data;
        const loadingId = toast.loading("Creating...");

        const handleResponse = async (response: any) => {
            if (response.data.success) {
                toast.success(response.data.message, { id: loadingId });
                const userInfo = await login({ email: data.email, password: data.password });

                if (userInfo.success) {
                    saveAccessToken({ accessToken: userInfo.data.token });
                    router.push('/dashboard');
                } else {
                    throw new Error(userInfo);
                }
            } else {
                throw new Error(response);
            }
        };

        try {
            let response;
            if (role === 'Donor') {
                response = await createDonor(rest);
            } else if (role === 'Requester') {
                response = await createRequester(rest);
            } else {
                throw new Error('Invalid role');
            }

            await handleResponse(response);
        } catch (error: any) {
            toast.error("Failed to Create", { id: loadingId });
        }
    };
    return (
        <Container>
            <Stack
                height="100vh"
                justifyContent='center'
                alignItems='center'>
                <Box
                    sx={{
                        boxShadow: 1,
                        maxWidth: 900,
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
                                Register in Blood Donation
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
                        <ReUseForm onSubmit={onSubmit} resolver={zodResolver(registrationZodSchema)} defaultValues={defaultValues}>
                            <Grid container spacing={2}>
                                <Grid item md={12}>
                                    <ReUseInput
                                        name="name"
                                        label="Name"
                                        type="text"
                                        size="small"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid item md={4}>
                                    <ReUseInput
                                        name="email"
                                        label="Email"
                                        type="email"
                                        size="small"
                                        fullWidth={true}
                                    />
                                </Grid>

                                <Grid item md={4}>
                                    <ReUseInput
                                        name="phone"
                                        label="Contact Number"
                                        type="text"
                                        size="small"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid item md={4}>
                                    <ReUseInput
                                        name="location"
                                        label="Address"
                                        type="text"
                                        size="small"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <ReUseInput
                                        name="password"
                                        label="Password"
                                        type="password"
                                        size="small"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <ReUseInput
                                        name="age"
                                        label="Age"
                                        type="text"
                                        size="small"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid item md={8}>
                                    <ReUseInput
                                        required="false"
                                        name="socialMedia"
                                        label="Social Media"
                                        type="text"
                                        size="small"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid item md={4}>
                                    <ReUseDatePicker
                                        name="lastDonationDate"
                                        label="Last Donation"
                                    />
                                </Grid>
                                <Grid item md={12}>
                                    <ReUseSelect
                                        name="bloodType"
                                        label="Blood Group"
                                        type="text"
                                        size="small"
                                        fullWidth={true}
                                        options={bloodGroupsOption}
                                    />
                                </Grid>
                                <Grid item md={7}>
                                    <ReUseSelect
                                        name="availability"
                                        label="Availability"
                                        type="text"
                                        size="small"
                                        fullWidth={true}
                                        options={['true', 'false']}
                                    />
                                </Grid>
                                <Grid item md={5}>
                                    <ReUseSelect
                                        name="role"
                                        label="Role"
                                        type="text"
                                        size="small"
                                        fullWidth={true}
                                        options={['Donor', 'Requester']}
                                    />
                                </Grid>
                            </Grid>
                            <Button sx={{ margin: '15px 0px' }} fullWidth={true} type="submit">REGISTER</Button>
                        </ReUseForm>
                        <Typography component='p' textAlign='center'>
                            Do you already have an account? <Link href='/login' className="text-blue-500">Login</Link>
                        </Typography>
                    </Box>
                </Box>
            </Stack>
        </Container>
    );
};

export default RegisterPage;