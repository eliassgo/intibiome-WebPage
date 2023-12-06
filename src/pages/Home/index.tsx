import Banner from '../../components/Banner'
import List from '../../components/List'
import banner from '../../assets/images/banner-option-2.png'

const Home = () => {
  return (
    <>
      <Banner image={banner} title="Elias" subtitle="Setup" page="/" />
      <List title="Title" background="gray" />
    </>
  )
}

export default Home
