"use client"
import { useDeleteDonorMutation, useGetAllDonorQuery } from '@/Redux/api/user/userApi';
import { Button, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from 'sonner';

const donorPage = () => {
    const [deleteDonor] = useDeleteDonorMutation()

    const handleDelete = async (id: any) => {

        const loadingId = toast.loading("Deleting...")
        try {
            const response = await deleteDonor(id);
            if (response.data.success) {
                toast.success(response.data.message, { id: loadingId })
            }
        } catch (error: any) {
            toast.error("Failed to Update", { id: loadingId })
        }

    }

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
        {
            field: 'actions',
            headerName: 'Actions',
            flex: 0.5,
            type: 'actions',
            renderCell: (params) => <Button variant='text' onClick={() => handleDelete(params.row.userId)}><DeleteIcon sx={{ color: 'red' }} /></Button>
        }
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