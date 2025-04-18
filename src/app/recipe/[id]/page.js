import { parseMealDBRecipe, fetchMealBD } from "@/libs/mealDb";
import Image from "next/image";
import NotFound from "@/app/not-found";


// TODO: bautify page, convert into recipe page

export default async function Home({ params }) {

  const { id } = await params;
  const { recipes : recipe, err } = await fetchMealBD(`${process.env.NEXT_PUBLIC_MDB_GET_RECIPE_ID}${id}`, parseMealDBRecipe);
  if (err) return <NotFound />;

  const { name, category, region, instructions, image, source, ingredients } = recipe

  return(
    <>
      <div className="grid grid-cols-2 items-start justify-between">
        <h1 className="font-extrabold text-3xl col-start-1 col-end-3 my-4 mx-8">{name}</h1>
        {/* <p className="">{category}</p>
        <p className="">{region}</p> */}
        <Image src={image} width={500} height={500} alt={name} className="col-start-1 col-end-2 m-4" />
        <table className="text-sm col-start-2 col-end-3 m-8 w-100">
          <thead>
            <tr className="text-left">
              <th className=" border-stone-200 border-dashed p-4">Ingredients</th>
              <th className=" border-stone-200 border-dashed p-4">Measures</th>
            </tr>
          </thead>
          <tbody>
            {ingredients.map((item, index) => 
              <tr key={index} className="italic text-stone-700">
                <td className="border-b border-stone-200 border-dashed px-4 py-1">{item.item}</td>
                <td className="border-b border-stone-200 border-dashed px-4 py-1">{item.measure}</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="col-start-1 col-end-3 p-4">
          <h2 className="text-2xl font-bold pb-4">Instructions:</h2>
          {instructions.split("\n").map((line,i) => line != "\r" && <p className="pt-2" key={i}> - {line}</p>)} {/* some lines has '\r\n\r\n' as a line sep, it causes empty lines on a page, I check it here */}
        </div>
        {source && <div className="col-start-1 col-end-3 p-4">
          <h3 className="font-semibold text-sm">Source:</h3>
          <p className="text-sm text-stone-500">{source}</p>
        </div>}
      </div>
    </>
  )
}