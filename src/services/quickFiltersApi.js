import api from "./api";

export const getQuickFilters = async () => {
    const response = await api.get("/auth/quick-filters");
    return response.data.data;
}

export const deleteQuickFilters = async (id) => {
    const response = await api.post(`/auth/quick-filters/${id}/delete`)
    return response.data;
}

export const editQuickFilters = async (id, title , notify) => {
    const response = await api.post(`/auth/quick-filters/${id}/update`, 
        { 
            title : title , 
            notify: notify
        });
    return response.data;
}

export const createQuickFilter = async (title, notify, filterDetails) => {
    const response = await api.post("/auth/quick-filters/create", {
        title: title,
        notify: notify,
        filter_details: JSON.stringify(filterDetails),
    })
    console.log(response.data)
    return response.data;
}
