---
title: "WTF is the JAM Stack: JavaScript, APIs and Markup"
shortdesc: "The JAM Stack approach to web development has been emerging for several years, but really took off in 2017. More a design philosophy than an explicit framework, JAM Stack takes the concept of static, database-free websites to the next level via an architecture advocates are calling “the future of the internet.”"
updatedDate: 2017-11-28T08:29:40.055Z
cmsUserSlug: ""
date: 2017-11-28T00:00:00.000Z
author: Philippe Bodart
leadtag: null
metadesc: "The JAM Stack approach to web development has been emerging for several years, but really took off in 2017. More a design philosophy than an explicit framework, JAM Stack takes the concept of static, database-free websites to the next level via an architecture advocates are calling “the future of the internet.”"
banner: /img/uploads/jamstack.jpg
---

The JAM Stack approach to web development has been emerging for several years, but really took off in 2017. More a design philosophy than an explicit framework, JAM Stack takes the concept of static, database-free websites to the next level via an architecture advocates are calling “the future of the internet.”
Which only makes sense. Browsers themselves have essentially become mini operating systems capable of running complex client-side applications while interacting with myriad APIs. Meanwhile, with the help of with Node.js and npm, JavaScript has leaped the divide between front and back end for real-time, two-way communication between client and server. JAM Stack is simply harnessing these factors in a logical and effective way.

# What JAM Stack Is
The term itself was coined by Netlify co-founder Mathias Biilmann to refer to the solution stack of JavaScript, APIs, and markup. JAM stack focuses on the front end build, eschewing server-side functions as much as possible. The three elements are:
JavaScript: JAM stack JS resides on the client-side, handling responses and requests. Because this approach involves a style of build over specific technologies, the “J” in JAM stack can take many forms: pure JavaScript, a library like Vue.js, or even front-end frameworks like React.
APIs: Server-side processes and database commands are implemented vis API, which is accessed by JS-driven HTTP calls. JAM stack is API agnostic in that it simply does not care where yours comes from. You can use any of the bazillion pre-packaged APIs out there or custom-build your own.
Markup: This is the part users actually see when they access your site or app. These days there are all kinds of open source build tools (Grunt, Webpack, Gulp) — not to mention static site generators (Gatsby, Spike, Hugo) aggregating them into convenient platforms — to make creating templated markup stupid easy.
Once you’ve actually built that JAM stack-based opus, you, of course, want to place it at the very front edge of the internet event horizon. There are fantastic git-centric hosting services that allow continuous deployment — meaning that you can simply push your app, and any subsequent changes, to GitHub, and the service will automatically build the site from source and deploy it. This is essentially how GitHub Pages works. And, since JAM stack architecture also couples beautifully with high-availability, high-performance nature of content delivery network distribution, be sure to shop for a provider that gives good CDN.

# What JAM Stack Can Do for You
The vast majority of sites on the net today total fewer than a dozen pages and do not require frequent updating. For these sites, the JAM stack approach has major advantages over the traditional dynamic application server model: it’s faster, cheaper, easier to build and maintain, and offers baked-in security.
Faster Performance: JAM stack involves very little server-side work: there’s no need to query a database, and the code has already been compiled. Every user gets the same page. (If you need dynamic elements, those too get handled client-side through third-party tools like Disqus). All of which means pages can be returned up to six times faster.
Vastly Simplified Updating: Since everything from JavaScript to markdown is stored in a git repository, it’s dead easy to set up continuous deployment so your site is updated every time new content gets pushed.
Built-in Reliability and User Scalability: On a CDN, with the load distributed across the entire network, if there is a sudden unexpected user surge (like when your app goes viral!) or a partial network fail, the CDN seamlessly compensates.
Greater Security: First off, the absence of a database makes a static site incredibly secure — practically a fortress, even. For example, it’s immune to SQL injection; also, fewer server interactions equal fewer targets for malicious hijacks. And, since by design JAM stack greatly cuts the number of moving parts involved in project development, devs can much more easily catch and fix any potential vulnerabilities that do arise.
Less Cost: We know why you’re really here: the overall expense of building, maintaining, and deploying a JAM stack site is lower. Thanks to keeping the focus on the front end, the development team can be smaller and swifter. With no database required, fewer servers are needed and hosting is also drastically cheaper.

# What JAM Stack Can’t Do for You (Yet)
All great stuff! That said, however, JAM stack is not the one stack to rule them all. There are all kinds of scenarios that are simply not suited to this approach, though the rapidly developing open source community around this model is busily addressing pretty much every one of these issues.
Complexity conundrum: JAM stack scales beautifully in terms of users, but not so much in terms of project size and/or complexity. This approach, unfortunately, just does not work for projects with lots of interactive features, or that require real-time updates and/or frequent new pages.
A steep learning curve for non-techies
Dynamic features require client-side add-ons. You want a log-in or a paywall? Comment section, forum, or polling? Retail sales storefront? All of these types of dynamic features are possible through third-party solutions (Livefyre, Disqus, Algolia for search, etc). 

# JAMming Forward
Things are evolving very quickly in the JAM stack universe. The exploding popularity of static site architecture is giving rise to terrific new solutions and services, even for those who once upon a time would have automatically embraced the homey comforts of WordPress. For example:
eCommerce: For small retailers, anyway, a static JAM stack delivered site is now totally an option. There are now JavaScript driven shopping cart and checkout services (like Snipcart and Foxycart) that bolt on seamlessly and provide API integration with inventory management, shipping and invoicing systems.
Theme work: There are now all kinds of pre-built themes for static generator-created sites. Hugo and Hexo both have sweet directories of gorgeous, static-friendly themes, minus the pointless plugins.
The possibilities are expanding literally every day. As the ecosystem surrounding JAM stack web development proliferates, particularly among open source solution providers, there has never been a better time to try ditching the database and giving content delivery network-driven static development a try!

# WebriQ and the JAM STACK
1. Future-proof your website – the web is mobile, and every website is a web app and every web app is a website. Use a universal framework to build your future proof website and web app.
2. Modern web tech without the headache – Enjoy the power of the latest open-source web technologies – MongoDB, Javascript Content Framework, React.js, Webpack and CSS all glued together with API's
3. We build with the data that you want and need  – through an embedded admin panel which has been built to be completely customizable to your data needs. 
4. Static Progressive Web APPS – We only load the critical code and data so your site loads as fast as possible. Once loaded, we prefetch resources for other pages so clicking around sites feels incredibly fast.
5. Speed past the competition – we build the fastest possible websites. Instead of waiting to generate pages when requested, pre-build pages and lift them into a global cloud — ready to be delivered instantly to your users wherever they are.
6. Scale to the entire internet - Forget complicated deploys with databases and servers and their expensive, time-consuming setup costs, maintenance, and scaling fears. We build your sites as “static” files which can be deployed easily on a Content Delivery Network. 

## Our Building Blocks

A comprehensive Database (MongoDB) Service
https://www.mongodb.com

A Javascript (Node.js) API Content Management Framework
https://strapi.io

A State of the Art Static Site Generator
https://www.gatsbyjs.org

Deploy to an ultra-redundant global CDN
https://www.netlify.com

## GET EARLY BIRD ACCESS TO[ WEBRIQ JAM STACK for ENTERPRISES](http://madmarketing.webriq.services/f/3) 

This blog post was originally posted by Michelle Glenow on Thenewstack - https://thenewstack.io/the-sweetness-of-jamstack-javascript-apis-and-markup/
