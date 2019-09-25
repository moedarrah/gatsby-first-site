import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"

export default function blog() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date
              title
            }
          }
        }
      }
    }
  `)

  console.log(data)
  return (
    <Layout>
      <h1 className="projects">Projects</h1>
      <ol className="projectsList">
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li className="list">
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.date}</p>
            </li>
          )
        })}
      </ol>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis a,
        minima deleniti consequuntur repudiandae illo nam temporibus eum harum
        explicabo ea est assumenda voluptatibus ad officiis debitis voluptatum
        quibusdam? Rem, beatae, a adipisci sit, ducimus incidunt culpa assumenda
        laboriosam quasi facere odit voluptates nostrum iusto laudantium nulla
        voluptas. Quos, aliquid! Molestiae sint explicabo repellendus voluptatum
        vitae, placeat quod eaque porro, reprehenderit in corrupti sed? Aut
        excepturi nulla soluta esse maxime. Eaque consectetur commodi repellat
        quo iusto eligendi, ad reprehenderit minus similique asperiores hic
        explicabo ex molestias voluptates praesentium accusantium accusamus
        nobis repudiandae, atque maiores tenetur quaerat sunt. Nemo ad ipsum
        molestiae molestias, eligendi quia non tempora dolore, natus repellat
        culpa nobis ipsa repudiandae? Doloremque aliquid officia eveniet
        excepturi unde. Iste rem qui repellat, nulla nisi voluptas doloribus
        quam magni natus esse, harum possimus quis quos fugiat sunt voluptatibus
        molestiae! Amet molestias nam quidem incidunt omnis autem maxime
        repellendus! Aliquid architecto magnam, minus ratione ipsum dignissimos
        vero iure odit culpa assumenda ea est, repudiandae vel reiciendis ad
        doloremque obcaecati consectetur aspernatur porro dolor ab nostrum
        pariatur! Asperiores error magnam nisi similique ea expedita saepe modi
        obcaecati illum quo, dicta perferendis voluptatem animi! Autem, minus
        vitae? Expedita in odit eveniet velit! Harum?
      </p>
      <p className="test">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis a,
        minima deleniti consequuntur repudiandae illo nam temporibus eum harum
        explicabo ea est assumenda voluptatibus ad officiis debitis voluptatum
        quibusdam? Rem, beatae, a adipisci sit, ducimus incidunt culpa assumenda
        laboriosam quasi facere odit voluptates nostrum iusto laudantium nulla
        voluptas. Quos, aliquid! Molestiae sint explicabo repellendus voluptatum
        vitae, placeat quod eaque porro, reprehenderit in corrupti sed? Aut
        excepturi nulla soluta esse maxime. Eaque consectetur commodi repellat
        quo iusto eligendi, ad reprehenderit minus similique asperiores hic
        explicabo ex molestias voluptates praesentium accusantium accusamus
        nobis repudiandae, atque maiores tenetur quaerat sunt. Nemo ad ipsum
        molestiae molestias, eligendi quia non tempora dolore, natus repellat
        culpa nobis ipsa repudiandae? Doloremque aliquid officia eveniet
        excepturi unde. Iste rem qui repellat, nulla nisi voluptas doloribus
        quam magni natus esse, harum possimus quis quos fugiat sunt voluptatibus
        molestiae! Amet molestias nam quidem incidunt omnis autem maxime
        repellendus! Aliquid architecto magnam, minus ratione ipsum dignissimos
        vero iure odit culpa assumenda ea est, repudiandae vel reiciendis ad
        doloremque obcaecati consectetur aspernatur porro dolor ab nostrum
        pariatur! Asperiores error magnam nisi similique ea expedita saepe modi
        obcaecati illum quo, dicta perferendis voluptatem animi! Autem, minus
        vitae? Expedita in odit eveniet velit! Harum?
      </p>
      <p
      className="test2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis a,
        minima deleniti consequuntur repudiandae illo nam temporibus eum harum
        explicabo ea est assumenda voluptatibus ad officiis debitis voluptatum
        quibusdam? Rem, beatae, a adipisci sit, ducimus incidunt culpa assumenda
        laboriosam quasi facere odit voluptates nostrum iusto laudantium nulla
        voluptas. Quos, aliquid! Molestiae sint explicabo repellendus voluptatum
        vitae, placeat quod eaque porro, reprehenderit in corrupti sed? Aut
        excepturi nulla soluta esse maxime. Eaque consectetur commodi repellat
        quo iusto eligendi, ad reprehenderit minus similique asperiores hic
        explicabo ex molestias voluptates praesentium accusantium accusamus
        nobis repudiandae, atque maiores tenetur quaerat sunt. Nemo ad ipsum
        molestiae molestias, eligendi quia non tempora dolore, natus repellat
        culpa nobis ipsa repudiandae? Doloremque aliquid officia eveniet
        excepturi unde. Iste rem qui repellat, nulla nisi voluptas doloribus
        quam magni natus esse, harum possimus quis quos fugiat sunt voluptatibus
        molestiae! Amet molestias nam quidem incidunt omnis autem maxime
        repellendus! Aliquid architecto magnam, minus ratione ipsum dignissimos
        vero iure odit culpa assumenda ea est, repudiandae vel reiciendis ad
        doloremque obcaecati consectetur aspernatur porro dolor ab nostrum
        pariatur! Asperiores error magnam nisi similique ea expedita saepe modi
        obcaecati illum quo, dicta perferendis voluptatem animi! Autem, minus
        vitae? Expedita in odit eveniet velit! Harum?
      </p>
      
    </Layout>
  )
}
