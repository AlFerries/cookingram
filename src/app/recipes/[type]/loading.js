export default function Loading() {
  return (
    <div className="flex flex-wrap justify-between px-16 py-8 gap-8">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="w-75 h-[300px] bg-gray-300 animate-pulse rounded-2xl shadow-inner"
        >
          <div className="w-full h-[60px] bg-gray-400 rounded-t-2xl" />
        </div>
      ))}
    </div>
  );
}