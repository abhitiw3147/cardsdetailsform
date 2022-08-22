/* var btn=document.getElementById("button");
var obj={
    inp1:document.getElementById("inp1"),
    inp2:document.getElementById("ip2"),
    inp3:document.getElementById("inp3"),
    inp4:document.getElementById("inp4"),
    inp5:document.getElementById("inp5")
}
btn.addEventListener("click",function(){
    document.getElementById("p1").innerHTML=obj.inp1.value;
    document.querySelector("h1").innerHTML=obj.inp2.value;
    document.getElementById("p2").innerHTML=obj.inp3.value+"/"+obj.inp4.value;
    document.querySelector("h3").innerHTML=obj.inp5.value;
}); */
// Using jQuery
var btn=$("#button");
var obj={
    inp1:$("#inp1"),
    inp2:$("#ip2"),
    inp3:$("#inp3"),
    inp4:$("#inp4"),
    inp5:$("#inp5")
}
btn.on("click",function(){
    $("#p1").text(obj.inp1.val());
    $("h1").text(obj.inp2.val());
    $("#p2").text(obj.inp3.val()+"/"+obj.inp4.val());
    $("h3").text(obj.inp5.val());
});


