"use client"
import { Box, Container, Grid, Stack } from '@mui/material';
import React from 'react';
import { useGetAllDonorQuery, useGetMeQuery } from '@/Redux/api/user/userApi';
import DonorCard from '@/components/User/DonorCard';

const DonorPage = () => {
    const { data: myInfo, isFetching: isFetchingMe } = useGetMeQuery(undefined);
    const bloodType = myInfo?.data?.bloodType;

    const { data, isLoading, isFetching } = useGetAllDonorQuery(
        myInfo ? [{ name: 'bloodType', value: `${bloodType}` }] : [],
        { skip: isFetchingMe }
    );

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
                        {isLoading || isFetching || isFetchingMe ? (
                            <h1>Loading...</h1>
                        ) : (
                            data?.data?.map(item => (
                                <Grid item md={3} key={item.userId}>
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
