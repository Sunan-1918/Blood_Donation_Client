
import { userRole } from "@/constant/role";
import { DrawerItem, IUserRole } from "@/type"

//icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import AssignmentIcon from '@mui/icons-material/Assignment';


export const drawerItems = (role: IUserRole) => {
    const roleMenu: DrawerItem[] = [];

    switch (role) {
        case userRole.Admin:
            roleMenu.push(
                {
                    title: "Dashboard",
                    path: `${role}`,
                    icon: DashboardIcon
                },
                {
                    title: "Donor",
                    path: `${role}/donor`,
                    icon: GroupIcon
                },
                {
                    title: "Requester",
                    path: `${role}/requester`,
                    icon: GroupIcon
                },
                {
                    title: "Request",
                    path: `${role}/request`,
                    icon: RequestPageIcon
                }
            );
            break;
        case userRole.Donor:
            roleMenu.push(
                {
                    title: "Dashboard",
                    path: `${role}`,
                    icon: DashboardIcon
                },
                {
                    title: "Request",
                    path: `${role}/request`,
                    icon: RequestPageIcon
                },
                {
                    title: "Accepted Request",
                    path: `${role}/accept-request`,
                    icon: CheckBoxIcon
                },

            );
            break;
        case userRole.Requester:
            roleMenu.push(
                {
                    title: "Dashboard",
                    path: `${role}`,
                    icon: DashboardIcon
                },
                {
                    title: "My Request",
                    path: `${role}/my-request`,
                    icon: AssignmentIcon
                }
            );
            break;
        default:
            break;
    }
    return [...roleMenu]
}