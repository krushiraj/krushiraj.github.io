---
title: "My thoughts on cross-platform/device apps"
date: "2019-06-28"
type: "article"
published: true
keywords: "cross,cross-platform,cross-device,app,application,electron,node,javascript,nodejs,electron,react-native,NAPI,react-native-bridge"
description: "This is a writing, where I share my experiences, learnings and my views on cross platform application development now-a-days."
tags: "javascript,nodejs,electron,react-native,NAPI,react-native-bridge"
banner: "./crossdp.jpg"
bannercaption: "Image from Google Images"
technologies: "python,selenium"
---

> TLDR; In this article, I will share my thoughts on building modern cross-platform and cross-device applications.

## What made me to think about cross-platform and cross-device applications

In recent times I had few ideas which would help me make things more simplistic every day. Most of those ideas were cross-platform and cross-device applications. I'll briefly tell about ideas(if you are interested). Few of my ideas were:

* A single application for searching and editing memes. A single repository where you can find meme templates based on search keywords, also smart search based on intents.

* A Universal clipboard(though Apple and Microsoft has it, I wanted it to be true cross-platform). I wanted to build this because I use a lot of devices while working on some projects. I switch between various device types and operating systems while I'm working. I wanted to share the clipboard data from one device to another without being sending it as a message to myself in slack or using a notes app on the cloud.

## Research and learnings

When I started to think of building applications for these ideas, the first question that hit me was how do I make it pure cross-platform application? I went on in the search of an answer for this, read a lot of blogs, documentations, every possible resource that I could find. I knew about Xamarin, Cordova and few others which are popular for building cross-platform/device applications. After reading lots of articles on the web, I got an answer that is better than any other alternative.

> My considerations were
	Device types: desktops, laptops, tablets, and mobile phones
	Operating Systems: Windows, macOS, Linux, Android, iOS

## My decisions from the learning

My choice was `Electron` for desktop applications and `React Native` for mobile applications. You can write beautiful UI for desktop applications using HTML, CSS, and JavaScript, as electron provides the lightweight version of chromium and it renders only that part which used to render web-pages in browser. We can also consume node.js scripts and npm packages to get things done. You can read more about Electron [`here`](https://electronjs.org/). React Native, though it is not as old as other similar libraries but it has something cool which made to stick to this, to know more about it visit this [`link`](https://facebook.github.io/react-native/). The first thing that made me to stick to React Native is you can write most of the UI using a single JavaScript codebase. The second thing is you can consume the native APIs and build JavaScript UI components from native components exposed by each platform. The question for frontend and basic things can be done using the above. You can read more about React Native Bridge over [`here`](https://facebook.github.io/react-native/docs/0.60/native-modules-setup).

What if you're building something that relies on system calls and low-level interactions. In such a case, you might have a question why Node.js based libraries?

So, during my investigation, I found that most of the cross-platform applications were written in C++ earlier. And that is the language of choice for most of the developers to have interactions with the system at deeper/lower levels of hierarchy. So, what is the significance, why does C++ even come in the middle of this discussion? The answer is JavaScript might not have the capability to interact with system components, but C++ does have and we can have JavaScript wrappers written for any C++ code that is available and consume it natively in Node.js. This even answers our question to handle the underlying things and processes.

## Conclusion

One thing that I want to conclude is that there is no such library to date where you can write once and ship to different platforms and for different device form factors. But, amongst all the choices and gaining popularity for JavaScript and it's libraries and the community support above decision were made by me.