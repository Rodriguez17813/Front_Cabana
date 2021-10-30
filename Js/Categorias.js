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
        myTable+="<td> <button onclick='borrarElementoCT("+respuesta[i].id+")'>Borrar Registro</button>";
        myTable+="</tr>";
    }
    if(respuesta.length==0){
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
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


function editarInformacionCT(){
    let myData={
        id:$("#Idnombre").val(),
        name:$("#CAnombre").val(),
        description:$("#CAdescripcion").val(),

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.108.133:8080/api/Category/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado5").empty();
            $("#Idnombre").val("");
            $("#CAnombre").val("");
            $("#CAdescripcion").val("");
            traerInformacionCategoriasU();
            alert("Se ha Actualizado el Registro")
        }
    });
}

function traerInformacionCategoriasU(){
    $.ajax({
        url:"http://129.151.108.133:8080/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaCategoriasU(respuesta);
        }
    });
}

function pintarRespuestaCategoriasU(respuesta){
    let myTable="<table>";
    myTable += "<tr>";
    myTable += "<td>" + 'ID Categoria' + "</td>" +"<td>" + 'Nombre' + "</td>" + "<td>" + 'Descripcion' + "</td>";
    myTable += "</tr>";
    
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].id+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        //myTable+="<td> <button onclick='borrarElementoCT("+respuesta[i].id+")'>Borrar Registro</button>";
        myTable+="</tr>";
    }
    if(respuesta.length==0){
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
    }
    myTable+="</table>";
    $("#resultado5").html(myTable);
}


function borrarElementoCT(idElemento){

    $.ajax({
        
        url:'http://129.151.108.133:8080/api/Category/'+idElemento,
        type:"DELETE",
        
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado4").empty();
            traerInformacionCategorias();
            alert("Se ha Eliminado.")
        }
    });
}