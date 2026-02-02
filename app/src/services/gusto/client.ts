/**
 * Gusto Payroll API Client
 *
 * Handles OAuth2 authentication and API calls to Gusto
 * for retrieving payroll data and labor costs.
 *
 * @see https://docs.gusto.com/
 */

import { GustoPayrollData } from "@/types";

interface GustoConfig {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
}

export class GustoClient {
  private config: GustoConfig;
  private accessToken: string | null = null;
  private refreshToken: string | null = null;

  constructor(config: GustoConfig) {
    this.config = config;
  }

  /**
   * Generates OAuth2 authorization URL
   */
  getAuthorizationUrl(state: string): string {
    const params = new URLSearchParams({
      client_id: this.config.clientId,
      redirect_uri: this.config.redirectUri,
      response_type: "code",
      state,
    });

    return `https://api.gusto.com/oauth/authorize?${params.toString()}`;
  }

  /**
   * Exchanges authorization code for tokens
   */
  async exchangeCodeForTokens(code: string): Promise<void> {
    // TODO: Implement token exchange
    throw new Error("Gusto token exchange not implemented");
  }

  /**
   * Fetches payroll data for a company
   */
  async getPayrolls(
    companyId: string,
    startDate: Date,
    endDate: Date
  ): Promise<GustoPayrollData[]> {
    // TODO: Implement payroll data retrieval
    // GET /v1/companies/{company_id}/payrolls
    throw new Error("Gusto getPayrolls not implemented");
  }

  /**
   * Fetches employee data for a company
   */
  async getEmployees(companyId: string): Promise<unknown> {
    // TODO: Implement employee data retrieval
    // GET /v1/companies/{company_id}/employees
    throw new Error("Gusto getEmployees not implemented");
  }

  /**
   * Fetches pay periods for a company
   */
  async getPayPeriods(companyId: string): Promise<unknown> {
    // TODO: Implement pay periods retrieval
    throw new Error("Gusto getPayPeriods not implemented");
  }
}

export function createGustoClient(): GustoClient {
  return new GustoClient({
    clientId: process.env.GUSTO_CLIENT_ID!,
    clientSecret: process.env.GUSTO_CLIENT_SECRET!,
    redirectUri: process.env.GUSTO_REDIRECT_URI!,
  });
}
