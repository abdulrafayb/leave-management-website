import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function Button({
  href = "/",
  text,
  className = "",
  target = "_self",
  ...props
}) {
  return (
    <div className="text-center">
      <div
        className={twMerge(
          "bg-button-bg px-5 py-2.5 rounded-2xl text-[15px] inline-block w-auto",
          className
        )}
        {...props}
      >
        <Link href={href} target={target}>
          {text}
        </Link>
      </div>
    </div>
  );
}
