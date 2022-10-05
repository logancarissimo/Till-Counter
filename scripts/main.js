function update() {
    //Rolls
    var rollin = document.getElementById("roll").value;
    var rollout = (1 * parseInt(rollin)) || 0;
    
    //Quarters
    var quarin = document.getElementById("quar").value;
    var quarout = (0.25 * parseInt(quarin)) || 0;
    
    //Dimes
    var dimein = document.getElementById("dime").value;
    var dimeout = (0.10 * parseInt(dimein)) || 0;
    
    //Nickles
    var nickin = document.getElementById("nick").value;
    var nickout = (0.05 * parseInt(nickin)) || 0;

    //Pennies
    var penin = document.getElementById("pen").value;
    var penout = (0.01 * parseInt(penin)) || 0;

    //1s
    var onein = document.getElementById("1").value;
    var oneout = (1 * parseInt(onein)) || 0;

    //2s
    var twoin = document.getElementById("2").value;
    var twoout = (2 * parseInt(twoin)) || 0;

    //5s
    var fivin = document.getElementById("5").value;
    var fivout = (5 * parseInt(fivin)) || 0;

    //10s
    var tenin = document.getElementById("10").value;
    var tenout = (10 * parseInt(tenin)) || 0;
    
    //20s
    var twein = document.getElementById("20").value;
    var tweout = (20 * parseInt(twein)) || 0;

    //50s
    var fifin = document.getElementById("50").value;
    var fifout = (50 * parseInt(fifin)) || 0;

    //100s
    var hunin = document.getElementById("100").value;
    var hunout = (100 * parseInt(hunin)) || 0;


    //Total
    var total = (rollout + quarout + dimeout + nickout + penout + oneout + twoout + fivout + tenout + tweout + fifout + hunout);

    //Change undefined values to 0
    
    
    //Print outs
    document.getElementById("rollout").innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(rollout);
    document.getElementById("quarout").innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(quarout);
    document.getElementById("dimeout").innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(dimeout);
    document.getElementById("nickout").innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(nickout);
    document.getElementById("penout").innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(penout);
    document.getElementById("1out").innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(oneout);
    document.getElementById("2out").innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(twoout);
    document.getElementById("5out").innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(fivout);
    document.getElementById("10out").innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(tenout);
    document.getElementById("20out").innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(tweout);
    document.getElementById("50out").innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(fifout);
    document.getElementById("100out").innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(hunout);
    document.getElementById('tout').innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(total);
}