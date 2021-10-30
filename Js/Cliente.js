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
        myTable+="<td> <button onclick='borrarElementoCL("+respuesta[i].idClient+")'>Borrar Registro</button>";
        myTable+="</tr>";
    }
    if(respuesta.length==0){
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
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


function editarInformacionCL(){
    let myData={
        idClient:$("#CLid").val(),
        email:$("#CLemail").val(),
        password:$("#CLpassword").val(),
        name:$("#CLname").val(),
        age:$("#CLage").val(),
        

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.108.133:8080/api/Client/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado4").empty();
            $("#CLid").val("");
            $("#CLemail").val("");
            $("#CLpassword").val("");
            $("#CLname").val("");
            $("#CLage").val("");
            traerInformacionClientesU();
            alert("Se ha Actualizado el Registro")
        }
    });
}

function traerInformacionClientesU(){
    $.ajax({
        url:"http://129.151.108.133:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaClientesU(respuesta);
        }
    });
}

function pintarRespuestaClientesU(respuesta){
    let myTable="<table>";
    myTable += "<tr>";
    myTable += "<td>" + 'ID Cliente' + "</td>" +"<td>" + 'Correo' + "</td>" + "<td>" + 'Contraseña' + "</td>" + "<td>" + 'Nombre' + "</td>"+ "<td>" + 'Edad' + "</td>";
    myTable += "</tr>";
    
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].idClient+"</td>";
        myTable+="<td>"+respuesta[i].email+"</td>";
        myTable+="<td>"+respuesta[i].password+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].age+"</td>";
        //myTable+="<td> <button onclick='borrarElementoCL("+respuesta[i].idClient+")'>Borrar Registro</button>";
        myTable+="</tr>";
    }
    if(respuesta.length==0){
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
        myTable+="<td>Sin Data</td>";
    }
    myTable+="</table>";
    $("#resultado1").html(myTable);
}


function borrarElementoCL(idElemento){

    $.ajax({
        
        url:'http://129.151.108.133:8080/api/Client/'+idElemento,
        type:"DELETE",
        
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado4").empty();
            traerInformacionClientes();
            alert("Se ha Eliminado.")
        }
    });
}
