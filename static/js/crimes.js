d3.json("/charts_data").then((response) => {
   

    const crime_dictionary = [];
    for (var i=0; i < 8; i++) { 
        var ward_dictionary = { Ward:i+1 , crime_count: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
        crime_dictionary.push(ward_dictionary);
    }



    response.forEach((crime, index) => {
        const ward = crime.WARD;
        const month_data = crime.END_DATE.slice(5,7);
      
        crime_dictionary[ward -1].crime_count[Number(month_data) -1] +=1;

        
    });


    var canvas = document.getElementById("lineChart");
    var ctx = canvas.getContext('2d');
    
    const colors = ['Red', 'Pink', 'Navy', 'Aqua', 'Orange', 'Green', 'Purple', 'Blue']
    const datasets = [];
    for(var i =0; i < 8; i++) {
        console.log({color: colors[i]})
        const dataObject = {
            label: `Ward ${i+1}`,
            fill: false,
            lineTension: 0.1,
            backgroundColor: colors[i],
            borderColor: colors[i], // The main line color
            borderCapStyle: 'square',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "black",
            pointBackgroundColor: "white",
            pointBorderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: "yellow",
            pointHoverBorderColor: "brown",
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            // notice the gap in the data and the spanGaps: true
            data: crime_dictionary[i].crime_count,
            spanGaps: true
        }
      datasets.push(dataObject)
    }

    // Global Options:
    Chart.defaults.global.defaultFontColor = 'black';
    Chart.defaults.global.defaultFontSize = 16;
    var data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets
    }
    // Notice the scaleLabel at the same level as Ticks
    var options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                },
                scaleLabel: {
                    display: true,
                    labelString: 'DC Crimes',
                    fontSize: 20
                }
            }]
        }
    };
    
    // Chart declaration
    var myBarChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });
});
