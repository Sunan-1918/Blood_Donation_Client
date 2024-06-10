import { useUpdateDonationMutation } from '@/Redux/api/donation/donationApi';
import { Button } from '@mui/material';
import React from 'react';
import { toast } from 'sonner';

const SaveButton = ({ params }: { params: any }) => {
    const { id, requestStatus } = params.row;
    const [updateDonation] = useUpdateDonationMutation()
    let color: 'primary' | 'inherit' | 'secondary' | 'success' | 'error' | 'info' | 'warning' = 'primary';

    const handleStatusChange = async () => {

        const loadingId = toast.loading("Updating...")
        try {
            const response = await updateDonation({ id, requestStatus });

            if (response.data.success) {
                toast.success(response.data.message, { id: loadingId })
                color = "success"
            }
        } catch (error: any) {
            toast.error("Failed to Update", { id: loadingId })
        }
    };

    return (
        <Button size="small" color={color} onClick={handleStatusChange}>
            Save
        </Button>
    );
};

export default SaveButton;
function setError(message: any) {
    throw new Error('Function not implemented.');
}

