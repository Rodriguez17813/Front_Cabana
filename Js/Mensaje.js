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
        myTable+="<td> <button onclick='borrarElementoME("+respuesta[i].idMessage+")'>Borrar Registro</button>";
        myTable+="</tr>";
    }
    if(respuesta.length==0){
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
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


function editarInformacionME(){
    let myData={
        idMessage:$("#IdM").val(),
        messageText:$("#Mmensaje").val(),
        

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.108.133:8080/api/Message/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado4").empty();
            $("#IdM").val("");
            $("#Mmensaje").val("");
            traerInformacionMensajesU();
            alert("Se ha Actualizado el Registro")
        }
    });
}

function traerInformacionMensajesU(){
    $.ajax({
        url:"http://129.151.108.133:8080/api/Message/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaMensajesU(respuesta);
        }
    });
}

function pintarRespuestaMensajesU(respuesta){
    let myTable="<table>";
    myTable += "<tr>";
    myTable += "<td>" + 'ID' + "</td>" + "<td>" + 'Mensaje' + "</td>";
    myTable += "</tr>";
    
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].idMessage+"</td>";
        myTable+="<td>"+respuesta[i].messageText+"</td>";
        //myTable+="<td> <button onclick='borrarElementoME("+respuesta[i].idMessage+")'>Borrar Registro</button>";
        myTable+="</tr>";
    }
    if(respuesta.length==0){
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
    }
    myTable+="</table>";
    $("#resultado4").html(myTable);
}



function borrarElementoME(idElemento){

    $.ajax({
        
        url:'http://129.151.108.133:8080/api/Message/'+idElemento,
        type:"DELETE",
        
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado4").empty();
            traerInformacionMensajes();
            alert("Se ha Eliminado.")
        }
    });
}