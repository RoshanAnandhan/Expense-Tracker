let total = 0;

const modal = document.getElementById("modal");
const fab = document.getElementById("fab");
const closeModal = document.getElementById("closeModal");
const addBtn = document.getElementById("addBtn");

const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const expenseCategory = document.getElementById("expenseCategory");
const expenseList = document.getElementById("expenseList");

fab.onclick = () => modal.style.display = "flex";
closeModal.onclick = closeModalFn;

modal.onclick = (e) => {
    if (e.target === modal) closeModalFn();
};

addBtn.onclick = addExpense;

function addExpense() {
    const name = expenseName.value.trim();
    const amount = parseFloat(expenseAmount.value);
    const category = expenseCategory.value;

    if (!name || !amount || amount <= 0 || !category) {
        alert("Please enter valid details");
        return;
    }

    total += amount;
    updateTotal();

    const li = document.createElement("li");
    li.innerHTML = `
        <span>${name} (${category}) - ₹${amount.toFixed(2)}</span>
        <button class="delete-btn">X</button>
    `;

    li.querySelector(".delete-btn").onclick = () => {
        total -= amount;
        updateTotal();
        li.remove();
    };

    expenseList.appendChild(li);

    expenseName.value = "";
    expenseAmount.value = "";
    expenseCategory.value = "";
    closeModalFn();
}

function updateTotal() {
    document.getElementById("totalAmount").textContent = total.toFixed(2);
}

function closeModalFn() {
    modal.style.display = "none";
}
