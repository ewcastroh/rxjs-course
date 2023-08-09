const url = 'https://api.github.com/users?per_page=5';

const errorHandling = (response: Response) => {
    if (!response.ok) {
        throw Error(`Status ${response.status}: ${response.statusText}`);
    }
    return response;
};

const fetchPromise = fetch(url);
/* fetchPromise
    .then(response => response.json())
    .then(data => console.log('Data:', data))
    .catch(error => console.warn('Error in users', error));
 */
fetchPromise
    .then(errorHandling)
    .then(response => response.json())
    .then(data => console.log('Data:', data))
    .catch(error => console.warn('Error in users.', error));
