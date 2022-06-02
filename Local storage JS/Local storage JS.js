function validation(){
    const fname = document.f1.name.value;
    const emailId = document.f1.email.value;
    // console.log(fname, emailId);
    //setItem
    let existingAccount = localStorage.getItem('ExistingList');
    existingAccount = existingAccount ? JSON.parse(existingAccount) : existingAccount;
    let myName = {fname:fname, emailId: emailId};
    let userExist = false;
    if (existingAccount && existingAccount.length) {
        existingAccount.forEach(list => {
            if (list.fname === fname) {
                userExist = true;                   
            }
        });
    } else {
        existingAccount = [];
        existingAccount.push(myName);
        existingAccount = JSON.stringify(existingAccount)
        localStorage.setItem('ExistingList', existingAccount);
        existingAccount = [];
        document.getElementById("demo").innerHTML = " username registered successfully";
    }

    if (userExist && existingAccount.length) {
        document.getElementById("demo").innerHTML = " username already  exists";

    } else if (!userExist && existingAccount.length){
        existingAccount.push(myName);
        existingAccount = JSON.stringify(existingAccount)
        localStorage.setItem('ExistingList', existingAccount);
        document.getElementById("demo").innerHTML = " username registered successfully";
    }
}