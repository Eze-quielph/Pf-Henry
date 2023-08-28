const initialState = {
    Music: [], //  se guardan las tarjeta 
  };
  
  const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOAD_CARDS':
        return {
          ...state,
          Music: action.payload,
        };
      case 'APPLY_FILTER':
        const filter = action.payload;
        const filteredMusic = state.Music.filter(card => card.genre === filter); // filtra por genero
        return {
          ...state,
          Music: filteredMusic,
        };
      default:
        return state;
    } 
  };
  
  export default cardsReducer;
  