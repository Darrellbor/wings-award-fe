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
import Technology from './Technology';
import Brand from './Brand';
import Icon360 from './Icon360';
import PerformingArts from './PerformingArts';
import PerformingMusic from './PerformingMusic';
import PersonalDevelopment from './PersonalDevelopment';
import Photography from './Photography';

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
    case 'Outstanding Brand':
      categoryIcon = <Brand color={color} />;
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
    case 'Fashion Male':
    case 'Fashion Female':
      categoryIcon = <Fashion color={color} />;
      break;
    case 'Videography':
      categoryIcon = <Film color={color} />;
      break;
    case 'Photography':
      categoryIcon = <Photography color={color} />;
      break;
    case 'Fitness Male':
    case 'Fitness Female':
      categoryIcon = <Fitness color={color} />;
      break;
    case 'Leadership':
      categoryIcon = <Leadership color={color} />;
      break;
    case 'Performing arts (expressions)':
      categoryIcon = <PerformingArts color={color} />;
      break;
    case 'Performing arts (music)':
      categoryIcon = <PerformingMusic color={color} />;
      break;
    case 'Technology':
      categoryIcon = <Technology color={color} />;
      break;
    case 'Personal / Career Development':
      categoryIcon = <PersonalDevelopment color={color} />;
      break;
    case 'Icon 360 Male':
    case 'Icon 360 Female':
      categoryIcon = <Icon360 color={color} />;
      break;
    default:
      categoryIcon = <Activism color={color} />;
  }
  return categoryIcon;
};

export default CategoriesIcon;
