import { action, makeObservable, observable } from "mobx";
import { CompanyData } from "../types/Types";

class CompanyDataStore {
  companyData: CompanyData | null;

  constructor() {
    (this.companyData = null),
      makeObservable(this, {
        companyData: observable,
        getCompanyData: action,
      });
  }

  getCompanyData(data: CompanyData): void {
    this.companyData = data;
  }
}

export default CompanyDataStore;
