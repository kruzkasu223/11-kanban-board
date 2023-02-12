import { PROGRESS } from "../data"
import type { handleDragStartType, TaskType } from "../types"

const BadgeColour = {
  [PROGRESS.TODO]: "badge-info",
  [PROGRESS.IN_PROGRESS]: "badge-warning",
  [PROGRESS.DONE]: "badge-success",
}

type TaskProps = {
  task: TaskType
  catId: number
  handleDragStart: handleDragStartType
}

export const Task = ({ task, catId, handleDragStart }: TaskProps) => {
  return (
    <div
      draggable
      className="min-w-full rounded-lg bg-primary p-3"
      onDragStart={() => {
        handleDragStart(task.id, catId)
      }}
    >
      <p className="text-lg font-bold tracking-wide text-primary-content">
        {task.title}
      </p>
      <div className={`badge ${BadgeColour[task.progress]}`}>
        {task.progress}
      </div>
    </div>
  )
}
