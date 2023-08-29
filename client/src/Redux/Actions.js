export const loadCards = (cards) => ({
    type: 'LOAD_CARDS',
    payload: cards,
  }); 
  

  export const applyFilter = (filter) => ({
    type: 'APPLY_FILTER',
    payload: filter,
  }); 