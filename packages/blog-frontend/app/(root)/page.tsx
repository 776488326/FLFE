import PreviewCard from "@/components/PreviewCard";
import SearchForm from "@/components/SearchForm";
export interface IPost {
  id: string,
  createdAt: Date,
  title: string,
  slug: string,
  description: string,
  category: string,
  image: string,
  author: {
    id: string,
    name: string,
    avatar: string
  },
  views: number
}

export default async function Home({searchParams}:{searchParams: Promise<{search?: string}>}) {
  let posts : Array<IPost> = [{
    id: '1',
    createdAt: new Date(),
    title: '测试文章',
    slug: 'test-author',
    description: '这是第一篇测试文章',
    category: 'React',
    image: '/preview.png',
    author: {
      id: '1',
      name: '冯亮',
      avatar: ''
    },
    views: 10
  }];

  function formatPost(data : Array<any>): Array<IPost> {
    return data.map(item => {
      return {
        id: item.id,
        createdAt: item.createdAt,
        title: item.title,
        slug: item.slug,
        description: item.body,
        category: item.category,
        image: item.image || '/preview.png',
        author: {
          id: item.author.id,
          name: item.author.name,
          avatar: item.author.avatar || '/logo.png'
        },
        views: item.views
      }
    });
  }

  const search = (await searchParams).search;
  if(search) {
    const res = await fetch(`http://localhost:3000/post?search=${search}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json());
    console.log('res',res);
    posts = formatPost(res);
  }
  



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
      <section className="section_container">
        <p className="text-30-semibold">
          { search ?  `搜索结果为"${search}"` : '欢迎来到我的博客'}
        </p>
      </section>
      <section className="mt-7 card_grid">
        {
          posts?.length > 0 ? (
            posts.map(post => (<PreviewCard key={post.id} post={post} />))
          ) : (
            <p className="no-results">没有找到相关文章</p>
          )
        }
      </section>
    </>
  );
}
