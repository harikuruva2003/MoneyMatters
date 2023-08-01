import "./ProfileBoardHeader.css";
import { DataPageHeader } from "../DataPageHeader/DataPageHeader";

export function ProfilePageHeader() {
  return (
    <div className="profileHeader">
      <DataPageHeader
        TransactionHeading={"Profile"}
        addTransactionButton={"+Add Transaction"}
      />
    </div>
  );
}
