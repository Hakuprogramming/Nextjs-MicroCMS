import Link from "next/link";
import { client } from "../libs/client";
import { useState } from "react";
import styles from "@/styles/Home.module.scss"

export default function Home({ blog }) {
  return (
    <main className="main" >
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};