export type TaskType = {
  id: number
  type: "task"
  progress: "To Do" | "In Progress" | "Done"
  title: string
}
export type CategoryType = {
  id: number
  type: "category"
  title: string
  data: TaskType[]
}
export type BoardDataType = CategoryType[]

export type handleDragStartType = (taskId: number, catId: number) => void
export type handleDragEnterType = (catId: number) => void
export type handleDragEndType = () => void
