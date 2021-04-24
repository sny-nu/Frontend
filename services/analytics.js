import api from '../plugins/axios';

export async function getStats(urlHash) {
    try {
        const response = await api.get(`/v1/analytics/${urlHash}`);

        if (response.status >= 200 && response.status < 400) {
            return response.data;
        }
    } catch (error) {

    }
}
