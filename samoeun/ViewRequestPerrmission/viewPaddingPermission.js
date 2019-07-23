let b=false;
if(b){
    $('.customer-js').append(`
    <div class="card" style="width: 100%;height: 300px;">
        <div class="card-body d-flex justify-content-center align-items-center">
            <h1><i class="fa fa-folder-open"></i>
                <span>EMTPY</span></h1>
        </div>
    </div>`)
}else{
    $('.customer-js').append(`<div class="row add-padding-buttom">
            <div class="col-3">
                <span class="sub-title">Search By Name</span>
                <input type="text" class="custom-control" placeholder="search">
            </div>
            <div class="col-3">
                <span class="sub-title">Filter</span>
                <select class="custom-select">
                    <option selected>filter</option>
                    <option value="1">...</option>
                    <option value="2">...</option>
                    <option value="3">...</option>
                </select>
            </div>
        </div>
        <div class="row table-padding-custom">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <td class="change-background" scope="col">ID</td>
                        <td class="change-background" scope="col">Requested By</td>
                        <td class="change-background" scope="col">Permission Type</td>
                        <td class="change-background" scope="col">Sent Date</td>
                        <td class="change-background" scope="col">Admin Checked?</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">1</td>
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
                    </tr>
                    <tr>
                        <td scope="row">3</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            </div>`)
    $(".table-bordered").delegate("tr", "click", function(){
        $('#hidden'). click();
    });
}
