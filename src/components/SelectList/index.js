import React, {useState} from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity, View} from 'react-native';

import {
  Text,
  Input,
  Header,
  Divider,
  Radio,
  Modal,
  Button,
  Icon,
} from '@components';
import {colors} from '@styles';

import styles from './styles';

const SelectList = ({
  style,
  placeholder,
  navigation,
  listData,
  listTitle,
  onSelectItem,
  value,
  modal,
}) => {
  const [modalVisible, setVisible] = useState(false);

  const onPressModalView = () => {
    setVisible(false);
  };

  const onPressModalClose = () => {
    setVisible(false);
  };

  const onPressInput = () => {
    modal
      ? setVisible(true)
      : navigation.navigate('SelectListPage', {
          listData: listData,
          onSelectItem,
          value,
          listTitle,
        });
  };

  const onRequestClose = () => {
    setVisible(false);
  };

  const ModalView = () => {
    return (
      <View style={styles.modal_view}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{margin: 16, zIndex: 1}}
            onPress={onPressModalClose}>
            <Icon name="close" />
          </TouchableOpacity>
          <View
            style={{
              position: 'absolute',
              alignSelf: 'center',
              left: 0,
              right: 0,
            }}>
            <Text style={{textAlign: 'center'}} category="Label">
              {listTitle}
            </Text>
          </View>
        </View>
        <Divider />
        <ScrollView>
          {listData != null &&
            listData.map((item, index) => {
              const onPressModalClose = () => {
                onSelectItem != null && onSelectItem(item);
              };
              return (
                <View key={index}>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      paddingStart: 16,
                      paddingVertical: 18,
                      alignItems: 'center',
                    }}
                    onPress={onPressModalClose}>
                    <Radio isSelect={value == item.title && true} />
                    <Text style={{paddingHorizontal: 16}} category="Label">
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                  <Divider />
                </View>
              );
            })}
        </ScrollView>
        <Button
          buttonStyle={{margin: 16}}
          text="SELECT"
          onPress={onPressModalView}
          disabled={value == null && true}
        />
      </View>
    );
  };

  return (
    <TouchableOpacity style={[style]} onPress={onPressInput}>
      <View pointerEvents="none">
        <SelectListInput
          value={value}
          placeholder={placeholder}
          navigation={navigation}
        />
      </View>
      <Modal
        style={styles.centeredView}
        modalViewStyle={styles.centeredView}
        visible={modalVisible}
        onRequestClose={onRequestClose}
        RenderModal={ModalView}
        transparent={true}
        // animationType="slide"
      />
    </TouchableOpacity>
  );
};

const SelectListInput = ({placeholder, value}) => {
  return (
    <Input
      value={value}
      placeholder={placeholder}
      iconRight="arrow_right"
      showSoftInputOnFocus={false}
      selectTextOnFocus={false}
      contextMenuHidden={true}
      selectionColor={colors.color_secondary_white}
      caretHidden
    />
  );
};

export const SelectListPage = ({route, navigation}) => {
  const {listData, onSelectItem, value, listTitle} = route.params;

  return (
    <SafeAreaView>
      <Header navigation={navigation} title={listTitle} />
      <ScrollView>
        {listData != null &&
          listData.map((item, index) => {
            return (
              <View key={index}>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    paddingStart: 16,
                    paddingVertical: 18,
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    onSelectItem != null && onSelectItem(item);
                    navigation.goBack();
                  }}>
                  <Radio isSelect={value == item.title && true} />
                  <Text style={{paddingHorizontal: 16}} category="Label">
                    {item.title}
                  </Text>
                </TouchableOpacity>
                <Divider />
              </View>
            );
          })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SelectList;
