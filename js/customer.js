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
        customers = tempData; // to avoid delete data when refresh
        console.log(tempData);
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

    //check wether customer is already exit?
    let exit = isExit(customer1.id);
    console.log(exit);
    if(exit == undefined){
        customers.push(customer1);
        // stored customers array in local store
        localStorage.setItem('customer',JSON.stringify(customers))
        clearField();
        loadModal();
    }else {
        alert("Customer is already exit !");
    }



}

const isExit=(id)=>{
  return customers.find(data=>data.id==id);
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