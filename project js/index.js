document.getElementById("expense-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const amount = document.getElementById("expense-amount").value;
    const description = document.getElementById("expense-description").value;
    const category = document.getElementById("expense-category").value;
    const expenseKey = `${amount}-${description}-${category}`;

    const expenseItem = document.createElement("li");
    expenseItem.textContent = `${amount} - ${description} - ${category}`;
    
    const addButton = (text, callback) => {
      const button = document.createElement("button");
      button.textContent = text;
      button.addEventListener("click", callback);
      expenseItem.appendChild(button);
    };

    addButton("Delete Expenses", () => {
      expenseItem.remove();
      localStorage.removeItem(expenseKey);
    });

    addButton("Edit Expenses", () => {
      document.getElementById("expense-amount").value = amount;
      document.getElementById("expense-description").value = description;
      document.getElementById("expense-category").value = category;
      expenseItem.remove();
      localStorage.removeItem(expenseKey);
    });

    document.getElementById("expenses-list").appendChild(expenseItem);
    localStorage.setItem(expenseKey, JSON.stringify({ amount, description, category }));
  });