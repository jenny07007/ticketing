import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@autickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
