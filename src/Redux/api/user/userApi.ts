import { IDonor, TResponseRedux, Tfilter } from "@/type";
import { baseApi } from "../baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createDonor: build.mutation({
            query: (data) => ({
                url: '/user/create-donor',
                method: 'POST',
                data: data
            })
        }),
        createRequester: build.mutation({
            query: (data) => ({
                url: '/user/create-requester',
                method: 'POST',
                data: data
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
            })
        }),
        getSingleDonor: build.query({
            query: (id) => ({
                url: `/donor/donor-list/${id}`,
                method: "GET",
            })
        }),
    })
})

export const { useCreateDonorMutation, useCreateRequesterMutation, useGetAllDonorQuery, useGetSingleDonorQuery } = userApi;