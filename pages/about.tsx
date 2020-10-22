import Link from "next/link";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

const AboutPage = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/login");
  };
  return (
    <Layout title="About | Next.js + TypeScript Example">
      <h1>About</h1>
      <p>This is the about page</p>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
        <a onClick={handleLoginClick}>Go to login page</a>
      </p>
    </Layout>
  );
};

export default AboutPage;
