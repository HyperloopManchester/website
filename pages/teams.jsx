import Layout from "../components/Layout";
import styles from "./index.module.css";

import { getAllMembers } from "../lib/members";

export async function getStaticProps() {
  return {
    props: {
      members: getAllMembers()
    },
  }
}

export default function Team({ members }) {

    return(
        <div>
            <Layout>
              <div className={`wide-container ${styles.separator}`}> Software Team </div>
              <ul>
                <li>
                Any software assistance required by other teams, mostly Electronics, currently coding the state machine (using MATLAB Stateflow software).
                </li>
              </ul>
            </Layout>
        </div>
    );
}
