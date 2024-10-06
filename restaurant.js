let restaurant=[];
function add(){
    let customerName = document.getElementById("cname").value;
    let numberofguest = document.getElementById("guest").value;
    let reservationTime = document.getElementById("rtime").value;

    restaurant.push({
        customerName,numberofguest,reservationTime
    });

    displayrestaurant();
    document.getElementById("cname").value='';
    document.getElementById("guest").value = '';
    document.getElementById("rtime").value = '';
}

function displayrestaurant(){
    let output = [];
    restaurant.forEach(customer=> {
        output += `CustomerName: ${(customer.customerName)},NumberOfGuest: ${(customer.numberofguest)},ReservationTime: ${(customer.reservationTime)}<br>`;
    });
    document.getElementById('customerschedule').innerHTML = output;
}
