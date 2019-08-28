import React from 'react';
import ListSection from '../../componets/ListSection';
import PropTypes from 'prop-types';

const Faves = ({faves, faveIds}) => {
  return <ListSection session={faves} faveIds={faveIds} />;
};

Faves.PropTypes = {
  faves: PropTypes.array.isRequired,
  faveIds: PropTypes.array.isRequired,
};

export default Faves;
