import { ClientConfig } from "../jira-client/models/client-config";

export interface AuthenticateRequest extends ClientConfig {
  rememberMe: boolean;
}
