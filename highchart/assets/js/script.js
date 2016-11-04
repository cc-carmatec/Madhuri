$(document).ready(function() {
  $(function () {
    $('.container').highcharts({

        credits: {
            enabled: false
        },
        chart: {
            type: 'line'
        },


        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        title:
        {
         text:'Demo Chart'
        },
        subtitle:
        {
         text:'subs'
        },
        yAxis: [{
            
            title: {
                text: 'Primary axis'
            },
        
          
        }],
        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
    });
});
  
});

