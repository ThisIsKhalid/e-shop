interface PageHeadingProps {
  title: string;
}

export default function PageHeading({ title }: PageHeadingProps) {
  return (
    <div className="flex items-center gap-x-5 md:gap-x-10">
      <div className="bg-primary h-[0.15rem] w-full" />
      <h1 className="page_heading">{title}</h1>
      <div className="bg-primary h-[0.15rem] w-full" />
    </div>
  );
}
