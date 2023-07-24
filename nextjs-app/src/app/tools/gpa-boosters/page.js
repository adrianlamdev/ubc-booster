"use client";

import { useState, useEffect } from "react";
import { Spacer, Table, useAsyncList, Link } from "@nextui-org/react";

export default function GpaBoosterPage() {
  const columns = [
    { name: "Course ID", uid: "courseId" },
    { name: "Overall", uid: "overall" },
    { name: "Level", uid: "level" },
    { name: "Year Range", uid: "yearRange" },
  ];

  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await fetch("http://localhost:3000/api/get-booster-list", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const json = await res.json();
      setList(json.boosters);
      setLoading(false);
    }

    load();
  }, []);

  useEffect(() => {
    console.log(list); // This will log the updated state
  }, [list]); // This effect runs whenever `list` changes

  // async function load({ signal, cursor }) {
  //   // If no cursor is available, then we're loading the first page.
  //   // Otherwise, the cursor is the next URL to load, as returned from the previous page.
  //   const res = await fetch(
  //     cursor || "https://swapi.py4e.com/api/people/?search=",
  //     { signal },
  //   );
  //   const json = await res.json();
  //   return {
  //     items: json.results,
  //     cursor: json.next,
  //   };
  // }
  // const list = useAsyncList({ load });

  return (
    <div className="py-32 lg:px-64 px-10">
      <div className="flex flex-col">
        <h1 className="font-bold text-3xl lg:text-5xl">
          List of GPA boosters.
        </h1>
        <Spacer y={1} />
        <p className="lg:text-lg">Here's a list of recent GPA boosters.</p>
        <Spacer y={1} />
        <div className="mx-20">
        <Table
          bordered
          shadow={false}
          aria-label="Example table with dynamic content & infinity pagination"
          css={{ height: "calc($space$14 * 10)" }}
          color="secondary"
        >
          <Table.Header columns={columns}>
            {(column) => (
              <Table.Column key={column.uid}>{column.name}</Table.Column>
            )}
          </Table.Header>
          <Table.Body items={list}>
            {(item) => (
                <Table.Row key={item.courseId}>
                    {(key) => (
                        <Table.Cell>
                            {key === "courseId" ? (
                                <Link href={`/path/to/${item[key]}`}>{item[key]}</Link>
                            ) : (
                                item[key]
                            )}
                </Table.Cell>
            )}
        </Table.Row>
    )}
</Table.Body>
        </Table>
        </div>

      </div>
    </div>
  );
}
