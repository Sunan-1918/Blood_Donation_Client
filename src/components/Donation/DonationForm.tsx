"use client"
import assets from "@/assets";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import ReUseForm from "@/components/Shared/Form/ReForm";
import ReUseInput from "@/components/Shared/Form/ReInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { z } from "zod";
import ReUseDatePicker from "@/components/Shared/Form/ReDatePicker"; // Ensure correct import path

const donationSchema = z.object({
    donorId: z.string(),
    dateOfDonation: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Input the Donation Date'),
    hospitalName: z.string().max(45, 'Provide the Hospital Name'),
    hospitalAddress: z.string().max(45, 'Provide the Hospital Name'),
    reason: z.string().max(45, 'Provide the Hospital Name'),
});

const defaultValues = {
    donorId: "",
    dateOfDonation: "",
    hospitalName: "",
    hospitalAddress: "",
    reason: "",
};

const DonationPage = ({ id }: { id: string }) => {
    const router = useRouter();
    const [error, setError] = useState('');

    const handleDonation = async (data: FieldValues) => {
        console.log(data);
        // Handle form submission logic
    };

    return (
        <Container>
            <Stack justifyContent='center' alignItems='center'>
                <Box sx={{ boxShadow: 1, maxWidth: 900, width: "100%", borderRadius: 1, p: 4 }}>
                    <Stack justifyContent='center' alignItems='center'>
                        <Box>
                            <Image src={assets.svgs.logo} alt="logo" width={50} height={50} />
                        </Box>
                        <Box>
                            <Typography component='h1' variant="h5" fontWeight={600}>
                                Request for Donation
                            </Typography>
                        </Box>
                    </Stack>
                    {error && (
                        <Box sx={{ backgroundColor: 'red', margin: "8px", borderRadius: '10px' }}>
                            <Typography sx={{ padding: '10px', color: 'white' }} textAlign='center'>
                                {error}
                            </Typography>
                        </Box>
                    )}
                    <Box sx={{ margin: '30px 0px' }}>
                        <ReUseForm onSubmit={handleDonation} resolver={zodResolver(donationSchema)} defaultValues={defaultValues}>
                            <Grid container spacing={2}>
                                <Grid item md={12}>
                                    <ReUseInput
                                        name="donorId"
                                        label="Donor's ID"
                                        type="text"
                                        fullWidth={true}
                                        value={id}
                                        disable={true}
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <ReUseInput
                                        name="hospitalName"
                                        label="Hospital Name"
                                        type="text"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <ReUseInput
                                        name="hospitalAddress"
                                        label="Hospital Address"
                                        type="text"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid item md={8}>
                                    <ReUseInput
                                        name="reason"
                                        label="Reason"
                                        type="text"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid item md={4}>
                                    <ReUseDatePicker
                                        name="dateOfDonation"
                                        label="Date of Donation"
                                    />
                                </Grid>
                            </Grid>
                            <Button type="submit" sx={{ margin: '25px 0px 15px 0px' }} fullWidth>
                                Submit
                            </Button>
                        </ReUseForm>
                    </Box>
                </Box>
            </Stack>
        </Container>
    );
};

export default DonationPage;
