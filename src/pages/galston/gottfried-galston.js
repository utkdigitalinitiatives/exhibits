import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Yith from "../../components/yith/Yith"

const GalstonPage = () => (
  <Layout exhibit="galston">
    <Seo title="Gottfried Galston" />

    <Yith id="studienbuch-chronology" mode="chronology" description="The Life and Career of Gottfried Galston">
      <div className="yith-structure">
        <figure
          className="yith-manifest"
          data-manifest="https://digital.lib.utk.edu/static/iiif/vienna_1880.json"
          data-label="1879"
        >Gottfried Galston was born in Vienna in 1879. His musical training began in early childhood under the supervision of his governesses. By the time he was seven, he began private lessons with various teachers in Vienna, including Professor Schenner at the Vienna Conservatory. At high school in 1894, Galston began lessons with Theodor Leschetizky, one the most influential piano teachers of the time, and his assistant, Malwine Bree.
        </figure>
        <figure
          className="yith-manifest"
          data-manifest="https://digital.lib.utk.edu/static/iiif/leipzig_gewandhaus.json"
          data-label="1899"
        >Galston entered the Leipzig Conservatory where he studied theory and composition with Carl Reinecke and Salomon Jadassohn. Training with such renowned pianist-composer teachers developed Galston’s ability to analyze music in such a way that he could easily discern a composer’s intention from a complex and heavily textured musical score. Galston was a pianist made not only by talent and hard work, but by critical thinking and scholarship. After graduating from the Conservatory, Galston performed his first professional debut in Leipzig’s Gewandhaus Hall.
        </figure>
        <figure
          className="yith-manifest"
          data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/692"
          data-label="1900"
          data-region="78,106,2700,3200"
        >The success of this debut led to other engagements in Berlin and London, as well as tours throughout Europe, the United States, Russia, Australia, and New Zealand.
        </figure>
        <figure
          className="yith-manifest"
          data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/710"
          data-label="1903"
          data-region="1338,1238,2902,3479"
        >Galston continued perfroming throughout 1903 with performances in Germany, Austria, Russia, Spain, and England. He was appointed Professor of Advanced Class at the Stern Conservatory, Berlin, where he taught until 1907.
        </figure>
        <figure
          className="yith-manifest"
          data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/678"
          data-label="1905"
          data-region="1024,927,4208,5721"
        >Around this time, Galston begins a life-long friendship with Berlin-based pianist, composer, teacher, Ferruccio Busoni.
        </figure>
        <figure
          className="yith-manifest"
          data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/696"
          data-label="1907"
          data-region="2168,729,3947,2732"
        >In 1907, Galston’s performance career was launched to new heights by a series of concerts which included some of the most monumental piano works by Bach, Beethoven, Chopin, Liszt, and Brahms.
          Galston’s first concert series began with ten performances in just over eight weeks: five in London and five in Paris (and later in Berlin, Vienna, and Amsterdam). In this short period of time, he covered an impressive amount of repertoire consisting of some of the most difficult piano works of all time. He also supplied extensive program notes for every work placing each in historical and musical context.
          In the spirit of scholarship and a willingness to share his musical ideas with future generations of pianists, Galston published his journey through his interpretative processes by analyzing the composers’ texts to capture, as one reviewer put it, the true character of each work. Therein lies the birth of Galston's Studienbuch, his unparalleled gift to musicians and pedagogues for generations to come.
        </figure>
        <figure
          className="yith-manifest"
          data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/701"
          data-label="1909"
          data-region="835,446,5847,4691"
        >In 1909, following the successful concert series in Europe, the faculty of the Imperial Conservatory at St. Petersburg--headed by Alexander Glazunov--offered Galston the position of Professor Extraordinaire, a title conferred by Imperial "ukase" (decree).
        </figure>
        <figure
          className="yith-manifest"
          data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/680"
          data-label="1910"
          data-region="1064,1191,3480,2430"
        >The first edition of Galston's Studienbuch is published by Bruno Cassirer, Berlin. In this breakthrough publication, Galston offers the world of piano pedagogy the first guide to teaching musical interpretation. By documenting an artist’s thought processes while examining several of the tenets of the piano literature, Galston leads his readers through the mind of an interpreter as he analyzes the various motives, phrases, and musical nuances of Bach, Beethoven, Chopin, Liszt, and Brahms. Following Galston through his own study of selected musical works, students can learn to approach a new composition more intelligently by thinking about passages in different ways and considering a multitude of options.
        </figure>
        <figure
          className="yith-manifest"
          data-manifest="https://digital.lib.utk.edu/static/iiif/galston_san_francisco_call_1912.json"
          data-label="1912"
          data-region="1135,400,1850,2318"
        >Throughout 1912 and 1913, Galston undertook a coast to coast tour of the United State, accompanied by symphony orchestras including Chicago, Detroit, San Francisco, and St Louis. During this tour, Galston visited Wilcox & White in Meridien, Connecticut, to record paino rolls for the Artrio-Angelus and Voltem player pianos and organs.
        </figure>
        <figure
          className="yith-manifest"
          data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/680"
          data-label="1910"
          data-region="1064,1191,3480,2430"
        >The first edition of Galston's Studienbuch is published by Bruno Cassirer, Berlin. In this breakthrough publication, Galston offers the world of piano pedagogy the first guide to teaching musical interpretation. By documenting an artist’s thought processes while examining several of the tenets of the piano literature, Galston leads his readers through the mind of an interpreter as he analyzes the various motives, phrases, and musical nuances of Bach, Beethoven, Chopin, Liszt, and Brahms. Following Galston through his own study of selected musical works, students can learn to approach a new composition more intelligently by thinking about passages in different ways and considering a multitude of options.
        </figure>
      </div>
    </Yith>
  </Layout>
)

export default GalstonPage
