import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
// Support animation
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Animated,
  Easing,
} from 'react-native';

import {width, height, calcScale} from '../../utils/dimension';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {themes} from '../../constants/themes';
import commonStyles from '../Styles';
import {SearchBar} from 'react-native-elements';

const {Value, timing} = Animated;

const SearchView = ({navigation}) => {
  const searchInputRef = React.useRef(null);
  const [isOnSearch, setOnSearch] = React.useState(false);
  const [searchVal, setSearchVal] = React.useState(null);

  // Animation value
  const _input_box_translate_x = React.useRef(new Value(width)).current;
  const _back_button_opacity = React.useRef(new Value(0)).current;
  const _content_translate_y = React.useRef(new Value(height)).current;
  const _content_opacity = React.useRef(new Value(0)).current;

  const onClickSearching = () => {
    // update state
    setOnSearch(true);

    // content
    const content_translate_y_config = {
      duration: 250,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    };
    const content_opacity_config = {
      duration: 250,
      toValue: 1,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    };

    // run animation
    timing(_content_translate_y, content_translate_y_config).start();
    timing(_content_opacity, content_opacity_config).start();

    // force focus
    searchInputRef.current.focus();
  };

  const onBackPress = () => {
    // update state
    setOnSearch(false);
    // animation config
    // content
    const content_translate_y_config = {
      duration: 250,
      toValue: height,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    };
    const content_opacity_config = {
      duration: 250,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    };

    // run animation
    timing(_content_translate_y, content_translate_y_config).start();
    timing(_content_opacity, content_opacity_config).start();

    // force blur
    // searchInputRef.current.blur();
    setSearchVal(null);
  };

  return (
    <>
      <View style={styles.headerSafeArea}>
        <View style={styles.header}>
          <View style={styles.headerInner}>
            <TouchableHighlight
              activeOpacity={1}
              underlayColor={'#ccd0d5'}
              onPress={() => navigation.openDrawer()}
              style={styles.iconBox}>
              <Icon name="bars" size={calcScale(22)} color="#000000" />
            </TouchableHighlight>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{fontFamily: 'Cochin', fontSize: 22, fontWeight: '700'}}>
                Fix It
              </Text>
            </View>
            <TouchableHighlight
              activeOpacity={1}
              underlayColor={'#ccd0d5'}
              onPress={onClickSearching}
              style={styles.iconBox}>
              <Icon name="search" size={calcScale(22)} color="#000000" />
            </TouchableHighlight>
          </View>
        </View>
      </View>

      <Animated.View
        style={[
          styles.content,
          {
            opacity: _content_opacity,
            transform: [{translateY: _content_translate_y}],
          },
        ]}>
        <SafeAreaView style={styles.contentSafeArea}>
          <SearchBar
            ref={searchInputRef}
            round
            lightTheme
            showCancel
            showLoading
            platform="ios"
            cancelButtonTitle="Cancel"
            searchIcon={{size: calcScale(24)}}
            inputContainerStyle={{borderRadius: 50, height: 25}}
            inputStyle={{fontSize: 15}}
            placeholder="Search..."
            onChangeText={(text) => setSearchVal(text)}
            value={searchVal}
            onCancel={onBackPress}
          />

          <View style={styles.contentInner}>
            <View style={styles.separator} />
            {searchVal != null &&
            searchVal !== undefined &&
            '' !== searchVal.trim() ? (
              <ScrollView>
                <View style={styles.searchItem}>
                  <Icon
                    style={styles.itemIcon}
                    name="search"
                    size={16}
                    color="#cccccc"
                  />
                  <Text>Fake result 1</Text>
                </View>
                <View style={styles.searchItem}>
                  <Icon
                    style={styles.itemIcon}
                    name="search"
                    size={16}
                    color="#cccccc"
                  />
                  <Text>Fake result 2</Text>
                </View>
                <View style={styles.searchItem}>
                  <Icon
                    style={styles.itemIcon}
                    name="search"
                    size={16}
                    color="#cccccc"
                  />
                  <Text>Fake result 3</Text>
                </View>
              </ScrollView>
            ) : (
              <View>
                <View style={styles.recentBox}>
                  <Text style={styles.recentText}>Recent Searches</Text>
                </View>
                <View style={styles.separator} />
                <ScrollView>
                  <View style={styles.searchItem}>
                    <Icon
                      style={styles.itemIcon}
                      name="history"
                      size={16}
                      color="#cccccc"
                    />
                    <Text>Fake result 1</Text>
                  </View>
                  <View style={styles.searchItem}>
                    <Icon
                      style={styles.itemIcon}
                      name="history"
                      size={16}
                      color="#cccccc"
                    />
                    <Text>Fake result 2</Text>
                  </View>
                  <View style={styles.searchItem}>
                    <Icon
                      style={styles.itemIcon}
                      name="history"
                      size={16}
                      color="#cccccc"
                    />
                    <Text>Fake result 3</Text>
                  </View>
                </ScrollView>
              </View>
            )}
          </View>
        </SafeAreaView>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  headerSafeArea: {
    zIndex: 1000,
    backgroundColor: '#fff',
  },
  header: {
    height: calcScale(50),
    paddingHorizontal: calcScale(10),
  },
  headerInner: {
    flex: 1,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },
  iconBox: {
    width: calcScale(40),
    height: calcScale(40),
    borderRadius: calcScale(40),
    backgroundColor: '#e4e6eb',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: width,
    height: height,
    position: 'absolute',
    left: 0,
    bottom: 0,
    top: 0,
    zIndex: 1000,
  },
  contentSafeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentInner: {
    flex: 1,
    zIndex: 1000,
  },
  separator: {
    height: 0.5,
    backgroundColor: '#e6e4eb',
  },
  searchItem: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#e6e4eb',
    marginLeft: 16,
  },
  itemIcon: {
    marginRight: 15,
  },
  recentBox: {
    paddingTop: calcScale(15),
    paddingBottom: calcScale(8),
    paddingHorizontal: calcScale(16),
  },
  recentText: {
    ...commonStyles.textBold,
    fontSize: calcScale(20),
  },
});

export default SearchView;
