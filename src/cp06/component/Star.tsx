import React from 'react';
import { FaStar } from 'react-icons/fa';

type Props = {
  selected?: boolean;
  onClick: () => void;
};

const Star: React.VFC<Props> = ({ selected, onClick }: Props) => (
  <FaStar color={selected ? 'red' : 'gray'} onClick={onClick} />
);

export default Star;
