import { db } from '@/utils/db';

const AboutPage = async () => {
  const posts = await db.post.create({
    data: {
      name: 'Hello World',
    },
  });

  const allPost = await db.post.findMany();

  return (
    <div>
      {allPost.map((post) => {
        return <div key={post.id}>{post.name}</div>;
      })}
    </div>
  );
};
export default AboutPage;
