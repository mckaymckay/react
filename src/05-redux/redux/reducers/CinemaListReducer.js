const CinemaListReducer = (prevState = {
    cinemaLists: [] // 初始值
}, action) => {
    const newState = { ...prevState }
    console.log(action)
    switch (action.type) {
        case ('getCinemaList'):
            newState.cinemaLists = action.cinemaLists
            return newState
        default:
            return prevState

    }
}

export default CinemaListReducer