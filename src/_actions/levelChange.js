import { LEVEL_UP } from '_reducers/reducers';
import { LEVEL_DOWN } from "_reducers/reducers";

export const levelUp = ()=> ({type: LEVEL_UP, value: 1})

export const levelDown = ()=> ({type: LEVEL_DOWN, value: 1})