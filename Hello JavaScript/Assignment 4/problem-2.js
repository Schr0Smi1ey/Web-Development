function sendNotification(email) {
    if(email.indexOf('@') == -1) {
        return "Invalid Email";
    }
    else {
        const arr = email.split('@');
        return arr[0] + ' sent you an email from ' + arr[1];
    }
}

let email = "sadia8icloud.com";
console.log(sendNotification(email)); // zihad.ph sent you an email from gmail.com