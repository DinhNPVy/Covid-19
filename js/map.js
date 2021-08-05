updateMap();

function updateMap() {

    fetch('https://corona.lmao.ninja/v2/countries/')
        .then(res => res.json())
        .then(data => {
            //console.log(data);

            data.map(e => {
                const lat = e.countryInfo.lat;
                const long = e.countryInfo.long;
                const cases = e.cases;
                const recovered = e.recovered;
                const deaths = e.deaths;
                const active = e.active;
                let color = `rgb(${cases},0,0)`;
                if (cases > 255) {
                    let color = "#c9302c";
                } else {
                    color;
                }

                new mapboxgl.Marker({

                        draggable: false,
                        color: color
                    })
                    .setLngLat([long, lat])
                    .addTo(map);

            });

        })
}
mapCovidVN();

function mapCovidVN() {
    fetch('https://api.ncovvn.xyz/cityvn')
        .then(res => res.json())
        .then(data => {
            console.log(data);

            var data = [
                ['vn-3655', 0],
                ['vn-qn', data[37].tong_ca_nhiem],
                ['vn-kh', data[6].tong_ca_nhiem],
                ['vn-tg', data[7].tong_ca_nhiem],
                ['vn-bv', data[12].tong_ca_nhiem],
                ['vn-bu', data[17].tong_ca_nhiem],
                ['vn-hc', data[0].tong_ca_nhiem],
                ['vn-br', data[16].tong_ca_nhiem],
                ['vn-st', data[26].tong_ca_nhiem],
                ['vn-pt', data[54].tong_ca_nhiem],
                ['vn-yb', data[58].tong_ca_nhiem],
                ['vn-hd', data[18].tong_ca_nhiem],
                ['vn-bn', data[10].tong_ca_nhiem],
                ['vn-317', 0],
                ['vn-nb', data[41].tong_ca_nhiem],
                ['vn-hm', data[43].tong_ca_nhiem],
                ['vn-ho', data[46].tong_ca_nhiem],
                ['vn-vc', data[30].tong_ca_nhiem],
                ['vn-318', data[9].tong_ca_nhiem],
                ['vn-bg', data[3].tong_ca_nhiem],
                ['vn-tb', data[42].tong_ca_nhiem],
                ['vn-ld', data[45].tong_ca_nhiem],
                ['vn-bp', data[32].tong_ca_nhiem],
                ['vn-py', data[13].tong_ca_nhiem],
                ['vn-bd', data[27].tong_ca_nhiem],
                ['vn-724', data[34].tong_ca_nhiem],
                ['vn-qg', data[22].tong_ca_nhiem],
                ['vn-331', 0],
                ['vn-dt', data[5].tong_ca_nhiem],
                ['vn-la', data[2].tong_ca_nhiem],
                ['vn-3623', data[48].tong_ca_nhiem],
                ['vn-337', data[29].tong_ca_nhiem],
                ['vn-bl', data[39].tong_ca_nhiem],
                ['vn-vl', data[15].tong_ca_nhiem],
                ['vn-tn', data[8].tong_ca_nhiem],
                ['vn-ty', data[55].tong_ca_nhiem],
                ['vn-li', data[61].tong_ca_nhiem],
                ['vn-311', data[51].tong_ca_nhiem],
                ['vn-hg', data[52].tong_ca_nhiem],
                ['vn-nd', data[50].tong_ca_nhiem],
                ['vn-328', data[33].tong_ca_nhiem],
                ['vn-na', data[28].tong_ca_nhiem],
                ['vn-qb', data[56].tong_ca_nhiem],
                ['vn-723', data[31].tong_ca_nhiem],
                ['vn-nt', data[25].tong_ca_nhiem],
                ['vn-6365', 0],
                ['vn-299', data[54].tong_ca_nhiem],
                ['vn-300', data[24].tong_ca_nhiem],
                ['vn-qt', data[49].tong_ca_nhiem],
                ['vn-tt', data[40].tong_ca_nhiem],
                ['vn-da', data[11].tong_ca_nhiem],
                ['vn-ag', data[19].tong_ca_nhiem],
                ['vn-cm', data[47].tong_ca_nhiem],
                ['vn-tv', data[20].tong_ca_nhiem],
                ['vn-cb', 0],
                ['vn-kg', data[21].tong_ca_nhiem],
                ['vn-lo', data[53].tong_ca_nhiem],
                ['vn-db', data[44].tong_ca_nhiem],
                ['vn-ls', data[35].tong_ca_nhiem],
                ['vn-th', data[36].tong_ca_nhiem],
                ['vn-307', 0],
                ['vn-tq', data[60].tong_ca_nhiem],
                ['vn-bi', data[1].tong_ca_nhiem],
                ['vn-333', data[35].tong_ca_nhiem]
            ];

            Highcharts.mapChart('mymap', {
                chart: {
                    map: 'countries/vn/vn-all'
                },

                title: {
                    text: 'Bản đồ theo dõi tổng ca nhiễm COVID-19'
                },

                // subtitle: {
                //     text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/vn/vn-all.js">Vietnam</a>'
                // },

                mapNavigation: {
                    enabled: true,
                    buttonOptions: {
                        verticalAlign: 'bottom'
                    }
                },

                colorAxis: {
                    min: 0
                },

                series: [{
                    data: data,
                    name: 'Random data',
                    states: {
                        hover: {
                            color: '#BADA55'
                        }
                    },
                    dataLabels: {
                        enabled: false,
                        format: '{point.name}'
                    }
                }]




            });


        });

}