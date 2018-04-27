# A bet on Vue.js
---
```
Start To Learn Vue, very slow paced :D (as Hobby) 
```
> Setting up to use Vue

Go to vue js website, look for a link or script tag ( that's called the CDN ) inside installation section ( the very first section ) and copy and pasted in your html file (body or head tag depends on yours preference). I prefer head tag.

Or you can just click file ( either production or development ) of vue.js and then save the link as vue.js file, and you ready to go to develop or deploy vue app from your local machine. 

> Vue Instances and Connector

in HTML, just type this in 

```html
<div id="calendar__widget--side">
  {{title}} {{sayHi()}}
</div>
```

To starting using Vue.js, we create new script tag in our js file, or just create independent index.js file. Inside that, just type in this code

```js
const app = new Vue({
  el: '#calendar__widget--side',
  data: {
    title: "Months"
  }
  methods: {
    sayHi(){
      return "Hi!";
    }
  }
})
```
Confused ? Go learn basic vanilla Javascript concept of function and object, those are very important concepts to grasp with!

Explaination : 
we creating new Vue object within app variable. "new" is the keyword to declare existing object witch is Vue. Where the Vue object come from ? the CDN script tag we inserted before. 

Within Vue object, the 'el' refer to HTML tag that have an ID of 'calendar__widget--side'. We use something called CSS Selector inside the 'el' property. This connecting Vue and all its feature to be able working just inside of DIV with an ID of 'el' prop value.

'data' is what we want to pass into the DOM or HTML. In HTML, to trigger vue code work, we need ```{{ yourcodebelonghere }}```.

```{{}}``` are required to executing vue or JS code inside HTML. Its often called as mustache bracket. Inside this mustache (in HTML), we called the properties inside 'data' or 'methods'. 

Methods are just a term for bunch of function inside object. 

We put function inside 'methods', and string like value inside 'data'.


> Vue "this"
> Vue directives



