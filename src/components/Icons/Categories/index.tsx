import React from 'react';

import Activism from './Activism';
import Beauty from './Beauty';
import Content from './Content';
import Marketing from './Marketing';
import Entrepreneurship from './Entrepreneurship';
import Fashion from './Fashion';
import Film from './Film';
import Fitness from './Fitness';
import Leadership from './Leadership';
import Arts from './Arts';
import Technology from './Technology';

interface CategoriesIconProps {
  category: string;
  color?: string;
}

export const CategoriesIcon = ({ category, color }: CategoriesIconProps): JSX.Element => {
  let categoryIcon = <div />;
  switch (category) {
    case 'Activism and Community Action':
      categoryIcon = <Activism color={color} />;
      break;
    case 'Beauty':
      categoryIcon = <Beauty color={color} />;
      break;
    case 'Content Creation':
      categoryIcon = <Content color={color} />;
      break;
    case 'Digital Marketing':
      categoryIcon = <Marketing color={color} />;
      break;
    case 'Entrepreneurship':
      categoryIcon = <Entrepreneurship color={color} />;
      break;
    case 'Fashion':
      categoryIcon = <Fashion color={color} />;
      break;
    case 'Film and Photography':
      categoryIcon = <Film color={color} />;
      break;
    case 'Fitness and Sport':
      categoryIcon = <Fitness color={color} />;
      break;
    case 'Leadership Category':
      categoryIcon = <Leadership color={color} />;
      break;
    case 'Performing arts':
      categoryIcon = <Arts color={color} />;
      break;
    case 'Technology':
      categoryIcon = <Technology color={color} />;
      break;
    default:
      categoryIcon = <Activism color={color} />;
  }
  return categoryIcon;
};

export default CategoriesIcon;
