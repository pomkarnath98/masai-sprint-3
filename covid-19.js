window.addEventListener('load', loadingData)

var url = 'https://api.covid19api.com/'

function loadingData(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url+'/summary')
    xhr.send();
    xhr.onload = function(){
        var convertedData = JSON.parse(this.response)
        console.log(convertedData)

        var globalNewConfirm = convertedData.Global.NewConfirmed
        console.log(globalNewConfirm)

    }
}