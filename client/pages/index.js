import Link from "next/link";
import buildClient from "../helpers/build-client";

export default function index({ currentUser, tickets }) {
  const ticketList = tickets.map((ticket) => (
    <tr key={ticket.id}>
      <td>{ticket.title}</td>
      <td>{ticket.price}</td>
      <td>
        <Link href="/tickets/[ticketId]" as={`/tickets/${ticket.id}`}>
          <a>View</a>
        </Link>
      </td>
    </tr>
  ));
  return (
    <div>
      <h2>Tickets</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>{ticketList}</tbody>
      </table>
    </div>
  );
}

export async function getServerSideProps(context) {
  const client = buildClient(context);
  const { data } = await client.get("/api/tickets");

  return {
    props: {
      tickets: data,
    },
  };
}
