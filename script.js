// --------------------------------Derivatives Exchange List Starts----------------

window.addEventListener("DOMContentLoaded", function () {
  var queryExchlist = document.getElementById("get-results-Exchlist");
  queryExchlist.addEventListener("click", getRepoExchlist);
});

function getRepoExchlist() {
  var xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://api.coingecko.com/api/v3/derivatives/exchanges/list"
  );
  xhr.send();
  xhr.onload = function () {
    var data = JSON.parse(this.response);
    displayExchlist(data);
  };
}

function displayExchlist(response) {
  var mydata = response;
  var res = document.getElementById("resExchlist");
  for (i in mydata) {
    var row = document.createElement("tr");

    var colRank = document.createElement("td");
    var colID = document.createElement("td");
    var colName = document.createElement("td");

    colRank.innerHTML = Number(i) + 1;
    colID.innerHTML = mydata[i].id;
    colName.innerHTML = mydata[i].name;

    row.appendChild(colRank);
    row.appendChild(colID);
    row.appendChild(colName);

    res.appendChild(row);
  }
}
// --------------------------------Derivatives Exchange List Ends----------------

// --------------------------------Exchange Rates Starts-------------------------

window.addEventListener("DOMContentLoaded", function () {
  var queryExchrates = document.getElementById("get-results-Exchrates");
  queryExchrates.addEventListener("click", getRepoExchrates);
});

function getRepoExchrates() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.coingecko.com/api/v3/global");
  xhr.send();
  xhr.onload = function () {
    var data = JSON.parse(this.response);
    displayExchrates(data);
  };
}

function displayExchrates(response) {
  var mydata = response["data"]["total_market_cap"];
  var res = document.getElementById("resExchrates");
  res.innerHTML = "";
  for (i in mydata) {
    var row = document.createElement("tr");
    var colBitcoin = document.createElement("td");
    var colRate = document.createElement("td");

    colBitcoin.innerHTML = i.toUpperCase();
    colRate.innerHTML = mydata[i];

    row.appendChild(colBitcoin);
    row.appendChild(colRate);

    res.appendChild(row);
  }
}

// --------------------------------Exchange Rates Ends-----------------------------
