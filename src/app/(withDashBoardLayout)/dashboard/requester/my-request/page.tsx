"use client"
import { useGetDonationQuery } from '@/Redux/api/donation/donationApi';
import { Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

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
                return <Typography sx={{ marginTop: '10px', color: `${color}` }} display="block" gutterBottom>
                    {value}
                </Typography>
            }

        }
    ];

    const rows = data?.data || [];

    return (
        <div style={{ width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                getRowId={(row) => row.id}
                hideFooter={true}
            />
        </div>
    );
};

export default RequestPage;
