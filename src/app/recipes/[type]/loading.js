export default function Loading() {
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap justify-around md:px-16 py-8 gap-8 mx-auto">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="w-full md:w-75 h-75 bg-gray-300 animate-pulse md:rounded-2xl rounded-t-3xl shadow-inner"
        >
          <div className="w-full h-[60px] bg-gray-400 rounded-t-2xl" />
        </div>
      ))}
    </div>
  );
}