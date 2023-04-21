$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/country?max_gdp_growth',
    headers: { 'X-Api-Key': '1nbT8IdaS6tbrn0BCOobWg==TnBCgvjU92HHLXP9'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});