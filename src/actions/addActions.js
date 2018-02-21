import { TYPES } from '../constants/types';

export const addTodo = (task) => {
    return {
        type: TYPES.add_Todo,
        task
    }
}

export const addProgress = (task) => {
    return {
        type: TYPES.add_Progress,
        task
    }
}

export const addDone = (task) => {
    return {
        type: TYPES.add_Done,
        task
    }
}
