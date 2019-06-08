export function fetchHireListData(url) {
    fetch(url).then((response) => {
        return response.json();
    }).then((json) => {
        return json;
    }).catch(() => {
        return {};
    })
}