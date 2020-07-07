const tasks = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state, {
                    id: action.id,
                    title: action.title,
                    description: description,
                }
            ]
        default:
            return state
    }
}

export default tasks