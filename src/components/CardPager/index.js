import React, {useState} from 'react';
import {View} from 'react-native';
import {Card} from '@components';
import PropsType from 'prop-types';
import PagerView from 'react-native-pager-view';
import styles from './styles';
import {colors} from '@styles';

/**
 * @param {Object[]} items
 * @param {number} initialPage
 * @param {Object, Object[]} style
 */

const CardPager = props => {
  const {items, initialPage, style} = props;
  const [currentPage, setCurrentPage] = useState(initialPage || 0);

  const handlePageSelected = e => {
    const selectedPage = e.nativeEvent.position;
    setCurrentPage(selectedPage);
  };

  return (
    <View>
      <PagerView
        style={[style]}
        initialPage={initialPage}
        onPageSelected={handlePageSelected}>
        {items?.map((item, index) => {
          const {header, content} = item;
          return (
            <View key={index} style={{paddingHorizontal: 20}}>
              <Card header={header} content={content} />
            </View>
          );
        })}
      </PagerView>

      <View style={styles.indicator_container}>
        {items?.map((_, index) => {
          return (
            <Indicator key={index} index={index} currentPage={currentPage} />
          );
        })}
      </View>
    </View>
  );
};

const Indicator = ({index, currentPage, style}) => {
  return (
    <View
      style={[
        styles.indicator_style,
        {
          backgroundColor:
            index == currentPage
              ? colors.color_primary_blue
              : colors.color_secondary_lightgray,
          marginLeft: index != 0 ? 12 : 0,
        },
        style,
      ]}
    />
  );
};

CardPager.propTypes = {
  items: PropsType.array,
  initialPage: PropsType.number,
  style: PropsType.oneOfType([PropsType.object, PropsType.array]),
};

export default CardPager;
