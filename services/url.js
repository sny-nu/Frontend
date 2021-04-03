import api from '../plugins/axios';
import { toast } from 'react-toastify';

export async function createUrl(url) {
    try {
        console.log(url);
        const response = await api.post("/v1/url", url);
        console.log(response);
        if (response.status >= 200 && response.status < 400) {
            console.log("test");
            return response.data.shortUrl;
        }
    } catch(error) {
        toast.error("Whoops, something went wrong!", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        console.log(error);
    }
}