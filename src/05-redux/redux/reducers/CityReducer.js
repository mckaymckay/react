
const CityReducer = (prevState = {
    city: '北京'
}, action) => {
    const newState = { ...prevState }
    switch (action.type) {
        case ('change-city'):
            newState.city = action.cityName
            return newState
        default:
            return prevState

    }
}

export default CityReducer

