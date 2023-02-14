let customers=[];

//constructor
function Customer(id,name,address,salary){
    this.id = id;
    this.name = name;
    this.address = address;
    this.salary = salary
}

initializeCustomers=()=>{
    let tempData = JSON.parse(localStorage.getItem('customer'));
    if(tempData !== null){
        // console.log(tempData);
    }
}

function saveCustomers(){
    // console.log("saveCustomer")
    let customer1 = new Customer(
        $('#customerId').val(),
        $('#customerName').val(),
        $('#customerAddress').val(),
        Number($('#customerSalary').val())
    );
    customers.push(customer1);

    // stored customers array in local store
    localStorage.setItem('customer',JSON.stringify(customers))
    clearField();
    loadModal();

}

loadModal=()=>{
    $('#success-modal').click();
}

clearField=()=>{
        $('#customerId').val("");
        $('#customerName').val("");
        $('#customerAddress').val("");
        $('#customerSalary').val("");
}