import { Table } from "@heroui/react";


const page = () => {
    return (
        <div className="container mx-auto mt-10">
      <Table>
          
      <Table.ScrollContainer>
        <Table.Content aria-label="Team members" className="min-w-[600px]">
          <Table.Header>
            <Table.Column isRowHeader>Name</Table.Column>
            <Table.Column>Phone</Table.Column>
            <Table.Column>Tutor Name </Table.Column>
            <Table.Column>Email</Table.Column>
            <Table.Column>Status</Table.Column>
            <Table.Column>Cancel</Table.Column>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Kate Moore</Table.Cell>
              <Table.Cell>CEO</Table.Cell>
              <Table.Cell>Active</Table.Cell>
              <Table.Cell>kate@acme.com</Table.Cell>
              <Table.Cell>kate@acme.com</Table.Cell>
              <Table.Cell>kate@acme.com</Table.Cell>
            </Table.Row>


          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
        </div>
    );
};

export default page;