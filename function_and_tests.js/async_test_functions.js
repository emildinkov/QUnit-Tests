export async function fetchData(url) {
    let result = await fetch(url)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
    })
    .catch(error => `${error.message}`)
    return result;
}

export async function fake_delay(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}