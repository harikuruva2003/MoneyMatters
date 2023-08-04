import { headers } from "../components/Constants/Constants";

export function allTransactionsDataAPI({
  setAllTransactionsData,
  setDebitData,
  setCreditData,
  setAllTransactionsError,
  limit,
  offSetValue,
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
      setAllTransactionsData(data);
      let debit_Data = [];
      let credit_Data = [];
      data.transactions.forEach((transaction) => {
        transaction.type === "credit"
          ? credit_Data.push(transaction)
          : debit_Data.push(transaction);
      });
      setDebitData(debit_Data);
      setCreditData(credit_Data);
    })

    .catch((err) => {
      setAllTransactionsError(true);
    });
}

export function lastThreeTransactions({ setLastTransactions, setIsError }) {
  fetch(
    "https://bursting-gelding-24.hasura.app/api/rest/all-transactions?limit=3&offset=0",
    {
      method: "GET",
      headers: headers,
    }
  )
    .then((data) => data.json())

    .then((data) => {
      setLastTransactions(data.transactions);
    })

    .catch((err) => {
      setIsError(true);
    });
}

export function totalCreditAndDebitDataAPI({
  setFetchedData,
  setIsLoading,
  setIsLastTransactionsError,
}) {
  fetch("https://bursting-gelding-24.hasura.app/api/rest/credit-debit-totals", {
    method: "GET",
    headers: headers,
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
