"use client"
import { Box, Container, Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";

const Navbar = () => {

    const AuthButton = dynamic(() => import('@/components/UI/Button/AuthButton'), { ssr: false })

    return (
        <Container>
            <Stack py={2} direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant="h4" component={Link} href="/" fontWeight={600}>
                    <Box component='span' color='primary.main'>B</Box>lood Donation
                </Typography>
                <Stack direction="row" justifyContent="space-between" gap={4}>
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
                <AuthButton />
            </Stack>
        </Container>
    );
};

export default Navbar;