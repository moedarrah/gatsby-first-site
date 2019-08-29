import React from "react"
import Layout from "../components/layout"
import Hero from "../image/hero.jpg"

const myIndex = () => {
  return (
    <Layout >
    <img  src={Hero} alt="Hero" />
    <p className="par">Att hitta problemet och försöka fixa det på ett smart sätt
      har alltid varit min passion. Jag har en kandidatexamen i inredningsarkitekt
      och jag hade jobbat i detta field både i Syrien och Sverige
      och just nu studerar jag Frontend-utvecklare på Nackademin.</p>
    </Layout>
  )
}

export default myIndex
