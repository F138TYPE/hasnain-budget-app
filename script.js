
let setBudget = document.getElementById("set-budget");
let budgetBtn = document.getElementById("budget-btn");
budgetBtn.addEventListener("click", () => {
  setBudgetFun();
});
const setBudgetFun = () => {
  if(setBudget.value != ""){
    localStorage.setItem("budget",setBudget.value);
    location.href = location.href;
  }else{
    swal("Input Field Empty!", "Please Enter a Budget !", "warning");
  }
}
let totalBudget = document.getElementById("total-budget");

function all_data(){
  let i;
  for(i=0; i<localStorage.length; i++){
    let all_keys = localStorage.key(i);
    if(all_keys.match("budget_")){
      let json_data = localStorage.getItem(all_keys);
      let json_parse = JSON.parse(json_data);
      
      let expense_list = document.getElementById("expense-list");
    expense_list.innerHTML += `
      <div class="row last-part-code">
        <div class="col-md-6 mt-3 d-flex justify-content-between">
            <h4>${json_parse.p_title}</h4>
            <h4 class="price">${json_parse.p_cost}</h4>
        </div>
         <div class="col-md-6 mt-3 d-flex justify-content-end">
            <i class="fa-solid fa-pen-to-square edit-btn mx-3"></i>
            <i class="fa-solid fa-trash del-btn"></i>
         </div>
       </div>
    `;
    }
  }

let price_tag = document.getElementsByClassName("price");
  let price =[];
  for(i=0; i<price_tag.length; i++){
   price[i] = price_tag[i].innerHTML;
  }
  let price_int = [];
  for(i=0; i<price.length; i++){
    price_int.push(parseInt(price[i]));
  }
  let final_price = 0;
  for(i=0; i<price_int.length; i++){
    final_price += price_int[i];
  }
  let expense = document.getElementById("expense");
  expense.innerHTML = final_price;

 totalBudget.innerHTML = localStorage.getItem("budget");
  
let balance = document.getElementById("balance");
let t_bgt = totalBudget.innerHTML;
  let t_expense = expense.innerHTML;
  balance.innerHTML = t_bgt-t_expense;


  
}
all_data();


let product_btn = document.getElementById("product-btn");
let title = document.getElementById("title");
let cost = document.getElementById("cost");

product_btn.onclick = function(e){
  e.preventDefault();
  if(title.value != "" && cost.value != ""){
    let p_title = title.value;
    let p_cost = cost.value;
    let data = {p_cost : p_cost,
                p_title : p_title
                };
    let string = JSON.stringify(data);
    localStorage.setItem("budget_"+title.value, string);
    location.href = location.href;
  }else{
    swal("Input Field Empty!", "Please fill the Details !", "warning");
  }
}

