import { AppRegistry } from 'react-native';
import TreasureData from 'react-native-td';
import App from './build/App';

TreasureData.initialize("your API key");
TreasureData.enableLogging();
TreasureData.enableAutoAppendUniqId();
TreasureData.enableAutoAppendModelInformation();
TreasureData.startSession();

AppRegistry.registerComponent('RNTreasureDataExample', () => App);
