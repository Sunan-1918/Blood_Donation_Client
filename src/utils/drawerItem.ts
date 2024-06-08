
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
                    title: "Specialties",
                    path: `${role}/specialties`,
                    //icon: TryIcon
                },
                {
                    title: "Doctors",
                    path: `${role}/doctors`,
                    //icon: MedicalInformationIcon
                },
                {
                    title: "Schedule",
                    path: `${role}/schedules`,
                    //icon: CalendarMonthIcon
                },
                {
                    title: "Appointments",
                    path: `${role}/appointments`,
                    //icon: EventIcon
                },
                {
                    title: "Reviews",
                    path: `${role}/reviews`,
                    //icon: ReviewsIcon
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
                    title: "Schedule",
                    path: `${role}/schedule`,
                    //icon: CalendarMonthIcon
                },
                {
                    title: "Appointments",
                    path: `${role}/appointments`,
                    //icon: EventIcon
                }
            );
            break;
        case userRole.Requester:
            roleMenu.push(
                {
                    title: "Appointments",
                    path: `${role}/appointments`,
                    //icon: EventIcon
                },
                {
                    title: "Prescriptions",
                    path: `${role}/prescriptions`,
                    //icon: MedicationIcon
                },
                {
                    title: "Payment History",
                    path: `${role}/payment-history`,
                    //icon: PaymentIcon
                },

            );
            break;
        default:
            break;
    }
    return [...roleMenu]
}