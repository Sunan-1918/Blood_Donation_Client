import { userRole } from "@/constant/role";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type Tmeta = {
    page: number;
    limit: number;
    total: number;
}

export interface JwtDecodedData {
    userId: string;
    role: "Admin" | "Donor" | "Requester";
    email: string;
    iat: number;
    exp: number;
}

export type IUserRole = (typeof userRole)[keyof typeof userRole];

export interface DrawerItem {
    title: string;
    path: string;
    parentPath?: string;
    icon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string };
    child?: DrawerItem[]
}

export type ResponseSuccessType = {
    data: any;
    meta?: Tmeta;
}