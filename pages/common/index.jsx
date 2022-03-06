import GradCard from "@components/common/GradCard";

export default function Index() {
  return (
    <>
      <div className="flex gap-4 justify-center  flex-wrap mt-10">
        <GradCard>
          <p>Card 1</p>
        </GradCard>
        <GradCard>
          <p>Card 2</p>
        </GradCard>
      </div>
    </>
  );
}
