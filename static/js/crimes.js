d3.json("/charts_data").then((response) => {
    var one_dict = { Ward: 1, crime_count: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    var two_dict = { Ward: 2, crime_count: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    var three_dict = { Ward: 3, crime_count: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    var four_dict = { Ward: 4, crime_count: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    var five_dict = { Ward: 5, crime_count: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    var six_dict = { Ward: 6, crime_count: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    var seven_dict = { Ward: 7, crime_count: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    var eight_dict = { Ward: 8, crime_count: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }

    response.forEach((crime) => {
    //for (i = 0; i < 100; i++) { 
        //JANUARY
        //one_dict.crime_count[0] += 1;
        //if (crime.WARD === 1) {
        //    console.log("JANUARY")
        //}
    
        
        //console.log("crime end date", crime)
        if (moment(crime.END_DATE).get('month') === 0) {
            console.log("YES")
            if (crime.WARD === 1) {
                one_dict.crime_count[0] += 1;
            }
            if (crime.WARD === 2) {
                two_dict.crime_count[0] += 1;
            }
            if (crime.WARD === 3) {
                three_dict.crime_count[0] += 1;
            }
            if (crime.WARD === 4) {
                four_dict.crime_count[0] += 1;
            }
            if (crime.WARD === 5) {
                five_dict.crime_count[0] += 1;
            }
            if (crime.WARD === 6) {
                six_dict.crime_count[0] += 1;
            }
            if (crime.WARD === 7) {
                seven_dict.crime_count[0] += 1;
            }
            if (crime.WARD === 8) {
                eight_dict.crime_count[0] += 1;
            }
        } //console.log(one_dict.crime_count[0])
        
        //FEBRUARY
        if (moment(crime.END_DATE).get('month') === 1) {
            if (crime.WARD === 1) {
                one_dict.crime_count[1] += 1;
            }
            if (crime.WARD === 2) {
                two_dict.crime_count[1] += 1;
            }
            if (crime.WARD === 3) {
                three_dict.crime_count[1] += 1;
            }
            if (crime.WARD === 4) {
                four_dict.crime_count[1] += 1;
            }
            if (crime.WARD === 5) {
                five_dict.crime_count[1] += 1;
            }
            if (crime.WARD === 6) {
                six_dict.crime_count[1] += 1;
            }
            if (crime.WARD === 7) {
                seven_dict.crime_count[1] += 1;
            }
            if (crime.WARD === 8) {
                eight_dict.crime_count[1] += 1;
            }
        }
        //MARCH
        if (moment(crime.END_DATE).get('month') === 2) {
            if (crime.WARD === 1) {
                one_dict.crime_count[2] += 1;
            }
            if (crime.WARD === 2) {
                two_dict.crime_count[2] += 1;
            }
            if (crime.WARD === 3) {
                three_dict.crime_count[2] += 1;
            }
            if (crime.WARD === 4) {
                four_dict.crime_count[2] += 1;
            }
            if (crime.WARD === 5) {
                five_dict.crime_count[2] += 1;
            }
            if (crime.WARD === 6) {
                six_dict.crime_count[2] += 1;
            }
            if (crime.WARD === 7) {
                seven_dict.crime_count[2] += 1;
            }
            if (crime.WARD === 8) {
                eight_dict.crime_count[2] += 1;
            }
        }
        //APRIL
        if (moment(crime.END_DATE).get('month') === 3) {
            if (crime.WARD === 1) {
                one_dict.crime_count[3] += 1;
            }
            if (crime.WARD === 2) {
                two_dict.crime_count[3] += 1;
            }
            if (crime.WARD === 3) {
                three_dict.crime_count[3] += 1;
            }
            if (crime.WARD === 4) {
                four_dict.crime_count[3] += 1;
            }
            if (crime.WARD === 5) {
                five_dict.crime_count[3] += 1;
            }
            if (crime.WARD === 6) {
                six_dict.crime_count[3] += 1;
            }
            if (crime.WARD === 7) {
                seven_dict.crime_count[3] += 1;
            }
            if (crime.WARD === 8) {
                eight_dict.crime_count[3] += 1;
            }
        }
        //MAY
        if (moment(crime.END_DATE).get('month') === 4) {
            if (crime.WARD === 1) {
                one_dict.crime_count[4] += 1;
            }
            if (crime.WARD === 2) {
                two_dict.crime_count[4] += 1;
            }
            if (crime.WARD === 3) {
                three_dict.crime_count[4] += 1;
            }
            if (crime.WARD === 4) {
                four_dict.crime_count[4] += 1;
            }
            if (crime.WARD === 5) {
                five_dict.crime_count[4] += 1;
            }
            if (crime.WARD === 6) {
                six_dict.crime_count[4] += 1;
            }
            if (crime.WARD === 7) {
                seven_dict.crime_count[4] += 1;
            }
            if (crime.WARD === 8) {
                eight_dict.crime_count[4] += 1;
            }
        }
        //JUNE
        if (moment(crime.END_DATE).get('month') === 5) {
            if (crime.WARD === 1) {
                one_dict.crime_count[5] += 1;
            }
            if (crime.WARD === 2) {
                two_dict.crime_count[5] += 1;
            }
            if (crime.WARD === 3) {
                three_dict.crime_count[5] += 1;
            }
            if (crime.WARD === 4) {
                four_dict.crime_count[5] += 1;
            }
            if (crime.WARD === 5) {
                five_dict.crime_count[5] += 1;
            }
            if (crime.WARD === 6) {
                six_dict.crime_count[5] += 1;
            }
            if (crime.WARD === 7) {
                seven_dict.crime_count[5] += 1;
            }
            if (crime.WARD === 8) {
                eight_dict.crime_count[5] += 1;
            }
        }
        //JULY
        if (moment(crime.END_DATE).get('month') === 6) {
            if (crime.WARD === 1) {
                one_dict.crime_count[6] += 1;
            }
            if (crime.WARD === 2) {
                two_dict.crime_count[6] += 1;
            }
            if (crime.WARD === 3) {
                three_dict.crime_count[6] += 1;
            }
            if (crime.WARD === 4) {
                four_dict.crime_count[6] += 1;
            }
            if (crime.WARD === 5) {
                five_dict.crime_count[6] += 1;
            }
            if (crime.WARD === 6) {
                six_dict.crime_count[6] += 1;
            }
            if (crime.WARD === 7) {
                seven_dict.crime_count[6] += 1;
            }
            if (crime.WARD === 8) {
                eight_dict.crime_count[6] += 1;
            }
        }
        //AUGUST
        if (moment(crime.END_DATE).get('month') === 7) {
            if (crime.WARD === 1) {
                one_dict.crime_count[7] += 1;
            }
            if (crime.WARD === 2) {
                two_dict.crime_count[7] += 1;
            }
            if (crime.WARD === 3) {
                three_dict.crime_count[7] += 1;
            }
            if (crime.WARD === 4) {
                four_dict.crime_count[7] += 1;
            }
            if (crime.WARD === 5) {
                five_dict.crime_count[7] += 1;
            }
            if (crime.WARD === 6) {
                six_dict.crime_count[7] += 1;
            }
            if (crime.WARD === 7) {
                seven_dict.crime_count[7] += 1;
            }
            if (crime.WARD === 8) {
                eight_dict.crime_count[7] += 1;
            }
        }
        //SEPTEMBER
        if (moment(crime.END_DATE).get('month') === 8) {
            if (crime.WARD === 1) {
                one_dict.crime_count[8] += 1;
            }
            if (crime.WARD === 2) {
                two_dict.crime_count[8] += 1;
            }
            if (crime.WARD === 3) {
                three_dict.crime_count[8] += 1;
            }
            if (crime.WARD === 4) {
                four_dict.crime_count[8] += 1;
            }
            if (crime.WARD === 5) {
                five_dict.crime_count[8] += 1;
            }
            if (crime.WARD === 6) {
                six_dict.crime_count[8] += 1;
            }
            if (crime.WARD === 7) {
                seven_dict.crime_count[8] += 1;
            }
            if (crime.WARD === 8) {
                eight_dict.crime_count[8] += 1;
            }
        }

        //OCTOBER
        if (moment(crime.END_DATE).get('month') === 9) {
            if (crime.WARD === 1) {
                one_dict.crime_count[9] += 1;
            }
            if (crime.WARD === 2) {
                two_dict.crime_count[9] += 1;
            }
            if (crime.WARD === 3) {
                three_dict.crime_count[9] += 1;
            }
            if (crime.WARD === 4) {
                four_dict.crime_count[9] += 1;
            }
            if (crime.WARD === 5) {
                five_dict.crime_count[9] += 1;
            }
            if (crime.WARD === 6) {
                six_dict.crime_count[9] += 1;
            }
            if (crime.WARD === 7) {
                seven_dict.crime_count[9] += 1;
            }
            if (crime.WARD === 8) {
                eight_dict.crime_count[9] += 1;
            }
        }
        //NOVEMBER
        if (moment(crime.END_DATE).get('month') === 10) {
            if (crime.WARD === 1) {
                one_dict.crime_count[10] += 1;
            }
            if (crime.WARD === 2) {
                two_dict.crime_count[10] += 1;
            }
            if (crime.WARD === 3) {
                three_dict.crime_count[10] += 1;
            }
            if (crime.WARD === 4) {
                four_dict.crime_count[10] += 1;
            }
            if (crime.WARD === 5) {
                five_dict.crime_count[10] += 1;
            }
            if (crime.WARD === 6) {
                six_dict.crime_count[10] += 1;
            }
            if (crime.WARD === 7) {
                seven_dict.crime_count[10] += 1;
            }
            if (crime.WARD === 8) {
                eight_dict.crime_count[10] += 1;
            }
        }
        //DECEMBER
        if (moment(crime.END_DATE).get('month') === 11) {
            if (crime.WARD === 1) {
                one_dict.crime_count[11] += 1;
            }
            if (crime.WARD === 2) {
                two_dict.crime_count[11] += 1;
            }
            if (crime.WARD === 3) {
                three_dict.crime_count[11] += 1;
            }
            if (crime.WARD === 4) {
                four_dict.crime_count[11] += 1;
            }
            if (crime.WARD === 5) {
                five_dict.crime_count[11] += 1;
            }
            if (crime.WARD === 6) {
                six_dict.crime_count[11] += 1;
            }
            if (crime.WARD === 7) {
                seven_dict.crime_count[11] += 1;
            }
            if (crime.WARD === 8) {
                eight_dict.crime_count[11] += 1;
            }
        }
    })


    var canvas = document.getElementById("lineChart");
    var ctx = canvas.getContext('2d');

    // Global Options:
    Chart.defaults.global.defaultFontColor = 'white';
    Chart.defaults.global.defaultFontSize = 16;
    var data_full = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
            label: "Ward 1",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "red",
            borderColor: "red", // The main line color
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
            data: one_dict.crime_count,
            spanGaps: true,
        }, {
            label: "Ward 2",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "Fuchsia",
            borderColor: "Fuchsia", // The main line color
            borderCapStyle: 'square',
            borderDash: [], // try [5, 15] for instance
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
            data: two_dict.crime_count,
            spanGaps: true,
        }, {
            label: "Ward 3",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "Navy",
            borderColor: "Navy", // The main line color
            borderCapStyle: 'square',
            borderDash: [], // try [5, 15] for instance
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
            data: three_dict.crime_count,
            spanGaps: true,
        }, {
            label: "Ward 4",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "Aqua",
            borderColor: "Aqua", // The main line color
            borderCapStyle: 'square',
            borderDash: [], // try [5, 15] for instance
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
            data: four_dict.crime_count,
            spanGaps: true,
        }, {
            label: "Ward 5",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "Orange",
            borderColor: "Orange", // The main line color
            borderCapStyle: 'square',
            borderDash: [], // try [5, 15] for instance
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
            data: five_dict.crime_count,
            spanGaps: true,
        }, {
            label: "Ward 6",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "Green",
            borderColor: "Green", // The main line color
            borderCapStyle: 'square',
            borderDash: [], // try [5, 15] for instance
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
            data: six_dict.crime_count,
            spanGaps: true,
        }, {
            label: "Ward 7",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "Purple",
            borderColor: "Purple", // The main line color
            borderCapStyle: 'square',
            borderDash: [], // try [5, 15] for instance
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
            data: seven_dict.crime_count,
            spanGaps: true,
        }, {
            label: "Ward 8",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "Blue",
            borderColor: "Blue", // The main line color
            borderCapStyle: 'square',
            borderDash: [], // try [5, 15] for instance
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
            data: eight_dict.crime_count,
            spanGaps: true,
        },


        ]
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
        data: data_full,
        options: options
    });
});

