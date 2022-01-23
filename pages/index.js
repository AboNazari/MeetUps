import MeetupList from "../components/meetups/MeetupList";
const Dummy_Meetups = [
  {
    id: "1",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.lrEfWvPVD4P8zrVwIr6xSQHaEo%26pid%3DApi&f=1",
    title: "First Meetup",
    address: "somewhere 110 st city",
    description: "This is first meetup",
  },
  {
    id: "2",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.uSaEGYBQHosLJYLK1CPWrQHaE8%26pid%3DApi&f=1",
    title: "Second Meetup",
    address: "somewhere 310 st city",
    description: "This is Second meetup",
  },
  {
    id: "3",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.BvFhZTRcaAyMIIZKiMqZwgHaEo%26pid%3DApi&f=1",
    title: "Third Meetup",
    address: "somewhere 210 st city",
    description: "This is Third meetup",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   // fetch some data from an API
//   return {
//     props: {
//       meetups: Dummy_Meetups,
//     },
//   };
// }

export async function getStaticProps() {
  //fetch some data from an API
  return {
    props: {
      meetups: Dummy_Meetups,
    },
    revalidate: 10,
  };
}

export default HomePage;
