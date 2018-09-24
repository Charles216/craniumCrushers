$(document).ready(function () {

    //variables storing data coming in from ajax calls
    var data2018 = [];
    var data2016 = [];
    var data2014 = [];
    var data2012 = [];
    var data2010 = [];

    function getDonors() {
        Promise.all(
            [
                //ajax 2018
                $.get('/api/donors2018'),
                //ajax 2016
                $.get('/api/donors2016'),
                //ajax 2014
                $.get('/api/donors2014'),
                //ajax 2012
                $.get('/api/donors2012'),
                //ajax 2010
                $.get('/api/donors2010'),
            ]
        ).then(function (data) {
            var infoObject2018 = [];

            data2018 = data[0];
            data2016 = data[1];
            data2014 = data[2];
            data2012 = data[3];
            data2010 = data[4];

            infoObject2018 = data2018.map(function (data) {
                return {
                    name: data.display_name,
                    fullname: data.contributor_name,
                    city: data.contributor_city,
                    donation: data.total_contribution,
                    weight: data.weight,
                    dems: data.percent_to_dems,
                    reps: data.percent_to_reps
                }
            })
            infoObject2016 = data2016.map(function (data) {
                return {
                    name: data.display_name,
                    fullname: data.contributor_name,
                    city: data.contributor_city,
                    donation: data.total_contribution,
                    weight: data.weight,
                    dems: data.percent_to_dems,
                    reps: data.percent_to_reps
                }
            })
            infoObject2014 = data2014.map(function (data) {
                return {
                    name: data.display_name,
                    fullname: data.contributor_name,
                    city: data.contributor_city,
                    donation: data.total_contribution,
                    weight: data.weight,
                    dems: data.percent_to_dems,
                    reps: data.percent_to_reps
                }
            })
            infoObject2012 = data2012.map(function (data) {
                return {
                    name: data.display_name,
                    fullname: data.contributor_name,
                    city: data.contributor_city,
                    donation: data.total_contribution,
                    weight: data.weight,
                    dems: data.percent_to_dems,
                    reps: data.percent_to_reps
                }
            })
            infoObject2010 = data2010.map(function (data) {
                return {
                    name: data.display_name,
                    fullname: data.contributor_name,
                    city: data.contributor_city,
                    donation: data.total_contribution,
                    weight: data.weight,
                    dems: data.percent_to_dems,
                    reps: data.percent_to_reps
                }
            })

            // Generate the chart for CYCLE2018
            Highcharts.chart('cycle2018', {
                series: [{
                    type: 'wordcloud',
                    data: infoObject2018,
                    name: 'IndividualDonorInfo'
                }],
                tooltip: {
                    formatter: function () {
                        console.log(this);
                        return ("NAME: " + this.series.userOptions.data[this.point.index].fullname + " CITY: " + this.series.userOptions.data[this.point.index].city + " DONATION: $" + this.series.userOptions.data[this.point.index].donation + " PERCENT to DEMOCRATS: " + this.series.userOptions.data[this.point.index].dems + "%" + " PERCENT to REPUBLICANS: " + this.series.userOptions.data[this.point.index].reps + "%");
                    }
                },
                title: {
                    text: 'Top Ten Individual Donors for Election Cycle 2018'
                }
            });
            // Generate the chart for CYCLE2016
            Highcharts.chart('cycle2016', {
                series: [{
                    type: 'wordcloud',
                    data: infoObject2016,
                    name: 'IndividualDonorInfo'
                }],
                tooltip: {
                    formatter: function () {
                        console.log(this);
                        return ("Name: " + this.series.userOptions.data[this.point.index].fullname + " City: " + this.series.userOptions.data[this.point.index].city + " Donation: $" + this.series.userOptions.data[this.point.index].donation);
                    }
                },
                title: {
                    text: 'Top Ten Individual Donors for Election Cycle 2016'
                }
            });
            // Generate the chart for CYCLE2014
            Highcharts.chart('cycle2014', {
                series: [{
                    type: 'wordcloud',
                    data: infoObject2014,
                    name: 'IndividualDonorInfo'
                }],
                tooltip: {
                    formatter: function () {
                        console.log(this);
                        return ("Name: " + this.series.userOptions.data[this.point.index].fullname + " City: " + this.series.userOptions.data[this.point.index].city + " Donation: $" + this.series.userOptions.data[this.point.index].donation);
                    }
                },
                title: {
                    text: 'Top Ten Individual Donors for Election Cycle 2014'
                }
            });
            // Generate the chart for CYCLE2018
            Highcharts.chart('cycle2012', {
                series: [{
                    type: 'wordcloud',
                    data: infoObject2012,
                    name: 'IndividualDonorInfo'
                }],
                tooltip: {
                    formatter: function () {
                        console.log(this);
                        return ("Name: " + this.series.userOptions.data[this.point.index].fullname + " City: " + this.series.userOptions.data[this.point.index].city + " Donation: $" + this.series.userOptions.data[this.point.index].donation);
                    }
                },
                title: {
                    text: 'Top Ten Individual Donors for Election Cycle 2012'
                }
            });
            // Generate the chart for CYCLE2010
            Highcharts.chart('cycle2010', {
                series: [{
                    type: 'wordcloud',
                    data: infoObject2010,
                    name: 'IndividualDonorInfo'
                }],
                tooltip: {
                    formatter: function () {
                        console.log(this);
                        return ("Name: " + this.series.userOptions.data[this.point.index].fullname + " City: " + this.series.userOptions.data[this.point.index].city + " Donation: $" + this.series.userOptions.data[this.point.index].donation);
                    }
                },
                title: {
                    text: 'Top Ten Individual Donors for Election Cycle 2010'
                }
            });

        });
    };

    // Getting the initial list of all donors
    getDonors();

});