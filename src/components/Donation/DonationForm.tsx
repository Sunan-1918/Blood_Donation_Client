"use client"
import { saveAccessToken } from "@/Service/actions/authservice";
import { login } from "@/Service/actions/login";
import assets from "@/assets";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import ReUseForm from "@/components/Shared/Form/ReForm";
import ReUseInput from "@/components/Shared/Form/ReInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { z } from "zod";
import ReUseDatePicker from "../Shared/Form/ReDatePicker";

const donationSchema = z.object({
    donorId: z.string(),
    dateOfDonation: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    hospitalName: z.string(),
    hospitalAddress: z.string(),
    reason: z.string(),
})


const defaultValues = {
    donorId: "",
    dateOfDonation: "",
    hospitalName: "",
    hospitalAddress: "",
    reason: "",
}

const DonationPage = ({ id }: { id: string }) => {

    const router = useRouter()
    const [error, setError] = useState('')

    const handleRequest = async (data: FieldValues) => {

        console.log(data);

    }
    return (
        <Container>
            <Stack
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
                                Request for Donation
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
                        <ReUseForm onSubmit={handleRequest} resolver={zodResolver(donationSchema)} defaultValues={defaultValues} >
                            <Grid container spacing={2}>
                                <Grid item md={12}>
                                    <ReUseInput
                                        name="donorId"
                                        label="Donor's id"
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
                                        name="lastDonationDate"
                                        label="Last Donation"
                                    />
                                </Grid>
                            </Grid>
                            <Button type="submit" sx={{ margin: '25px 0px 15px 0px' }} fullWidth={true}>Submit</Button>
                        </ReUseForm>
                    </Box>
                </Box>
            </Stack>
        </Container>
    );
};

export default DonationPage;