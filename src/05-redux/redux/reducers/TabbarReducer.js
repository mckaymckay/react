

const TabbarReducer = (prevState = {
    show: true // 初始值
}, action) => {
    const newState = { ...prevState }
    console.log(action)
    switch (action.type) {
        case ('hide-tabbar'):
            newState.show = false
            return newState
        case ('show-tabbar'):
            newState.show = true
            return newState
        default:
            return prevState

    }
}

export default TabbarReducer