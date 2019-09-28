

function onAdd(){
    const name = $("#name").val()
    const id_work = $("#select-work").val()
    const id_salary = $("#select-category").val()

    $.post('/add',{
        name,
        id_work,
        id_salary
    },response=>{
        console.log('response',response)
        loadDataIntoTable()
    })
}


function clearModal(){
    $("#modal-title").text('')
    $("#name").val("")
    $("#form-modal-main").empty()
}


function onClose(e){
    const par = $(e).parent().parent().parent()
    par.hide()
}


$(".modal-wrapper").hide()


$('#modal-add').click(_=>{
    $("#modal-main").show()
    $("#modal-title").text("ADD DATA")
    $("#form-modal-main").html(`
        <button class="btn-yellow" id="btn-add" onclick="onAdd()">ADD</button>
    `)
})


function loadApiData(apiEnd,whichSelect, fieldName){
    $.get(apiEnd, response=>{
        const {data} = response
        $(whichSelect).empty()
        data.forEach(v=>{
            $(whichSelect).append(`
                <option value="${v.id}">${v[fieldName]}</option>
            `)
        })
    })
}



loadApiData("/data-work","#select-work","name")
loadApiData("/data-category","#select-category","salary")


function onDelete(name,id){
    console.log('delete',name,id)
    
    $.get(`/delete/${name}/${id}`,response=>{
        $("#modal-msg").show()
        $("#msg").text(`Data ${name} telah berhasil dihapus`)
        loadDataIntoTable()
    })
}


function submitEdit(id){
    const name = $("#name").val()
    const id_work = $("#select-work").val()
    const id_salary = $("#select-category").val()

    $.post(`/edit/${id}`,{
        name,
        id_work,
        id_salary
    },response=>{
        console.log('response',response)
        loadDataIntoTable()
    })
}

function onEdit(id , name , id_work , id_salary ){
    $("#name").val(name)
    $("#select-work").val(id_work)
    $("#select-category").val(id_salary)

    $("#modal-main").show()
    $("#modal-title").text("EDIT DATA")
    $("#form-modal-main").html(`
        <button class="btn-yellow" id="btn-edit" onclick="submitEdit('${id}')">EDIT</button>
    `)
}

function loadDataIntoTable(){
    $.get('/listdata',function(response){
        var data = response.data
        $("tbody").empty()
        data.forEach(function(v){
            
            $("tbody").append(`
                <tr class="tr-tbody">
                    <td>${v.name}</td>
                    <td>${v.work}</td>
                    <td>${v.salary}</td>
                    <td>
                        <img onclick="onDelete('${v.name}','${v.id}')" class="img-actions" src="/assets/img/trash.png"/>
                        <img onclick="onEdit('${v.id}', '${v.name}', '${v.id_work}' , '${v.id_salary}')" class="img-actions" src="/assets/img/pencil.png"/>
                    </td>
                </tr>
            `)
        });
    });
}

loadDataIntoTable()