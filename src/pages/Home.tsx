import Ads from "../components/Ads"
import Banner from "../components/Banner"
import BannerGrid from "../components/BannerGrid"
import Blog from "../components/Blog"
import Breadcrumb from "../components/Breadcrumb"
import Catalog from "../components/Catalog"
import Category from "../components/Category"
import Features from "../components/Features"
import Products from "../components/Products"
import Trending from "../components/Trending"

const Home = () => {
  return (
    <>
     <Banner/>
     <Category/>
     <Breadcrumb/>
     <Catalog limit={5} skip={10}/>
     <Ads/>
     <Products/>
     <BannerGrid/>
     <Features/>
     <Trending/>
     <Blog/>
    </>
  )
}

export default Home