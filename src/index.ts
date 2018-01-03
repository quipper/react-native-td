import { NativeModules } from "react-native";

const { RNTreasureData } = NativeModules;
const TreasureData: any = {};

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

TreasureData.enaAutoAppendRecordUUID = (column: string) => {
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

TreasureData.addEvent = (record: object, database: string, table: string) => {
  return RNTreasureData.addEvent(record, database, table);
};

TreasureData.addEvent = (record: object, table: string) => {
  return RNTreasureData.addEvent(record, table);
};

TreasureData.addEventWithCallback = (
  record: object,
  database: string,
  table: string,
  onSuccess: () => void,
  onError: (errorCode: string, message: string) => void
) => {
  return RNTreasureData.addEventWithCallback(
    record,
    database,
    table,
    onSuccess,
    onError
  );
};

TreasureData.addEventWithCallback = (
  record: object,
  table: string,
  onSuccess: () => void,
  onError: (errorCode: string, message: string) => void
) => {
  return RNTreasureData.addEventWithCallback(record, table, onSuccess, onError);
};

TreasureData.uploadEvents = () => {
  return RNTreasureData.uploadEvents();
};

TreasureData.uploadEventsWithCallback = (
  onSuccess: () => void,
  onFailure: (errorCode: string, message: string) => void
) => {
  return RNTreasureData.uploadEventsWithCallback(onSuccess, onFailure);
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

TreasureData.getSessionId = async (): Promise<string> => {
  return RNTreasureData.getSessionId();
};

TreasureData.isFirstRun = async (): Promise<boolean> => {
  return RNTreasureData.isFirstRun();
};

TreasureData.clearFirstRun = () => {
  return RNTreasureData.clearFirstRun();
};

TreasureData.setSessionTimeoutMilli = (to: number) => {
  return RNTreasureData.setSessionTimeoutMilli(to);
};

export default TreasureData;
