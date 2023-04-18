import APIRequest from '../utils/axiosConfig';

export function getRandomeJoke() {
    return APIRequest.get('/', {
        validateStatus: function(status) {
            return status
        }
    })
};
