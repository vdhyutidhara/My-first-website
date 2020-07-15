// --------------------------------Derivatives Exchange List Starts----------------

window.addEventListener('DOMContentLoaded', function(){
    var query = document.getElementById('get-results-Exchlist');
    query.addEventListener('click', getRepo)
})

function getRepo( ){
    
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "https://api.coingecko.com/api/v3/derivatives/exchanges/list" )
    xhr.send()
    xhr.onload = function(){
        
        var data = JSON.parse(this.response)
        
        display( data )
    }
}

function display(response){
    var res = document.getElementById("resExchList")
    for(var i=0; i<response.length; i++){

        var row = document.createElement('div')
        
        for( key in response[i] ){
            var div = document.createElement('div')
            div.textContent = key + " : " + response[i][key]
            row.append(div)
        }
        resExchList.append(row)

    }
    
}
// --------------------------------Derivatives Exchange List Ends----------------

// --------------------------------Exchange Rates Starts-------------------------

window.addEventListener('DOMContentLoaded', function(){
    var query2 = document.getElementById('get-results-Exchrates');
    query2.addEventListener('click', getRepo2)
})

function getRepo2( ){
    
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "https://api.coingecko.com/api/v3/global" )
    xhr.send()
    xhr.onload = function(){
        
        var data = JSON.parse(this.response)
        
        display2( data )
    }
}

function display2(response){
    
    var res = document.getElementById("resExchrates")
    for(var i=0; i<100; i++){

        var row = document.createElement('div')
        
        for( key in response.data.total_market_cap[i] ){
            var div = document.createElement('div')
            div.textContent = key + " : " + response.data.total_market_cap[i][key]
            row.append(div)
        }
        resExchrates.append(row)

    }
    
}

// --------------------------------Exchange Rates Ends-----------------------------