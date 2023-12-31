"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  TableHeader,
} from "@/components/ui/table";
import Loading from "./Loading";
import EventCard from "./EventCard";

export const Event = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <div className=" flex">
        <div className="p-[20vh] w-2/3 ">
          <div className="flex w-full item-center justify-center pb-10">
            <span className="font-bold text-xl">List of all our Events</span>
          </div>
          <Table>
            <TableHeader>
              <TableRow className="w-[100px] ">
                <TableHead className="font-bold text-lg">Date</TableHead>
                <TableHead className="font-bold text-lg">Event</TableHead>
                <TableHead className="font-bold text-lg">Organiser</TableHead>
                <TableHead className="font-bold text-lg">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="cursor-pointer">
              <TableRowComp
                date="23-12-2023"
                title="Bhoomi Pujan of Delhi branch"
                organizer="Amit Grewal"
                status="Upcoming"
                setIsLoading={setIsLoading}
              />
              <TableRowComp
                date="23-12-2023"
                title="Bhoomi Pujan of Delhi branch"
                organizer="Amit Grewal"
                status="Completed"
                setIsLoading={setIsLoading}
              />
              <TableRowComp
                date="23-12-2023"
                title="Bhoomi Pujan of Delhi branch"
                organizer="Amit Grewal"
                status="Ongoing"
                setIsLoading={setIsLoading}
              />
              <TableRowComp
                date="23-12-2023"
                title="Bhoomi Pujan of Delhi branch"
                organizer="Amit Grewal"
                status="Upcoming"
                setIsLoading={setIsLoading}
              />
            </TableBody>
          </Table>
        </div>

        {/* skeleton */}
        <div className="pt-[15vh] px-[10vh] flex gap-5  w-1/3 ">
          {isLoading ? <Loading /> : <EventCard />}
        </div>
      </div>
    </>
  );
};

// -----------------------------------------------------------------
interface TableRowCompType {
  date: string;
  title: string;
  organizer: string;
  status: "Upcoming" | "Completed" | "Ongoing";
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
export const TableRowComp = ({
  date,
  title,
  organizer,
  status,
  setIsLoading,
}: TableRowCompType) => {
  return (
    <>
      <TableRow>
        <TableCell className="font-semibold text-lg">{date}</TableCell>
        <TableCell
          onClick={() => setIsLoading((prev) => !prev)}
          className="font-semibold text-lg hover:text-blue-600 hover:underline hover:underline-offset-4"
        >
          {title}
        </TableCell>
        <TableCell className="font-semibold text-lg">{organizer}</TableCell>
        <TableCell
          className={`
          font-semibold text-lg ${
            status === "Upcoming"
              ? "text-green-600"
              : status === "Ongoing"
              ? "text-blue-600"
              : "text-red-600"
          }`}
        >
          {status}
        </TableCell>
      </TableRow>
    </>
  );
};
