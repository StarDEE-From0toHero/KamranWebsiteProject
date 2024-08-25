export default function Footer() {
  return (
    <footer className="flex flex-wrap justify-start items-center h-[170px] bg-[#28335B]">
      <img
        src="./image/favicon.svg"
        className="content-center ml-[80px] w-[102px] h-[75px]"
      />
      <div className="text-white font-bold">
        <h1 className="text-[48px]">
          <span className="text-[#F2B734]">STAR</span>DEE
        </h1>
        <h2 className="text-lg">example@gmail.com</h2>
      </div>
    </footer>
  );
}
