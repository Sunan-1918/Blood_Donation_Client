import { removeAccessToken } from '@/Service/actions/authservice';
import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const AppBar = () => {
    const router = useRouter()
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleLogout = () => {
        removeAccessToken()
        router.refresh()
    }

    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="https://res.cloudinary.com/dzegkjwjh/image/upload/f_auto,q_auto/gwczb8ibfgk7lpxvddp6" />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >

                <MenuItem onClick={handleCloseUserMenu}>
                    <Link href='/dashboard'><Typography textAlign="center">Dashboard</Typography></Link>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                    <Link href='/edit-profile'><Typography textAlign="center">Edit Profile</Typography></Link>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                    <Link href='/change-password'><Typography textAlign="center">Change Password</Typography></Link>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                    <Typography onClick={handleLogout} textAlign="center" sx={{ color: 'red', }}>Log Out</Typography>
                </MenuItem>

            </Menu>
        </Box>
    );
};

export default AppBar;