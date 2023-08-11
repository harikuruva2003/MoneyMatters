import { headers } from "../components/Constants/Constants";

export function allTransactionsDataAPI({
  setAllTransactionsError,
  limit,
  offSetValue,
  transactionsStoreContext,
}) {
  fetch(
    `https://bursting-gelding-24.hasura.app/api/rest/all-transactions?limit=${limit}&offset=${offSetValue}`,
    {
      method: "GET",
      headers: headers,
    }
  )
    .then((data) => data.json())

    .then((data) => {
      transactionsStoreContext.addTransactionDataToTransactionList(
        data.transactions
      );
    })

    .catch((err) => {
      setAllTransactionsError(true);
    });
}

export function lastThreeTransactions({
  transactionsStoreContext,
  setIsError,
}) {
  fetch(
    "https://bursting-gelding-24.hasura.app/api/rest/all-transactions?limit=3&offset=0",
    {
      method: "GET",
      headers: headers,
    }
  )
    .then((data) => data.json())

    .then((data) => {
      transactionsStoreContext.addLastTransactionDataToLastTransactionList(
        data.transactions
      );
    })

    .catch((err) => {
      setIsError(true);
    });
}

export function totalCreditAndDebitDataAPI({
  transactionsStoreContext,
  setIsLoading,
  setIsLastTransactionsError,
}) {
  fetch("https://bursting-gelding-24.hasura.app/api/rest/credit-debit-totals", {
    method: "GET",
    headers: headers,
  })
    .then((data) => data.json())
    .then((data) => {
      transactionsStoreContext.creditTotalAmountAction(
        data.totals_credit_debit_transactions[1].sum
      );
      transactionsStoreContext.debitTotalAmountAction(
        data.totals_credit_debit_transactions[0].sum
      );
      setIsLoading(false);
    })
    .catch((err) => {
      setIsLastTransactionsError(true);
    });
}

export function addTransactionDataAPI(
  formData,
  setIsModalOpen,
  transactionsStoreContext
) {
  fetch("https://bursting-gelding-24.hasura.app/api/rest/add-transaction", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-hasura-admin-secret":
        "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
      "x-hasura-role": "user",
      "x-hasura-user-id": "1",
    },
    body: JSON.stringify({
      name: formData.name,
      type: formData.type,
      category: formData.category,
      amount: formData.amount,
      date: formData.date,
      user_id: 1,
    }),
  })
    .then((data) => data.json())
    .then((data) => {
      setIsModalOpen(false);
      transactionsStoreContext.addTransactionToTransactionLIst(
        data.insert_transactions_one
      );
    })
    .catch((err) => console.log(err));
}

export function deleteTransactionAPI(
  transactionID,
  transactionsStoreContext,
  setIsDeleteTransactionModalOpen
) {
  fetch("https://bursting-gelding-24.hasura.app/api/rest/delete-transaction", {
    method: "DELETE",
    headers: headers,
    body: JSON.stringify({ id: transactionID }),
  })
    .then((data) => {
      console.log("Data status " + data.status);
      setIsDeleteTransactionModalOpen(false);
      transactionsStoreContext.deleteTransaction(transactionID);
    })
    .catch((err) => {
      console.log(err);
    });
}

export function updateTransactionAPI(
  updatedTransactionData,
  updatingTransactionID,
  transactionsStoreContext
) {
  fetch("https://bursting-gelding-24.hasura.app/api/rest/update-transaction", {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      id: updatingTransactionID,
      name: updatedTransactionData.transaction_name,
      type: updatedTransactionData.type,
      category: updatedTransactionData.category,
      amount: updatedTransactionData.amount,
      date: updatedTransactionData.date,
    }),
  })
    .then((data) => {
      transactionsStoreContext.updateTransaction(
        updatingTransactionID,
        updatedTransactionData
      );
    })
    .catch((err) => {
      console.log(err);
    });
}
