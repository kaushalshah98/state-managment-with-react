import { RegisterOptions } from 'react-hook-form';
export interface Validation {
  key?: RegisterOptions;
  shipping_country?: RegisterOptions;
  shipping_addressline1?: RegisterOptions;
  shipping_addressline2?: RegisterOptions;
  shipping_zipcode?: RegisterOptions;
  manual?: RegisterOptions;
  list?: RegisterOptions;
  defaultValue?: RegisterOptions;
  option?: RegisterOptions;
  value?: RegisterOptions;
  quantity?: RegisterOptions;
  unit_rate?: RegisterOptions;
  invoice_options?: RegisterOptions;
  total_rate?: RegisterOptions;
  liability_no?: RegisterOptions;
  amount_payable_total?: RegisterOptions;
  amount_approved_total?: RegisterOptions;
  is_manual?: RegisterOptions;
  formula?: RegisterOptions;
  amount_invoiced_total?: RegisterOptions;
  vendor_based?: RegisterOptions;
  requirement?: RegisterOptions;
  applicable_vendors?: RegisterOptions;
  attachment?: RegisterOptions;
  is_liability?: RegisterOptions;
  invoice_number?: RegisterOptions;
  priority?: RegisterOptions;
  is_scheme?: RegisterOptions;
  deductions_total?: RegisterOptions;
  rejection_message?: RegisterOptions;
  cancelled_file?: RegisterOptions;
  required?: RegisterOptions;
  purchase_order_no?: RegisterOptions;
  terms?: RegisterOptions;
  purchase_order_line_item_no?: RegisterOptions;
  purchase_order_total_value?: RegisterOptions;
  purchase_order_line_item_value?: RegisterOptions;
  purchase_order_total_open?: RegisterOptions;
  purchase_order_line_item_open?: RegisterOptions;
  purchase_order_line_item_hsn_sac_code?: RegisterOptions;
  purchase_order_line_item_total_qty?: RegisterOptions;
  purchase_order_line_item_open_qty?: RegisterOptions;
  additional_payable_total?: RegisterOptions;
  email?: RegisterOptions;
  quantity_delivered?: RegisterOptions;
  quantity_approved?: RegisterOptions;
  vendor_remarks?: RegisterOptions;
  auditor_remarks?: RegisterOptions;
  customer_remarks?: RegisterOptions;
  password?: RegisterOptions;
  scheme_id?: RegisterOptions;
  confirm_password?: RegisterOptions;
  name?: RegisterOptions;
  met_code?: RegisterOptions;
  firstName?: RegisterOptions;
  lastName?: RegisterOptions;
  mobile?: RegisterOptions;
  employee_id?: RegisterOptions;
  user_role_id?: RegisterOptions;
  username?: RegisterOptions;
  code?: RegisterOptions;
  ifsc_code?: RegisterOptions;
  account_no?: RegisterOptions;
  bank_name?: RegisterOptions;
  branch_name?: RegisterOptions;
  descriptions?: RegisterOptions;
  cin_number?: RegisterOptions;
  address_line_1?: RegisterOptions;
  address_line_2?: RegisterOptions;
  address_line1?: RegisterOptions;
  address_line2?: RegisterOptions;
  currentPassword?: RegisterOptions;
  city?: RegisterOptions;
  state?: RegisterOptions;
  zipcode?: RegisterOptions;
  country?: RegisterOptions;
  pan?: RegisterOptions;
  invoice_number_format?: RegisterOptions;
  invoice_start_number?: RegisterOptions;

