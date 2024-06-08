import { getUserInfo } from "@/Service/actions/authservice";
import { Button } from "@mui/material";
import Link from "next/link";
import AppBar from "./AppBar";

const AuthButton = () => {
    const getUser: any = getUserInfo();


    return (
        <>
            {
                !getUser?.userId ? <AppBar /> : (<Button component={Link} href="/login">Login</Button>)
            }
        </>
    );
};

export default AuthButton;