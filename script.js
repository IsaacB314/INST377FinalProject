const api_url = 'https://api.v2.emissions-api.org'
        + '/api/v2/carbonmonoxide/average.json'
        + '?country=DE&begin=2019-02-01&end=2019-03-01'


fetch(api_url)
.then(response => response.json())
.then(data => {
    let values = data.map(x => x.average);
    console.log(values);
    // logs:
    // (28) [0.0330089744766232, 0.032249495510353, 0.0360124611289537, …
})
