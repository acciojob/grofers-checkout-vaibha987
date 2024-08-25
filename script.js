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
	let ans=document.getElementById("ans")
	ans.textContent=`Total Price: ${sum}`
};

getSumBtn.addEventListener("click", getSum);

