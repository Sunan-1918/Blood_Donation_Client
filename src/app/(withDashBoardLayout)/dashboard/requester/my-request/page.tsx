"use client"
import React, { useState } from 'react';
import { useGetDonationQuery } from '@/Redux/api/donation/donationApi';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Typography } from '@mui/material';
import SaveButton from '@/components/SaveButton';

const RequestPage = () => {
    const { data, isFetching, isLoading } = useGetDonationQuery(undefined);

    if (isFetching || isLoading) {
        return <h1>Loading</h1>;
    }
    const columns: GridColDef[] = [
        { field: 'dateOfDonation', headerName: 'Date Of Donation', flex: 1 },
        { field: 'hospitalAddress', headerName: 'Hospital Address', flex: 1 },
        { field: 'hospitalName', headerName: 'Hospital Name', flex: 1 },
        { field: 'phoneNumber', headerName: 'Phone Number', flex: 1 },
        { field: 'reason', headerName: 'Reason', flex: 1 },
        {
            field: 'requestStatus',
            headerName: 'Request Status',
            flex: 1,
            type: 'singleSelect',
            valueOptions: ['PENDING', 'APPROVED', 'REJECTED'],
            editable: true,
            renderCell: (params) => {
                const { id, value } = params;
                let color: string = '';
                if (value === 'REJECTED') {
                    color = 'red'
                }
                else if (value === 'PENDING') {
                    color = 'blue'
                }
                else if (value === 'APPROVED') {
                    color = 'green'
                }
                return <Typography sx={{ marginTop: '10px', color: `${color}` }} variant="button" display="block" gutterBottom>
                    {value}
                </Typography>
            }
        },
        {
            field: 'actions',
            headerName: 'Actions',
            flex: 1,
            type: 'actions',
            renderCell: (params) => <SaveButton {...{ params }} />
        }
    ];

    const rows = data?.data || [];

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                getRowId={(row) => row.id}
            />
        </div>
    );
};

export default RequestPage;
