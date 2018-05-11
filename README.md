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

As far as I get, in Vue, 'this' keyword is a storage that store all property of 'data' and 'methods'. So if we want to access 'data' from 'methods' we need to use 'this' keyword, same with accessing other methods on one method. But we can't exactly accessing methods from 'data' using 'this' keyword.

> Vue directives

Vue stand as median layer between HTML or DOM and Javascript. So when we use Vue, before the page rendering out the DOM for user, Vue reading allthrough what component or vue feature that are configured under the hood. One of them is directive, vue keyword that place directly into the HTML file, but not appear on HTML file in client side. 

It take javascript logic way and bind it to the HTML directly. We put directives on html tag.

Example : 
1. v-bind:htmlattributehere=""
We use v-bind:...="" or :...="" (the shorthandof v-bind) to bind vue 'data' or 'methods' into HTML, that's because we can't use the functionality of {{}} , like inside tag or in attribute. ```v-bind:href="abcdAA"``` or ```:href="abcdAA"``` We using href inside a tag and want to retrieve data from 'data' in Vue named 'abcdAA'.

2. v-html=""
v-html use to rendering out 'data' from Vue that contain raw html code like ```<a href="https://amazon.com">Amazon</a>```. Use it in div or span or whatever you prefer.

3. v-once
when we called a method on HTML file using {{}} or other stuff, and in that method contain a 'data' that we changed, but we don't want the 'data' changed before or after the method called, here we use v-once before the method called in HTML file to keep the value of that 'data' that is changed by calling a method.


4. v-on:click="methodsfromvuehere"
v-on is like addEventListener in vanillaJS, it listen to an Event and here it listen to a click. It can listen to other events to such as mouseenter, mouseleave, keyup etc

I think writing this guideline waste my time. I'll just straight up to code, commenting the code, learn it, and make app. I don't see any good benefit to speed up my learning by doing this README, so I'll stop here. Bye, but I still pushing the code. 