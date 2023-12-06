import Hero from '../../components/Hero'
import Section from '../../components/Section'
// import Gallery from '../../components/Gallery'
import Loader from '../../components/Loader'

import { useEffect, useState } from 'react'

// type GameParams = {
//   images: []
// }

const Element = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simula um atraso de 2 segundos antes de definir o estado de loading para false
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Hero image={''} tag="tag" text="exemple" />
          <Section title="Sobre o jogo" background="black">
            <p>Description</p>
          </Section>
          <Section title="Mais detalhes" background="gray">
            <p>Description</p>
          </Section>
          {/* // <Gallery
      //   name={"name"}
      //   defaultCover={"cover"}
      //   items={images}
      // />
       */}
        </>
      )}
    </>
  )
}
export default Element
