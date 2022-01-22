import MeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetups = () => {
  const meetupsFormHandler = (meetupsEntry) => {
    console.log(meetupsEntry);
  };

  return <MeetupForm onAddMeetup={meetupsFormHandler} />;
};
export default NewMeetups;
