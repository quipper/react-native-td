package com.github.quipper.rn.td;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.treasuredata.android.TDCallback;
import com.treasuredata.android.TreasureData;

import java.util.Map;

import javax.annotation.Nonnull;
import javax.annotation.Nullable;

import static com.github.quipper.rn.td.Utils.toHashMap;

public final class RNTreasureDataModule extends ReactContextBaseJavaModule {

    RNTreasureDataModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "RNTreasureData";
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        return null;
    }

    @ReactMethod
    public void initialize(@Nonnull String apiKey) {
        TreasureData.initializeDefaultApiKey(apiKey);
        TreasureData.initializeSharedInstance(getReactApplicationContext());
    }

    @ReactMethod
    public void initializeApiEndpoint(@Nonnull String apiEndpoint) {
        TreasureData.initializeApiEndpoint(apiEndpoint);
    }

    @ReactMethod
    public void initializeEncryptionKey(@Nonnull String encryptionKey) {
        TreasureData.initializeEncryptionKey(encryptionKey);
    }

    @ReactMethod
    public void setDefaultDatabase(@Nonnull String databse) {
        TreasureData.sharedInstance().setDefaultDatabase(databse);
    }

    @ReactMethod
    public void enableAutoAppendUniqId() {
        TreasureData.sharedInstance().enableAutoAppendUniqId();
    }

    @ReactMethod
    public void disableAutoAppendUniqId() {
        TreasureData.sharedInstance().disableAutoAppendUniqId();
    }

    @ReactMethod
    public void enableAutoAppendRecordUUID() {
        TreasureData.sharedInstance().enableAutoAppendRecordUUID();
    }

    @ReactMethod
    public void enableAutoAppendRecordUUID(String column) {
        TreasureData.sharedInstance().enableAutoAppendRecordUUID(column);
    }

    @ReactMethod
    public void disableAutoAppendRecordUUID() {
        TreasureData.sharedInstance().disableAutoAppendRecordUUID();
    }

    @ReactMethod
    public void enableAutoAppendModelInformation() {
        TreasureData.sharedInstance().enableAutoAppendModelInformation();
    }

    @ReactMethod
    public void disableAutoAppendModelInformation() {
        TreasureData.sharedInstance().disableAutoAppendModelInformation();
    }

    @ReactMethod
    public void enableAutoAppendAppInformation() {
        TreasureData.sharedInstance().enableAutoAppendAppInformation();
    }

    @ReactMethod
    public void disableAutoAppendAppInformation() {
        TreasureData.sharedInstance().disableAutoAppendAppInformation();
    }

    @ReactMethod
    public void enableAutoAppendLocaleInformation() {
        TreasureData.sharedInstance().enableAutoAppendLocaleInformation();
    }

    @ReactMethod
    public void disableAutoAppendLocaleInformation() {
        TreasureData.sharedInstance().disableAutoAppendLocaleInformation();
    }

    @ReactMethod
    public void enableServerSideUploadTimestamp() {
        TreasureData.sharedInstance().enableServerSideUploadTimestamp();
    }

    @ReactMethod
    public void enableServerSideUploadTimestamp(String column) {
        TreasureData.sharedInstance().enableServerSideUploadTimestamp(column);
    }

    @ReactMethod
    public void disableServerSideUploadTimestamp() {
        TreasureData.sharedInstance().disableServerSideUploadTimestamp();
    }

    @ReactMethod
    public void enableLogging() {
        TreasureData.enableLogging();
    }

    @ReactMethod
    public void disableLogging() {
        TreasureData.disableLogging();
    }

    @ReactMethod
    public void addEvent(ReadableMap record, String database, String table) {
        TreasureData.sharedInstance().addEvent(database, table, toHashMap(record));
    }

    @ReactMethod
    public void addEvent(ReadableMap record, String table) {
        TreasureData.sharedInstance().addEvent(table, toHashMap(record));
    }

    @ReactMethod
    public void addEventWithCallback(ReadableMap record, String database, String table, final Callback onSuccess, final Callback onError) {
        TreasureData.sharedInstance().addEventWithCallback(database, table, toHashMap(record), new TDCallback() {
            @Override
            public void onSuccess() {
                onSuccess.invoke();
            }

            @Override
            public void onError(String errorCode, Exception e) {
                onError.invoke(errorCode, e.getMessage());
            }
        });
    }

    @ReactMethod
    public void addEventWithCallback(ReadableMap record, String table, final Callback onSuccess, final Callback onError) {
        TreasureData.sharedInstance().addEventWithCallback(table, toHashMap(record), new TDCallback() {
            @Override
            public void onSuccess() {
                onSuccess.invoke();
            }

            @Override
            public void onError(String errorCode, Exception e) {
                onError.invoke(errorCode, e.getMessage());
            }
        });
    }

    @ReactMethod
    public void uploadEvents() {
        TreasureData.sharedInstance().uploadEvents();
    }

    @ReactMethod
    public void uploadEventsWithCallback(final Callback onSuccess, final Callback onError) {
        TreasureData.sharedInstance().uploadEventsWithCallback(new TDCallback() {
            @Override
            public void onSuccess() {
                onSuccess.invoke();
            }

            @Override
            public void onError(String errorCode, Exception e) {
                onError.invoke(errorCode, e.getMessage());
            }
        });
    }

    @ReactMethod
    public void startSession() {
        TreasureData.startSession(getReactApplicationContext());
    }

    @ReactMethod
    public void startSession(String table) {
        TreasureData.sharedInstance().startSession(table);
    }

    @ReactMethod
    public void startSession(String table, String database) {
        TreasureData.sharedInstance().startSession(table, database);
    }

    @ReactMethod
    public void endSession() {
        TreasureData.endSession(getReactApplicationContext());
    }

    @ReactMethod
    public void endSession(String table) {
        TreasureData.sharedInstance().endSession(table);
    }

    @ReactMethod
    public void endSession(String table, String database) {
        TreasureData.sharedInstance().endSession(table, database);
    }

    @ReactMethod
    public void getSessionId(Promise promise) {
        String sessionId = TreasureData.getSessionId(getReactApplicationContext());
        if (sessionId == null) {
            promise.reject(new Throwable("sessionId == null"));
        } else {
            promise.resolve(sessionId);
        }
    }

    @ReactMethod
    public void isFirstRun(Promise promise) {
        boolean isFirstRun = TreasureData.sharedInstance().isFirstRun(getReactApplicationContext());
        promise.resolve(isFirstRun);
    }

    @ReactMethod
    public void clearFirstRun() {
        TreasureData.sharedInstance().clearFirstRun(getReactApplicationContext());
    }

    @ReactMethod
    public void setSessionTimeoutMilli(long to) {
        TreasureData.setSessionTimeoutMilli(to);
    }
}