const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let sum1=document.querySelectorAll(".price")
	let sum=0;
	for(let i=0;i<sum1.length;i++){
		sum=sum+Number(sum1[i].innerText)
	}
	  // Create a new row and cell
    let table = document.querySelector("table");
    let row = table.insertRow(-1);
    let cell = row.insertCell(0);
	cell.innerText = `Total price: ${sum}`;
};

getSumBtn.addEventListener("click", getSum);

