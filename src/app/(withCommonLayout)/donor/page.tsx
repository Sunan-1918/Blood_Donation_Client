"use client"
import { Box, Container, Grid, Stack } from '@mui/material';
import React from 'react';
import { useGetAllDonorQuery } from '@/Redux/api/user/userApi';
import DonorCard from '@/components/User/DonorCard';

const DonorPage = () => {
    const { data, isLoading, isFetching } = useGetAllDonorQuery(undefined);

    return (
        <Container>
            <Stack
                justifyContent='center'
                alignItems='center'
            >
                <Box
                    sx={{
                        width: "100%",
                        borderRadius: 1,
                        p: 4
                    }}
                >

                    <Grid container spacing={2}>
                        {isLoading || isFetching ? (
                            <h1>Loading...</h1>
                        ) : (
                            data?.data?.map(item => (
                                <Grid item md={3} key={item.id}>
                                    <DonorCard item={item} />
                                </Grid>
                            ))
                        )}
                    </Grid>

                </Box>
            </Stack>
        </Container>
    );
};

export default DonorPage;
