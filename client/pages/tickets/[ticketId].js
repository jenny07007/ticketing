import Router from "next/router";
import buildClient from "../../helpers/build-client.js";
import useRequest from "../../hooks/useRequest";

export default function TicketShow({ ticket }) {
  const { doRequest, errors } = useRequest({
    url: "/api/orders",
    method: "post",
    body: { ticketId: ticket.id },
    onSuccess: (order) =>
      Router.push("/orders/[orderId]", `/orders/${order.id}`),
  });

  return (
    <div>
      <h1>{ticket.title}</h1>
      <h2>Price: {ticket.price}</h2>
      {errors}
      <button onClick={() => doRequest()} className="btn btn-primary">
        Purchase
      </button>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { ticketId } = context.query;
  const client = buildClient(context);
  const { data } = await client.get(`/api/tickets/${ticketId}`);

  return {
    props: {
      ticket: data,
    },
  };
}
