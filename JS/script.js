async function mainEvent() { // the async keyword means we can make API requests
    const mainForm = document.querySelector('.main_form'); // This class name needs to be set on your form before you can listen for an event on it
    const generateButton = document.querySelector(".country_data");
  
    let currentList = []; // this is "scoped" to the main event function
    
    /* We need to listen to an "event" to have something happen in our page - here we're listening for a "submit" */
    mainForm.addEventListener('submit', async (submitEvent) => { // async has to be declared on every function that needs to "await" something
      
      // This prevents your page from becoming a list of 1000 records from the county, even if your form still has an action set on it
      submitEvent.preventDefault(); 
      
      // this is substituting for a "breakpoint" - it prints to the browser to tell us we successfully submitted the form
      console.log('form submission'); 
    
    fetch(`https://api.v2.emissions-api.org/api/v2/carbonmonoxide/average.json?country=${document.querySelector("#country").value}&begin=2019-01-01&end=2019-03-01&limit=10`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let ctx = document.getElementById('chart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                // use start times contained in the requested data as labels
                labels: data.map(x => x.start.substring(8, 10)),
                datasets: [{
                    label: country.value,
                    backgroundColor: '#93bd20',
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
                            labelString: 'carbon monoxide [mol/m²]'
                        },
                        ticks: {
                            beginAtZero: false
                        }
                    }],
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'day (in January 2019)'
                        }
                    }]
                }
            }
        });
    })
    });
  
  }
  
  document.addEventListener('DOMContentLoaded', async () => mainEvent());