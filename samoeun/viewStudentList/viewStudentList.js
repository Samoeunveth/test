let b=false;
if(b){
    $('.table-padding-custom').append(`
    <div class="card" style="width: 100%;height: 300px;">
        <div class="card-body d-flex justify-content-center align-items-center">
            <h1><i class="fa fa-folder-open"></i>
                <span>EMTPY</span></h1>
        </div>
    </div>`)
}else{
    $('.table-padding-custom').append(`<table class="table table-bordered">
        <thead>
            <tr>
                <td class="change-background" scope="col">ID</td>
                <td class="change-background" scope="col">Student Name</td>
                <td class="change-background" scope="col">Sex</td>
                <td class="change-background" scope="col">Date of Birth</td>
                <td class="change-background" scope="col">Phone Number</td>
                <td class="change-background" scope="col">Email Address</td>
                <td class="change-background" scope="col">Address</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td scope="row">1</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td scope="row">2</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td scope="row">3</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>`)
}