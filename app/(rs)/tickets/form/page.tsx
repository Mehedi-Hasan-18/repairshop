import { BackButton } from "@/components/BackButton";
import { getCustomer } from "@/lib/queries/getCustomer";
import { getTicket } from "@/lib/queries/getTicket";
import { parse } from "path";

export default async function CustomerFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  try {
    const { customerId, ticketId } = await searchParams;

    //Edit ticlet form
    if (!customerId && !ticketId) {
      return (
        <>
          <h2 className="text-2xl mb-2">
            Ticket Id or Customer Id required to load tickett form
          </h2>
          <BackButton variant="default" title="Go Back"></BackButton>
        </>
      );

      //put customer form component
    }

    if (customerId) {
      const customer = await getCustomer(parseInt(customerId));

      if (!customer) {
        return (
          <>
            <h2 className="text-2xl mb-2">
              Customer Id #{customerId} not found
            </h2>
            <BackButton variant="default" title="Go Back"></BackButton>
          </>
        );
      }

      if (!customer.active) {
        return (
          <>
            <h2 className="text-2xl mb-2">
              Customer Id #{customerId} not found
            </h2>
            <BackButton variant="default" title="Go Back"></BackButton>
          </>
        );
      }
      //return ticket form
      console.log(customer);
    }

    if (ticketId) {
      const ticket = await getTicket(parseInt(ticketId));

      if (!ticket) {
        return (
          <>
            <h2 className="text-2xl mb-2">Ticket Id #{ticketId} not found</h2>
            <BackButton variant="default" title="Go Back"></BackButton>
          </>
        );

        const customer = await getCustomer(ticket.customerId);

        //return ticket form
        console.log("ticket: ", ticket);
        console.log("customer: ", customer);
      }
    }
  } catch (e) {
    if (e instanceof Error) {
      throw e;
    }
  }
}
