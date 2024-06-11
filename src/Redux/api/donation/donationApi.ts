import { tagTypes } from "@/Redux/tag-type";
import { baseApi } from "../baseApi";
import { Tfilter } from "@/type";

const donationApi = baseApi.injectEndpoints({
    endpoints: (build) => ({

        createDonation: build.mutation({
            query: (data) => ({
                url: '/donation/donation-request',
                method: 'POST',
                data
            }),
            invalidatesTags: [tagTypes.donation]
        }),

        getDonation: build.query({
            query: (args) => {

                const params = new URLSearchParams();
                if (args) {
                    args.forEach((item: Tfilter) => {
                        params.append(item.name, item.value as string)
                    });
                }

                return {
                    url: '/donation/donation-request',
                    method: 'GET',
                    params
                }
            },
            providesTags: [tagTypes.donation]
        }),

        updateDonation: build.mutation({
            query: (data) => {
                console.log(data);
                return {
                    url: `/donation/donation-request/${data.id}`,
                    method: 'PUT',
                    data: data.payload
                }
            },
            invalidatesTags: [tagTypes.donation]
        }),


    }),
})

export const { useCreateDonationMutation, useGetDonationQuery, useUpdateDonationMutation } = donationApi