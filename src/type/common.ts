import { userRole } from "@/constant/role";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

import { BaseQueryApi } from '@reduxjs/toolkit/query';

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




export type TError = {
    data: {
        message: string;
        stack: string;
        success: boolean;
    };
    status: number;
};


export type Tfilter = { name: string, value: boolean | React.Key }

export type TResponse<T> = {
    data?: T;
    error?: TError;
    meta?: Tmeta;
    success: boolean;
    message: string;
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;