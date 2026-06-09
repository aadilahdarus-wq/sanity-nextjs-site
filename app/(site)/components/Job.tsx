import Image from "next/image";
import { getJob } from "@/sanity/sanity.query";
import type { JobType } from "@/types";

export default async function Job() {
  const job: JobType[] = await getJob();

  if (!job || job.length === 0) return null;

  return (
    <section className="mt-32">
      <div className="mb-16">
        <h2 className="font-semibold text-4xl mb-4">Work Experience</h2>
      </div>

      <div className="flex flex-col gap-y-12">
        {job.map((data) => (
          <div
            key={data._id}
            className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl"
          >
            {data.logo && (
              <a href={data.url} rel="noreferrer noopener"
                className="min-h-[60px] min-w-[60px] rounded-md overflow-clip relative">
                <Image src={data.logo} className="object-cover"
                  alt={`${data.name} logo`} fill />
              </a>
            )}
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-bold">{data.name}</h3>
              <p>{data.jobTitle}</p>
              <small className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                {data.startDate ? new Date(data.startDate).getFullYear() : ""} - {data.endDate ? new Date(data.endDate).getFullYear() : "Present"}
