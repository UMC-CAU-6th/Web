function ask() {
    console.log("동기 비동기에 대해 질문하다.");
}

function get_answer() {
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log("비동기란 ... 이다");
            resolve();
        }, 1000);
    });
}

function ask_again() {
    console.log("이번에는 promise에 대해서 질문하다.");
}

ask();
get_answer().then(function() {
    ask_again();
});
