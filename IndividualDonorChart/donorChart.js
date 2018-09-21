//highcharts linked in frontend

//optin one for data formatting
var infoObject = [
    {
        name: 'Lorem',
        weight: 3
    }, {
        name: 'Ipsum',
        weight: 2
    }, {
        name: 'Dolor',
        weight: 1
    }
];



//option 2 for data formating
var infoArray = [
    ['Lorem', 4],
    ['Ipsum', 1]
]

// Generate the chart
Highcharts.chart('container', {
    series: [{
        type: 'wordcloud',
        data: infoObject,
        name: 'IndividualDonorInfo'
    }],
    title: {
        text: 'Wordcloud of Lorem Ipsum'
    }
});

