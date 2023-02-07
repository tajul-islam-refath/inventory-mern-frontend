import { createSlice } from "@reduxjs/toolkit";
export const purchaseSlice = createSlice({
  name: "purchase",
  initialState: {
    List: [],
    ListTotal: 0,
    SupplierDropDown: [],
    ProductDropDown: [],
    PurchaseFormValue: {
      SupplierID: "",
      VatTax: "",
      Discount: "",
      OtherCost: "",
      ShippingCost: "",
      GrandTotal: "",
      Note: "",
    },
    PurchaseItemList: [],
  },
  reducers: {
    SetPurchaseList: (state, action) => {
      state.List = action.payload;
    },
    SetPurchaseListTotal: (state, action) => {
      state.ListTotal = action.payload;
    },
    SetSupplierDropDown: (state, action) => {
      state.SupplierDropDown = action.payload;
    },
    SetProductDropDown: (state, action) => {
      state.ProductDropDown = action.payload;
    },
    OnChangePurchaseInput: (state, action) => {
      state.PurchaseFormValue[`${action.payload.Name}`] = action.payload.Value;
    },
    SetPurchaseItemList: (state, action) => {
      state.PurchaseItemList.push(action.payload);
    },
    RemovePurchaseItemList: (state, action) => {
      state.PurchaseItemList.splice(action.payload, 1);
    },
    ResetPurchaseFormValue: (state, action) => {
      Object.keys(state.PurchaseFormValue).forEach(
        (i) => (state.PurchaseFormValue[i] = "")
      );
      state.PurchaseItemList = [];
    },
  },
});

export const {
  SetPurchaseList,
  SetPurchaseListTotal,
  SetSupplierDropDown,
  SetProductDropDown,
  OnChangePurchaseInput,
  SetPurchaseItemList,
  RemovePurchaseItemList,
  ResetPurchaseFormValue,
} = purchaseSlice.actions;
export default purchaseSlice.reducer;
