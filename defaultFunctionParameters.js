
//connectToDB('localhost', 3306);

//emca 5
function fetchOrders (count, start) {
    if (count=== undefined){
        count = 10;
    }

    if(start=== undefined){
        start = 0;
    }

    console.log('Getting', count,
        'orders starting from', start);
}

fetchOrders();

//ecma 6

function fetchOrdersNew(count = 10, start = 0){
    console.log('Getting', count,
        'orders starting from', start);
}

fetchOrdersNew();
fetchOrdersNew( 12, 90);
fetchOrdersNew(null,10);
fetchOrdersNew(undefined, 12);


function findProducts(opts = {minPrice: 10, maxPrice: 20}) {
    console.log(opts);
}

findProducts();
findProducts({});


//sets up if values are not added
//often last in the list
//can be any type