import * as types from '../constants/ActionTypes';

export const markAsFavorite = (item) => (
    { type: types.MARK_AS_FAVORITE, item: item }
)