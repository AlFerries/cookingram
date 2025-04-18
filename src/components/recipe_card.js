import Image from "next/image"
import Link from "next/link"

const RecipeCard = ({recipe}) => {

  const {id, name, image} = recipe

  return (
      <Link href={`/recipe/${id}`}>
        <div className="flex flex-col relative w-75 rounded-2xl overflow-hidden shadow-blue-600 shadow-2xl">
          <p className="absolute text-stone-100 z-10 px-4 py-2 text-xl font-extrabold text-shadow-md text-shadow-stone-800">{name}</p>
          <div className="before:w-full before:h-25 before:bg-linear-[0deg,#00000000_0%,#440044bb_50%] before:absolute before:z-5">
            <Image src={image} width="300" height="300" alt="name" />
          </div>
        </div>
      </Link>
  )
}


export default RecipeCard