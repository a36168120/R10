import React from 'react';
import {View, Text, SectionList} from 'react-native';
import {formatSessionData} from '../../lib/helper';
import ListSection from '../../componets/ListSection';
import styles from './styles';

const Faves = ({faves, faveIds}) => {
  return <ListSection session={faves} faveIds={faveIds} />;
};

export default Faves;
