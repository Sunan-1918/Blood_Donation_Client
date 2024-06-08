import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebookIcon from '@/assets/landing_page/facebook.png'
import instagramIcon from '@/assets/landing_page/instagram.png'
import linkedinIcon from '@/assets/landing_page/linkedin.png'
import twitterIcon from '@/assets/landing_page/twitter.png'

const Footer = () => {
    return (
        <Box bgcolor="rgb(17,26,34)" py={5}>
            <Container>
                <Stack direction="row" justifyContent="center" gap={4}>
                    <Typography component={Link} href="/" >
                        Home
                    </Typography>
                    <Typography component={Link} href="/" >
                        Teams
                    </Typography>
                    <Typography component={Link} href="/" >
                        Coverage Area
                    </Typography>
                    <Typography component={Link} href="/" >
                        Success Stories
                    </Typography>
                    <Typography component={Link} href="/" >
                        About us
                    </Typography>
                </Stack>
                <Stack direction="row" justifyContent="center" gap={4} py={3}>
                    <Image src={facebookIcon} alt="facebook" width={30} height={30} />
                    <Image src={instagramIcon} alt="facebook" width={30} height={30} />
                    <Image src={linkedinIcon} alt="facebook" width={30} height={30} />
                    <Image src={twitterIcon} alt="facebook" width={30} height={30} />
                </Stack>
                <Box sx={{ borderBottom: '1px dashed', color: 'white' }}>
                </Box>
                <Stack direction="row" justifyContent="space-between" alignItems="center" gap={4} py={3}>
                    <Typography component='p' color='white'>
                        &copy;2024 Blood Donation. All Rights Reserved.
                    </Typography>
                    <Typography variant="h4" component={Link} href="/" fontWeight={600} color='white'>
                        <Box component='span' color='primary.main'>B</Box>lood Donation
                    </Typography>
                    <Typography component='p' color='white'>
                        Privacy Policy! Terms & Conditions
                    </Typography>

                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;