"use client";

import { Spacer, Table, useAsyncList } from "@nextui-org/react";

export default function GpaBoosterPage() {
  const columns = [
    { name: "Subject", uid: "name" },
    { name: "Course", uid: "height" },
    { name: "Overall", uid: "mass" },
  ];

  async function load({ signal, cursor }) {
    // If no cursor is available, then we're loading the first page.
    // Otherwise, the cursor is the next URL to load, as returned from the previous page.
    const res = await fetch(
      cursor || "https://swapi.py4e.com/api/people/?search=",
      { signal },
    );
    const json = await res.json();
    return {
      items: json.results,
      cursor: json.next,
    };
  }
  const list = useAsyncList({ load });

  return (
    <div className="py-32 lg:px-64 px-10">
      <div className="flex flex-col">
        <h1 className="font-bold text-3xl lg:text-5xl">
          List of GPA boosters.
        </h1>
        <Spacer y={1} />
        <p className="lg:text-lg">Here's a list of recent GPA boosters.</p>
        <Spacer y={1} />
        <Table
          bordered
          shadow={false}
          aria-label="Example table with dynamic content & infinity pagination"
          css={{ minWidth: "100%", height: "calc($space$14 * 10)" }}
          color="secondary"
        >
          <Table.Header columns={columns}>
            {(column) => (
              <Table.Column key={column.uid}>{column.name}</Table.Column>
            )}
          </Table.Header>
          <Table.Body
            items={list.items}
            loadingState={list.loadingState}
            onLoadMore={list.loadMore}
          >
            {(item) => (
              <Table.Row key={item.name}>
                {(key) => <Table.Cell>{item[key]}</Table.Cell>}
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
