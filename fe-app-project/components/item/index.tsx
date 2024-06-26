import Image from "next/image";

export default function Item({ data }: { data: any }) {
  console.log("http://localhost:1337" + data.image?.data?.attributes.url);
  return (
    <div
      className="col-span-1 overflow-hidden rounded-2xl"
      style={{
        background: "rgba(255, 255, 255, 0.0)",
        boxShadow:
          "0px 0.784px 0.784px -0.357px rgba(0, 0, 0, 0.02), 0px 1.92px 1.92px -0.714px rgba(0, 0, 0, 0.02), 0px 3.637px 3.637px -1.071px rgba(0, 0, 0, 0.02), 0px 6.35px 6.35px -1.429px rgba(0, 0, 0, 0.02), 0px 11.052px 11.052px -1.786px rgba(0, 0, 0, 0.02), 0px 20.243px 20.243px -2.143px rgba(0, 0, 0, 0.02), 0px 40px 40px -2.5px rgba(0, 0, 0, 0.02)",
      }}
    >
      <div>
        {/* <Image
          alt="anh"
          // src={"http://localhost:1337" + data.image?.data?.attributes.url}
          src={"/image1.png"}
          className="h-full w-full"
          width={10000}
          height={10000}
          // fill={true}
        /> */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={"http://localhost:1337" + data.image?.data?.attributes.url}
          className="w-full"
          alt=""
        />
      </div>
      <div className=" flex min-h-[225px] flex-col gap-[15px] bg-[#201F29] p-9 pb-0 mb:gap-4 mb:p-9  lg:pb-0">
        <h3 className="text-center text-[27px] font-bold leading-[30px] tracking-[-0.5px] text-[#fff] lg:text-[28px]">
          {data.heading}
        </h3>
        <p className="text-center tracking-[-0.4px] text-[#e0e0e0]">
          {data.desc}
        </p>
        {/* <p className="text-[#e0e0e0] text-center tracking-[-0.4px]"></p> */}
      </div>
      <div className="bg-[#16151E] px-0 py-5 text-center mb:px-8 lg:px-0">
        <p className="text-center text-sm text-[#9d9ab7]">{data.desc_sub}</p>
      </div>
    </div>
  );
}
