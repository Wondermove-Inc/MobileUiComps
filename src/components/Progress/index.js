import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import PropsType from 'prop-types';
import {Text, Card} from '@components';
import {colors} from '@styles';

/**
 * @param {string} headerText
 * @param {number} userValue
 * @param {string} userTime
 * @param {number} dealerValue
 * @param {string} dealerTime
 * @param {Object, Objectp} style
 */

const Progress = props => {
  const {style, headerText, userValue, userTime, dealerValue, dealerTime} =
    props;

  const resultValue = Math.min((userValue / dealerValue) * 100, 100);

  return (
    <Card
      style={[styles.container, style]}
      header={<Header text={headerText} />}
      content={
        <RenderProgressBar
          resultValue={resultValue}
          userTime={userTime}
          dealerTime={dealerTime}
        />
      }
    />
  );
};

const RenderProgressBar = ({resultValue, userTime, dealerTime}) => {
  const progressColor =
    resultValue >= 100
      ? colors.color_secondary_active_red
      : colors.color_secondary_active_lightblue;

  const RenderIndex = ({style}) => {
    return <View style={[styles.index_style, style]} />;
  };

  return (
    <View>
      <View style={styles.base_value} />
      <View
        style={[
          {
            width: `${resultValue}%`,
            backgroundColor: progressColor,
          },
          styles.result_value,
        ]}
      />

      <View style={{marginTop: 16, flexDirection: 'row', alignItems: 'center'}}>
        <RenderIndex style={{backgroundColor: progressColor}} />
        <Text style={{marginStart: 6}} category="MiniLabel">
          You: {userTime}
        </Text>

        <RenderIndex
          style={{
            backgroundColor: colors.color_secondary_sand,
            marginStart: 12,
          }}
        />
        <Text style={{marginStart: 6}} category="MiniLabel">
          Dealer: {dealerTime}
        </Text>
      </View>
    </View>
  );
};

const Header = ({text}) => {
  return (
    <Text style={{marginBottom: 18}} category="MiniLabel">
      {text}
    </Text>
  );
};

Progress.propType = {
  style: PropsType.oneOfType([PropsType.array, PropsType.object]),
  headerText: PropsType.string,
  userValue: PropsType.number,
  userTime: PropsType.string,
  dealerValue: PropsType.number,
  dealerTime: PropsType.string,
};

export default Progress;
