export default function Loading() {
  return (
    <>
      <div className="md:grid grid-cols-2 items-start justify-between">
        <div className="col-start-1 col-end-3 my-4 md:mx-8 bg-gray-400 animate-pulse w-100 h-10"/>
        <div className="col-start-1 col-end-2 md:m-4 w-125 h-125  bg-gray-300 animate-pulse" />
        <table className="text-sm col-start-2 col-end-3 m-8 w-100 h-100">
          <thead>
            <tr className="text-left">
              <th className=" border-white border p-4 bg-gray-400 animate-pulse w-50" />
              <th className=" border-white border p-4 bg-gray-400 animate-pulse w-50"/>
            </tr>
          </thead>
          <tbody>
            {Array(10).fill(null).map((_, i) => 
              <tr key={i} className="italic text-stone-700">
                <td className="border-white border px-4 py-1 bg-gray-300 animate-pulse w-50" />
                <td className="border-white border px-4 py-1 bg-gray-300 animate-pulse w-50" />
              </tr>
            )}
          </tbody>
        </table>
        <div className="col-start-1 col-end-3 p-4">
          <div className="pb-4 bg-gray-400 animate-pulse w-50 h-10" />
          {Array(5).fill(null).map((_,i) => <div className="pt-2 bg-gray-300 animate-pulse w-full h-10 border-white border" key={i}/>)}
        </div>
        <div className="col-start-1 col-end-3 p-4"/>
      </div>
    </>
  );
}