let total=0,sub=0,pen=0,late=0;

function addTask(){

let t=document.getElementById("title").value;
let s=document.getElementById("subject").value;
let st=document.getElementById("status").value;

if(t==""||s=="") return alert("Fill all fields");

document.getElementById("list").innerHTML+=
`<tr>
<td>${t}</td>
<td>${s}</td>
<td class="${st}">${st}</td>
</tr>`;

total++;

if(st=="Submitted") sub++;
else if(st=="Pending") pen++;
else late++;

document.getElementById("total").innerText=total;
document.getElementById("sub").innerText=sub;
document.getElementById("pen").innerText=pen;
document.getElementById("late").innerText=late;

title.value="";
subject.value="";
}
