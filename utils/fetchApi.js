import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            "x-rapidapi-key": '42f65e507dmsh2ee19b432e54da4p111e5bjsn709b42088e41',
            "x-rapidapi-host": "bayut.p.rapidapi.com",
        },
    });
    return data;
}