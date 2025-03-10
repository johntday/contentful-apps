import { AppEventKey } from '@constants/configCopy';

export interface AppInstallationParameters {
  tenantId: string;
  notifications: Notification[];
}

export interface Notification {
  channelId: string;
  contentTypeId: string;
  isEnabled: boolean;
  selectedEvents: SelectedEvents;
}

export type SelectedEvents = {
  [K in AppEventKey]: boolean;
};

export interface TeamsChannel {
  id: string;
  tenantId: string;
  name: string;
  teamId: string;
  teamName: string;
}
