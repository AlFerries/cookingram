import Image from "next/image"
import Link from "next/link"

const RecipeCard = ({recipe}) => {

  const {id, name, image} = recipe

  return (
      <Link href={`/recipe/${id}`}>
        <div className="flex flex-col relative w-full md:rounded-2xl rounded-t-3xl overflow-hidden md:shadow-blue-600 shadow-md md:shadow-2xl h-75">
          <p className="absolute text-stone-100 z-10 p-6 md:px-4 md:py-2 text-3xl md:text-xl font-extrabold text-shadow-md text-shadow-stone-800">{name}</p>
          <div className="before:w-full before:h-25 before:bg-linear-[0deg,#00000000_0%,#440044bb_50%] before:absolute before:z-5">
            <Image src={image} width="1000" height="1000" alt="name" className="w-full md:w-75" />
          </div>
        </div>
      </Link>
  )
}


export default RecipeCard