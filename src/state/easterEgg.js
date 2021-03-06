const PAINT = 'easterEgg/PAINT'

export const paintActionCreator = (value) => ({
    type: PAINT,
    value,
})

const initialState = {
    isPainted: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case PAINT:
            return {
                ...state,
                isPainted: action.value
            }

        default:
            return state
    }
}