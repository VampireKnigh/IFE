function create(){
    var result = new Array();

    for(var i=0;i<10;i++){
        result[i] = function(){
            return i;
        }
    }
    var x = result[3];
    var y = x();
    console.log(y);
    return result;
}
function create2(){
    var result = new Array();

    for(var i=0;i<10;i++){
        result[i] = function(num){
            return function(){
                console.log(num);
                return num;
            };
        }(i);
    }
    var x = result[3];
    var y = x();
    return result;
}

var arr = create();


function a(){
    var i=1;
    function b(){
        ++i;
        return i;
    }
    return b;
}
var c=a();
console.log(c());

var func=new function(){this.a="func"}
var myfunc=function(x){
    var a="myfunc";
    console.log(this.a);
    console.log(x);
}
myfunc.call(func,"var");
var xhr = function(){
    if(window.XMLHttpRequest){
        return new XMLHttpRequest();
    }else{
        return new ActiveXObject();
    }
}
xhr.open("get","1.php",true);

var xhr;
if(window.XMLHttpRequest){
    xhr = new XMLHttpRequest();
}else{
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
}
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        if(xhr.status == 200|| xhr.status == 304){
            alert(xhr.responseText);
        }else{

        }
    }
};
xhr.open("GET","file",true);
xhr.send();
