import "./ProfileBoardHeader.css";
import { DataPageHeader } from "../DataPageHeader/DataPageHeader";

export function ProfilePageHeader() {
  return (
    <div className="profileHeader">
      <DataPageHeader
        transactionHeading={"Profile"}
        addTransactionButton={"+Add Transaction"}
      />
    </div>
  );
}
