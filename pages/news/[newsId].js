//our-domain.com/news/anything
import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();

  console.log(router.query.newsId);

  const newsId = router.query.newsId;

  //send a request to the backend API
  //then fetch the news item with that newsId

  return <h1>Dynamic Detail Page</h1>;
}

export default DetailPage;
