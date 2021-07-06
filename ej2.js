const departments = document.getElementById("departments");
const cities = document.getElementById("cities");

const departmentsArr = [ "Antioquia", "Cundinamarca", "Bogota DC", "Atlantico" ];

const antiquiaArr = ["Medellin", "Andes"];
const cundinamarcaArr = ["Chía", "Cajicá"];
const bogotArr = ["Bogota"];
const atlanticoArr = ["Barranquilla"];

departmentsArr.forEach( function( depa, index) {
    const option = document.createElement("option");
    option.id = index;
    option.value = depa;
    option.innerHTML = depa;
    departments.append(option);
});

departments.addEventListener("change", function(event){
    cities.innerHTML = "";
    const val = event.target.value;
    let arr = [];
    
    if( val === "Antioquia") arr = antiquiaArr;
    else if( val === "Cundinamarca" ) arr = cundinamarcaArr;
    else if( val === "Bogota DC" ) arr = bogotArr;
    else if( val === "Atlantico" ) arr = atlanticoArr;

    arr.forEach( function( city, index) {
        const optionC = document.createElement("option");
        optionC.id = index;
        optionC.value = city;

        optionC.innerHTML = city;
        cities.append( optionC );
    });
} );


const name_ = document.getElementById("name");
name_.addEventListener("keyup", function(event){
    let val = event.target.value;
    val.toLocaleLowerCase();

    const antioFinded = antiquiaArr.find( function( city ) {
        let nameCity = city.toLocaleLowerCase();
        if( nameCity === val ) return city;
    });

    const cundFinded = cundinamarcaArr.find( function( city ) {
        let nameCity = city.toLocaleLowerCase();
        if( nameCity === val ) return city;
    });

    const bogFinded = bogotArr.find( function( city ) {
        let nameCity = city.toLocaleLowerCase();
        if( nameCity === val ) return city;
    });

    const atlFinded = atlanticoArr.find( function( city ) {
        let nameCity = city.toLocaleLowerCase();
        if( nameCity === val ) return city;
    });

    if( antioFinded ) return alert("ciudad de antioquia");
    else if( cundFinded ) return alert("ciudad de cundinamarca");
    else if( bogFinded ) return alert("ciudad de bogota");
    else if( atlFinded ) return alert("ciudad de atlantico");
});
