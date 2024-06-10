"use client"
import { useGetDonationQuery } from '@/Redux/api/donation/donationApi';
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
            flex: 1

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
