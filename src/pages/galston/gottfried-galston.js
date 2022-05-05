import * as React from "react"
import {graphql, useStaticQuery} from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Yith from "../../components/yith/Yith"
import UTKLogo from "../../media/utk-logo.png";

const GalstonPage = () => {
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
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Galston Studienbuch Exhibit",
      "url": "https://exhibits.lib.utk.edu/galston",
      "description": site.siteMetadata.description,
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
        <Seo title="The Life and Career of Gottfried Galston" schemaMarkup={schema}/>

        <Yith id="studienbuch-chronology" mode="chronology" description="The Life and Career of Gottfried Galston">
          <div className="yith-structure">
            <figure
                className="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/static/iiif/galston_710.json"
                data-label="Childhood"
                data-region="1338,1238,2902,3479"
            >Born in Vienna in 1879, Galston's musical training began in early childhood under the supervision of his
              governesses. At age seven, he began private lessons with various teachers in Vienna, including Professor
              Schenner at the Vienna Conservatory. At high school in 1894, Galston began lessons with Theodor
              Leschetizky and his assistant, Malwine Bree.
            </figure>
            <figure
                className="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/static/iiif/leipzig_gewandhaus.json"
                data-label="Education"
                data-region="368,259,2364,1757"
            >Galston entered the Leipzig Conservatory in 1899, studying theory and composition with Carl Reinecke and
              Salomon Jadassohn. Galston's training with renowned pianist-composer teachers developed his ability to
              analyze music in such a way that he could easily discern a composer’s intention from a complex and heavily
              textured musical score. After graduating from the Conservatory, Galston performed his first professional
              debut in Leipzig’s Gewandhaus Hall.
            </figure>
            <figure
                className="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/static/iiif/galston_692.json"
                data-label="Early Career"
                data-region="104,127,2616,3250"
            >The success of this debut led to other performances in Berlin and London, as well as tours throughout
              Europe, the United States, Russia, Australia, and New Zealand. In 1903, Galston was appointed Professor of
              Advanced Class at the Stern Conservatory, Berlin, where he taught until 1906.
            </figure>
            <figure
                className="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/static/iiif/galston_706.json"
                data-label="Marriage"
                data-region="1078,1503,3892,2943"
            >In 1905, Galston married Sandra Droucker, a favorite student of Anton Rubinstein, and later a renowned
              pianist, composer, and pedagogue. Galston and Droucker lived in Berlin, teaching students from all over
              the world and undertaking concert tours.
            </figure>
            <figure
                className="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/static/iiif/galston_716.json"
                data-label="Busoni"
                data-region="351,359,3474,4506"
            >Around this time, Galston began a life-long friendship with Berlin-based pianist, composer, teacher,
              Ferruccio Busoni, taking the form of a mentor-protégé relationship. The respect and admiration for each
              other is well-documented in their correspondence, their dedication of compostions to each other, and
              Galston's collection of Busoni-related materials, all of which form part of the Galston-Busoni Collection
              at the University of Tennessee.
            </figure>
            <figure
                className="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/static/iiif/galston_696.json"
                data-label="Concert Series"
                data-region="2168,729,3947,2732"
            >Galston’s performance career was launched to new heights with a series of concerts that included some of
              the most monumental piano works by Bach, Beethoven, Chopin, Liszt, and Brahms. In just eight weeks from
              January to March 1907, Galston performed ten concerts in London and Paris, followed by concerts in Berlin,
              Vienna, and Amsterdam later that year and early 1908.
              Galston supplied extensive program notes for each of the works, placing each in historical and musical
              context.
            </figure>
            <figure
                className="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/static/iiif/galston_684.json"
                data-label="Honors"
                data-region="559,439,4710,5978"
            >In 1909, following the successful concert series in Europe, the faculty of the Imperial Conservatory at St.
              Petersburg--headed by Alexander Glazunov--offered Galston the honor of Professor Extraordinaire, a title
              conferred by Imperial "ukase" (decree), which he accepted as an honorary post.
              Galston was invited, without having applied, to perform at the Conservory in Paris, March 7-14, 1909. In
              recognition of the concerts' outstanding success a special silver medal was cast for him.
            </figure>
            <figure
                className="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/static/iiif/galston_680.json"
                data-label="Studienbuch"
                data-region="1000,1135,3576,2550"
            >The first edition of Galston's Studienbuch was published by Bruno Cassirer, Berlin.
              Based on his 1907-1908 concert series, the book intricately describes Galston's journey through his
              interpretative processes, analyzing the five composers’ texts to capture the true character of each work.
            </figure>
            <figure
                className="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/static/iiif/galston_san_francisco_call_1912.json"
                data-label="US Tour"
                data-region="1135,400,1850,2318"
            >Throughout 1912 and 1913, Galston undertook a coast to coast tour of the United States, accompanied by
              symphony orchestras including Chicago, Detroit, San Francisco, and St Louis. During this tour, Galston
              visited Wilcox & White in Meridien, Connecticut, to record paino rolls for the Artrio-Angelus and Voltem
              player pianos and organs.
            </figure>
            <figure
                className="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/static/iiif/galston_682.json"
                data-label="World War I"
                data-region="352,447,2968,4295"
            >From 1915 until the end of World War I, Galston served as a lieutenant in the Austrian cavalry. During this
              time, Galston had no access to a piano, and feared the loss of dexterity in his fingers. He endeavored to
              maintain dexterity in his fingers by practicing on any surface he could find. He also found that drawing
              objects with intricate details helped keep his fingers nimble. In 1918, Galston's marriage with Droucker
              ended.
            </figure>
            <figure
                className="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/static/iiif/galston_700.json"
                data-label="Concert Cycles"
                data-region="1351,1215,4629,3366"
            >The lack of access to a piano for three years did not prove detrimental to Galston's extraordinary talent.
              In October 1919, he embarked on a performance cycle of 40 recitals, which included works by little-known,
              contemporary composers as well as the most celebrated. By February 1921, he had performed over 200 works.
            </figure>
            <figure
                className="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/static/iiif/galston_697.json"
                data-label="Munich"
                data-region="591,607,4395,2695"
            >Upon completion of the monumental concert series, Galston explored other artistic outlets. He began
              painting, and befriended Bauhaus artists such as Paul Klee, Lyonel Feininger, and Wassily Kandinsky. In
              1921, the second edition of the Studienbuch was published by O. Halbreiter in Munich, with minor edits by
              Galston. During this year, Galston left Munich to live in Berlin. Early in 1926, he made his 11th and
              final tour of Russia.
            </figure>
            <figure
                className="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/static/iiif/galston_686.json"
                data-label="Move to US"
                data-region="1597,1982,2587,1774"
            >Galston moved to St. Louis, Missouri, in 1927, where he was appointed Professor and Artist-in-Residence at
              the St. Louis Institute of Music. Over the next 20 years, he performed more than 1,000 recitals in
              addition to teaching a full studio of talented young pianists. Galston married his second wife, Helen. On
              April 2, 1950, Gottfried Galston died in St. Louis.
            </figure>
          </div>
        </Yith>
      </Layout>
  )
}

export default GalstonPage
