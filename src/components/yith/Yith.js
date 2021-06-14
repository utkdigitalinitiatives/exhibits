import React, { Component } from 'react';

import Mode from "./Mode";
import _ from "lodash"

class Yith extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }


  buildExpand(items) {

    let key = _.findIndex(items, function(o) {
      return o.props.className == 'yith-expand';
    });

    if (key !== -1) {
      return ({
        "value": items[key].props.children
      });
    } else {
      return false;
    }

  }

  buildStructure(items) {

    // const children = source.querySelector('div.yith-structure').children;
    //

    let key = _.findIndex(items, function(o) {
      return o.props.className == 'yith-structure';
    });

    let children = items[key].props.children;

    return children.map(function(el){

      let item = {};

      item.tag = el.type
      item.value = null

      if (el.props.className != '') {
        item.itemClass = el.props.className
      }

      console.log(el)

      // if (el.props['data-manifest']) {
      //   item.itemManifest = el.props['data-manifest']
      // }

      return item
    });


    // while(items[key].props.children.length > structure.length) {
    //
    //   let item = children.item(index);
    //   index++;
    //
    //   let itemClass = null;
    //   if (item.className != '') {
    //     itemClass = item.className
    //   }
    //
    {/*  let itemTextContent = null;*/}
    {/*  if (item.querySelector('figcaption')) {*/}
    {/*    itemTextContent = item.querySelector('figcaption').innerHTML*/}
    //   }
    //
    //   let itemDataset = null;
    //   if (Object.keys(item.dataset).length > 0) {
    //     itemDataset = JSON.parse(JSON.stringify(item.dataset))
    //   }
    //
    //   let annotationStructure = null;
    //
    //   if (item.querySelector('div.yith-items')) {
    //
    //     let items = item.querySelector('div.yith-items');
    //
    //     let annotationIndex = 0;
    //     annotationStructure = [];
    //
    //     while(items.children.length > annotationStructure.length) {
    //
    //       let annotation = items.children.item(annotationIndex);
    //       annotationIndex++;
    //
    //       if (annotation) {
    //
    //         let itemAnnotationClass = null;
    //         if (annotation.className != '') {
    //           itemAnnotationClass = annotation.className
    //         }
    //
    //         let itemAnnotationTextContent = null;
    //         if (annotation.querySelector('figcaption')) {
    //           itemAnnotationTextContent = annotation.querySelector('figcaption').innerHTML
    //         }
    //
    //         let itemAnnotationDataset = null;
    //         if (Object.keys(annotation.dataset).length > 0) {
    //           itemAnnotationDataset = JSON.parse(JSON.stringify(annotation.dataset))
    //         }
    //
    //         annotationStructure.push({
    //           "tag": annotation.localName,
    //           "value": itemAnnotationTextContent,
    //           "data": itemAnnotationDataset,
    //           "class": itemAnnotationClass
    //         });
    //       }
    //
    //     }
    //
    //   }
    //
    //   if (item.localName === 'figure') {
    //     structure.push({
    //       "tag": item.localName,
    //       "value": itemTextContent,
    //       "data": itemDataset,
    //       "class": itemClass,
    //       'annotations': annotationStructure
    //     });
    //   } else {
    //     structure.push({
    //       "tag": item.localName,
    //       "value": item.innerHTML,
    //       "data": item.dataset,
    //       "class": item.className
    //     });
    //   }
    // }

  }

  componentDidMount() {
    this.setState({
        expand: this.buildExpand(this.props.children),
        structure: this.buildStructure(this.props.children)
    })
  }

  render() {

    if (this.state.structure) {
      return <Mode expand={this.state.expand}
                   structure={this.state.structure}
                   mode={this.props.mode} />
    } else {
      return null
    }

  }
}

export default Yith;
