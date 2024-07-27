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
	 let ans=document.getElementById("ans")
	 ans.textContent=`Total price: ${sum}`;
};

getSumBtn.addEventListener("click", getSum);

