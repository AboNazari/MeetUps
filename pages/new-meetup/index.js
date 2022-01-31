import MeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

const NewMeetups = () => {
  const router = useRouter();
  async function meetupsFormHandler(meetupsEntry) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupsEntry),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);

    router.push("/");
  }

  return <MeetupForm onAddMeetup={meetupsFormHandler} />;
};
export default NewMeetups;
