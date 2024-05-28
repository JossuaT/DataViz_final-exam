fetch('data.json')
    .then((response) => response.json())
    .then((data) => run_visualization(data));


function run_visualization(data) {
    sortByCountryPopulation(data);
    const top30sortedCountries = data.slice(data.length-30, data.length);
    plotBarChart(top30sortedCountries);
}

function sortByCountryPopulation(data) {
    data.sort((acc, value) => acc.population < value.population ? -1 : 1);
}

function plotBarChart(countries) {
    var trace = {
        x: countries.map(c => c.country),
        y: countries.map(c => c.population),
        type: 'bar',
        opacity : 0.75,
        marker : {
            color : "darkcyan"
        }
    };
    var layout = {
        title: {
            text: 'Data distribution of countries population',
            font: {
                size: 24,
                family: 'Monospace',
            }
        },
    };
    var data = [trace];
    Plotly.newPlot('pop-bar-chart', data, layout);
}
