import { type NextPage } from "next"
import Head from "next/head"
import { Category } from "../components"
import { useDragNDrop } from "../useDragNDrop"

const Home: NextPage = () => {
  const { boardData, handleDragStart, handleDragEnter, handleDragEnd } =
    useDragNDrop()

  return (
    <>
      <Head>
        <title>11/27 - Kanban Board</title>
      </Head>
      <main
        data-theme="dracula"
        className="flex min-h-screen flex-col items-center"
      >
        <h1 className="mt-8 text-4xl font-extrabold tracking-tight">
          11/27 - Kanban Board
        </h1>
        <div className="mt-8 flex min-w-full gap-10 p-10">
          {boardData.map((data) => (
            <Category
              key={data.id}
              data={data}
              handleDragEnd={handleDragEnd}
              handleDragEnter={handleDragEnter}
              handleDragStart={handleDragStart}
            />
          ))}
        </div>
      </main>
    </>
  )
}

export default Home
