
import { userRole } from "@/constant/role";
import { DrawerItem, IUserRole } from "@/type"

//icons


export const drawerItems = (role: IUserRole) => {
    const roleMenu: DrawerItem[] = [];

    switch (role) {
        case userRole.Admin:
            roleMenu.push(
                {
                    title: "Dashboard",
                    path: `${role}`,
                    //icon: DashboardIcon
                },
                {
                    title: "Donor",
                    path: `${role}`,
                    //icon: DashboardIcon
                },
                {
                    title: "Requester",
                    path: `${role}`,
                    //icon: DashboardIcon
                },
                {
                    title: "Request",
                    path: `${role}`,
                    //icon: DashboardIcon
                }
            );
            break;
        case userRole.Donor:
            roleMenu.push(
                {
                    title: "Dashboard",
                    path: `${role}`,
                    //icon: DashboardIcon
                },
                {
                    title: "Request",
                    path: `${role}`,
                    //icon: DashboardIcon
                },
                {
                    title: "Accepted Request",
                    path: `${role}`,
                    //icon: DashboardIcon
                },

            );
            break;
        case userRole.Requester:
            roleMenu.push(
                {
                    title: "My Request",
                    path: `${role}`,
                    //icon: EventIcon
                }
            );
            break;
        default:
            break;
    }
    return [...roleMenu]
}