import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Yith from "../../components/yith/Yith"

const ResourcesPage = () => (
  <Layout exhibit="galston">
    <Seo title="Available Resources" />
    <h1>Resources</h1>

  <div className="resources-intro">
    <Yith id="studienbuch-present-test"
          mode="present">
      <div className="yith-structure">
        <figure className="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/718"></figure>
      </div>
    </Yith>

    <p>The Galston-Busoni Archive and the Gottfried Galston Music Collection are held at the University of Tennessee Libraries’ Betsey B. Creekmore Special Collections and University Archives. 
    The archive includes manuscripts - both musical and literary, letters, photographs, programs, musical scores, newspaper clippings, and other items documenting the lives and careers of Gottfried Galston and his friend and fellow pianist, Ferruccio Busoni. 
    Materials were donated to the university in the 1970s by Helen Galston Tibbe (Galston’s wife), and were comprehensively cataloged by music librarian Pauline Shaw Bayne in The Gottfried Galston Music Collection and the Galston-Busoni Archive, published by the University of Tennessee Library in 1978. 
    Galston’s Studienbuch and its English translation is to be published as a downloadable e-publication by the University of Tennessee Libraries’ Newfound Press (fall 2021).</p>

    </div>
    <h2>Finding Aids and Catalog</h2>
    <ul>
      <li>Gottfried Galston Music Collection and The Galston-Busoni Archive, MS.1072. University of Tennessee Libraries, Knoxville, Special Collections.</li><a href="https://scout.lib.utk.edu/repositories/2/resources/4827">https://scout.lib.utk.edu/repositories/2/resources/4827</a>
      <a href="https://scout.lib.utk.edu/repositories/2/resources/4861"><li>The Gottfried Galston Collection and Galston-Busoni Archive Proof Photographs, MS.3398. University of Tennessee, Knoxville, Special Collections Library.</li></a>
      <a href="http://www.worldcat.org/oclc/558187343"><li>Bayne, Pauline Shaw. The Gottfried Galston Music Collection and the Galston-Busoni Archive Knoxville: University of Tennessee Library, 1978.</li></a>
    </ul>

    <h2>Other Resources</h2>
    <ul>
      <li><a href="https://oac.cdlib.org/findaid/ark:/13030/tf538nb0pb/">Cassirer collection, M0287, Dept. of Special Collections, Stanford University Libraries, Stanford, California.</a> This collection provides more context about Cassirer, the publisher of the first edition of Galston's Studienbuch.</li>
      <li>Galston, Gottfried. Studienbuch : 3 Klavier-Abend : "Frédéric Chopin". Munich: Otto Halbreiter, 1922. The Chopin section in the second edition of the Studienbuch incorporates Galston's editorial changes, handwritten in the University of Tennessee's bound volume of the first edition. <a href="https://pbc.gda.pl/dlibra/doccontent?id=35368">The second edition of the Chopin section is available online from the Pomeranian Digital Library, University of Gdansk, Poland.</a></li>
      <li><a href="https://www.galerie-thomas.de/files/downloads/Paul-Klee.pdf">Hopfengart, Christine, ed. Paul Klee: Music and Theatre in Life and Work. Munich: Galerie Thomas, 2018.</a> This exhibition catalog provides some insight into Galston's (and Busoni's) life in Munich in relation to his friendship with Paul Klee and other artists.</li>
      <li>Liebling, Leonard. "Variations." The Musical Courier. New York: Musical Courier, Inc., (July 3, 1912):27. A laudatory review of Galston's Studienbuch.</li>
    </ul>

    <h2>Acknowledgments</h2>
      <h3>UT Project team</h3>
        <p>Mark Baggett; Paul Cummins; Chris Durman; Sarah Funk; Emily Gore; Meredith Hale; Nathalie Hristov; Colin Hudgins; Laura Romans; Louisa Trott</p>

      <h3>English translation of the Studienbuch</h3>
        <p>Rosemarie S. Greenman</p>

      <h3>Transcription/translation of handwritten notes</h3>
        <p></p>
  </Layout>
)

export default ResourcesPage
