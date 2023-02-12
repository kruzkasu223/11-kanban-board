import type { BoardDataType } from "./types"

export const TYPE = {
  CATEGORY: "category",
  TASK: "task",
} as const

export const PROGRESS = {
  TODO: "To Do",
  IN_PROGRESS: "In Progress",
  DONE: "Done",
} as const

export const BOARD_DATA: BoardDataType = [
  {
    id: 1,
    title: "To Do",
    type: TYPE.CATEGORY,
    data: [
      { id: 11, type: TYPE.TASK, progress: PROGRESS.TODO, title: "Todo 111" },
      { id: 12, type: TYPE.TASK, progress: PROGRESS.TODO, title: "Todo 222" },
      { id: 13, type: TYPE.TASK, progress: PROGRESS.TODO, title: "Todo 333" },
      { id: 14, type: TYPE.TASK, progress: PROGRESS.TODO, title: "Todo 444" },
      { id: 15, type: TYPE.TASK, progress: PROGRESS.TODO, title: "Todo 555" },
    ],
  },
  {
    id: 2,
    title: "In Progress",
    type: TYPE.CATEGORY,
    data: [
      {
        id: 21,
        type: TYPE.TASK,
        progress: PROGRESS.IN_PROGRESS,
        title: "In-progress 111",
      },
      {
        id: 22,
        type: TYPE.TASK,
        progress: PROGRESS.IN_PROGRESS,
        title: "In-progress 222",
      },
    ],
  },
  {
    id: 3,
    title: "Done",
    type: TYPE.CATEGORY,
    data: [
      { id: 31, type: TYPE.TASK, progress: PROGRESS.DONE, title: "Done 111" },
      { id: 32, type: TYPE.TASK, progress: PROGRESS.DONE, title: "Done 222" },
      { id: 33, type: TYPE.TASK, progress: PROGRESS.DONE, title: "Done 333" },
      { id: 34, type: TYPE.TASK, progress: PROGRESS.DONE, title: "Done 444" },
    ],
  },
]
