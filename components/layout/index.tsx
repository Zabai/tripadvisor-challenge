import APP from "@/constants/app";
import Head from "next/head";

type Props = {
  children: JSX.Element;
  description?: string;
  title?: string;
};

export default function Layout({
  children,
  description = "Find the place that suits you best",
  title = APP.NAME,
}: Props) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <main>{children}</main>
    </div>
  );
}
