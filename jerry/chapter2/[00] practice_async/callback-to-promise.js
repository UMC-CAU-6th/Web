//Callback Hell example
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                if( (id === 'yb' && password === 'qwe123') || (id === 'jh' && password === 'qwe123')
                ) {
                    resolve(id);
                } else  {
                    reject(new Error('not found'));
                }
            }, 1000);
        });
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                if(user === 'yb') {
                    resolve({name:'yb', role:'admin'});
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage
    .loginUser(id, password)
    .then((user) => {
        userStorage.getRoles(user)
        .then((user) => {console.log(`hello, ${user.name}! [Role : ${user.role}]`)})
    })
    .catch((error) => console.log(error));