export const userRole = {
    Admin: 'Admin',
    Donor: 'Donor',
    Requester: 'Requester'
} as const;

export type IUserRole = (typeof userRole)[keyof typeof userRole];
