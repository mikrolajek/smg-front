import { gql, useQuery, useSubscription } from "@apollo/client";
import Link from "next/link";
import Layout from "../components/Layout";

const czlowiek = {
  name: "maciek",
  surname: "kowalski",
  age: 18,
};

const MojKomponent = ({ arg }) => {
  return (
    <div>
      <h1>{arg.name}</h1>
      <h1>{arg.surname}</h1>
    </div>
  );
};

const IndexPage = () => {
  const GET_CODES = gql`
    subscription Lalala {
      log {
        id
      }
    }
  `;

  const { loading, error, data } = useSubscription(GET_CODES);

  if (loading) {
    return <h1>loading</h1>;
  }

  if (!loading) {
  }

  if (error) {
    console.log(error);
  }
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <MojKomponent arg={czlowiek} />
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <p>{!loading && JSON.stringify(data)}</p>
    </Layout>
  );
};

IndexPage.getInitialProps = async (ctx) => ({ test: "testtest" });

export default IndexPage;
