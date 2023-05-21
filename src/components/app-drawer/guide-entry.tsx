import Link, { LinkProps } from "next/link";

type PropsType = {
  title: string;
  icon: React.ReactNode;
  href: LinkProps["href"];
};

export const GuideEntry = ({ icon, title, href }: PropsType) => {
  return (
    <div className="flex h-10 flex-1 items-center rounded-lg bg-black bg-opacity-0 hover:bg-opacity-5">
      <Link href={href}>
        <div className="flex flex-1 items-center px-3">
          <span className="mr-6 text-2xl">{icon}</span>
          <span className="text-sm">{title}</span>
        </div>
      </Link>
    </div>
  );
};
