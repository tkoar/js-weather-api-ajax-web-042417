function getFahrenheits(result) {
  var tempArr = []
  var arr = result.hourly_forecast
  for (var i = 0; i < arr.length; i++) {
    tempArr.push(arr[i].temp.english)
  }
  return tempArr
}

function getHours(result) {
  var timeArr = []
  var arr = result.hourly_forecast
  for (var i = 0; i < arr.length; i++) {
    timeArr.push(arr[i].FCTTIME.hour)
  }
  return timeArr
}

function generateDataSet(labels, data) {
  return {
    labels: labels,
  datasets: [
    {
      label: "Hourly Weather for New York",
      fillColor: "rgba(220,220,220,0.2)",
      strokeColor: "rgba(220,220,220,1)",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: data
    }
    ]
  }
}

function makeAjaxRequest(endpoint, success) {
  $.ajax({
    url: endpoint,
    dataType: 'jsonp',
    success: success
    // function (dataResult) {
    //   return dataResult.hourly_forecast
    // }
  })
}
