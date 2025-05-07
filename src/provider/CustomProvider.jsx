import { useReducer, useContext, createContext } from 'react'

const CustomStateContext = createContext()
const CustomDispatchContext = createContext()

const initialState = {
  reservationStart: undefined,
  reservationEnd: undefined,
  flightNumber: undefined,
  carPlans: undefined,
  cars: undefined,
  options: [],
  coupon: undefined,
  couponStatus: undefined,
  total: 0,
  sourceId: '',
  reservationId: '',
  personalInfo: {},
  reservationList: [],
  reservationListCount: 0,
  paymentType: 0,
}

export const actions = {
  SET_RESERVATION_DURATION: 'SET_RESERVATION_DURATION',
  SET_RESERVATION_FLIGHT_NUMBER: 'SET_RESERVATION_FLIGHT_NUMBER',
  SET_RESERVATION_CAR_PLAN: 'SET_RESERVATION_CAR_PLAN',
  SET_RESERVATION_CAR: 'SET_RESERVATION_CAR',
  SET_RESERVATION_OPTIONS: 'SET_RESERVATION_OPTIONS',
  SET_RESERVATION_COUPON: 'SET_RESERVATION_COUPON',
  RESET_RESERVATION: 'RESET_RESERVATION',
  SET_RESERVATION_TOTAL: 'SET_RESERVATION_TOTAL',
  SET_PAYMENT_SOURCE_ID: 'SET_PAYMENT_SOURCE_ID',
  SET_RESERVATION_ID: 'SET_RESERVATION_ID',
  SET_PERSONAL_INFO: 'SET_PERSONAL_INFO',
  SET_RESERVATION_LIST: 'SET_RESERVATION_LIST',
  SET_RESERVATION_LIST_COUNT: 'SET_RESERVATION_LIST_COUNT',
  SET_PAYMENT_TYPE: 'SET_PAYMENT_TYPE',
}

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_RESERVATION_DURATION:
      return {
        ...state,
        reservationStart: action.reservationStart,
        reservationEnd: action.reservationEnd,
      }
    case actions.SET_RESERVATION_FLIGHT_NUMBER:
      return {
        ...state,
        flightNumber: action.flightNumber,
      }
    case actions.SET_RESERVATION_CAR_PLAN:
      return {
        ...state,
        carPlans: action.carPlan,
      }
    case actions.SET_RESERVATION_CAR:
      return {
        ...state,
        cars: action.car,
      }
    case actions.SET_RESERVATION_OPTIONS:
      return {
        ...state,
        options: action.options,
      }
    case actions.SET_RESERVATION_COUPON:
      return {
        ...state,
        coupon: action.coupon,
        couponStatus: action.couponStatus,
      }
    case actions.RESET_RESERVATION:
      return initialState
    case actions.SET_RESERVATION_TOTAL:
      return {
        ...state,
        total: action.total,
      }
    case actions.SET_PAYMENT_SOURCE_ID:
      return {
        ...state,
        sourceId: action.sourceId,
      }
    case actions.SET_RESERVATION_ID:
      return {
        ...state,
        reservationId: action.reservationId,
      }
    case actions.SET_PERSONAL_INFO: {
      return {
        ...state,
        personalInfo: action.personalInfo,
      }
    }
    case actions.SET_RESERVATION_LIST: {
      return {
        ...state,
        reservationList: action.reservationList,
      }
    }
    case actions.SET_RESERVATION_LIST_COUNT: {
      return {
        ...state,
        reservationListCount: action.count,
      }
    }
    case actions.SET_PAYMENT_TYPE:
      return {
        ...state,
        paymentType: action.paymentType,
      }
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

export const CustomProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <CustomDispatchContext.Provider value={dispatch}>
      <CustomStateContext.Provider value={state}>{children}</CustomStateContext.Provider>
    </CustomDispatchContext.Provider>
  )
}

export const useCustomProvider = () => useContext(CustomStateContext)
export const useCustomDispatch = () => useContext(CustomDispatchContext)
