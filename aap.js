
function generateCaptcha(){
    var cap=new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U',',V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9');
var i;
for(i=0;i<5;i++){
    var a=cap[Math.floor(Math.random()*cap.length)]
    var b=cap[Math.floor(Math.random()*cap.length)]
    var c=cap[Math.floor(Math.random()*cap.length)]
    var d=cap[Math.floor(Math.random()*cap.length)]
    var e=cap[Math.floor(Math.random()*cap.length)]
}

var code=a+b+c+d+e;
document.getElementById('captcha').value=code;
document.getElementById('captchacheck').value='';

// var canv = document.createElement("canvas");
// canv.id = "captcha";
// canv.width = 100;
// canv.height = 50;
// var ctx = canv.getContext("2d");
// ctx.font = "25px Georgia";
// ctx.strokeText(captcha.join(""), 0, 30);

}
function checkvalidCaptcha(){
    const stringone = (document.getElementById("captcha").value);
    const stringtwo = (document.getElementById("captchacheck").value);
  

    const name1=(document.getElementById("nameinput").value);
    const name2=(document.getElementById("secondinput").value);
    const name3=(document.getElementById("inputbox").value);
    const name4=(document.getElementById("comment").value);
    // var two=code;
    // two='';
    // var one=captchacheck;
    // one='';
    if (stringone === stringtwo){
        alert("Captcha Matched Successfully");
        console.log(newwindow());
        return true;
        }    
        else if( stringtwo===''){
            alert("Please Enter a valid Captcha");
        }    
        else if( stringone===''){
            alert("Please Enter a valid Captcha");
       
        }   
        else if(name1==='') {
            alert("Fill the all information");
        }
        else if(name2==='') {
            alert("Fill the all information");
        }
        else if(name3==='') {
            alert("Fill the all information");
        }
        else if(name4==='') {
            alert("Fill the all information");
        }
        else{
            alert("Invalid Captcha");
            return false;
        
        }
        function newwindow(){
            var x = window.open("https://codeclause.com/");
        }
}



