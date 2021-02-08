---
title: Oh Hello Apollo Client , Goodbye Redux!
date: "2021-02-01"
tags: graphql,javascript,react,frontend
canonical_url: https://medium.com/@kulkarniankita9/oh-hello-apollo-client-goodbye-redux-49dfdeda16d1
---

> I know I got excited with the title there but it is kinda true _😅_. In this blog post, I will cover why your switch to GQL and Apollo Client 3 should make you walk away from Redux. I will also talk about my journey from Redux -> Apollo Client.

![](https://cdn-images-1.medium.com/max/1024/1*gpdBjVIH-cK-GGaKTySyPg.jpeg)

I have had my share of doubts so in the past couple of projects, I was really skeptical of using _Apollo Client_ as a state management solution. I love ❤ Apollo and specifically the changes made in Apollo client 3 that changed my mind completely 😻

## Why I like _Redux_ and what it is good at 💙

- Global state management solution where you have a good visual of your entire state
- You use actions to trigger state updates and asynchronous requests (love 💌 my boo: [_Redux_ saga](https://github.com/redux-saga/redux-saga/tree/master/packages/core) 🔗)
- The entire ecosystem is amazing, you get _Redux_ time travel too for debugging! ⏲
- You can use libraries like _Redux_ selectors ([another awesome library](https://github.com/reduxjs/reselect) 🔗) to select data from the state and transform

which brings me to my next point… 👇

## What is considered a good state management solution? ✅

![](https://cdn-images-1.medium.com/max/320/1*OwX4VI0egzH-LdXovha0fg.gif)

1. My data is normalized (no dupes please 🙏)
2. Specific actions i.e. user logging in / routing should be able to trigger asynchronous requests 💯
3. We want to transform the data so that our component is not huge and we can write tests!! 🍵
4. Lastly, visualize the store i.e. we can view our global state and debug easily 🌎

and I’m sure there are more but the above were the top ones in my list! 🥇

## After I started using GQL ✨

- I didn’t use Redux in the GQL project because we were using React Hooks and React Context and it felt repetitive because you can use useReducer and useContext where you can dispatch actions and update state
- Apollo Client exposes custom hooks ⚓️ like useQuery, useMutation which automatically exposed loading, success and error states so I didn’t need to trigger 3 different actions in my redux store i.e. CART_REQUEST, CART_SUCCESS and CART_ERROR. For example, here is a comparison ⚡️

![](https://cdn-images-1.medium.com/max/1024/1*gskPBEjiGNbwiUOwBHYssA.png)

A lot of boilerplate code has reduced 😈 You get the loading, success, and error states right from the useQuery and useMutation hook.

## So what was missing? 😅

> Going back to the definition of a good state management library _👆_

![](https://cdn-images-1.medium.com/max/480/1*1xA_9fo5KZ3-w_mJvm_ckg.gif)

- I really loved useQuery and useMutation custom hooks although I wasn’t fully convinced to switch for state management completely as I really liked using _Redux selectors_ that select data & we have the ability to transform it 😥
- In the meanwhile, I was using _React Context_ instead of _Redux_
- I also didn’t want to read the Apollo cache all the time
- At the time, there was no way to store values outside the cache
- I also wanted actions to trigger asynchronous requests like _Redux saga’s_ do 🚶‍♀
- On top of this, I found Apollo client cache really hard to read 😫

**But with Apollo Client 3, they introduced** **Reactive Variables and local only fields that changed everything** 💖

### Apollo Client 3 gives us 2 really cool things 😎

1. **Local only fields**
2. **Reactive Variables**

They are fields that resolve on the client side itself by reading data from the cache if you want thus replacing the transformers in Redux. Let’s take a look how that would work.

## My data is normalized (no dupes please 🙏)

![](https://cdn-images-1.medium.com/max/480/1*j23l4PvBa6nMs1xZdjowqA.jpeg)

_Apollo Client_ takes care of the heavy lifting for you 💪. You don’t need to constantly dispatch actions to change state. With redux, we were really used to that and the benefit there is you have full control although do we really need full control? 😶

You are already using GQL ❤️ so everything is a graph 📈 and is stored in the graph i.e. you already have all your data in your cache then why add Redux on top to duplicate it? 🤷‍♀ You are going to add more overhead 🙈

**_Apollo Client_ automatically caches your data and normalizes new data in query responses and after mutation.** Similar to what you would do in Redux where you would need to make sure that your data is normalized. If you are onboarding a new developer, it’s hard because they also need to consider and learn how to do this on an architecture level which adds more overhead.

![Visualization of the Apollo client cache with cart data in it](https://cdn-images-1.medium.com/max/805/1*mTg7zlvsfrnWETU7YX90Mg.png)<figcaption>How the cache looks like</figcaption>

**_Apollo client_** stores data using **references** so it can be smart by looking it up easily using that reference as a key. Here is an [awesome blog post](https://www.apollographql.com/blog/demystifying-cache-normalization/) 🔗 written by _Khalil Stemmler on Demystifying Apollo Cache_ which you should read before switching to AC3 for state management. 💯

## Data transformations 😄

> We want data transformations in an application so there is a clear separation of side-effect to transform layer. This way we can make sure that our component file is not huge and we can write tests for those transformers

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fgiphy.com%2Fembed%2FlrDMG46JjKiovLbkn8%2Ftwitter%2Fiframe&amp;display_name=Giphy&amp;url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FlrDMG46JjKiovLbkn8%2Fgiphy.gif&amp;image=https%3A%2F%2Fi.giphy.com%2Fmedia%2FlrDMG46JjKiovLbkn8%2Fgiphy.gif&amp;key=a19fcc184b9711e1b4764040d3dc5c07&amp;type=text%2Fhtml&amp;schema=giphy" width="435" height="362" frameborder="0" scrolling="no"><a href="https://medium.com/media/bcb60b1b989a751e19eb3c6117889e25/href">https://medium.com/media/bcb60b1b989a751e19eb3c6117889e25/href</a></iframe>

We will use local only fields mainly for transforming data.

### 1. Local only fields 🌼

Local only fields is a way we can define client side fields on the GQL type that doesn’t need to come from the server. You can resolve them locally on your frontend.

Let’s say we have the following query for getting the user’s cart ⚡

![](https://cdn-images-1.medium.com/max/1024/1*MfiMEXjhsTpr6eJWA4KVqg.png)

![](https://cdn-images-1.medium.com/max/1024/1*iobrKgcM1ZTCxGid6FxCWw.png)

Here is how your cart query _data_ object from the above query looks like 👈

Let’s say we have this user story, 💄

> As a user, I want to see if an item is out of stock or low stock based on the items in my cart.👩🏽‍💻

Here is how your **React** component might look like for it without using the **Apollo** **client side** variable: 💄 ⚡️

![](https://cdn-images-1.medium.com/max/1024/1*e5cgrFi2fv6jZFppMdWQow.png)

Typically in _Redux_, we would extract the logic of the function getTextForLowOrOutOfStock outside using a redux selector. 🆗

With AC3, you can achieve the above by **reading the cache** and adding the string for ‘out of stock’ and ‘low stock’ accordingly within your client itself.

### OK But, how can we use local only fields? 🤔

We can create **local only fields** on the **Cart type** with the @client directive. 🎉 _For example,_ ⚡️ here stockText is the client side field.

![](https://cdn-images-1.medium.com/max/1024/1*29ab-LRL0Q7Hs0FZbZg0og.png)

With the @client directive, Apollo client will look into the cache to resolve the field. It won’t make a call over the network for that field because of the directive. Now stockText can be accessed anytime we declare a Cart type because it is a field on the Cart type.

![](https://cdn-images-1.medium.com/max/1024/1*eOlDXhsJQpj4_rvrZhb_1A.png)

Now we can directly access stockText in our React component by doing the following ⚡️

![](https://cdn-images-1.medium.com/max/1024/1*a6Fjs7WpGqfEr2I5rl6otA.png)

### 2. Reactive Variables 🌸

We can also create custom client side values stored outside the cache known as Reactive Variables. Sometimes we just want to create a field outside of the type structure which can still be accessed through the _Apollo client_ globally. For that, _Apollo client_ gives us **Reactive variables.**

> Modifying a reactive variable triggers an update of every active query that depends on that variable, as well an update of the react state associated with any variable values returned from the _useReactiveVar_ React hook.

**Reactive variables don’t update the cache** but store the state information that we want to access at any point in our application. In _Redux_, we usually dispatch an action to store such a value in the store.

Let’s say we have this user story, 💄

> As a user, I want to view the number of items in my cart that are on sale. 💯 👩🏽‍💻

> For this you would have to read all the items in cart, check items that are on sale and count them. With Apollo client, you can achieve this by 👇 ⚡️

![](https://cdn-images-1.medium.com/max/1024/1*3D3LmDF2h4ImkpAdA4Z-GA.png)

You can do way more than this. You can also access existing fields (i.e. readNumberOfOOSItems) through other fields as well. 🙌

You can access the above readNumberOfOOSItems via a query as well which gives you loading, data and error states:

![](https://cdn-images-1.medium.com/max/1024/1*f3o2TN9gozE2CVWVA5jlAA.png)

### But wait, what is the difference between local only fields and reactive variables? 🤔

In a local only field, you create a new field on the type itself i.e. from our example, we created stockText on the Cart type i.e. you can’t access stockText anywhere else.

But for reactive variables, you can access it **anywhere** you like and it isn’t **restricted to a specific type**. Unlike the Apollo Client cache, reactive variables don’t enforce data normalization, meaning **you can store data in any format you want.** 🤯

![noice](https://cdn-images-1.medium.com/max/480/1*_hly2GrmZ1b8doISQtwErw.gif)

## Specific actions should trigger asynchronous requests ⏩

Once we do retrieve data or if the user wants to route based on certain information from the server, we might want to trigger asynchronous requests or rather specific actions that the user should take.

Let’s say we have this user story, 💄

> As a user, I want to be taken to the sign in page if I’m not logged in else I want to see the app page

Here we want to track if the user is logged in or not and accordingly route the user. We can achieve this by creating a **reactive variable** for it.

**Reactive variables** are variables stored in the client and outside the cache but the components can also access their values directly. In the example below, _isUserLoggedIn_ is a reactive variable that has been created using makeVar function. It invokes the function to check if there is a token in the browser *Cookies*🍪. (In the real world, we will obviously check for token expiry as well 😉).

![](https://cdn-images-1.medium.com/max/1024/1*Kwy65dAiitVcTmR0rI4QOA.png)

Anything under fields is a **field policy**. A field policy is basically a contract between client and the function which dictates how that field is going to be resolved. We have a field policy to read the number of out of stock items and check if the user is logged in or not.

Next, in order to access this value within the component, we can do the following ⚡️

![](https://cdn-images-1.medium.com/max/1024/1*RJEZmsH8TMC80EusneYlKg.png)

The above will re-render whenever the value changes for isUserLoggedInVar

![](https://cdn-images-1.medium.com/max/1024/1*3QL0teAibXQkx8vb_62Z5A.png)

If you want to trigger an _API request_ once the user has logged in, you can achieve this by listening to isUserLoggedIn in a useEffect. 👈  
Therefore, we can trigger async requests based on what’s in the state.

### But wait, can I update the value of the Reactive variable? 🤔

Yes you can! We can update the value of the reactive variable anywhere in our application, for example if we wanted to update the value of isUserLoggedInVar to false or anything else, we can! We just need to invoke the function isUserLoggedInVar directly!

![](https://cdn-images-1.medium.com/max/1024/1*irz3nCdOFgNSNOzaBzeBYA.png)

## Visualize store / cache 🔮

> Lastly, visualize the store i.e. we can view our global state and debug easily

![](https://cdn-images-1.medium.com/max/500/1*ID2Su-eygzYYwMKPWfvSJw.gif)

Just like _Redux developer tools_, _Apollo client_ also have their developer tools, here is a [link](https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm). 🔗 Initially, I had some difficulty visualizing the cache as the Apollo developer tools are not as mature as Redux developer tools.

But after understanding how Apollo client stores data internally and how it optimizes it, things got a lot easier. I am able to visualize the cache. 😄

![](https://cdn-images-1.medium.com/max/877/1*H56HhIGrJH2w3cV-DhWhMA.png)

In the **Queries** and **Mutation** tab, you will see a list of Queries and Mutations executed in your application (just like Redux does). In the cache tab, you will see the entire cache i.e. your Root query along with the cache references that got updated.

You can use **_GraphiQL_** to query anything (including Reactive variables) just like you would in the GQL playground. But **if you want to query Reactive variables** , make sure to check the checkbox “Load from cache”.

I find that _Redux dev tools_ are superior with time travel although once you learn how the cache looks like and how it takes care of the heavy lifting for you, it will get a lot simpler. But, I would say this is definitely a pain point of _Apollo client dev tools_ overall 🤕.

## Lastly, keep an open mind

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fgiphy.com%2Fembed%2FGdVzAnBSyhWuY%2Ftwitter%2Fiframe&amp;display_name=Giphy&amp;url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FGdVzAnBSyhWuY%2Fgiphy.gif&amp;image=https%3A%2F%2Fi.giphy.com%2Fmedia%2FGdVzAnBSyhWuY%2Fgiphy.gif&amp;key=a19fcc184b9711e1b4764040d3dc5c07&amp;type=text%2Fhtml&amp;schema=giphy" width="435" height="244" frameborder="0" scrolling="no"><a href="https://medium.com/media/7f446247325b2b814408d4727aaf4695/href">https://medium.com/media/7f446247325b2b814408d4727aaf4695/href</a></iframe>
- The difference between _Redux_ and _Apollo Client_ is that you either take control and do everything on your own (like Redux) or let a mature library like Apollo Client handle that for you 🙌
- Don’t get me wrong, I do love control 😂. but _Apollo client_ is taking care of the bulk of the work for you so you can focus on the core of your application
- I kept comparing _Apollo client_ to _Redux_ 1:1 and although it was great to help me understand how my app would scale, this was also a reason I was holding back because now I have to unlearn what I have learned and trust that _Apollo client_ will take care of it for you. 👌
- When you are using Apollo client, it does feel redundant to use Redux on top of it as you are now keeping 2 copies of the same data i.e. Apollo client cache and Redux global store. 🙈
- The more you learn about the cache, the more you start to love it! ❤️

Thank you for making it so far, hope you found this post useful 💯 and it helps you draw comparisons between Redux and _Apollo Client._ 🙌
