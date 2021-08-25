import { getAllMembers } from "../../lib/members";
import Layout from "../../components/Layout";
import styles from "../index.module.css";
import TeamNavbar from "../../components/TeamNavbar";

export async function getStaticPaths() {
  return {
    paths: getAllMembers().map(({ filename }) => {
      return {
        params: {
          year: filename.split('.')[0]
        }
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: getAllMembers().filter(({ year }) => year === params.year)[0]
  };
}

function memberCard({name, position, photoUrl, isFoundingMember}, index) {
  return (
      <div key={index}>
          <div className="text-center">
              {photoUrl && <img src={photoUrl} className="responsive-image member-photo"/>}
          </div>
          <h2> {name} </h2>
          {
            isFoundingMember &&
            <h3> Founding Member </h3>
          }
          <h3> {position} </h3>
      </div>
  );
}

export default function Team({ year, teams }) {
  return(
      <div>
          <Layout>
            <TeamNavbar/>
            {
              teams.map(({name, description, members}, teamIndex) => (
                <div key={teamIndex}>
                  <div className={`wide-container ${styles.separator}`}>{ name }</div>
                  <div className="row">
                    { members.filter(({photoUrl}) => photoUrl).map(memberCard) }
                  </div>
                  <div className="row">
                    { members.filter(({photoUrl}) => (photoUrl === undefined)).map(memberCard) }
                  </div>
                </div>
              ))
            }
          </Layout>
      </div>
  );
}
