import MeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

const NewMeetups = () => {
  const router = useRouter();
  const meetupsFormHandler = async (meetupsEntry) => {
    console.log(meetupsEntry);
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupsEntry),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data.message);

    router.push("/");
  };

  return <MeetupForm onAddMeetup={meetupsFormHandler} />;
};
export default NewMeetups;
