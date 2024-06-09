"use client"
import { useGetSingleDonorQuery } from '@/Redux/api/user/userApi';
import { IDonor } from '@/type';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import ReFullModal from '@/components/Shared/Modal/ReFullModal';
import ReModal from '@/components/Shared/Modal/ReModal';
import DonationPage from '@/components/Donation/DonationForm';

const SingleDonorPage = ({ params, query }: { params: { donorId: string }, query: any }) => {
    const theme = useTheme();
    const [open, setOpen] = useState(false)
    const { data, isLoading, isFetching } = useGetSingleDonorQuery(params.donorId);

    if (isFetching || isLoading) {
        return <h1>Loading...</h1>
    }

    const { data: DonorDetails }: { data: IDonor } = data;

    return (
        <Container>
            <Stack justifyContent='center' alignItems='center' >
                <Box sx={{ width: "100%", borderRadius: 1, p: 4 }}>
                    <Card sx={{ display: 'flex', width: 550 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1 0 auto' }}>
                            <CardContent sx={{ flex: '1 0 auto', width: 400 }}>
                                <Grid container spacing={2}>
                                    <Grid item md={12}>
                                        <Typography component="div" variant="h5">
                                            Name: {DonorDetails.name}
                                        </Typography>
                                    </Grid>
                                    <Grid item md={6}>
                                        <Typography variant="body2" component="div">
                                            Blood Type: {DonorDetails.bloodType}
                                        </Typography>
                                    </Grid>
                                    <Grid item md={6}>
                                        <Typography variant="body2" component="div">
                                            Age: {DonorDetails.age}
                                        </Typography>
                                    </Grid>
                                    <Grid item md={6}>
                                        <Typography variant="body2" component="div">
                                            Email: {DonorDetails.email}
                                        </Typography>
                                    </Grid>
                                    <Grid item md={6}>
                                        <Typography variant="body2" component="div">
                                            Location: {DonorDetails.location}
                                        </Typography>
                                    </Grid>
                                    <Grid item md={6}>
                                        <Typography variant="body2" component="div">
                                            Last Donation: {DonorDetails.lastDonationDate}
                                        </Typography>
                                    </Grid>
                                    <Grid item md={6}>
                                        <Typography variant="body2" component="div">
                                            Availability: {DonorDetails.availability ? "Yes" : "No"}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                <Button size="small" color="primary" onClick={() => setOpen(true)}>
                                    Request
                                </Button>
                            </Box>
                            <ReFullModal open={open} setOpen={setOpen} title='Request For Donation'>
                                <DonationPage />
                            </ReFullModal>
                        </Box>
                        <CardMedia
                            component="img"
                            sx={{ width: 151, padding: 1 }}
                            image="https://res.cloudinary.com/dzegkjwjh/image/upload/f_auto,q_auto/gwczb8ibfgk7lpxvddp6"
                            alt="Donor image"
                        />
                    </Card>
                </Box>
            </Stack>
        </Container>
    );
};

export default SingleDonorPage;
