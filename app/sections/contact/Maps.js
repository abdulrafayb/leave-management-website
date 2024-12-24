import ImageOne from "/assets/contact/usa-map.png";
import ImageTwo from "/assets/contact/pk-map.png";
import Heading from "../../components/Heading";

import Image from "next/image";

export default function Maps() {
  return (
    <section className="max-w-[1181px] mx-auto pb-24">
      <Heading
        heading="Find Us on Google Maps"
        paragraph="Discover our exact location effortlessly on Google Maps! With detailed directions, real-time navigation, and accurate markers, finding us has never been easier."
      />

      <div className="grid grid-cols-2 gap-8">
        <div>
          <div className="bg-white p-4">
            <Image
              src={ImageOne}
              alt="Description"
              width={567}
              height={424}
              className="object-cover object-center"
            />
          </div>
          <div className="text-center text-black mt-8">
            <p className="text-[22.89px] mb-2 font-medium">USA Office</p>
            <p className="text-[16.78px] leading-[25.18px] px-24">
              415 W. Golf Rd Suite 55-K Arlington Heights , IL 60005.
            </p>
          </div>
        </div>

        <div>
          <div className="bg-white p-4">
            <Image
              src={ImageTwo}
              alt="Description"
              width={567}
              height={424}
              className="object-cover object-center"
            />
          </div>
          <div className="text-center text-black mt-8">
            <p className="text-[22.89px] mb-2 font-medium">Pakistan Office</p>
            <p className="text-[16.78px] leading-[25.18px] px-8">
              Suite# 213 Sumya Business Avenue MACHS , Karachi, Pakistan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
