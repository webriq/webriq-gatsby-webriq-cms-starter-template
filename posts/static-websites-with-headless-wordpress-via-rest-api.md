---
title: Static Websites with Headless WordPress via REST API
shortdesc: "Static websites are great but they still need some kind of content management system. And committing Markdown files to GitHub isnt a friendly option for the majority of users including developers. So we end up using tools such as Prose, Netlify CMS\_or Contentful\_for the editing interface, user authentication and handling the media files. Usually it [] Readmore"
updatedDate: 2019-01-21T04:39:08.082Z
cmsUserSlug: static-websites-with-headless-wordpress-via-rest-api
banner: /img/uploads/Unknown1234.jpg
leadtag: "Headless CMS, Wordpress Rest API"
metadesc: How to build Static websites with Headless Wordpress and a REST API
metakeywords: "Headless CMS, Wordpress Rest API, Static site generator, Jamstack websites"
categories: ""
date: 2019-01-12T09:21:00.000Z
author: "Philippe Bodart "
---

# Static Websites with Headless WordPress via REST API 

Static websites are great but they still need some kind of content management system. And committing Markdown files to GitHub isn’t as friendly as it should be. Run your site on a purpose-built, multi-cloud infrastructure that’s designed for speed, automated to scale, and intrinsically secure is the  option for the majority of users including developers. So we end up using tools such as [Prose](http://prose.io/), [Netlify CMyS](https://www.netlifycms.org/) or [Contentful](https://www.contentful.com/) for the editing interface, user authentication and handling the media files.

Usually it is only the WordPress PHP templating layer that bothers the proponents of static websites and is perceived as the performance bottleneck. However, we now have the [WordPress REST API](https://developer.wordpress.org/rest-api/) which is way more flexible than any collection of Markdown files.


But Wordpress REST performance is really bad. However, unless you are in 100% complete control of every component in the system you are going to very likely end up with an underperforming over-burdened web service if you build your tech on typical WordPress components.    Even thae highly customized MySLP service is 5-10x slower than it would be if it was build on a completely customized application stack outside of WordPress.
WordPress is NOT built around performance.   WordPress is built on two core tenets – ALWAYS support legacy users at all costs. Be extensible.

REST is a standard for communication between web applications.    In its simplest form an application can make a request for information from a REST-enabled application.  That application listens for the incoming request and sends back the information. It is meant to be a lightweight simple process.
WordPress has touted the built-in REST listener to make it a “good web citizen” that makes it easy to share information stored within a WordPress site.
But there is a problem. It goes back to all that extensibility.    It is extremely rare that a plugin or theme author actually pays attention to what WordPress is doing when they load up their “super awesome, everyone should have it” code. 95% of plugins and themes load up their code all the time, every time, no matter what. Even worse, 80% of the plugins and themes are procedural code – meaning they load literally “every single possible function always”.

So what does that mean for our simple REST request to get today’s menu and specials?
You call the WordPress Cafe and ask the “listener” to email you a copy of the menu and today’s specials”.   They go to grab a copy of the PDF, but the printing company that creates the PDF stops them on the way.  They ask them if they want to change any colors of fonts on the menu.   Do you want it in mobile of web format?   What font face?   Twenty questions later they hand over a menu.  As soon as our “listener” turns around the historian asks if they want to make a written record of the request.    The cashier overhears the conversation and says “hold on, there may be some rate changes with the credit card company — we may need to change our prices”* a*nd they hold up our listener while they call the credit card company.

The entire time our listener is thinking “I just need a copy of the freakin’ menu to give to a customer”. But EVERYONE ELSE that has anything to do with the business gets involved.  The kitchen manager is checking inventory to make sure everything on the menu can be made should the customer ever call back to place an order. The hostess is checking to make sure there are seats available even though the customer may never show up and almost certainly is ordering take-out if asking for a menu over the phone.
30 minutes later our “listener” sends the very same menu and specials email that was sent in our previous example, but after far more hassle.    What should have been a 3-second process takes 30 minutes.

This is WordPress as a REST service.

There are ways to simplify the process and make WordPress faster.   Sadly very few plugin and theme authors care to check what WordPress is doing. While it would be fairly easy to do things like “don’t get involved if I have nothing to contribute”, that is not how most WordPress plugins and themes are written.  And in the case of REST requests, WordPress does not provide a built-in mechanism to test for “REST processing” or the state of the request.

# WebriQ GLUE - a best in class technology stack
## What can you expect from WebriQ GLUE
We have been designing and developing websites and web apps for a long time, and we have seen all the deficiencies of project based pricing, per hour pricing, unknowns in devops, unknowns in maintenance, overruns, delays etc.
We have developed a very opinionated way of implementing websites, ecommerce carts and webapps and we completely moved away from a monolithic, legacy and centralized approach. We believe in a decentralized approach whereby each software component is chosen for it’s best in class, but at the same time replaceable with a newer best in class if needed. Where we can not find a best in class critical functionality that is open sourced, we develop it ourselves, i.e. WebriQ Forms.
We are strong supporters of the API economy and we strongly believe in microservices when it comes to functionality and automation.
We aim at 100% serverless operation, and we know how to do that and we aim at 100% uptime, and we know how to do that.
We are highly specialized, and opinionated when it comes to the technology stack used.

## The Stack
### MongoDB - Database-as-a-Service
* On-demand provisioning on the major clouds. Seamless, zero-downtime scaling and high availability via auto-failover on production-ready plans.
* Unlimited backups on Dedicated plans; free daily backup on other plans. Free and easy backup restores.
* Continuous, 24x7 monitoring with performance graphs and custom alerting
* support encryption-at-rest, include SSL for free

### GatsbyJS
* Enjoy the power of the latest web technologies – React.js , Webpack , modern JavaScript and CSS 
* Forget complicated deploys with databases and servers and their expensive, time-consuming setup costs, maintenance, and scaling fears. Gatsby.js builds your site as “static” files which can be deployed easily on dozens of services.
* Gatsby.js builds the fastest possible website. Instead of waiting to generate pages when requested, pre-build pages and lift them into a global cloud of servers 
* Gatsby.js is a static PWA (Progressive Web App) generator. You get code and data splitting out-of-the-box

### Strapi
* Headless CMS framework on NodeJS that builds API's along the way
* Building performant, secure and scalable production-ready API's
* Use any front-end strategy: frameworks (React, Vue, Angular, etc.), third parties (developers, customers and partners), mobile apps or even IoT.
* Extensible plugins system included. Install auth system, content management, custom plugins, and more, in seconds.

### Netlify
* Deploy to a redundant network of servers with built‑in continuous integration and HTTPS.
* Manage user identity, HTML forms, and even AWS Lambda functions with ease.
* Use your favorite tools for search, payments, commenting, or content management.
* Run your site on a purpose-built, multi-cloud infrastructure that’s designed for speed, automated to scale, and intrinsically secure.




























