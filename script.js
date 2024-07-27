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
	 let newRow = document.createElement('tr');
     let newCell = document.createElement('td');
	  newCell.colSpan = "2";
	  newCell.textContent = `Total price: ${sum}`;
      newRow.appendChild(newCell);
      let table = document.querySelector("table");
      table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);