  companyName?: RegisterOptions;
  gst?: RegisterOptions;
  gstin?: RegisterOptions;
  gstin_file?: RegisterOptions;
  website?: RegisterOptions;
  auto_approve_claims?: RegisterOptions;
  description?: RegisterOptions;
  claim?: RegisterOptions;
  designation?: RegisterOptions;
  customer_department_id?: RegisterOptions;
  claim_type?: RegisterOptions;
  hod_name?: RegisterOptions;
  location?: RegisterOptions;
  role?: RegisterOptions;
  date?: RegisterOptions;
  vendor_name?: RegisterOptions;
  incharge_name?: RegisterOptions;
  registeration_number?: RegisterOptions;
  llpin_number?: RegisterOptions;
  msme_type?: RegisterOptions;
  is_msme?: RegisterOptions;
  incharge_email?: RegisterOptions;
  incharge_mobile?: RegisterOptions;
  vendor_legal_status?: RegisterOptions;
  logo?: RegisterOptions;
  format?: RegisterOptions;
  vendorId?: RegisterOptions;
  customers?: RegisterOptions;
  customer_name?: RegisterOptions;
  pickup_address_line?: RegisterOptions;
  pickup_city?: RegisterOptions;
  pickup_state?: RegisterOptions;
  pickup_country?: RegisterOptions;
  pickup_zipcode?: RegisterOptions;
  delivery_address_line?: RegisterOptions;
  delivery_city?: RegisterOptions;
  delivery_state?: RegisterOptions;
  delivery_country?: RegisterOptions;
  delivery_zipcode?: RegisterOptions;
  driver_name?: RegisterOptions;
  driver_mobile?: RegisterOptions;
  vehicle_number?: RegisterOptions;
  vehicle_type?: RegisterOptions;
  total_labours?: RegisterOptions;
  charges_per_labour?: RegisterOptions;
  loading_charges?: RegisterOptions;
  unloading_charges?: RegisterOptions;
  amount_payable?: RegisterOptions;
  discount?: RegisterOptions;
  schemes?: RegisterOptions;
  grn?: RegisterOptions;
  damages?: RegisterOptions;
  detention_charges?: RegisterOptions;
  waybill_no?: RegisterOptions;
  waybill_amt?: RegisterOptions;
  items_sold?: RegisterOptions;
  items_purchased?: RegisterOptions;
  additional_items_sold?: RegisterOptions;
  additional_items_purchased?: RegisterOptions;
  transit_time?: RegisterOptions;
  net_weight?: RegisterOptions;
  gross_weight?: RegisterOptions;
  net_weight_unit?: RegisterOptions;
  gross_weight_unit?: RegisterOptions;
  pan_file?: RegisterOptions;
  id_proof_type?: RegisterOptions;
  id_proof_file?: RegisterOptions;
  entityreg_file?: RegisterOptions;
  aadhar_card_number?: RegisterOptions;
  aadhar_card_file?: RegisterOptions;
  type?: RegisterOptions;
  frequency?: RegisterOptions;
  customer_id?: RegisterOptions;
  scheme_category?: RegisterOptions;
  scheme_approver?: RegisterOptions;
  scheme_document?: RegisterOptions;
  remarks?: RegisterOptions;
  status?: RegisterOptions;
  valid_from?: RegisterOptions;
  liability_type?: RegisterOptions;
  valid_till?: RegisterOptions;
  po_value?: RegisterOptions;
  is_purchase_order_enabled?: RegisterOptions;
  po_number?: RegisterOptions;
  po_based?: RegisterOptions;
  document?: RegisterOptions;
  fileName?: RegisterOptions;
  profile_pic?: RegisterOptions;
  approverId?: RegisterOptions;
  auditor_certificate?: RegisterOptions;
  auditorId?: RegisterOptions;
  parent_company_id?: RegisterOptions;
  payable_value?: RegisterOptions;
  others?: RegisterOptions;
}
export interface IHeaders {
  key: string | string[];
  name?: string;
  sorted?: boolean;
  seperator?: string;
  icon?: string;
  value?: string;
  property?: string;
  list?: string;
  type?: string;
  upperCase?: boolean;
  sort?: boolean;
  thClassName?: string;
  component?: string;
  // type?: string;
}