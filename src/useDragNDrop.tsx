import { useCallback, useState } from "react"
import { BOARD_DATA, PROGRESS } from "./data"
import type {
  handleDragEnterType,
  handleDragStartType,
  TaskType,
} from "./types"

export const useDragNDrop = () => {
  const [boardData, setBoardData] = useState(BOARD_DATA)
  const [taskId, setTaskId] = useState<number>()
  const [catId, setCatId] = useState<number>()
  const [lastEnteredCatId, setLastEnteredCatId] = useState<number>()

  const handleDragStart: handleDragStartType = (taskId, catId) => {
    setTaskId(taskId)
    setCatId(catId)
  }

  const handleDragEnter: handleDragEnterType = (catId) => {
    setLastEnteredCatId(catId)
  }

  const handleDragEnd = useCallback(() => {
    if (!taskId || !catId || !lastEnteredCatId || catId === lastEnteredCatId)
      return
    setBoardData((prev) =>
      prev.map((cat) => {
        if (cat.id === catId) {
          return {
            ...cat,
            data: cat.data.filter((task) => task.id !== taskId),
          }
        }
        if (cat.id === lastEnteredCatId) {
          return {
            ...cat,
            data: [
              ...cat.data,
              {
                ...prev
                  .find((cat) => cat.id === catId)
                  ?.data.find((task) => task.id === taskId),
                progress:
                  lastEnteredCatId === 1
                    ? PROGRESS.TODO
                    : lastEnteredCatId === 2
                    ? PROGRESS.IN_PROGRESS
                    : PROGRESS.DONE,
              } as TaskType,
            ],
          }
        }
        return cat
      })
    )
  }, [taskId, catId, lastEnteredCatId])

  return { boardData, handleDragStart, handleDragEnter, handleDragEnd }
}
