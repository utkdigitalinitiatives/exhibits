import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import {graphql, useStaticQuery} from "gatsby"
import UTKLogo from "../../media/utk-logo.png";

const ResourcesPage = () => {
  const {site} = useStaticQuery(
      graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )
  const description = "At the heart of this exhibit is a unique, bound volume of a groundbreaking publication in music pedagogy - Gottfried Galston’s Studienbuch. The exhibit features the first edition of the Austrian-born pianist’s German-language book (1910), accompanied by a specially-commissioned--and previously unpublished--English translation. The bound volume includes several editorial changes -- handwritten by Galston -- later incorporated into the book's 2nd edition (1922).\nIn this pioneering studybook, Galston provides a thorough record of his thought processes and musical interpretations for the works of five composers - Bach, Beethoven, Liszt, Brahms, and Chopin. Widely used in German-speaking countries, the studybook is made available here for the first time with an English translation and the hope that it may contribute to music pedagogy in the U.S. and beyond"
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Galston Studienbuch Exhibit",
      "url": "https://exhibits.lib.utk.edu/galston",
      "description": description,
      "producer": {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "University of Tennessee, Knoxville. Libraries",
        "url": "https://www.lib.utk.edu/",
        "sameAs": [
          "https://twitter.com/utklibraries",
          "http://id.loc.gov/authorities/names/n87808088",
        ],
        "logo": UTKLogo
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "CollegeOrUniversity",
      "name": "University of Tennessee, Knoxville. Libraries",
      "url": "https://www.lib.utk.edu/",
      "sameAs": [
        "https://twitter.com/utklibraries",
        "http://id.loc.gov/authorities/names/n87808088",
      ],
      "logo": UTKLogo
    }
  ]
  return (
      <Layout exhibit="galston">
        <Seo title="Available Resources about Gottfried Galston" schemaMarkup={schema}/>
        <h1 className="resources-heading resources-heading-large resources-title">Resources</h1>
        <h2 className="resources-heading resources-heading-med">
          Gottfried Galston Collections at the University of Tennessee Libraries
        </h2>

        <div>
          <div className="resources-intro">
            <div className="resources-flex">
              <p>
                The Galston-Busoni Archive and the Gottfried Galston Music
                Collection are held at the University of Tennessee Libraries’ Betsey
                B. Creekmore Special Collections and University Archives. The
                archive includes manuscripts - both musical and literary, letters,
                photographs, programs, musical scores, newspaper clippings, and
                other items documenting the lives and careers of Gottfried Galston
                and his friend and fellow pianist, Ferruccio Busoni. The collections
                were comprehensively cataloged by music librarian (later Head of the
                Music Library, and Professor Emerita) Pauline Shaw Bayne in The
                Gottfried Galston Music Collection and the Galston-Busoni Archive,
                published by the University of Tennessee Library in 1978.
              </p>

              <p>
                Professor Patricia Carter was instrumental in bringing Galston's
                archives to UT in the 1970s, and has been a driving force in efforts
                to make the materials available to the widest possible audience. She
                and her late husband Dr. William Carter encouraged Helen Galston
                Tibbe, Galston’s widow, to consider entrusting her late husband’s
                archives to the University of Tennessee Libraries. Recognizing the
                importance of the Studienbuch, Professor Patricia Carter
                commissioned Rosemarie Greenman to translate it into English, and
                later proposed that UT Libraries' Newfound Press publish the
                translation online alongside the original German text. Professor
                Carter shared extensive information about Galston's life and career
                with music librarians Chris Durman and Nathalie Hristov, who wrote
                the preface and introduction to the Newfound Press publication, and
                from which much of the text for this digital exhibit has been drawn.{" "}
              </p>
              <p>
                A downloadable e-publication of Galston’s{" "}
                <span className="studybook">Studienbuch</span> and its English
                translation will be published by UT Libraries’ Newfound Press in
                fall 2021.
              </p>
            </div>

            <div className="yith-wrapper-resources">

            </div>
          </div>
        </div>
        <div className="resources-wrapper">
          <div className="resources-list-bg">

            <div className="resources-flex1">
              <h2 className="resources-heading orange-border-finding-aids finding-aids">
                Finding Aids and Catalog
              </h2>
              <ul className="findings-aids-and-catalog">
                <li>
                  <a href="https://scout.lib.utk.edu/repositories/2/resources/4827">
                    Gottfried Galston Music Collection and The Galston-Busoni Archive
                  </a>
                  , MS.1072. University of Tennessee Libraries, Knoxville, Special
                  Collections.
                </li>
                <li>
                  <a href="https://scout.lib.utk.edu/repositories/2/resources/4861">
                    The Gottfried Galston Collection and Galston-Busoni Archive Proof
                    Photographs
                  </a>
                  , MS.3398. University of Tennessee, Knoxville, Special Collections
                  Library.
                </li>
                <li>
                  Bayne, Pauline Shaw.{" "}
                  <a
                      className="studybook"
                      href="http://www.worldcat.org/oclc/558187343"
                  >
                    The Gottfried Galston Music Collection and the Galston-Busoni
                    Archive
                  </a>
                  , Knoxville: University of Tennessee Library, 1978.
                </li>
              </ul>
            </div>
            <br></br>

            <div className="resources-flex2">
              <h2 className="resources-heading other-resources">
                Other Resources
              </h2>
              <ul class="other-resources-list">
                <li>
                  Cassirer collection, M0287, Dept. of Special Collections, Stanford
                  University Libraries, Stanford, California.{" "}
                  <a href="https://oac.cdlib.org/findaid/ark:/13030/tf538nb0pb/">
                    https://oac.cdlib.org/findaid/ark:/13030/tf538nb0pb/
                  </a>
                  This collection provides more context about Cassirer, the publisher
                  of the first edition of Galston's{" "}
                  <span className="studybook">Studienbuch</span>.
                </li>
                <li>
                  Galston, Gottfried.{" "}
                  <span className="studybook">
              Studienbuch : 3 Klavier-Abend : "Frédéric Chopin"
            </span>
                  . Munich: Otto Halbreiter, 1922. The Chopin section in the second
                  edition of the Studienbuch incorporates Galston's editorial changes,
                  handwritten in the University of Tennessee's bound volume of the
                  first edition. The second edition of the Chopin section is available
                  online from the Pomeranian Digital Library, University of Gdansk,
                  Poland:{" "}
                  <a href="https://pbc.gda.pl/dlibra/doccontent?id=35368">
                    https://pbc.gda.pl/dlibra/doccontent?id=35368
                  </a>
                </li>
                <li>
                  Hopfengart, Christine, ed.{" "}
                  <span className="studybook">
              Paul Klee: Music and Theatre in Life and Work
            </span>
                  . Munich: Galerie Thomas, 2018. This exhibition catalog provides
                  some insight into Galston's (and Busoni's) life in Munich in
                  relation to his friendship with Paul Klee and other artists.{" "}
                  <a href="https://www.galerie-thomas.de/files/downloads/Paul-Klee.pdf">
                    https://www.galerie-thomas.de/files/downloads/Paul-Klee.pdf
                  </a>
                </li>
                <li>
                  Liebling, Leonard. "Variations."{" "}
                  <span className="studybook">The Musical Courier</span>. New York:
                  Musical Courier, Inc., (July 3, 1912):27. A laudatory review of
                  Galston's Studienbuch.
                </li>
              </ul>
            </div>

            <div className="resources-flex3">

              <div className="resources-headings">
                <h2 className="resources-heading resources-heading-med acknowledgments-header">
                  Acknowledgments
                </h2>
              </div>

              <div className="resources-flex3-container">
                <h3 className="resources-heading resources-heading-small">
                  UT Project team
                </h3>
                <p>
                  Paul Cummins; Chris Durman; Sarah Funk; Emily Gore;
                  Meredith Hale; Nathalie Hristov; Colin Hudgins; Mat Jordan; Laura
                  Romans; Louisa Trott
                </p>

                <h3 className="resources-heading resources-heading-small">
                  English translation of the <span class="studybook">Studienbuch</span>
                </h3>
                <p>Rosemarie S. Greenman</p>

                <h3 className="resources-heading resources-heading-small">
                  Transcription/translation of handwritten notes
                </h3>
                <p>Will Eakin; Kathryn Shepas; Jeff Mellor; Peter Hoeyng; David Lee</p>
              </div>


            </div>
          </div>
        </div>
      </Layout>
  )
}

export default ResourcesPage
