import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

export default EStyleSheet.create({
  headerContainer: {
    alignItems: 'center',
  },
  headerText: {
    fontWeight: '600',
    fontSize: 23,
    color: '$headerTextColor',
    letterSpacing: 0,
    marginBottom: 12,
    marginTop: 80,
  },
  headerBorder: {
    height: 1,
    backgroundColor: '$headerBorderColor',
    width: Dimensions.get('window').width * 0.25,
  },
});
