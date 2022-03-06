export default function GradButton({ props, children }) {
  return (
    <>
      <button
        {...props}
        className="rounded-lg w-32 h-10 text-white bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] hover:cursor-pointer hover:scale-110 transition duration-300 hover:bg-gradient-to-l"
      >
        {children}
      </button>
    </>
  );
}
