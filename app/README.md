# Restaurant Cash Flow Manager

A web application for managing weekly cash flow and financial position across multiple restaurants.

## Overview

This application automates and streamlines the weekly cash flow management process for restaurant operations, consolidating data from multiple sources into a single dashboard with pre-populated weekly reports.

## Features

### Core Features
- **Weekly Cash Flow Reports**: Auto-generated draft reports every Monday
- **Multi-Account Tracking**: Monitor Operating, Payroll, and Sales Tax accounts
- **Cost Analysis**: Track food, labor, and alcohol costs as percentages of weekly sales
- **Discount & Void Monitoring**: Track discounts and voids to identify patterns
- **Bank Transaction Monitoring**: Real-time visibility into account activity

### Integrations
- **POS System**: Toast integration for sales data
- **Banking**: Multi-account bank integration (Operating, Payroll, Sales Tax)
- **Accounting**: QuickBooks integration
- **Payroll**: Gusto/Toast Payroll integration
- **Vendor Portals**: Food and alcohol vendor data import

## Architecture

### Tech Stack
- **Frontend**: Next.js 14 with React 18
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **State Management**: React Query (TanStack Query)

### Data Flow
```
Revenue Sources
    │
    ├── Credit Card Sales ──┐
    │                       │
    └── Cash Sales ─────────┴──► Operating Account
                                      │
                                      ├──► Payroll Account (weekly transfer)
                                      │
                                      ├──► Sales Tax Account (weekly transfer)
                                      │
                                      └──► Owner Distribution (residual profits)
```

### Key Metrics Tracked
| Metric | Description | Target |
|--------|-------------|--------|
| Food Cost % | Food costs / Weekly sales | Configurable per restaurant |
| Labor Cost % | Labor costs / Weekly sales | Configurable per restaurant |
| Alcohol Cost % | Alcohol costs / Weekly sales | Configurable per restaurant |
| Prime Cost | (Food + Labor) / Weekly sales | Industry standard: < 65% |

## Project Structure

```
app/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── (auth)/            # Authentication routes
│   │   ├── (dashboard)/       # Main dashboard routes
│   │   │   ├── reports/       # Weekly reports
│   │   │   ├── accounts/      # Bank account views
│   │   │   ├── costs/         # Cost analysis
│   │   │   └── settings/      # Configuration
│   │   ├── api/               # API routes
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/            # React components
│   │   ├── ui/               # Base UI components
│   │   ├── reports/          # Report-specific components
│   │   ├── charts/           # Data visualization
│   │   └── forms/            # Form components
│   ├── lib/                   # Utility functions
│   │   ├── db.ts             # Database client
│   │   ├── auth.ts           # Auth configuration
│   │   └── utils.ts          # Helper functions
│   ├── services/              # External service integrations
│   │   ├── toast/            # Toast POS integration
│   │   ├── quickbooks/       # QuickBooks integration
│   │   ├── gusto/            # Gusto payroll integration
│   │   ├── plaid/            # Bank account integration
│   │   └── vendors/          # Vendor portal integrations
│   ├── types/                 # TypeScript type definitions
│   └── hooks/                 # Custom React hooks
├── prisma/
│   └── schema.prisma          # Database schema
├── public/                    # Static assets
└── tests/                     # Test files
```

## Data Model

### Core Entities
- **Restaurant**: Individual restaurant locations
- **BankAccount**: Operating, Payroll, Sales Tax accounts per restaurant
- **WeeklyReport**: Generated cash flow reports
- **Transaction**: Bank transactions
- **Sale**: POS sales data from Toast
- **Expense**: Categorized expenses (food, labor, alcohol, other)
- **PayrollEntry**: Payroll data from Gusto/Toast Payroll
- **VendorInvoice**: Invoices from food/alcohol vendors

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run database migrations
npx prisma migrate dev

# Start development server
npm run dev
```

### Environment Variables

See `.env.example` for required environment variables including:
- Database connection
- Toast API credentials
- QuickBooks OAuth credentials
- Gusto API credentials
- Plaid API credentials (for bank connections)

## Weekly Workflow

1. **Monday Morning**: System auto-generates draft cash flow report
2. **Review**: User reviews and adjusts any discrepancies
3. **Approve**: User approves report, triggering any configured actions
4. **Transfer**: System suggests/initiates transfers to Payroll and Sales Tax accounts
5. **Distribution**: Calculate and record owner distributions if applicable

## Development

```bash
# Run development server
npm run dev

# Run tests
npm run test

# Lint code
npm run lint

# Build for production
npm run build
```

## License

Private - All rights reserved
