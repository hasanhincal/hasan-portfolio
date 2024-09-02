"use client";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

const ProjectButton = ({ project, urlName }) => {
  return (
    <>
      <Link href={project} target="_blank">
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group hover:shadow-md hover:shadow-accent">
              {urlName === "Live project" ? (
                <BsArrowUpRight
                  className="text-white text-3xl group-hover:text-accent
              group-hover:-rotate-45 tramsition-all duration-300"
                />
              ) : (
                <BsGithub className="text-white text-3xl group-hover:text-accent" />
              )}
            </TooltipTrigger>
            <TooltipContent>
              <p>{urlName}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Link>
    </>
  );
};

export default ProjectButton;
