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
    var res = document.getElementById("resExchlist")
    
    for( key in response ){
        

       

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
    var mydata = response["data"]["total_market_cap"]
    var res = document.getElementById("resExchrates")
    // res.innerHTML = ""
    for( i in mydata){
        // console.log(i.toUpperCase(),mydata[i])
        
        var tr = document.createElement('tr')

        var td1 = document.createElement('td')
        var td2 = document.createElement('td')

        td1.innerHTML = i.toUpperCase()
        td2.innerHTML = mydata[i]

        tr.appendChild(td1)
        tr.appendChild(td2)

        res.appendChild(tr)
    }

    
}

// --------------------------------Exchange Rates Ends-----------------------------