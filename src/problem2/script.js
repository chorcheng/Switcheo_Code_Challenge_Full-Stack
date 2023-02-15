var transactions = [];
var hexa_regex = /0[xX][0-9a-fA-F]+/g
var otp = Math.floor(100000+ Math.random()*900000);
document.getElementById("otp-correct").innerHTML = otp;
function onSubmit() {
    var eth_addr, eth_amt, user_otp;
    eth_addr = document.getElementById("input-address").value;
    eth_amt = document.getElementById("input-amount").value;
    user_otp = document.getElementById("input-otp").value;
    console.log("eth_addr: " + eth_addr + " eth_amt: " + eth_amt + " user_otp: " + user_otp)

    if (eth_addr.match(hexa_regex)==null){

    }
    if (isNaN(eth_amt)){

    }
    if (user_otp == otp) {
        otp = Math.floor(100000+ Math.random()*900000);
        document.getElementById("otp-correct").innerHTML = otp;
        console.log("otp is correct")

        
        //update the table
        var tableRow = document.getElementById("transaction_table_body");

        var blank_row = document.getElementById("blank_row");
        if (typeof(blank_row) != "undefined" && blank_row != null){
            blank_row.remove()
        }
        var row = tableRow.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = eth_addr;
        cell2.innerHTML = eth_amt;
        cell3.innerHTML = "In progress"
        document.getElementById("input-address").value = "";
        document.getElementById("input-amount").value = "";
        document.getElementById("input-otp").value = "";

        setTimeout(function() {
            cell3.innerHTML = "Success";
        } ,7*1000)
    }
    else{

    }
}

addEventListener("keydown", function(event){
    if (event.code == "Enter"){
        onSubmit();
    }
})