function getData() {
    $.get("/api/donors2018", function (data) {
        $("#div1").html(data);
    });
};

getData();


//option one for data formatting
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

// Generate 2018
Highcharts.chart('cycle2018', {
    series: [{
        type: 'wordcloud',
        data: infoObject,
        name: 'IndividualDonorInfo'
    }],
    title: {
        text: 'Wordcloud 2018'
    }
});
// Generate 2016
Highcharts.chart('cycle2016', {
    series: [{
        type: 'wordcloud',
        data: infoObject,
        name: 'IndividualDonorInfo'
    }],
    title: {
        text: 'Wordcloud of 2016'
    }
});// Generate 2014
Highcharts.chart('cycle2014', {
    series: [{
        type: 'wordcloud',
        data: infoObject,
        name: 'IndividualDonorInfo'
    }],
    title: {
        text: 'Wordcloud of 2014'
    }
});// Generate 2012
Highcharts.chart('cycle2012', {
    series: [{
        type: 'wordcloud',
        data: infoObject,
        name: 'IndividualDonorInfo'
    }],
    title: {
        text: 'Wordcloud of 2012'
    }
});// Generate 2010
Highcharts.chart('cycle2010', {
    series: [{
        type: 'wordcloud',
        data: infoObject,
        name: 'IndividualDonorInfo'
    }],
    title: {
        text: 'Wordcloud of 2010'
    }
});

