"use client"
import { useGetAllDonorQuery } from '@/Redux/api/user/userApi';
import { Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React from 'react';

const donorPage = () => {
    const { data, isFetching, isLoading } = useGetAllDonorQuery(undefined);

    if (isFetching || isLoading) {
        return <h1>Loading</h1>;
    }
    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Name', flex: 1 },
        { field: 'email', headerName: 'Email', flex: 1 },
        {
            field: 'status',
            headerName: 'Status',
            flex: 1,
            renderCell: (params) => {
                const { value } = params;
                let color: string = '';
                if (value === 'ACTIVE') {
                    color = 'green'
                }
                else if (value === 'BLOCKED') {
                    color = 'red'
                }
                return <Typography sx={{ marginTop: '10px', color: `${color}` }} variant="button" display="block" gutterBottom>
                    {value}
                </Typography>
            }
        },
        { field: 'bloodType', headerName: 'Blood Type', flex: 1 },
        { field: 'location', headerName: 'Location', flex: 1 },
    ];

    const rows = data?.data || [];

    return (
        <div style={{ width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                getRowId={(row) => row.id}
                hideFooterPagination
                hideFooter
            />
        </div>
    );
};

export default donorPage;