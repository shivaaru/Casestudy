const errorFlags={
    unameErrFlag:true,
    passwordErrFlag:true
}
const validate=(el,authvalue)=>{
    let flagname=el+"ErrFlag";
    if($(`#${el}`).val()===authvalue){
        errorFlags[flagname]=false;
        const msg='';
        $(`#${el}Error`).html(msg);
        $(`#${el}Error`).addClass('error hidden');
    }
    else{
        errorFlags[flagname]=true;
        const msg=`Invalid ${el}`;
        $(`#${el}Error`).html(msg);
        $(`#${el}Error`).removeClass('hidden');    
    }

}
$('#uname').on('input',(e)=>{validate('uname','admin@gmail.com')});
$('#password').on('input',(e)=>{validate('password','12345')});

const redirectAndAuthenticate=()=>{
    window.localStorage.setItem('user',JSON.stringify({uname:'admin@gmail.com'}));
    window.location='/index.ejs';
}
const loginAction=(e,callback)=>{
    if(!errorFlags['unameErrFlag'] && !errorFlags['passwordErrFlag']){
        e.preventDefault();
        callback();
    }
}
$('#submit').on('click',(e)=>{
    loginAction(e,redirectAndAuthenticate);
});