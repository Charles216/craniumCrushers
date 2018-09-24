var byCandidate = [];
// var byCommitee = [];
var candidateContribution = {};
// var committeeContribution = {};

$.get("/api/data", function (data) {
    // console.log(data);
    var count = 1;
    for (index = 0; index < data.length; index++) {
        for (i = 0; i < data[0].results.length; i++) {
            if (data[index].results[i]) {
                var total = data[index].results[i].total;
                var candidate = data[index].results[i].candidate_name;
                var committeeName = data[index].results[i].committee_name;
                var supportOrOppose;
                if (data[index].results[i].support_oppose_indicator === "S") {
                    supportOrOppose = "S"
                } else if (data[index].results[i].support_oppose_indicator === "O") {
                    supportOrOppose = "O"
                }

                if (candidateContribution[candidate]) {
                    candidateContribution[candidate].contributions.push({
                        Committee: committeeName,
                        Total: total,
                        SupportOppose: supportOrOppose
                    })
                } else {
                    candidateContribution[candidate] = {
                        contributions: [
                            {
                                Committee: committeeName,
                                Total: total,
                                SupportOppose: supportOrOppose
                            }
                        ]
                    }
                }

                // if (committeeContribution[committeeName]) {
                //     committeeContribution[committeeName].candidates.push({
                //         Candidate: candidate,
                //         Total: total,
                //         SupportOppose: supportOrOppose
                //     })
                // } else {
                //     committeeContribution[committeeName] = {
                //         candidates: [
                //             {
                //                 Candidate: candidate,
                //                 Total: total,
                //                 SupportOppose: supportOrOppose
                //             }
                //         ]
                //     }
                // }
                // $("table").append(
                //     `<tr>
                // <td>$${total}</td>
                // <td>${candidate}</td>
                // <td>${committeeName}</td>
                // <td>${supportOrOppose}</td>
                // <td>${count}</td>
                // <tr>`
                // )
                count++;
            }

        }
    }

    byCandidate = Object.keys(candidateContribution).map(function (key) {
        return {
            candidate: key,
            contributions: candidateContribution[key].contributions
        }
    });

    for (i = 0; i < byCandidate.length; i++) {
        $("#candidate-dropdown").append(
            `<button class="dropdown-item candidate-choice" type="button" id="${byCandidate[i].candidate}" >${byCandidate[i].candidate}</button>`
        );
    }


    // byCommitee = Object.keys(committeeContribution).map(function (key) {
    //     return {
    //         committeeName: key,
    //         contributions: committeeContribution[key].candidates
    //     }
    // })

    // for (i = 0; i < byCommitee.length; i++) {
    //     $("#committee-dropdown").append(
    //         `<a class="dropdown-item">${byCommitee[i].committeeName}</a>`
    //     )
    // }

    $(".candidate-choice").on("click", function (event) {
        var supportPieData = [];
        var opposePieData = [];
        event.preventDefault();
        // console.log("Committee Spending in Support of: " + this.id)
        for (i = 0; i < byCandidate.length; i++) {
            for (index = 0; index < byCandidate[i].contributions.length; index++) {
                if (this.id === byCandidate[i].candidate && byCandidate[i].contributions[index].SupportOppose === "S") {
                    // console.log(byCandidate[i].contributions[index].Committee)
                    // console.log(byCandidate[i].contributions[index].Total)
                    // start Pie Chart Code
                    supportPieData.push(
                        { name: byCandidate[i].contributions[index].Committee, y: byCandidate[i].contributions[index].Total },

                    )
                    Highcharts.chart('container', {
                        chart: {
                            plotBackgroundColor: null,
                            plotBorderWidth: null,
                            plotShadow: false,
                            type: 'pie'
                        },
                        title: {
                            text: "Committee Spending in Support of: " + this.id
                        },
                        tooltip: {
                            pointFormat: '{series.name}: <b>${point.y:.1f}</b>'
                        },
                        plotOptions: {
                            pie: {
                                allowPointSelect: true,
                                cursor: 'pointer',
                                dataLabels: {
                                    enabled: true,
                                    format: '<b>{point.name}</b>: ${point.y:.1f}',
                                    style: {
                                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                                    }
                                }
                            }
                        },
                        series: [{
                            name: 'Brands',
                            colorByPoint: true,
                            data: supportPieData
                        }]
                    });
                    // End pie chart code
                } else if (this.id === byCandidate[i].candidate && byCandidate[i].contributions[index].SupportOppose === "O") {
                    opposePieData.push(
                        { name: byCandidate[i].contributions[index].Committee, y: byCandidate[i].contributions[index].Total },
                    )
                    Highcharts.chart('container2', {
                        chart: {
                            plotBackgroundColor: null,
                            plotBorderWidth: null,
                            plotShadow: false,
                            type: 'pie'
                        },
                        title: {
                            text: "Committee Spending in Opposition of: " + this.id
                        },
                        tooltip: {
                            pointFormat: '{series.name}: <b>${point.y:.1f}</b>'
                        },
                        plotOptions: {
                            pie: {
                                allowPointSelect: true,
                                cursor: 'pointer',
                                dataLabels: {
                                    enabled: true,
                                    format: '<b>{point.name}</b>: ${point.y:.1f}',
                                    style: {
                                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                                    }
                                }
                            }
                        },
                        series: [{
                            name: 'Brands',
                            colorByPoint: true,
                            data: opposePieData
                        }]
                    });
                }

            }
        }

    })




})

