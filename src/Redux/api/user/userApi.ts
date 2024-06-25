import { IDonor, IRequester, TResponseRedux, Tfilter } from "@/type";
import { baseApi } from "../baseApi";
import { tagTypes, tagTypesList } from "@/Redux/tag-type";

const userApi = baseApi.injectEndpoints({
    endpoints: (build) => ({

        createDonor: build.mutation({
            query: (data) => ({
                url: '/user/create-donor',
                method: 'POST',
                data: data
            }),
            invalidatesTags: [tagTypes.donor]
        }),

        deleteDonor: build.mutation({
            query: (id) => ({
                url: `/donor/${id}`,
                method: 'DELET'
            }),
            invalidatesTags: [tagTypes.donor]
        }),

        createRequester: build.mutation({
            query: (data) => ({
                url: '/user/create-requester',
                method: 'POST',
                data: data
            })
        }),

        getMe: build.query({
            query: () => ({
                url: '/user/get-me',
                method: 'GET'
            })
        }),

        getAllDonor: build.query({

            query: (args) => {

                const params = new URLSearchParams();
                if (args) {
                    args.forEach((item: Tfilter) => {
                        params.append(item.name, item.value as string)
                    });
                }

                return {
                    url: "/donor/donor-list",
                    method: "GET",
                    params
                }

            },
            transformResponse: (res: TResponseRedux<IDonor[]>) => ({
                data: res.data,
                meta: res.meta
            }),
            providesTags: [tagTypes.donor]
        }),

        getAllReuqester: build.query({

            query: (args) => {

                const params = new URLSearchParams();
                if (args) {
                    args.forEach((item: Tfilter) => {
                        params.append(item.name, item.value as string)
                    });
                }

                return {
                    url: "/requester/requester-list",
                    method: "GET",
                    params
                }

            },
            transformResponse: (res: TResponseRedux<IRequester[]>) => ({
                data: res.data,
                meta: res.meta
            })
        }),

        getSingleDonor: build.query({
            query: (id) => ({
                url: `/donor/donor-list/${id}`,
                method: "GET",
            }),
            providesTags: [tagTypes.donor]
        }),

    })
})

export const { useCreateDonorMutation, useCreateRequesterMutation, useGetAllDonorQuery, useGetSingleDonorQuery, useGetMeQuery, useGetAllReuqesterQuery, useDeleteDonorMutation } = userApi;