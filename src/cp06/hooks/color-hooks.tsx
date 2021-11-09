import React, {
  ReactChildren,
  ReactElement,
  useContext,
  useState,
} from 'react';
import { v4 } from 'uuid';

import { ColorData } from '../type/interface';
import colorData from '../data/color-data.json';

export type ColorContext = {
  colors: ColorData[];
  setColors: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        title: string;
        color: string;
        rating: number;
      }[]
    >
  >;
  addColor: (title: string, color: string) => void;
  removeColor: (id: string) => void;
  updateRate: (id: string, rate: number) => void;
};

const ColorContext = React.createContext({} as ColorContext);
export const useColors: () => ColorContext = () => useContext(ColorContext);

type Props = {
  children: ReactChildren | ReactElement;
};

const ColorProvider: React.VFC<Props> = ({ children }: Props) => {
  const [colors, setColors] = useState(colorData);

  const addColor = (title: string, color: string) =>
    setColors([...colors, { id: v4(), rating: 0, title, color }]);

  const removeColor = (id: string) =>
    setColors(colors.filter((color) => color.id !== id));

  const updateRate = (id: string, rate: number) =>
    setColors(
      colors.map((color) => {
        if (color.id === id) color.rating = rate;
        return color;
      }),
    );

  return (
    <ColorContext.Provider
      value={{ colors, setColors, addColor, removeColor, updateRate }}>
      {children}
    </ColorContext.Provider>
  );
};

export default ColorProvider;
