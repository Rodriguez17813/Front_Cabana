function traerInformacionReservaciones(){
    $.ajax({
        url:"http://129.151.108.133:8080/api/Reservation/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaReservaciones(respuesta);
        }
    });
}

function pintarRespuestaReservaciones(respuesta){
    let myTable="<table>";
    myTable += "<tr>";
    myTable += "<td>" + 'Fecha Inicio' + "</td>" + "<td>" + 'Fecha Fin' + "</td>";
    myTable += "</tr>";


    for(i=0;i<respuesta.length;i++){
        var fecha = respuesta[i].startDate; //Guardo las fechas para darles formato
        var fecha2 = respuesta[i].devolutionDate; //Guardo las fechas para darles formato

        let fechIni = [];
        let fechFin = [];
        fechIni = fecha;
        fechFin = fecha2;
        let conver1 = [];
        let conver3= [];
        for (k = 0; k < 10; k++) {
            conver1.push(fechIni[k]); //Tomo los 9 primeros caracteres que necesito de la fecha
            conver3.push(fechFin[k]); //Tomo los 9 primeros caracteres que necesito de la fecha
        }
        var conver2 = conver1.toString(); //Convierto de arreglo a string
        var conver4 = conver3.toString(); //Convierto de arreglo a string
        for (k = 0; k < 9; k++) {
            conver2 = conver2.replace(",", ""); //Convierto la , por vacio
            conver4 = conver4.replace(",", ""); //Convierto la , por vacio
        }

        myTable+="<tr>";
        myTable+="<td>"+conver2+"</td>";
        myTable+="<td>"+conver4+"</td>";
        myTable+="<td> <button onclick='borrarElementoRE("+respuesta[i].idReservation+")'>Borrar Registro</button>";
        myTable+="</tr>";
    }
    if(respuesta.length==0){
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
    }
    myTable+="</table>";
    $("#resultado2").html(myTable);
    
}

function guardarInformacionReservaciones(){
    let var4 = {
        startDate:$("#StartDate").val(),
        devolutionDate:$("#EndtDate").val(),
        };

        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var4),
        
        url:"http://129.151.108.133:8080/api/Reservation/save",

        success:function(response) {
            $("#StartDate").val("");
            $("#EndtDate").val("");

            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");
        }
        });
}


function editarInformacionRE(){
    let myData={
        idReservation:$("#idR").val(),
        startDate:$("#StartDate").val(),
        devolutionDate:$("#EndtDate").val(),
        status:$("#status").val(),

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.108.133:8080/api/Reservation/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado6").empty();
            $("#idR").val("");
            $("#StartDate").val("");
            $("#EndtDate").val("");
            $("#status").val("");
            traerInformacionReservacionesU();
            alert("Se ha Actualizado el Registro")
        }
    });
}


function traerInformacionReservacionesU(){
    $.ajax({
        url:"http://129.151.108.133:8080/api/Reservation/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaReservacionesU(respuesta);
        }
    });
}

function pintarRespuestaReservacionesU(respuesta){
    let myTable="<table>";
    myTable += "<tr>";
    myTable += "<td>" + 'ID Reservacion' + "</td>"+"<td>" + 'Fecha Inicio' + "</td>" + "<td>" + 'Fecha Fin' + "</td>";
    myTable += "</tr>";


    for(i=0;i<respuesta.length;i++){
        var fecha = respuesta[i].startDate; //Guardo las fechas para darles formato
        var fecha2 = respuesta[i].devolutionDate; //Guardo las fechas para darles formato

        let fechIni = [];
        let fechFin = [];
        fechIni = fecha;
        fechFin = fecha2;
        let conver1 = [];
        let conver3= [];
        for (k = 0; k < 10; k++) {
            conver1.push(fechIni[k]); //Tomo los 9 primeros caracteres que necesito de la fecha
            conver3.push(fechFin[k]); //Tomo los 9 primeros caracteres que necesito de la fecha
        }
        var conver2 = conver1.toString(); //Convierto de arreglo a string
        var conver4 = conver3.toString(); //Convierto de arreglo a string
        for (k = 0; k < 9; k++) {
            conver2 = conver2.replace(",", ""); //Convierto la , por vacio
            conver4 = conver4.replace(",", ""); //Convierto la , por vacio
        }

        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].idReservation+"</td>";
        myTable+="<td>"+conver2+"</td>";
        myTable+="<td>"+conver4+"</td>";
        //myTable+="<td> <button onclick='borrarElementoRE("+respuesta[i].idReservation+")'>Borrar Registro</button>";
        myTable+="</tr>";
    }
    if(respuesta.length==0){
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
    }
    myTable+="</table>";
    $("#resultado6").html(myTable);
    
}



function borrarElementoRE(idElemento){

    $.ajax({
        
        url:'http://129.151.108.133:8080/api/Reservation/'+idElemento,
        type:"DELETE",
        
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionReservaciones();
            alert("Se ha Eliminado.")
        }
    });
}