import { TYPES } from '../constants/types';

export const editTodo = (task) => {
    return {
        type: TYPES.edit_Todo,
        task
    }
}

export const editProgress = (task) => {
    return {
        type: TYPES.edit_Progress,
        task
    }
}

export const editDone = (task) => {
    return {
        type: TYPES.edit_Done,
        task
    }
}
