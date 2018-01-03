package com.github.quipper.rn.td;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableMapKeySetIterator;

import java.util.ArrayList;
import java.util.HashMap;

final class Utils {

    private Utils() {
        throw new AssertionError();
    }

    // https://github.com/facebook/react-native/blob/1e8f3b11027fe0a7514b4fc97d0798d3c64bc895/ReactAndroid/src/main/java/com/facebook/react/bridge/ReadableNativeMap.java#L61
    static HashMap<String, Object> toHashMap(ReadableMap map) {
        HashMap<String, Object> hashMap = new HashMap<>();
        ReadableMapKeySetIterator iterator = map.keySetIterator();
        while (iterator.hasNextKey()) {
            String key = iterator.nextKey();
            switch (map.getType(key)) {
                case Null:
                    hashMap.put(key, null);
                    break;
                case Boolean:
                    hashMap.put(key, map.getBoolean(key));
                    break;
                case Number:
                    hashMap.put(key, map.getDouble(key));
                    break;
                case String:
                    hashMap.put(key, map.getString(key));
                    break;
                case Map:
                    hashMap.put(key,toHashMap(map.getMap(key)));
                    break;
                case Array:
                    hashMap.put(key, toArrayList(map.getArray(key)));
                    break;
                default:
                    throw new IllegalArgumentException("Could not convert object with key: " + key + ".");
            }
        }
        return hashMap;
    }

    // https://github.com/facebook/react-native/blob/1e8f3b11027fe0a7514b4fc97d0798d3c64bc895/ReactAndroid/src/main/java/com/facebook/react/bridge/ReadableNativeArray.java#L56
    private static ArrayList<Object> toArrayList(ReadableArray array) {
        ArrayList<Object> arrayList = new ArrayList<>(array.size());
        for (int i = 0, size = array.size(); i < size; i++) {
            switch (array.getType(i)) {
                case Null:
                    arrayList.add(null);
                    break;
                case Boolean:
                    arrayList.add(array.getBoolean(i));
                    break;
                case Number:
                    arrayList.add(array.getDouble(i));
                    break;
                case String:
                    arrayList.add(array.getString(i));
                    break;
                case Map:
                    arrayList.add(toHashMap(array.getMap(i)));
                    break;
                case Array:
                    arrayList.add(toArrayList(array.getArray(i)));
                    break;
                default:
                    throw new IllegalArgumentException("Could not convert object at index: " + i + ".");
            }
        }
        return arrayList;
    }
}
