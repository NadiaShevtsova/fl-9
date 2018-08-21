const CHECKLOGIN='User';
const CHECKPASSWORD='SuperUser';
let login, password;
let hour=new Date().getHours();
login=prompt('Enter your login!', 'Enter login');
if (login==='' || login===null){
    alert('Canceled.');
} else{
    if(login.length<4){
        alert('I don’t know any users having name length less than 4 symbols');
    }else{
        if(CHECKLOGIN===login){
            password=prompt('Enter your password!','Enter password');
            if(password ==='' || password===null){
                alert('Canceled.');
            } else {
                if(CHECKPASSWORD===password){
                    hour < 20 ? alert('Good day!') : alert('Good evening!');
                }else {
                    alert('Wrong password');
                }
            }
        }else {
            alert('I don’t know you');
        }
    }
}
