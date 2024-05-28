fetch('data.json')
    .then((response) => response.json())
    .then((data) => run_visualization(data));

function run_visualization(data) {
    console.log(sortByCountryPopulation(data))
    sortByCountryPopulation(data);
    const top30Countries = data.slice(-30);
    const countries = top30Countries.map((item) => item.country);
    const populations = top30Countries.map((item) => item.population);
 
   
    const axes = {
        x: countries,
        y: populations,
        type: 'bar'
    };
 
    const titles = {
        title: 'Top 30 des pays par population',
        xaxis: { title: 'Pays' },
        yaxis: { title: 'Population' }
    };
 
    Plotly.newPlot('data-viz', [axes], titles);
 }

function sortByCountryPopulation(data) {
    data.sort((acc, value) => acc.population < value.population ? -1 : 1);
}