import type {
  handleDragEnterType,
  handleDragStartType,
  CategoryType,
  handleDragEndType,
} from "../types"
import { Task } from "./Task"

type CategoryProps = {
  data: CategoryType
  handleDragEnd: handleDragEndType
  handleDragEnter: handleDragEnterType
  handleDragStart: handleDragStartType
}

export const Category = ({
  data,
  handleDragEnd,
  handleDragEnter,
  handleDragStart,
}: CategoryProps) => {
  return (
    <div
      onDragEnter={() => {
        handleDragEnter(data.id)
      }}
      onDragEnd={handleDragEnd}
      className="flex flex-1 flex-col gap-8 rounded-xl bg-primary-focus p-4"
    >
      <h2 className="min-w-full rounded-lg bg-secondary-content p-4 text-xl font-bold tracking-wide">
        {data.title} ({data.data.length})
      </h2>
      <div className="flex flex-1 flex-col gap-4 bg-primary-focus">
        {data.data.map((task) => (
          <Task
            key={task.id}
            task={task}
            catId={data.id}
            handleDragStart={handleDragStart}
          />
        ))}
      </div>
    </div>
  )
}
