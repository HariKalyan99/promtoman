import Feed from "@components/Feed";


const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & Share
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center"> AI-Powered Promts</span>
        </h1>
        <p className="desc text-center"> 
            Promtoman is an open-source AI prompting tool for modern world to discover,
            create and shre creative promts.
        </p>

        {/* todo Feed component */}
        <Feed />
    </section>
  )
}

export default Home