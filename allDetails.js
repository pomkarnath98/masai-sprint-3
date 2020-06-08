var convertedData;
var url;
function fetchData(){
    var countryName = document.querySelector('input')
    var xhr = new XMLHttpRequest();
    if(!countryName.value)
        alert('Type Country Name!')
    else{
        url = 'https://api.covid19api.com/country/' + countryName.value
        xhr.open("GET", url)
        xhr.send();
        xhr.onload = function(){
            if(this.status === 404){
                alert('Not Found!')
            }
            else{
                convertedData = JSON.parse(this.response)
                countryData();
            }
        }
    }
}

function countryData(){
    document.querySelector('tbody').innerHTML = ''

    document.querySelector('th').textContent = 'COVID-19 Status of Country ' + convertedData[0].Country

    for(var i = 0; i < convertedData.length; i++){
        var tR = document.createElement('tr')
        document.querySelector('tbody').append(tR)

        var date = document.createElement('td')
        date.textContent = convertedData[i].Date
        


        var newCase = document.createElement('td')
        if(convertedData[i-1] === undefined || convertedData[i].Confirmed - convertedData[i-1].Confirmed < 0){
            newCase.textContent = 0
        }
        else
            newCase.textContent = convertedData[i].Confirmed - convertedData[i-1].Confirmed
            
        var totalCase = document.createElement('td')
        totalCase.textContent = convertedData[i].Confirmed
            


        var newActiveCase = document.createElement('td')
        if(convertedData[i-1] === undefined || convertedData[i].Active - convertedData[i-1].Active < 0){
            newActiveCase.textContent = 0
        }
        else
            newActiveCase.textContent = convertedData[i].Active - convertedData[i-1].Active
            
        var active = document.createElement('td')
        active.textContent = convertedData[i].Active
        
            
        var newDeathsCase = document.createElement('td')
        if(convertedData[i-1] === undefined || convertedData[i].Deaths - convertedData[i-1].Deaths < 0){
            newDeathsCase.textContent = 0
        }
        else
            newDeathsCase.textContent = convertedData[i].Deaths - convertedData[i-1].Deaths
            
        var deaths = document.createElement('td')
        deaths.textContent = convertedData[i].Deaths
                
                
        var newRecoveredCase = document.createElement('td')
        if(convertedData[i-1] === undefined || convertedData[i].Recovered - convertedData[i-1].Recovered < 0){
            newRecoveredCase.textContent = 0
        }
        else
            newRecoveredCase.textContent = convertedData[i].Recovered - convertedData[i-1].Recovered
                
        var recovered = document.createElement('td')
        recovered.textContent = convertedData[i].Recovered

        tR.append(date, newCase, totalCase, newActiveCase, active, newDeathsCase, deaths, newRecoveredCase, recovered)
    }
    document.querySelector('table').style.display = 'table'
    document.querySelector('input').value = ''
}


document.querySelector('#searchBox button').addEventListener('click', fetchData)
document.getElementById('reset').addEventListener('click', function(){
    document.querySelector('table').style.display = 'none'
})