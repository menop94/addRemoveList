var employeeList=["Dobai Andrei", "Corb Stefan", "Somehow Ciprian"];
function showEmployees() {
	for(i=0;i<employeeList.length;i++){
		var table=document.getElementById("table");
		var newRow=table.insertRow(i);
		var cell1=newRow.insertCell(0);
		var cell2=newRow.insertCell(1);
		var cell3=newRow.insertCell(2);
		cell3.innerHTML='<img src="Images/edit.png" alt="schimba numele" onclick="editEmployee('+i+')" class="editButton">';
		cell1.innerHTML='<input type="checkbox"/>';
		cell2.innerHTML=employeeList[i];
	}
}
function reloadEmployees(){
	document.getElementById("newEmployee").style.visibility="visible";
	document.getElementById("add").style.visibility="visible";
	document.getElementById("delete").style.visibility="visible";
	document.getElementById("table").innerHTML="";
	showEmployees();
}
function deleteEmployees(){
	var table=document.getElementById("table").rows;
	var i,a,totalEmployees=employeeList.length;
	var cell1;
	for(i=0;i<totalEmployees-1;i++){
		cell1=table[i].cells;
		a=cell1[0].firstChild.checked;
		if(a==true){
			employeeList.splice(i,1);
		}
	}
	a=table[totalEmployees-1].cells[0].firstChild.checked;
	if(a){
		employeeList.pop();
	}
	reloadEmployees();
}
function addEmployee(){
	var name=document.getElementById("newEmployee").value;
	if(name==""){
		alert("Nu angajam no-name");
	}
	else{
		var table=document.getElementById("table");
		var newRow=table.insertRow(employeeList.length);
		employeeList.push(name);
		var cell1=newRow.insertCell(0);
		var cell2=newRow.insertCell(1);
		var cell3=newRow.insertCell(2);
		cell3.innerHTML='<img src="Images/edit.png" onclick="editEmployee('+employeeList.length+')" class="editButton">';
		cell1.innerHTML='<input type="checkbox"/>';
		cell2.innerHTML=name;
	}
	document.getElementById("newEmployee").value="";
}
function editEmployee(x){
	document.getElementById("newEmployee").style.visibility="hidden";
	document.getElementById("add").style.visibility="hidden";
	document.getElementById("delete").style.visibility="hidden";
	document.getElementById("table").innerHTML="";
	var newRow=document.getElementById("table").insertRow(0);
	var cell1=newRow.insertCell(0);
	var cell2=newRow.insertCell(1);
	cell1.innerHTML='<input type="text" id="modifyEmployee" placeholder="Ai gresit numele?">';
	cell2.innerHTML='<span onclick="finishEditing('+x+')" class=editButton>Gata!</span>';
}
function finishEditing(x){
	var modifiedName=document.getElementById("modifyEmployee").value
	if(modifiedName=="")
		alert("Chiar nu are nume?");
	else{
		employeeList[x]=modifiedName;
	}
	reloadEmployees();
}