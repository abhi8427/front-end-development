var data = document.getElementById('data');
var userlist = document.getElementById('userlist');

var counter = 0;

function addUser(){
var inputdata =  document.getElementById('data').value;
console.log(inputdata);



var html =  '<div class="row" id = "data'+counter+'" style="margin-bottom: 15px;">'+
'<div class="col-md-6 col-sm-12 col-xs-12">'+

    '<input type="text" class = "form-control" value="'+inputdata+'" disabled>'+

'</div>'+


'<div class="col-md-2 col-sm-4 col-xs-4">'+
    '<button type="button" class="btn btn-success" onclick="edit(this.id)" id="edit'+counter+'">Edit</button>'+
'</div>'+

'<div class="col-md-2 col-sm-4 col-xs-4">'+
    '<button type="button" class="btn btn-success" onclick="update(this.id)" id="update'+counter+'">Update</button>'+
'</div>'+

'<div class="col-md-2 col-sm-4 col-xs-4">'+
    '<button type="button" class="btn btn-danger" onclick="deleteuser(this.id)" id="delete'+counter+'">Delete</button>'+
'</div>'+

'</div>';


document.getElementById('userlist').insertAdjacentHTML('beforeend', html);
counter++;

}


function edit(editid){
    //console.log(editid);
        var parent = document.getElementById(editid).parentNode.parentNode;
        var child = parent.firstChild.firstChild;
        child.removeAttribute('disabled');
    console.log(parent);

}


function update(updateid){
    var parent = document.getElementById(updateid).parentNode.parentNode;
        var child = parent.firstChild.firstChild;
        child.setAttribute("disabled",'disabled');
    console.log(updateid);

}

function deleteuser(deleteid){
    var parent = document.getElementById(deleteid).parentNode.parentNode;
        parent.remove();
    console.log(deleteid);

}
