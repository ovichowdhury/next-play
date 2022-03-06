export default function GradCard({ children }) {
  return (
    <>
      <div className="rounded-xl w-52 h-64 p-1 bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] animate__animated animate__fadeIn animate__slower">
        <div className="flex flex-col justify-between h-full bg-white text- rounded-lg p-4">
          {children}
        </div>
      </div>
    </>
  );
}
