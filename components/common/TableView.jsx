import React from "react";
import { Table } from "flowbite-react";

export default function TableView() {
  return (
    <Table striped={true}>
      <Table.Head>
        <Table.HeadCell>Product name</Table.HeadCell>
        <Table.HeadCell>Color</Table.HeadCell>
        <Table.HeadCell>Category</Table.HeadCell>
        <Table.HeadCell>Price</Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">Edit</span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Apple MacBook Pro 17
          </Table.Cell>
          <Table.Cell>Sliver</Table.Cell>
          <Table.Cell>Laptop</Table.Cell>
          <Table.Cell>$2999</Table.Cell>
          <Table.Cell>
            <a
              href="#"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500 mx-2"
            >
              Details
            </a>
            <a
              href="#"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500 mx-2"
            >
              Edit
            </a>
            <a
              href="#"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500 mx-2"
            >
              Delete
            </a>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
