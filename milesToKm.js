function milesToKm (miles) {
    const kilometer = miles / 1.609344;
    return kilometer;
}

const riponDistanceInMiles = 10;
let riponDistanceInKm = milesToKm(riponDistanceInMiles);
riponDistanceInKm = riponDistanceInKm.toFixed(2);
riponDistanceInKm = parseFloat(riponDistanceInKm);
console.log(riponDistanceInKm);