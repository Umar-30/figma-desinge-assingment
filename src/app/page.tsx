import Image from "next/image";
import Header from "../../component/Header";

export default function Home() {
  return (
    <div
      className="
    w-[1486px]
    h-[960.57px]">
      <Header />
      <div className="flex h-[80%]">
        <div className="w-1/2 flex flex-col justify-center items-start m-12">
          <h1 className=" text-[40px] w-[496px] h-[189px] mt-[30px] ml-[10px] font-bold leading-[65.8px] font-serif">
            IMPECCABLE CRAFTMANSHIP AND FINESSE
          </h1>
          <p className="w-[902px] h-[147px] ml-[10px] font-medium leading-[49.35px] text-[30px] tracking-[2.5%]">
            An example of intricate workmanship and detail, elegant<br/> necklaces
            and long and short chains form a part of our <br />desirable collection.
          </p>
          <button className="ml-[10px] g-[10px] p-[10px] bg-[#A29875] font-bold text-white rounded-[10px] 
          w-[288px] h-[58px] text-2xl font-serif ">Explore Now</button>
        </div>
        <div className="w-[462px] h-[674px] flex justify-center items-center">
        <Image src={'/image/jewellary.svg'}
        alt="jewellary pi"
        width={462}
        height={647}
         /></div>
      </div>
    </div>
  );
}
