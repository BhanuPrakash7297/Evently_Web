import EventForm from "@/components/EventForm";
import { getEventById } from "@/lib/actions/event.actions";
import { auth } from "@clerk/nextjs";

type UpdateEventProps = {
  params: {
    id: string;
  };
};


const UpdateEvent = async ({ params: { id } }: UpdateEventProps) => {
  
  const event = await getEventById(id);
  console.log("Event Update",event);
  const { userId } = auth();
  const user_Id = userId as string;
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Update Event
        </h3>
      </section>

      <div className="wrapper my-8">
        <EventForm
          type="Update"
          event={event}
          eventId={event._id}
          userId={user_Id}
        />
      </div>
    </>
  );
};

export default UpdateEvent;
