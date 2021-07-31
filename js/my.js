getCovidAll();
getSelectCountry();
getCovidCountry();

getCovidCountryVN();
getCovidCountryVNAT();

const btnSelect = document.getElementById("select_world");

btnSelect.addEventListener("click", getCountryById);


function getCountryById(key) {
    //console.log(key.target.value);
    fetch(' https://coronavirus-tracker-api.herokuapp.com/v2/locations/' + key.target.value)
        .then(res => res.json())
        .then(data => {
            //console.log(data);

            let code = data.location.country_code;
            let static = data.location.province;
            let country = data.location.country;

            let confirmed = data.location.latest.confirmed;
            let recovered = data.location.latest.recovered;
            let deaths = data.location.latest.deaths;
            let last_updated = data.location.last_updated;

            if (data.location.province != "") {

                document.getElementById('quocgia').innerHTML = country.toLocaleString("en") + '-' + static.toLocaleString("en");
                document.getElementById('title').innerText = country.toLocaleString("en") + '-' + static.toLocaleString("en");
            } else {
                document.getElementById('quocgia').innerHTML = country.toLocaleString("en");
                document.getElementById('title').innerText = country.toLocaleString("en");
            }

            document.getElementById('code').innerHTML = code.toLocaleString("en");
            document.getElementById('quocgia').innerHTML = country.toLocaleString("en");
            document.getElementById('socanhiem').innerHTML = confirmed.toLocaleString("en");
            document.getElementById('khoi').innerHTML = recovered.toLocaleString("en");
            document.getElementById('tuvong').innerHTML = deaths.toLocaleString("en");
            document.getElementById('capnhattv').innerHTML = last_updated.substring(0, 10);
            document.getElementById('pttv').innerHTML = (Number(deaths) / Number(confirmed) * 100).toLocaleString("en", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }) + "%";


        }).catch(error => console.log('Error'));
}

function getCovidCountry() {
    fetch(' https://coronavirus-tracker-api.herokuapp.com/v2/locations/274')
        .then(res => res.json())
        .then(data => {
            //console.log(data);

            let code = data.location.country_code;
            let country = data.location.country;

            let confirmed = data.location.latest.confirmed;
            let recovered = data.location.latest.recovered;
            let deaths = data.location.latest.deaths;
            let last_updated = data.location.last_updated;



            document.getElementById('tong_socanhiemvn').innerHTML = confirmed.toLocaleString("en");
            document.getElementById('tong_khoivn').innerHTML = recovered.toLocaleString("en");
            document.getElementById('tong_tuvongvn').innerHTML = deaths.toLocaleString("en");



        }).catch(error => console.log('Error'));
}

function getCovidCountryVN() {
    fetch('https://api.ncovvn.xyz/cityvn')
        .then(res => res.json())
        .then(data => {
            console.log(data);

            var place = [];
            var confirmed = [];
            var cur = [];
            var deaths = [];
            var day = [];



            $.each(data, function (id, obj) {
                //day.push(obj.ngay);
                place.push(obj.dia_diem);
                confirmed.push(obj.tong_ca_nhiem);
                cur.push(obj.hom_nay);
                deaths.push(obj.tu_vong);
            });
            var ctx = document.getElementById('myChart').getContext("2d");
            ctx.height = 200;
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: place,
                    datasets: [{
                        label: "Total_Confirmed",
                        data: confirmed,
                        borderColor: "#c9302c",
                        backgroundColor: "#c9302c",
                        minBarLength: 150,
                        fill: false
                    }, {
                        label: "Today",
                        data: cur,
                        borderColor: "##c55f4e",
                        backgroundColor: "#c55f4e",
                        minBarLength: 150,
                        fill: false
                    }, {
                        label: "Deaths",
                        data: deaths,
                        borderColor: "#5b5759",
                        backgroundColor: "#5b5759",
                        minBarLength: 150,
                        fill: false
                    }]
                },
                options: {
                    // title: {
                    //     display: false
                    // },
                    // legend: {
                    //     display: false
                    // }
                }
            });





        }).catch(error => console.log('Error'));
}

// dua tren lua chon
function getCovidAll() {
    fetch(' https://coronavirus-tracker-api.herokuapp.com/v2/locations')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let confirmed = data.latest.confirmed;
            let recovered = data.latest.recovered;
            let deaths = data.latest.deaths;
            document.getElementById('tong_socanhiem').innerHTML = confirmed.toLocaleString("en");
            document.getElementById('tong_dangkhoi').innerHTML = recovered.toLocaleString("en");
            document.getElementById('tong_tuvong').innerHTML = deaths.toLocaleString("en");

            const html = data.locations.map(covid => {
                const code = covid.country_code;
                const country = covid.country;

                const confirmed = covid.latest.confirmed;
                const recovered = covid.latest.recovered;
                const deaths = covid.latest.deaths;

                return `
                <ul class="list_world">
                    <li>
                        <p>Mã Quốc gia: ${code.toLocaleString("en")}</p>
                        <p style="color:red">Quốc gia: ${country.toLocaleString("en")}</p>
                        <p>Số Ca Nhiễm: ${confirmed.toLocaleString("en")}</p>
                        <p>Khỏi: ${recovered.toLocaleString("en")}</p>
                        <p>Tử Vong: ${deaths.toLocaleString("en")}</p>

                    </li>

                </ul>
                `

            }).join("");
            document.getElementById('list').insertAdjacentHTML("afterbegin", html);



        }).catch(error => console.log('Error'));
}


function getSelectCountry() {
    fetch(' https://coronavirus-tracker-api.herokuapp.com/v2/locations')
        .then(res => res.json())
        .then(data => {
            //console.log(data);

            const html = data.locations.map(list => {

                const id = list.id;
                const country = list.country;

                let option = document.createElement('option');
                // đưa option dua theo id
                option.value = id;
                // option.innerHTML = country;

                if (list.province != "") {
                    option.innerHTML = country + ' ' + list.province;

                } else {
                    option.innerHTML = country;
                }



                document.getElementById('select_world').appendChild(option);


            });




        }).catch(error => console.log('Error'));
}

function getCovidCountryVNAT() {
    fetch('https://api.ncovvn.xyz/antoan')
        .then(res => res.json())
        .then(data => {
            console.log(data);

            var place = [];
            var safe = [];
            var warning = [];
            var danger = [];
            var chuadanhgia = [];



            $.each(data, function (id, obj) {
                //day.push(obj.ngay);
                place.push(obj.dia_diem);
                safe.push(obj.an_toan);
                warning.push(obj.co_rui_ro);
                danger.push(obj.khong_an_toan);
                chuadanhgia.push(obj.chua_danh_gia);
            });
            var ctx = document.getElementById('antoanvn').getContext("2d");
            ctx.height = 200;
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: place,
                    datasets: [{
                        label: "Safe",
                        data: safe,
                        borderColor: "#28a745",
                        borderColor: "#",
                        backgroundColor: "#28a745",

                        fill: false
                    }, {
                        label: "Warning",
                        data: warning,
                        borderColor: "##ffdf6f",
                        backgroundColor: "#ffdf6f",
                        minBarLength: 150,
                        fill: false
                    }, {
                        label: "Danger",
                        data: danger,
                        borderColor: "#c9302c",
                        backgroundColor: "#c9302c",
                        minBarLength: 150,
                        fill: false
                    }]
                },

                options: {
                    // title: {
                    //     display: false
                    // },
                    // legend: {
                    //     display: false
                    // }
                }
            });





        }).catch(error => console.log('Error'));
}