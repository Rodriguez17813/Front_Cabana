
//Cabañas//
function traerInformacionCabañas(){
    $.ajax({
        url:"http://129.151.108.133:8080/api/Cabin/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaCabañas(respuesta);
        }
    });
}

function pintarRespuestaCabañas(respuesta){

    let myTable="<table>";

    myTable += "<tr>";
    myTable += "<td>" + 'Nombre' + "</td>" + "<td>" + 'Marca' + "</td>" + "<td>" + 'Habitaciones' + "</td>"+ "<td>" + 'Descripcion' + "</td>";
    myTable += "</tr>";

    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].brand+"</td>";
        myTable+="<td>"+respuesta[i].rooms+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado3").html(myTable);
}

function guardarInformacionCabañas(){
    let var3 = {
        name:$("#Cnombre").val(),
        brand:$("#Cbrand").val(),
        rooms:$("#Crooms").val(),
        description:$("#Cdescription").val(),
        };

        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var3),
        
        url:"http://129.151.108.133:8080/api/Cabin/save",

        
        success:function(response) {
                console.log(response);
                $("#Cnombre").val("");
                $("#Cbrand").val("");
                $("#Crooms").val("");
                $("#Cdescription").val("");
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


//Clientes//
function traerInformacionClientes(){
    $.ajax({
        url:"http://129.151.108.133:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaClientes(respuesta);
        }
    });
}

function pintarRespuestaClientes(respuesta){
    let myTable="<table>";
    myTable += "<tr>";
    myTable += "<td>" + 'Correo' + "</td>" + "<td>" + 'Contraseña' + "</td>" + "<td>" + 'Nombre' + "</td>"+ "<td>" + 'Edad' + "</td>";
    myTable += "</tr>";
    
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].email+"</td>";
        myTable+="<td>"+respuesta[i].password+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].age+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").html(myTable);
}

function guardarInformacionClientes(){
    let var4 = {
        email:$("#CLemail").val(),
        password:$("#CLpassword").val(),
        name:$("#CLname").val(),
        age:$("#CLage").val(),
        };

        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var4),
        
        url:"http://129.151.108.133:8080/api/Client/save",

        success:function(response) {
            $("#CLemail").val("");
            $("#CLpassword").val("");
            $("#CLname").val("");
            $("#CLage").val("");
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

//Categorias//
function traerInformacionCategorias(){
    $.ajax({
        url:"http://129.151.108.133:8080/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaCategorias(respuesta);
        }
    });
}

function pintarRespuestaCategorias(respuesta){
    let myTable="<table>";
    myTable += "<tr>";
    myTable += "<td>" + 'Nombre' + "</td>" + "<td>" + 'Descripcion' + "</td>";
    myTable += "</tr>";
    
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
    
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado5").html(myTable);
}

function guardarInformacionCategorias(){
    let var4 = {
        name:$("#CAnombre").val(),
        description:$("#CAdescripcion").val(),
        };

        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var4),
        
        url:"http://129.151.108.133:8080/api/Category/save",

        success:function(response) {
            $("#CAnombre").val("");
            $("#CAdescripcion").val("");

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

//Mensajes//
function traerInformacionMensajes(){
    $.ajax({
        url:"http://129.151.108.133:8080/api/Message/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaMensajes(respuesta);
        }
    });
}

function pintarRespuestaMensajes(respuesta){
    let myTable="<table>";
    myTable += "<tr>";
    myTable += "<td>" + 'ID' + "</td>" + "<td>" + 'Mensaje' + "</td>";
    myTable += "</tr>";
    
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].idMessage+"</td>";
        myTable+="<td>"+respuesta[i].messageText+"</td>";
    
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado4").html(myTable);
}

function guardarInformacionMensajes(){
    let var4 = {
        messageText:$("#Mmensaje").val(),
        };

        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var4),
        
        url:"http://129.151.108.133:8080/api/Message/save",

        success:function(response) {
            $("#Mmensaje").val("");

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


//Reservaciones//
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
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].startDate+"</td>";
        myTable+="<td>"+respuesta[i].devolutionDate+"</td>";
    
        myTable+="</tr>";
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
