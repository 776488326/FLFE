import SearchForm from "@/components/SearchForm";

export default async function Home({searchParams}:{searchParams: Promise<{search?: string}>}) {
  const search = (await searchParams).search;
  return (
    <>
      <section className="pink_container">
        <h1 className="heading font-zhi-mang-xing font-[900]">
          人生如梦 <br/>
          光明即使微弱，总会驱散黑暗
        </h1>
        <p className="sub-heading !max-w-3xl">
          成功不是最终的，失败也不是致命的；继续前进的勇气才是最重要的。
        </p>
        <SearchForm search={search}/>
      </section>
    </>
  );
}
