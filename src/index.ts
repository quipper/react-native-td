// tslint:disable-next-line:no-implicit-dependencies
import { NativeModules } from 'react-native';

export type ErrorCode =
  | 'init_error'
  | 'invalid_param'
  | 'invalid_event'
  | 'data_conversion'
  | 'storage_error'
  | 'network_error'
  | 'server_response';

export interface TreasureData {
  initialize: (apiKey: string) => void;
  initializeApiEndpoint: (apiEndpoint: string) => void;
  initializeEncryptionKey: (encryptionKey: string) => void;
  setDefaultDatabase: (databse: string) => void;
  enableAutoAppendUniqId: () => void;
  disableAutoAppendUniqId: () => void;
  enableAutoAppendRecordUUID: (column: string) => void;
  disableAutoAppendRecordUUID: () => void;
  enableAutoAppendModelInformation: () => void;
  disableAutoAppendModelInformation: () => void;
  enableAutoAppendAppInformation: () => void;
  disableAutoAppendAppInformation: () => void;
  enableAutoAppendLocaleInformation: () => void;
  disableAutoAppendLocaleInformation: () => void;
  enableServerSideUploadTimestamp: (column: string) => void;
  disableServerSideUploadTimestamp: () => void;
  enableLogging: () => void;
  disableLogging: () => void;
  enableRetryUploading: () => void;
  disableRetryUploading: () => void;
  enableEventCompression: () => void;
  disableEventCompression: () => void;
  addEvent: (record: object, database: string | undefined| null, table: string) => void;
  addEventWithCallback: (
    record: object,
    database: string | undefined | null,
    table: string,
    onSuccess: () => void,
    onError: (errorCode: ErrorCode, message: string) => void,
  ) => void;
  uploadEvents: () => void;
  uploadEventsWithCallback: (
    onSuccess: () => void,
    onError: (errorCode: ErrorCode, message: string) => void,
  ) => void;
  startSession: (table: string, database: string) => void;
  endSession: (table: string, database: string) => void;
  getSessionId: () => Promise<string>;
  isFirstRun: () => Promise<boolean>;
  clearFirstRun: () => void;
  setSessionTimeoutMilli: (to: number) => void;
}

// tslint:disable-next-line:no-object-literal-type-assertion
const TreasureData: TreasureData = {} as TreasureData;
const { RNTreasureData } = NativeModules;

TreasureData.initialize = (apiKey: string) => {
  return RNTreasureData.initialize(apiKey);
};

TreasureData.initializeApiEndpoint = (apiEndpoint: string) => {
  return RNTreasureData.initializeApiEndpoint(apiEndpoint);
};

TreasureData.initializeEncryptionKey = (encryptionKey: string) => {
  return RNTreasureData.initializeEncryptionKey(encryptionKey);
};

TreasureData.setDefaultDatabase = (databse: string) => {
  return RNTreasureData.setDefaultDatabase(databse);
};

TreasureData.enableAutoAppendUniqId = () => {
  return RNTreasureData.enableAutoAppendUniqId();
};

TreasureData.disableAutoAppendUniqId = () => {
  return RNTreasureData.disableAutoAppendUniqId();
};

TreasureData.enableAutoAppendRecordUUID = () => {
  return RNTreasureData.enableAutoAppendRecordUUID();
};

TreasureData.enableAutoAppendRecordUUID = (column: string) => {
  return RNTreasureData.enableAutoAppendRecordUUID(column);
};

TreasureData.disableAutoAppendRecordUUID = () => {
  return RNTreasureData.disableAutoAppendRecordUUID();
};

TreasureData.enableAutoAppendModelInformation = () => {
  return RNTreasureData.enableAutoAppendModelInformation();
};

TreasureData.disableAutoAppendModelInformation = () => {
  return RNTreasureData.disableAutoAppendModelInformation();
};

TreasureData.enableAutoAppendAppInformation = () => {
  return RNTreasureData.enableAutoAppendAppInformation();
};

TreasureData.disableAutoAppendAppInformation = () => {
  return RNTreasureData.disableAutoAppendAppInformation();
};

TreasureData.enableAutoAppendLocaleInformation = () => {
  return RNTreasureData.enableAutoAppendLocaleInformation();
};

TreasureData.disableAutoAppendLocaleInformation = () => {
  return RNTreasureData.disableAutoAppendLocaleInformation();
};

TreasureData.enableServerSideUploadTimestamp = () => {
  return RNTreasureData.enableServerSideUploadTimestamp();
};

TreasureData.enableServerSideUploadTimestamp = (column: string) => {
  return RNTreasureData.enableServerSideUploadTimestamp(column);
};

TreasureData.disableServerSideUploadTimestamp = () => {
  return RNTreasureData.disableServerSideUploadTimestamp();
};

TreasureData.enableLogging = () => {
  return RNTreasureData.enableLogging();
};

TreasureData.disableLogging = () => {
  return RNTreasureData.disableLogging();
};

TreasureData.enableRetryUploading = () => {
  return RNTreasureData.enableRetryUploading();
};

TreasureData.disableRetryUploading = () => {
  return RNTreasureData.disableRetryUploading();
};

TreasureData.enableEventCompression = () => {
  return RNTreasureData.enableEventCompression();
};

TreasureData.disableEventCompression = () => {
  return RNTreasureData.disableEventCompression();
};

TreasureData.addEvent = (record: object, database: string | undefined | null, table: string) => {
  if (database) {
    return RNTreasureData.addEvent(record, database, table);
  } else {
    return RNTreasureData.addEvent(record, table);
  }
};

TreasureData.addEventWithCallback = (
  record: object,
  database: string | undefined | null,
  table: string,
  onSuccess: () => void,
  onError: (errorCode: ErrorCode, message: string) => void,
) => {
  if (database) {
    return RNTreasureData.addEventWithCallback(
      record,
      database,
      table,
      onSuccess,
      onError,
    );
  } else {
    return RNTreasureData.addEventWithCallback(
      record,
      table,
      onSuccess,
      onError,
    );
  }
};

TreasureData.uploadEvents = () => {
  return RNTreasureData.uploadEvents();
};

TreasureData.uploadEventsWithCallback = (
  onSuccess: () => void,
  onError: (errorCode: ErrorCode, message: string) => void,
) => {
  return RNTreasureData.uploadEventsWithCallback(onSuccess, onError);
};

TreasureData.startSession = () => {
  return RNTreasureData.startSession();
};

TreasureData.startSession = (table: string) => {
  return RNTreasureData.startSession(table);
};

TreasureData.startSession = (table: string, database: string) => {
  return RNTreasureData.startSession(table, database);
};

TreasureData.endSession = () => {
  return RNTreasureData.endSession();
};

TreasureData.endSession = (table: string) => {
  return RNTreasureData.endSession(table);
};

TreasureData.endSession = (table: string, database: string) => {
  return RNTreasureData.endSession(table, database);
};

TreasureData.getSessionId = (): Promise<string> => {
  return RNTreasureData.getSessionId();
};

TreasureData.isFirstRun = (): Promise<boolean> => {
  return RNTreasureData.isFirstRun();
};

TreasureData.clearFirstRun = () => {
  return RNTreasureData.clearFirstRun();
};

TreasureData.setSessionTimeoutMilli = (to: number) => {
  return RNTreasureData.setSessionTimeoutMilli(to);
};

export default TreasureData;
