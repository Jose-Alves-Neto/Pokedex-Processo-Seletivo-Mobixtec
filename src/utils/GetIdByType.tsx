import {POKEMON_TYPES} from '../Constants/constants';

const getIdByType: Function = (type: string): string => {
  return POKEMON_TYPES[type.toLowerCase()];
};

export default getIdByType;
