import { romzzApi } from "../api/apiSlice";


const DashboardSlices = romzzApi.injectEndpoints({
    endpoints: (builder) => ({

        // Dashboard 
        //  card  
        getDashboardCard: builder.query({
            query: () => "/dashboard/metrics"
        }),

        //     charts 
        getUsersChart: builder.query({
            query: (year) => {
                return {
                    url: `/dashboard/users-count/${year}`,
                }
            }
        }),

        getRevenueChart: builder.query({
            query: (year) => {
                return {
                    url: `/dashboard/revenue-count/${year}`
                }
            }
        }),

        // Post Request   
        getRequest: builder.query({
            query: ({ searchValue, page }) => {
                console.log(searchValue);
                const params = new URLSearchParams()
                if (page) params.append("page", page)
                if (searchValue) params.append("searchTerm", searchValue)
                return {
                    url: `/properties?${params.toString()}`
                }
            }
        }),
        getSingleReq: builder.query({
            query: (id) => `/properties/${id}`
        }),

        updateApprove: builder.mutation({
            query: (id) => {
                return {
                    url: `/properties/approve/${id}`,
                    method: "PATCH",
                }
            }
        }),

        updateReject: builder.mutation({
            query: (id) => {
                return {
                    url: `/properties/reject/${id}`,
                    method: "PATCH"
                }
            }
        }),

        // users  
        getUsers: builder.query({
            query: ({ page, search }) => {
                const params = new URLSearchParams()
                if (page) params.append("page", page)
                if (search) params.append("searchTerm", search)
                return {
                    url: `/users?${params.toString()}`
                }
            }
        }),

        getUserId: builder.query({
            query: (id) => {
                return {
                    url: `/users/profile/${id}`
                }
            }
        }),

        updateUserStatus: builder.mutation({
            query: (data) => ({
                url: `/users/update-status/${data?.id}`,
                method: "PATCH",
                body: data
            })
        }),

        getUserProperties: builder.query({
            query: (value) => {
                const params = new URLSearchParams()
                if (value?.type) params.append("type", value?.type)
                return {
                    url: `/properties/user-properties/${value?.id}?${params.toString()}`
                }
            }
        }),

        // transactions  
        getTransactions: builder.query({
            query: ({ page, searchTerm, status }) => {
                const params = new URLSearchParams()
                if (page) params.append("page", page)
                if (searchTerm) params.append("searchTerm", searchTerm)
                if (status) params.append("status", status)
                return {
                    url: `/bookings?${params.toString()}`
                }
            }
        }),

        // Notification  
        getNotification: builder.query({
            query: (page) => {
                const params = new URLSearchParams()
                if (page) params.append("page", page)
                return {
                    url: `/notifications/admin?${params.toString()}`
                }
            }
        }),

        updateReadAllNotification: builder.mutation({
            query: () => ({
                url: "/notifications/mark-as-read",
                method: "PATCH"
            })
        }),

        updateReadNotification: builder.mutation({
            query: () => ({
                url: "/notifications/mark-as-seen",
                method: "PATCH"
            })
        }),

        // News  
        getNews: builder.query({
            query: (page) => {
                const params = new URLSearchParams()
                if (page) params.append("page", page)
                return { url: `/blogs?${params.toString()}` }
            }
        }),
        createNews: builder.mutation({
            query: (value) => ({
                url: "/blogs",
                method: "POST",
                body: value
            })
        }),
        updateNews: builder.mutation({
            query: ({ id, formData }) => ({
                url: `/blogs/${id}`,
                method: "PATCH",
                body: formData
            })
        }),
        DeleteNews: builder.mutation({
            query: (id) => ({
                url: `/blogs/${id}`,
                method: "DELETE"
            })
        }),

        // subscriber   
        getSubscriber: builder.query({
            query: (page) => {
                const params = new URLSearchParams()
                if (page) params.append("page", page)
                return {
                    url: `/subscriptions?${params.toString()}`
                }
            }
        }),
        subscriberDetails: builder.query({
            query: (id) => {
                return {
                    url: `/subscriptions/${id}`
                }
            },
            transformResponse: (data)=>{
                return data?.data
            }
        }),

        // packages  

        getPackages: builder.query({
            query: () => "/pricing-plans"
        }),

        updatePackages: builder.mutation({
            query: (value) => {
                return {
                    url: `/pricing-plans/${value?.id}`,
                    method: "PATCH",
                    body: value
                }
            }
        }),
        // make Admin  
        getAdmin: builder.query({
            query: (page) => {
                const params = new URLSearchParams()
                if (page) params.append("page", page)
                return {
                    url: `/users/admins?${params.toString()}`
                }
            }
        }),
        createAdmin: builder.mutation({
            query: (value) => ({
                url: "/users/create-admin",
                method: "POST",
                body: value
            })
        }),


        // setting  
        //  ---- slider---  
        getSlider: builder.query({
            query: () => "/sliders"
        }),
        deleteSlider: builder.mutation({
            query: (id) => ({
                url: `/sliders/${id}`,
                method: "DELETE"
            })
        }),
        createSlider: builder.mutation({
            query: (value) => {
                return {
                    url: "/sliders",
                    method: "POST",
                    body: value
                }
            }
        }),
        updateSlider: builder.mutation({
            query: ({ id, formData }) => {
                return {
                    url: `/sliders/${id}`,
                    method: "PATCH",
                    body: formData
                }
            }
        }),

        // our story  
        getStory: builder.query({
            query: () => "/our-story"
        }),

        createStory: builder.mutation({
            query: (formData) => {
                return {
                    url: "/our-story",
                    method: "POST",
                    body: formData
                }
            }
        }),

        updateStory: builder.mutation({
            query: ({ id, formData }) => {
                return {
                    url: `/our-story/${id}`,
                    method: "PATCH",
                    body: formData
                }
            }
        }),

        // ---terms---  
        getTerms: builder.query({
            query: () => "/terms-and-conditions"
        }),

        postTerms: builder.mutation({
            query: (value) => {
                return {
                    url: "/terms-and-conditions",
                    method: "POST",
                    body: value
                }
            }
        }),

        updateTerms: builder.mutation({
            query: (value) => ({
                url: `/terms-and-conditions/${value?.createdBy}`,
                method: "PATCH",
                body: value
            })
        }),

        // ---FAQ---- 
        getFaq: builder.query({
            query: () => "/faqs"
        }),
        createFaq: builder.mutation({
            query: (value) => ({
                url: "/faqs",
                method: "POST",
                body: value
            })
        }),
        updateFaq: builder.mutation({
            query: (data) => {
                console.log(data);
                return {
                    url: `/faqs/${data?.id}`,
                    method: "PATCH",
                    body: data
                }
            }
        }),
        deleteFaq: builder.mutation({
            query: (id) => ({
                url: `/faqs/${id}`,
                method: "DELETE"
            })
        }),

        // ---Facility--  
        getFacility: builder.query({
            query: (page) => {
                const params = new URLSearchParams()
                if (page) params.append("page", page)
                return {
                    url: `/facilities?${params.toString()}`
                }
            }
        }),
        createFacility: builder.mutation({
            query: (value) => ({
                url: "/facilities",
                method: "POST",
                body: value
            })
        }),
        updateFacility: builder.mutation({
            query: ({ id, formData }) => ({
                url: `/facilities/${id}`,
                method: "PATCH",
                body: formData
            })
        }),
        deleteFacility: builder.mutation({
            query: (id) => ({
                url: `/facilities/${id}`,
                method: "DELETE"
            })
        }),

        // ---get in touch ---  
        getEmail: builder.query({
            query: (page) => {
                const params = new URLSearchParams()
                if (page) params.append("page", page)
                return { url: `/contacts?${params.toString()}` }
            }
        }),

        // --- website Review ---  
        getFeedback: builder.query({
            query: (page) => {
                const params = new URLSearchParams()
                if (page) params.append("page", page)
                return { url: `/feedbacks?${params.toString()}` }
            }
        }),
        updateStatus: builder.mutation({
            query: (value) => {
                return {
                    url: `/feedbacks/update-status/${value?.id}`,
                    method: "PATCH",
                    body: value
                }
            }
        }),

    })
})

