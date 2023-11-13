import React, {useState} from 'react';
import {View, Modal} from 'react-native';

import styles from './styles';

export default ({
  visible,
  onRequestClose,
  RenderModal,
  style,
  modalViewStyle,
  transparent,
  ...props
}) => {
  return (
    <View style={style}>
      <Modal
        transparent={transparent}
        visible={visible}
        onRequestClose={onRequestClose}
        {...props}>
        <View style={modalViewStyle}>
          {RenderModal != null && <RenderModal />}
        </View>
      </Modal>
    </View>
  );
};
