export function allTransactionsDataAPI({
  setAllTransactionsData,
  setDebitData,
  setCreditData,
  setLastTransactions,
  setTransactionsError,
}) {
  fetch(
    "https://bursting-gelding-24.hasura.app/api/rest/all-transactions?limit=20&offset=0",
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret":
          "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
        "x-hasura-role": "user",
        "x-hasura-user-id": "1",
      },
    }
  )
    .then((data) => data.json())

    .then((data) => {
      setAllTransactionsData(data);
      let debit_Data = [];
      let credit_Data = [];
      let transactions = [];
      data.transactions.forEach((transaction) => {
        transaction.type === "credit"
          ? credit_Data.push(transaction)
          : debit_Data.push(transaction);
      });
      setDebitData(debit_Data);
      setCreditData(credit_Data);

      data.transactions
        .slice(data.transactions.length - 3, data.transactions.length)
        .forEach((transaction) => {
          transactions.push(transaction);
        });
      setLastTransactions(transactions);
    })

    .catch((err) => {
      setTransactionsError(true);
    });
}

export function totalCreditAndDebitDataAPI({
  setFetchedData,
  setIsLoading,
  setIsLastTransactionsError,
}) {
  fetch("https://bursting-gelding-24.hasura.app/api/rest/credit-debit-totals", {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "x-hasura-admin-secret":
        "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
      "x-hasura-role": "user",
      "x-hasura-user-id": "1",
    },
  })
    .then((data) => data.json())
    .then((data) => {
      setFetchedData(data);
      setIsLoading(false);
    })
    .catch((err) => {
      setIsLastTransactionsError(true);
    });
}
