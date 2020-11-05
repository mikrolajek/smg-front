// import { gql, useQuery } from "@apollo/client";
// import Link from "next/link";
// import Layout from "../components/Layout";
// import { GetStaticProps, InferGetStaticPropsType } from "next";

// interface IHuman {
//   name: string;
//   surname: string;
//   age: number;
// }

// const MojKomponent = (czlowiek: IHuman | any) => {
//   return (
//     <div>
//       <h1>{czlowiek.name}</h1>
//       <h1>{czlowiek.surname}</h1>
//     </div>
//   );
// };

// const IndexPage = ({
//   czlowiek,
// }: InferGetStaticPropsType<typeof getStaticProps>) => {
//   const GET_CODES = gql`
//     query Lalala {
//       log {
//         id
//       }
//     }
//   `;

//   const { loading, error, data } = useQuery(GET_CODES);

//   if (loading) {
//     return <h1>loading</h1>;
//   }

//   if (!loading) {
//   }

//   if (error) {
//     console.log(error);
//   }
//   return (
//     <Layout title="Home | Next.js + TypeScript Example">
//       <h1>Hello Next.js 👋</h1>
//       <MojKomponent arg={czlowiek} />
//       <p>
//         <Link href="/about">
//           <a>About</a>
//         </Link>
//       </p>
//       <p>{!loading && JSON.stringify(data)}</p>
//     </Layout>
//   );
// };

// export const getStaticProps: GetStaticProps = async () => {
//   const czlowiek: IHuman = {
//     name: "maciek",
//     surname: "kowalski",
//     age: 18,
//   };
//   return {
//     props: {
//       test: "testtest",
//       czlowiek,
//     },
//   };
// };

// export default IndexPage;
export const Index = () => {
  return <h1>Siema</h1>;
};
export default Index;
