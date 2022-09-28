function getTotalService(){
    var count=0;
    if(document.getElementById('Cleaning').checked===true){
        count++;
    }
    if(document.getElementById('Repair').checked===true){
        count++;
    }
    if(document.getElementById('Gas Refill').checked===true){
        count++;
    }
    if(document.getElementById('Relocation').checked===true)
    {
        count++;
    }
    if(document.getElementById('Filter').checked===true)
    {
        count++;
    }
    return count;
}
function getServiceCost(){
    var serviceCost=0;
    if(document.getElementById('Cleaning').checked===true)
    {
        serviceCost+=500;
    }
    if(document.getElementById('Repair').checked===true)
    {
        serviceCost+=2500;
    }
    if(document.getElementById('Gas Refill').checked===true)
    {
        serviceCost+=750;
    }
    if(document.getElementById('Relocation').checked===true)
    {
        serviceCost+=1500;
    }
    if(document.getElementById('Filter').checked===true)
    {
        serviceCost+=250;
    }
     return serviceCost;
    }    
    
    function calculateDiscount(servicecost)
    {
        var disCost = servicecost-(servicecost*15/100);
        return disCost;
    }
    function getYearlyMaintenanceCost(){
        if(document.getElementById("yearlyMaintenance").checked===true)
        {
            return 1500;
        }
        else
        {
            return 0;
        }
    }
    function bookAppointment(){
        var noServices = getTotalService();
        var scost = getServiceCost();
        if(noServices>2)
         {
            scost = calculateDiscount(scost);
        }
        var mcost = getYearlyMaintenanceCost();
        var res="";
        var act = document.getElementById("acType").value;
        if(document.getElementById("yearlyMaintenance").checked===true)
        {
            scost+=mcost;
            scost=Math.round(scost);
            res =  "<p>"+"Your booking for "+act+" AC service is successful!"+"<br>"+"The estimated service cost with maintenance is Rs."+scost+"</p>";
        }

        else
        {
            scost=Math.round(scost);
            res =  "<p>"+"Your booking for "+act+" AC service is successful!"+"<br>"+"The estimated service cost is Rs."+scost+"</p>";
        }
        document.getElementById("result").innerHTML=res;
        return false;

    }