function bookRide(){

    let pickup =
        document.querySelectorAll("input")[0].value;

    let destination =
        document.querySelectorAll("input")[1].value;

    if(pickup === "" || destination === ""){
        alert("Please enter locations");
        return;
    }

    alert(
        `Ride Booked!\nPickup: ${pickup}\nDestination: ${destination}`
    );
}