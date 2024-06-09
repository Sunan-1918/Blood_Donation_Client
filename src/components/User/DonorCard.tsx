import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { IDonor } from '@/type';
import config from '@/config';
import Image from 'next/image';
import Link from 'next/link';

const DonorCard = ({ item }: { item: IDonor }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <Image src="https://res.cloudinary.com/dzegkjwjh/image/upload/f_auto,q_auto/gwczb8ibfgk7lpxvddp6" width={250} height={50} alt='Donor photo' />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                    </Typography>
                    <Typography component='p' color="text.primary">
                        Blood Type: {item.bloodType}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Location : {item.location}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Availability: {item.availability ? "Yes" : "No"}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" variant="outlined" color="success" >
                    <Link href={`/donor/${item.id}`}>
                        Details
                    </Link>
                </Button>
            </CardActions>
        </Card>
    );
};

export default DonorCard;