export const { useGetDashboardCardQuery, useGetRevenueChartQuery, useGetUsersChartQuery, useGetRequestQuery, useGetSingleReqQuery, useUpdateApproveMutation, useUpdateRejectMutation, useGetUsersQuery, useUpdateUserStatusMutation, useGetSliderQuery, useDeleteSliderMutation, useCreateSliderMutation, useUpdateSliderMutation, useUpdateTermsMutation, useGetTermsQuery, useGetStoryQuery, useCreateStoryMutation, useUpdateStoryMutation, useCreateFaqMutation, useDeleteFaqMutation, useGetFaqQuery, useUpdateFaqMutation, useCreateFacilityMutation, useDeleteFacilityMutation, useGetFacilityQuery, useUpdateFacilityMutation, useGetEmailQuery, useGetFeedbackQuery, useUpdateStatusMutation, useGetAdminQuery, useCreateAdminMutation, useCreateNewsMutation, useDeleteNewsMutation, useGetNewsQuery, useUpdateNewsMutation, useGetNotificationQuery, useUpdateReadNotificationMutation, useUpdateReadAllNotificationMutation, useGetTransactionsQuery, useGetSubscriberQuery, useSubscriberDetailsQuery, useGetPackagesQuery, useUpdatePackagesMutation, useGetUserIdQuery, useGetUserPropertiesQuery, usePostTermsMutation } = DashboardSlices