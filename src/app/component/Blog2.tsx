
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-11">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="md:col-span-2">
          {/* Blog Post 1 */}
          <div className="mb-8">
            <Image
              src="/image/b1.svg"
              alt="Going all-in with millennial design"
              width={800}
              height={450}
              className="rounded-lg"
            />
            <div className="mt-4">
              <h2 className="text-xl md:text-2xl font-bold">
                <Link href={"/posts/millennial-design"}>
                  Going all-in with millennial design
                </Link>
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                expedita tempore distinctio exercitationem dolores tempora.
              </p>
              <Link
                href={"/posts/millennial-design"}
                className="text-blue-600 mt-4 inline-block"
              >
                Read more
              </Link>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="mb-8">
            <Image
              src="/image/b2.svg"
              alt="Exploring new ways of decorating"
              width={800}
              height={450}
              className="rounded-lg"
            />
            <div className="mt-4">
              <h2 className="text-xl md:text-2xl font-bold">
                <Link href={"/posts/decorating-ideas"}>
                  Exploring new ways of decorating
                </Link>
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                consequatur magni molestias rem.
              </p>
              <Link
                href={"/posts/decorating-ideas"}
                className="text-blue-600 mt-4 inline-block"
              >
                Read more
              </Link>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div>
            <Image
              src="/image/b3.svg"
              alt="Handmade pieces that took time to make"
              width={800}
              height={450}
              className="rounded-lg"
            />
            <div className="mt-4">
              <h2 className="text-xl md:text-2xl font-bold">
                <Link href={"/posts/handmade-pieces"}>
                  Handmade pieces that took time to make
                </Link>
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                alias commodi labore vero molestiae.
              </p>
              <Link
                href={"/posts/handmade-pieces"}
                className="text-blue-600 mt-4 inline-block"
              >
                Read more
              </Link>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="p-4 bg-white max-w-sm mx-auto">
      {/* Search Box */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Categories Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Categories</h2>
        <ul className="space-y-2">
          {[
            { name: "Crafts", count: 2 },
            { name: "Design", count: 8 },
            { name: "Handmade", count: 7 },
            { name: "Interior", count: 1 },
            { name: "Wood", count: 6 },
          ].map((category, index) => (
            <li
              key={index}
              className="flex justify-between text-sm text-gray-700 hover:text-blue-500"
            >
              <span>{category.name}</span>
              <span>{category.count}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts Section */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Recent Posts</h2>
        <div className="grid gap-4">
          {[
            {
              title: "Going all-in with minimal design",
              date: "03 Aug 2022",
              image: "/image/b4.svg",
              link: "/post/1",
            },
            {
              title: "Exploring new ways of decorating",
              date: "03 Aug 2022",
              image: "/image/b5.svg",
              link: "/post/2",
            },
            {
              title: "Handmade pieces that took time to make",
              date: "03 Aug 2022",
              image: "/image/b6.svg",
              link: "/post/3",
            },
            {
              title: "Modern home in Milan",
              date: "03 Aug 2022",
              image: "/image/b7.svg",
              link: "/post/4",
            },
            {
              title: "Colorful office redesign",
              date: "03 Aug 2022",
              image: "/image/b8.svg",
              link: "/post/5",
            },
          ].map((post, index) => (
            <Link key={index} href={post.link} className="flex items-center space-x-4" >
              
                <div className="w-20 h-20 flex-shrink-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={80}
                    height={80}
                    className="rounded-md object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 hover:text-blue-500">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-500">{post.date}</p>
                </div>
              </Link>
            
          ))}
        </div>
      </div>
    </aside>


      </div>
    </div>
  );
};

export default Blog;
