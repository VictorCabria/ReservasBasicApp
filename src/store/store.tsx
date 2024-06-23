import {createStore} from 'redux';
interface ReservationState {
  distance: string;
  duration: number;
}

interface AppState {
  reservation: ReservationState | null;
}

const initialState: AppState = {
  reservation: null,
};

type Action = {type: 'SET_RESERVATION_INFO'; payload: ReservationState};

const reducer = (state = initialState, action: Action): AppState => {
  switch (action.type) {
    case 'SET_RESERVATION_INFO':
      return {...state, reservation: action.payload};
    default:
      return state;
  }
};
const store = createStore(reducer);

export type RootState = ReturnType<typeof store.getState>;

export default store;
