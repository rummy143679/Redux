import React from 'react'
import { ADD_ITEM , REMOVE_ITEM } from '../actionsType/ActionType'

const initialState = {
    numOfitems : 0 ,
}

function CartReducer(state = initialState , action) {

    switch(action.type){
        case ADD_ITEM : 
        return{
            ...state ,
            numOfitems : state.numOfitems+1
        } ;

        case ADD_ITEM : 
        return{
            ...state ,
            numOfitems : state.numOfitems-1
        } ;
        default :
         return state ;
        
    }

  return (
    <div>CartReducer</div>
  )
}

export default CartReducer