import { TYPES } from '../constants/types';

export const removeTodo = (task) => {
    return {
        type: TYPES.remove_Todo,
        task
    }
}

export const removeProgress = (task) => {
    return {
        type: TYPES.remove_Progress,
        task
    }
}

export const removeDone = (task) => {
    return {
        type: TYPES.remove_Done,
        task
    }
}
