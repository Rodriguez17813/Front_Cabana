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
        myTable+="<td> <button onclick='borrarElementoCB("+respuesta[i].id+")'>Borrar Registro</button>";
        myTable+="</tr>";
    }
    if(respuesta.length==0){
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
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


function editarInformacionCB(){
    let myData={
        id:$("#IDcb").val(),
        name:$("#Cnombre").val(),
        brand:$("#Cbrand").val(),
        rooms:$("#Crooms").val(),
        description:$("#Cdescription").val(),

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.108.133:8080/api/Cabin/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado5").empty();
            $("#IDcb").val("");
            $("#Cnombre").val("");
            $("#Cbrand").val("");
            $("#Crooms").val("");
            $("#Cdescription").val("");
            traerInformacionCabañasU();
            alert("Se ha Actualizado el Registro")
        }
    });
}

function traerInformacionCabañasU(){
    $.ajax({
        url:"http://129.151.108.133:8080/api/Cabin/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaCabañasU(respuesta);
        }
    });
}

function pintarRespuestaCabañasU(respuesta){

    let myTable="<table>";

    myTable += "<tr>";
    myTable += "<td>" + 'ID Cabaña' + "</td>" +"<td>" + 'Nombre' + "</td>" + "<td>" + 'Marca' + "</td>" + "<td>" + 'Habitaciones' + "</td>"+ "<td>" + 'Descripcion' + "</td>";
    myTable += "</tr>";

    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].id+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].brand+"</td>";
        myTable+="<td>"+respuesta[i].rooms+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        //myTable+="<td> <button onclick='borrarElementoCB("+respuesta[i].id+")'>Borrar Registro</button>";
        myTable+="</tr>";
    }
    if(respuesta.length==0){
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
    }
    myTable+="</table>";
    $("#resultado3").html(myTable);
}


function borrarElementoCB(idElemento){

    $.ajax({
        
        url:'http://129.151.108.133:8080/api/Cabin/'+idElemento,
        type:"DELETE",
        
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado4").empty();
            traerInformacionCabañas();
            alert("Se ha Eliminado.")
        }
    });
}