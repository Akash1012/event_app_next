import React from "react";
import { useRouter } from "next/router";
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/event/event-list";
import EventsSearch from "../../components/event/events-search";

const AllEventsPage = () => {
  const events = getAllEvents();
  const router = useRouter();
  const findEventHandler = (year, month) => {
    const fullpath = `/events/${year}/${month}`;
    router.push(fullpath);
  };

  return (
    <React.Fragment>
      <EventsSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </React.Fragment>
  );
};
export default AllEventsPage;
