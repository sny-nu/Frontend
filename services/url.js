import api from '../plugins/axios';
import { toast } from 'react-toastify';
import cookie from 'react-cookies';

export async function createUrl(url) {
    try {
        const response = await api.post("/v1/url", url);
        const cookieValue = cookie.load("sn-cookie-consent") == 'true';

        if (response.status >= 200 && response.status < 400) {
            if(cookieValue == true) {
                const jsonHistory = localStorage.getItem('sn-history');
                const history = JSON.parse(jsonHistory) == null ? [] : JSON.parse(jsonHistory);
                history.push(response.data);
                localStorage.setItem('sn-history', JSON.stringify(history));
            }

            return response.data.shortUrl;
        }
    } catch(error) {
        toast.error("Whoops, something went wrong!", {
            position: "top-center",
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

export async function getUrl(urlHash, userAgent) {
    try {
        const response = await api.get(`/v1/url/${urlHash}`, {
            headers: { 'User-Agent': userAgent }
        });

        if (response.status >= 200 && response.status < 400) {
            return response.data;
        }
    } catch (error) {

    }
}