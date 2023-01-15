import { isaacs } from '../data/characters';


export const getCharactersByName = (name = '') => {

    return isaacs.filter(
        isaac => isaac.name.includes( name )
    );
}
