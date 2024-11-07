export const apiWrapper = async (apiCall) => {
    try {
        const response = await apiCall();
        return response.data;
    }
    catch (error) {
        console.log(error);
        throw (error.response ? error.response.data : error.message);
    }
}
