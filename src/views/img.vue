<template>
    <div id="app">
      <div>
        <b-img-lazy v-bind="mainProps" :src="getImageUrl(80)" alt="Image 1"></b-img-lazy>
        <b-img-lazy v-bind="mainProps" :src="getImageUrl(82)" alt="Image 2"></b-img-lazy>
        <b-img-lazy v-bind="mainProps" :src="getImageUrl(84)" alt="Image 3"></b-img-lazy>
        <b-img-lazy v-bind="mainProps" :src="getImageUrl(85)" alt="Image 4"></b-img-lazy>
        <b-img-lazy v-bind="mainProps" :src="getImageUrl(88)" alt="Image 5"></b-img-lazy>
        <b-img-lazy v-bind="mainProps" :src="getImageUrl(90)" alt="Image 6"></b-img-lazy>
        <b-img-lazy v-bind="mainProps" :src="getImageUrl(92)" alt="Image 7"></b-img-lazy>
        <b-img-lazy v-bind="mainProps" :src="getImageUrl(94)" alt="Image 8"></b-img-lazy>
      </div>
      <router-view/>
    </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
          mainProps: {
            center: true,
            blank: true,
            blankColor: '#bbb',
            width: 200,
            height:150,
            class: 'my-5'
          }
        }
      },
      methods: {
        getImageUrl(imageId) {
          const { width, height } = this.mainProps
          return `https://picsum.photos/${width}/${height}/?image=${imageId}`
        }
      }
    }
  </script>
  
  
  