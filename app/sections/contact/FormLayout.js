import Form from "./Form";

export default function FormLayout() {
  return (
    <section className="max-w-[1181px] mx-auto pb-24">
      <div className="grid grid-cols-[1fr_2fr] justify-start gap-48">
        <div className="text-black flex flex-col gap-2">
          <h5 className="text-[22.89px] font-medium">USA Office</h5>
          <p className="text-[16.78px]">
            415 W. Golf Rd Suite 55-K Arlington Heights , IL 60005.
          </p>
          <p className="text-[16.78px] underline">USA +1 315 791 4472</p>

          <h5 className="text-[22.89px] mt-6 font-medium">UAE Office</h5>
          <p className="text-[16.78px]">
            Meydan Grandstand 6th Floor, Meydan Road, Nada Al Sheba Dubai, UAE.
          </p>

          <h5 className="text-[22.89px] mt-6 font-medium">Pakistan Office</h5>
          <p className="text-[16.78px]">
            Suite# 213 Sumya Business Avenue MACHS , Karachi, Pakistan.
          </p>
          <p className="text-[16.78px] underline">PAK +92 213 432 6085</p>

          <p className="text-[22.89px] mt-6 font-medium">Email</p>
          <p className="text-[16.78px] underline">info@kaispe.com</p>
        </div>

        <div className="text-black">
          <p className="text-[19px] text-[#949494]">
            Employee Leave Management
          </p>
          <div className="border border-[#393939] border-t-[0.6px] opacity-40 mt-3 mb-12 w-[354px]"></div>

          <div>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}
