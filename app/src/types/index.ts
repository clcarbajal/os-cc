/**
 * Core type definitions for Restaurant Cash Flow Manager
 */

// Re-export Prisma types for convenience
export type {
  User,
  Restaurant,
  BankAccount,
  Transaction,
  Sale,
  Expense,
  PayrollEntry,
  VendorInvoice,
  WeeklyReport,
  Integration,
} from "@prisma/client";

// Enums
export {
  UserRole,
  BankAccountType,
  TransactionType,
  ExpenseCategory,
  VendorType,
  ReportStatus,
  IntegrationProvider,
} from "@prisma/client";

// ============================================================================
// API Response Types
// ============================================================================

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// ============================================================================
// Dashboard Types
// ============================================================================

export interface WeeklySummaryData {
  weekStartDate: Date;
  weekEndDate: Date;
  totalRevenue: number;
  totalExpenses: number;
  netCashFlow: number;
  ownerDistribution: number;
  status: "draft" | "pending_review" | "approved";
}

export interface CostMetric {
  name: string;
  value: number;
  target: number;
  isOverTarget: boolean;
}

export interface AccountBalance {
  accountId: string;
  name: string;
  type: "OPERATING" | "PAYROLL" | "SALES_TAX" | "SAVINGS";
  balance: number;
  lastUpdated: Date;
}

// ============================================================================
// Report Types
// ============================================================================

export interface WeeklyReportData {
  id: string;
  restaurantId: string;
  weekStartDate: Date;
  weekEndDate: Date;
  status: "draft" | "pending_review" | "approved" | "archived";

  // Revenue
  revenue: {
    gross: number;
    discounts: number;
    voids: number;
    net: number;
    byPaymentType: {
      cash: number;
      creditCard: number;
      other: number;
    };
  };

  // Costs
  costs: {
    food: { amount: number; percentage: number };
    labor: { amount: number; percentage: number };
    alcohol: { amount: number; percentage: number };
    other: number;
    total: number;
  };

  // Cash Flow
  cashFlow: {
    operatingBalance: number;
    payrollBalance: number;
    salesTaxBalance: number;
    transfers: {
      toPayroll: number;
      toSalesTax: number;
      toOwners: number;
    };
  };

  // Metadata
  notes?: string;
  approvedAt?: Date;
  approvedBy?: string;
}

// ============================================================================
// Integration Types
// ============================================================================

export interface ToastSalesData {
  orderId: string;
  date: Date;
  grossSales: number;
  discounts: number;
  voids: number;
  netSales: number;
  tips: number;
  salesTax: number;
}

export interface GustoPayrollData {
  payrollId: string;
  payPeriodStart: Date;
  payPeriodEnd: Date;
  payDate: Date;
  grossWages: number;
  employerTaxes: number;
  employerBenefits: number;
  totalCost: number;
}

export interface PlaidTransaction {
  transactionId: string;
  accountId: string;
  date: Date;
  description: string;
  amount: number;
  category?: string;
  pending: boolean;
}

// ============================================================================
// Form Types
// ============================================================================

export interface RestaurantFormData {
  name: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  phone?: string;
  timezone: string;
  targetFoodCostPct?: number;
  targetLaborCostPct?: number;
  targetAlcoholCostPct?: number;
}

export interface ExpenseFormData {
  date: Date;
  category: string;
  subcategory?: string;
  vendor?: string;
  description?: string;
  amount: number;
  invoiceNumber?: string;
  dueDate?: Date;
}
