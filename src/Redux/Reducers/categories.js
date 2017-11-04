import * as actionTypes from "../Constants/actionTypes";
import * as _ from "lodash";

const initialState = {
    categories: ['aaa','bbb']
}

export const categories = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_NEW_CATEGORY: {
            const newArr ={categories: [...state.categories, action.payload.category ]} ;
            return newArr;
        }
        case actionTypes.EDIT_CATEGORY: {
            const newArr1 = state.categories.map((cat) => cat === action.payload.oldName ? action.payload.newName : cat);
            const newState1 = {categories: newArr1}
            return newState1;
        }

        case actionTypes.DELETE_CATEGORY: {
            let cats = state.categories.map((cat) => cat);
            _.remove(cats, (catName) => catName === action.payload.name);
            return {categories: cats};
        }

        default: {
            return state;
        }

    }
}

