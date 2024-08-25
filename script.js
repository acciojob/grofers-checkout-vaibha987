const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let sum=0
	let items=document.getElementsByClassName("price")
	for(let item of items){
		sum=sum+Number(item.innerText)
	}
	let table=document.getElementById("table")
    let row=document.createElement('tr')
	let cell=document.createElement('td')
	cell.innerText=sum
	row.appendChild(cell)
	table.appendChild(row)
};

getSumBtn.addEventListener("click", getSum);

