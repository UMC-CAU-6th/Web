//Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(()=>{
            if(
                (id === 'yb' && password === 'qwe123') 
            ) {
                onSuccess(id);
            } else  {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(()=> {
            if(user === 'yb') {
                onSuccess({name:'yb', role:'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(
    id, 
    password, 
    (user)=>{
        userStorage.getRoles(
            user, 
            userWithRole => {
                console.log(`Hello ${userWithRole.name}!, your role is ${userWithRole.role}`);
            },
            error=>{
                console.log(error);
            }
        )
    }, 
    error => {
        console.log(error);
    }
);
