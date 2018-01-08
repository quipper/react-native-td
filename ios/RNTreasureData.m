#import "RNTreasureData.h"
#import <TreasureData-iOS-SDK/TreasureData.h>

@implementation RNTreasureData

RCT_EXPORT_MODULE()

- (NSDictionary *)constantsToExport
{
    return nil;
}

+ (BOOL)requiresMainQueueSetup
{
    return YES;
}

RCT_EXPORT_METHOD(initialize:
                  (NSString *) apiKey)
{
    [TreasureData initializeWithApiKey:apiKey];
}

RCT_EXPORT_METHOD(initializeApiEndpoint:
                  (NSString *) apiEndpoint)
{
    [TreasureData initializeApiEndpoint:apiEndpoint];
}

RCT_EXPORT_METHOD(initializeEncryptionKey:
                  (NSString *) encryptionKey)
{
    [TreasureData initializeEncryptionKey:encryptionKey];
}

RCT_EXPORT_METHOD(setDefaultDatabase:
                  (NSString *) defaultDatabase)
{
    [TreasureData setDefaultDatabase:defaultDatabase];
}

RCT_EXPORT_METHOD(enableAutoAppendUniqId)
{
    [[TreasureData sharedInstance] enableAutoAppendUniqId];
}

RCT_EXPORT_METHOD(disableAutoAppendUniqId)
{
    [[TreasureData sharedInstance] disableAutoAppendUniqId];
}

RCT_EXPORT_METHOD(enableAutoAppendRecordUUID)
{
    [[TreasureData sharedInstance] enableAutoAppendRecordUUID];
}

RCT_EXPORT_METHOD(enableAutoAppendRecordUUID:
                  (NSString *) column)
{
    [[TreasureData sharedInstance] enableAutoAppendRecordUUID:column];
}

RCT_EXPORT_METHOD(disableAutoAppendRecordUUID)
{
    [[TreasureData sharedInstance] disableAutoAppendRecordUUID];
}

RCT_EXPORT_METHOD(enableAutoAppendModelInformation)
{
    [[TreasureData sharedInstance] enableAutoAppendModelInformation];
}

RCT_EXPORT_METHOD(disableAutoAppendModelInformation)
{
    [[TreasureData sharedInstance] disableAutoAppendModelInformation];
}

RCT_EXPORT_METHOD(enableAutoAppendAppInformation)
{
    [[TreasureData sharedInstance] enableAutoAppendModelInformation];
}

RCT_EXPORT_METHOD(disableAutoAppendAppInformation)
{
    [[TreasureData sharedInstance] disableAutoAppendModelInformation];
}

RCT_EXPORT_METHOD(enableAutoAppendLocaleInformation)
{
    [[TreasureData sharedInstance] enableAutoAppendLocaleInformation];
}

RCT_EXPORT_METHOD(disableAutoAppendLocaleInformation)
{
    [[TreasureData sharedInstance] disableAutoAppendLocaleInformation];
}

RCT_EXPORT_METHOD(enableServerSideUploadTimestamp)
{
    [[TreasureData sharedInstance] enableServerSideUploadTimestamp];
}

RCT_EXPORT_METHOD(enableServerSideUploadTimestamp:
                  (NSString *) column)
{
    [[TreasureData sharedInstance] enableServerSideUploadTimestamp:column];
}

RCT_EXPORT_METHOD(disableServerSideUploadTimestamp)
{
    [[TreasureData sharedInstance] disableServerSideUploadTimestamp];
}

RCT_EXPORT_METHOD(enableLogging)
{
    [TreasureData enableLogging];
}

RCT_EXPORT_METHOD(disableLogging)
{
    [TreasureData disableLogging];
}

RCT_EXPORT_METHOD(addEvent:
                  (NSDictionary *)record database:(NSString *)database table:(NSString *)table)
{
    [[TreasureData sharedInstance] addEvent:record database:database table:table];
}

RCT_EXPORT_METHOD(addEvent:
                  (NSDictionary *)record table:(NSString *)table)
{
    [[TreasureData sharedInstance] addEvent:record table:table];
}

RCT_EXPORT_METHOD(addEventWithCallback:
                  (NSDictionary *)record
                  database:(nullable NSString *)database
                  table:(NSString *) table
                  onSuccess:(RCTResponseSenderBlock) onSuccess
                  onError:(RCTResponseSenderBlock) onError)
{
    
    if (database) {
        [[TreasureData sharedInstance]
         addEventWithCallback:record
         database:database
         table:table
         onSuccess:^(){
             onSuccess(nil);
         }
         onError:^(NSString* errorCode, NSString* message) {
             onError(@[errorCode, message]);
         }
         ];
    } else {
        [[TreasureData sharedInstance]
         addEventWithCallback:record
         table:table
         onSuccess:^(){
             onSuccess(nil);
         }
         onError:^(NSString* errorCode, NSString* message) {
             onError(@[errorCode, message]);
         }
         ];
    }
}

RCT_EXPORT_METHOD(uploadEvents)
{
    [[TreasureData sharedInstance] uploadEvents];
}

RCT_EXPORT_METHOD(uploadEventsWithCallback:
                  (RCTResponseSenderBlock) onSuccess
                  onError:(RCTResponseSenderBlock) onError)
{
    [[TreasureData sharedInstance]
     uploadEventsWithCallback:
     ^(){
         onSuccess(nil);
     }
     onError:^(NSString* errorCode, NSString* message) {
         onError(@[errorCode, message]);
     }
    ];
}

RCT_EXPORT_METHOD(startSession)
{
    [TreasureData startSession];
}

RCT_EXPORT_METHOD(startSession:
                  (NSString *)table)
{
    [[TreasureData sharedInstance] startSession:table];
}

RCT_EXPORT_METHOD(startSession:
                  (NSString *)table database:(NSString *)database)
{
    [[TreasureData sharedInstance] startSession:table database: database];
}

RCT_EXPORT_METHOD(endSession)
{
    [TreasureData endSession];
}

RCT_EXPORT_METHOD(endSession:
                  (NSString *)table)
{
    [[TreasureData sharedInstance] endSession:table];
}

RCT_EXPORT_METHOD(endSession:
                 (NSString *)table database:(NSString *)database)
{
    [[TreasureData sharedInstance] endSession:table database: database];
}

RCT_EXPORT_METHOD(getSessionId:
                 (RCTPromiseResolveBlock)resolve
                 reject:(RCTPromiseRejectBlock)reject)
{
    NSString *sessionId = [TreasureData getSessionId];
    if (!sessionId) {
        reject(nil, @"sessionId is nil", nil);
    } else {
        resolve(sessionId);
    }
}

RCT_EXPORT_METHOD(isFirstRun:
                 (RCTPromiseResolveBlock)resolve
                 reject:(__unused RCTPromiseRejectBlock)reject)
{
    BOOL isFirstRun = [[TreasureData sharedInstance] isFirstRun];
    resolve([NSNumber numberWithBool:isFirstRun]);
}

RCT_EXPORT_METHOD(clearFirstRun)
{
    [[TreasureData sharedInstance] clearFirstRun];
}

RCT_EXPORT_METHOD(setSessionTimeoutMilli:
                  (NSNumber *)to)
{
    [TreasureData setSessionTimeoutMilli:(long)to];
}

@end
