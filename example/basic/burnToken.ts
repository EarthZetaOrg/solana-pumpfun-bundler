const requestBody = {
  mint: "",
  priorityFee: 0.001,
  userPrivateKey: "",
};

fetch("https://pumpapi.fun/api/burn_tokens", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(requestBody),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
