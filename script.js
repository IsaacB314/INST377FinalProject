

const api_url = 'https://api.v2.emissions-api.org'
        + '/api/v2/methane/average.json'
        + '?country=USA&begin=2019-02-01&end=2019-03-01'

const api_url2 = 'https://api.v2.emissions-api.org'
        + '/api/v2/nitrogendioxide/average.json'
        + '?point=[15,23]&begin=2019-02-01&end=2019-03-01'

//Testing basic plot making with US data from 2019
fetch(api_url)
.then(response => response.json())
.then(data => {
    let values = data.map(x => x.average);
    console.log(values);
    let ctx = document.getElementById('average-example').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                // use start times contained in the requested data as labels
                labels: data.map(x => x.start.substring(8, 10)),
                datasets: [{
                    label: 'United States of America',
                    backgroundColor: '#93bd22',
                    // use the average values as data
                    data: data.map(x => x.average),
                }]
            },

            // add a few sensible configuration options
            options: {
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Methane'
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Day'
                        }
                    }]
                }
            }
        });
    })


    fetch(api_url2)
    .then(response => response.json())
    .then(data => {
        let values = data.map(x => x.average);
        console.log(values);
        let ctx2 = document.getElementById('average-example2').getContext('2d');
            new Chart(ctx2, {
                type: 'bar',
                data: {
                    // use start times contained in the requested data as labels
                    labels: data.map(x => x.start.substring(8, 10)),
                    datasets: [{
                        label: 'France',
                        backgroundColor: '#93bd22',
                        // use the average values as data
                        data: data.map(x => x.average),
                    }]
                },
    
                // add a few sensible configuration options
                options: {
                    scales: {
                        yAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'Nitrogen Dioxide'
                            },
                            ticks: {
                                beginAtZero: true
                            }
                        }],
                        xAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'Day'
                            }
                        }]
                    }
                }
            });
        })

const actions = [
    {
        name: 'Randomize',
        handler(chart) {
        chart.data.datasets.forEach(dataset => {
            dataset.data = Utils.numbers({count: chart.data.labels.length, min: -100, max: 100});
        });
        chart.update();
        }
    }
]
