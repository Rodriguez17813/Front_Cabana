function traerInformacionAdmin(){
    $.ajax({
        url:"http://129.151.108.133:8080/api/Admin/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaAdmin(respuesta);
        }
    });
}

function pintarRespuestaAdmin(respuesta){
    let myTable="<table>";
    myTable += "<tr>";
    myTable += "<td>" + 'Correo' + "</td>" + "<td>" + 'Contraseña' + "</td>" + "<td>" + 'Nombre' + "</td>";
    myTable += "</tr>";
    
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].email+"</td>";
        myTable+="<td>"+respuesta[i].password+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td> <button onclick='borrarElementoAD("+respuesta[i].idAdmin+")'>Borrar Registro</button>";
        myTable+="</tr>";
    }
    if(respuesta.length==0){
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
        
    }
    myTable+="</table>";
    $("#resultado10").html(myTable);
}

function guardarInformacionAdmin(){
    let var4 = {
        email:$("#ADemail").val(),
        password:$("#ADpassword").val(),
        name:$("#ADname").val(),
        
        };

        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var4),
        
        url:"http://129.151.108.133:8080/api/Admin/save",

        success:function(response) {
            $("#ADemail").val("");
            $("#ADpassword").val("");
            $("#ADname").val("");
            
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

//////////////
function editarInformacionAD(){
    let myData={
        idAdmin:$("#ADid").val(),
        email:$("#ADemail").val(),
        password:$("#ADpassword").val(),
        name:$("#ADname").val(),
        

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.108.133:8080/api/Admin/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado10").empty();
            $("#ADid").val("");
            $("#ADemail").val("");
            $("#ADpassword").val("");
            $("#ADname").val("");
            traerInformacionAdminU();
            alert("Se ha Actualizado el Registro")
        }
    });
}

function traerInformacionAdminU(){
    $.ajax({
        url:"http://129.151.108.133:8080/api/Admin/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaAdminU(respuesta);
        }
    });
}

function pintarRespuestaAdminU(respuesta){
    let myTable="<table>";
    myTable += "<tr>";
    myTable += "<td>" + 'ID Admin' + "</td>" + "<td>" + 'Correo' + "</td>" + "<td>" + 'Contraseña' + "</td>" + "<td>" + 'Nombre' + "</td>";
    myTable += "</tr>";
    
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].idAdmin+"</td>";
        myTable+="<td>"+respuesta[i].email+"</td>";
        myTable+="<td>"+respuesta[i].password+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        //myTable+="<td> <button onclick='borrarElementoAD("+respuesta[i].idClient+")'>Borrar Registro</button>";
        myTable+="</tr>";
    }
    if(respuesta.length==0){
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
        
    }
    myTable+="</table>";
    $("#resultado10").html(myTable);
}

///////

function borrarElementoAD(idElemento){

    $.ajax({
        
        url:'http://129.151.108.133:8080/api/Admin/'+idElemento,
        type:"DELETE",
        
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado10").empty();
            traerInformacionAdmin();
            alert("Se ha Eliminado.")
        }
    });
}