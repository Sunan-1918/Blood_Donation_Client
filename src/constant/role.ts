export const userRole = {
    Admin: 'Admin',
    Donor: 'Donor',
    Requester: 'Requester'
} as const;

export type IUserRole = (typeof userRole)[keyof typeof userRole];

export const bloodGroups = ["A_Positive", "A_Negative", "B_Positive", "B_Negative", "AB_Positive", "AB_Negative", "O_Positive", "O_Negative"] as const;
export const bloodGroupsOption = ["A_Positive", "A_Negative", "B_Positive", "B_Negative", "AB_Positive", "AB_Negative", "O_Positive", "O_Negative"];
