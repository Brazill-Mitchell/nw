export const TEST_ACTION = "TEST_ACTION";
export const testAction = (value) =>({
    type: TEST_ACTION,
    value: value
})

export const SET_SCREEN_SIZE = "SET_SCREEN_SIZE";
export const setScreenSize = (value) =>({
    type: SET_SCREEN_SIZE,
    value: value
})