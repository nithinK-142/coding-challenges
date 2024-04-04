import useScrollDetection from "@/hooks/useScrollDetection";
const DetectScroll = () => {
  const scrollDirection = useScrollDetection();
  return (
    <div className="flex flex-col items-center my-10 space-y-2">
      <h1>DetectScroll</h1>
      {scrollDirection}
    </div>
  );
};

export default DetectScroll;
