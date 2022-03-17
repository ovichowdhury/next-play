import GradButton from "@components/common/GradButton";
import GradCard from "@components/common/GradCard";
import Navbar from "@components/common/navbar/Navbar";

export default function Index() {
  return (
    <>
      <div className="m-0">
        <Navbar></Navbar>
        <div className="flex gap-4 justify-center  flex-wrap mt-10">
          <GradCard>
            <p>Card 1</p>
          </GradCard>
          <GradCard>
            <p>Card 2</p>
          </GradCard>
        </div>
        <div className="flex justify-center m-10">
          <GradButton>Submit</GradButton>
        </div>
      </div>
    </>
  );
}
