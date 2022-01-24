import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  return (
    <MeetupDetail
      img={props.meetup.img}
      alt={props.meetup.title}
      title={props.meetup.title}
      address={props.meetup.address}
      description={props.meetup.description}
    />
  );
};

export async function getStaticPaths() {
  // fetch data from an API the Paths
  return {
    paths: [{ params: { meetupId: "m1" } }, { params: { meetupId: "m2" } }],
    fallback: false,
  };
}

export function getStaticProps(context) {
  // fetch data from an API
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetup: {
        id: { meetupId },
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.lrEfWvPVD4P8zrVwIr6xSQHaEo%26pid%3DApi&f=1",
        title: "First Meetup",
        address: "some St 120, country",
        description: "Our first Meetup",
      },
    },
  };
}
export default MeetupDetails;
