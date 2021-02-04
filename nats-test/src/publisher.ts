import nats from "node-nats-streaming";
import { TicketCreatedPublisher } from "./events/ticket-publisher";

console.clear();

const stan = nats.connect("ticketing", "abc", {
  url: "http://localhost:4222",
});

stan.on("connect", async () => {
  console.log("Publisher connected to NATS");

  const publisher = new TicketCreatedPublisher(stan);

  try {
    await publisher.publish({
      id: "1233",
      title: "jazz concert",
      price: 20,
    });
  } catch (e) {
    console.error(e);
  }
});
