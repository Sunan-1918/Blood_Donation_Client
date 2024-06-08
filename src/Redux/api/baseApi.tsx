import { axiosBaseQuery } from '@/helpers/axios/axiosBaseQuery'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { tagTypesList } from '../tag-type'

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: axiosBaseQuery({ baseUrl: 'https://blood-donation-server-eta.vercel.app/api' }),
    endpoints: () => ({

    }),
    tagTypes: tagTypesList
})
