myChart();

function myChart() {
    fetch("https://api.ncovvn.xyz/historical")
        .then(res => res.json())
        .then(data => {
            //console.log(data);
            var states = [];
            var confirmed = [];
            var recovered = [];
            var deaths = [];
            var day = [];



            $.each(data, function (id, obj) {
                day.push(obj.ngay);
                states.push(obj.state);
                confirmed.push(obj.new_cases);
                recovered.push(obj.new_recovered);
                deaths.push(obj.new_deaths);
            });

            // states.shift();
            // confirmed.shift();
            // recovered.shift();
            // deaths.shift();


            var ctx = document.getElementById('line-chart-canhiem-web');
            ctx.height = 200;
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: day,
                    datasets: [{
                        label: "",
                        data: confirmed,
                        borderColor: "#c9302c",
                        fill: false
                    }]
                },
                options: {
                    title: {
                        display: false
                    },
                    legend: {
                        display: false
                    }
                }
            });

            var ctx = document.getElementById("line-chart-cakhoi-web");
            ctx.height = 200;
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: day,
                    datasets: [{
                        data: recovered,
                        label: "",
                        borderColor: "#28a745",
                        fill: false
                    }]
                },
                options: {
                    title: {
                        display: false
                    },
                    legend: {
                        display: false
                    }
                }
            });
            var ctx = document.getElementById("line-chart-catuvong-web");
            ctx.height = 200;
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: day,
                    datasets: [{
                        data: deaths,
                        label: "",
                        borderColor: "#343a40",
                        fill: false
                    }]
                },
                options: {
                    title: {
                        display: false
                    },
                    legend: {
                        display: false
                    }
                }
            });

        });

}