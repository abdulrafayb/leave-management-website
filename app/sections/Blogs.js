import ImageOne from "/assets/blog-image-one.png";
import ImageTwo from "/assets/blog-image-two.png";
import ImageThree from "/assets/blog-image-three.png";
import Button from "../components/Button";

import Image from "next/image";
import Link from "next/link";

const data = [
  {
    image: ImageOne,
    title: "How Easily Implement UI Design in Microsoft Power Apps",
    description:
      "Microsoft PowerApps provides a flexible platform to create powerful, low-code business applications...",
    link: "https://www.kaispe.com/how-to-easily-implement-ui-design-in-microsoft-powerapps-a-comprehensive-guide/",
    linkText: "Read More.",
  },
  {
    image: ImageTwo,
    title: "Embrace Digital Transformation to Improve Speech Therapy Outcomes",
    description:
      "The healthcare sector, especially speech therapy, is experiencing a significant shift...",
    link: "https://www.kaispe.com/embrace-digital-transformation-to-improve-speech-therapy-outcomes/",
    linkText: "Read More.",
  },
  {
    image: ImageThree,
    title: "How Generative AI is Disrupting Field Service Inductry",
    description:
      "The integration of Generative AI is one of the most significant advancements in the rapidly....",
    link: "https://www.kaispe.com/how-generative-ai-is-disrupting-field-service-industry/",
    linkText: "Read More.",
  },
];

export default function Blogs() {
  return (
    <section className="max-w-[1181px] mx-auto pb-24">
      <div className="flex justify-between items-center">
        <div className="w-[600px]">
          <h5 className="-text-dark text-[32px] mb-4 font-medium">Blogs</h5>
          <p className="-text-light-dark text-[18px]">
            Blogs are platforms where businesses share industry insights,
            updates, and valuable content
          </p>
        </div>
        <div>
          <Button
            href="https://www.kaispe.com/resources/blogs/"
            target="_blank"
            text="Go to Blogs"
            className="px-6"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-12 mt-12">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col border-[2px] -border-light rounded-2xl"
          >
            <Image
              src={item.image}
              alt="icon"
              width={363.79}
              height={288}
              className="object-cover object-center"
            />
            <div className="py-8 px-4">
              <h3 className="-text-dark text-[17.5px] leading-[26.25px] mb-4 font-medium">
                {item.title}
              </h3>
              <p className="-text-light-dark text-[12.5px] leading-[18.75px] mb-4">
                {item.description}
              </p>
              <Link
                href={item.link}
                target="_blank"
                className="-text-dark underline text-[14px]"
              >
                {item.linkText}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
