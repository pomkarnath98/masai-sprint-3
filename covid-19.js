window.addEventListener('load', loadingData)

var url = 'https://api.covid19api.com/'

function loadingData(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url+'/summary')
    xhr.send();
    xhr.onload = function(){
        var convertedData = JSON.parse(this.response)
        console.log(convertedData)

        var summaryDiv = document.querySelector('div')
        
        var newConfirm = document.createElement('div')
        newConfirm.setAttribute('class', 'worldSummary')
        
        var globalNewConfirm = convertedData.Global.NewConfirmed
        var newConfirmNum = document.createElement('div')
        newConfirmNum.textContent = globalNewConfirm
        newConfirmNum.setAttribute('id', 'newConfirmNum')
        newConfirm.append(newConfirmNum)

        var newConfirmText = document.createElement('div')
        newConfirmText.textContent = 'New Confirmed'
        newConfirmText.setAttribute('id', 'newConfirmText')
        newConfirm.append(newConfirmText)
        
        
        
        var newDeaths = document.createElement('div')
        newDeaths.setAttribute('class', 'worldSummary')
        
        var globalNewDeaths = convertedData.Global.NewDeaths
        var newDeathsNum = document.createElement('div')
        newDeathsNum.setAttribute('id', 'newDeathsNum')
        newDeathsNum.textContent = globalNewDeaths
        newDeaths.append(newDeathsNum)

        var newDeathsText = document.createElement('div')
        newDeathsText.setAttribute('id', 'newDeathsText')
        newDeathsText.textContent = 'New Deaths'
        newDeaths.append(newDeathsText)
        
        
        
        var newRecovered = document.createElement('div')
        newRecovered.setAttribute('class', 'worldSummary')
        
        var globalNewRecovered = convertedData.Global.NewRecovered
        var newRecoveredNum = document.createElement('div')
        newRecoveredNum.setAttribute('id', 'newRecoveredNum')
        newRecoveredNum.textContent = globalNewRecovered
        newRecovered.append(newRecoveredNum)
        
        var newRecoveredText = document.createElement('div')
        newRecoveredText.setAttribute('id', 'newRecoveredText')
        newRecoveredText.textContent = 'New Recovered'
        newRecovered.append(newRecoveredText)
        


        var totalConfirm = document.createElement('div')
        totalConfirm.setAttribute('class', 'worldSummary')
        
        var globalTotalConfirm = convertedData.Global.TotalConfirmed
        var totalConfirmNum = document.createElement('div')
        totalConfirmNum.setAttribute('id', 'totalConfirmNum')
        totalConfirmNum.textContent = globalTotalConfirm
        totalConfirm.append(totalConfirmNum)

        var totalConfirmText = document.createElement('div')
        totalConfirmText.setAttribute('id', 'totalConfirmText')
        totalConfirmText.textContent = 'Total Confirmed'
        totalConfirm.append(totalConfirmText)



        var totalDeaths = document.createElement('div')
        totalDeaths.setAttribute('class', 'worldSummary')
        
        var globalTotalDeaths = convertedData.Global.TotalDeaths
        var totalDeathsNum = document.createElement('div')
        totalDeathsNum.setAttribute('id', 'totalDeathsNum')
        totalDeathsNum.textContent = globalTotalDeaths
        totalDeaths.append(totalDeathsNum)

        var totalDeathsText = document.createElement('div')
        totalDeathsText.setAttribute('id', 'totalDeathsText')
        totalDeathsText.textContent = 'Total Deaths'
        totalDeaths.append(totalDeathsText)
        
        

        var totalRecovered = document.createElement('div')
        totalRecovered.setAttribute('class', 'worldSummary')
        
        var globalTotalRecovered = convertedData.Global.TotalRecovered
        var totalRecoveredNum = document.createElement('div')
        totalRecoveredNum.setAttribute('id', 'totalRecoveredNum')
        totalRecoveredNum.textContent = globalTotalRecovered
        totalRecovered.append(totalRecoveredNum)

        var totalRecoveredText = document.createElement('div')
        totalRecoveredText.setAttribute('id', 'totalRecoveredText')
        totalRecoveredText.textContent = 'Total Recovered'
        totalRecovered.append(totalRecoveredText)
        


        var lastUpdatedTime = convertedData.Date
        var lastUpdated = document.createElement('p')
        lastUpdated.textContent = 'Last Updated: ' + lastUpdatedTime;
        lastUpdated.setAttribute('id', 'lastUpdatedTime')


        summaryDiv.append(newConfirm, newDeaths, newRecovered, totalConfirm, totalDeaths, totalRecovered, lastUpdated)

    }
}