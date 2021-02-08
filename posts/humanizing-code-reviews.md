---
title: The Art of Humanizing Pull Requests (PR’s)
date: "2018-06-19"
tags: developer-tools,software-development,code-review,pull-request
canonical_url: https://medium.com/@kulkarniankita9/the-art-of-humanizing-pull-requests-prs-b520588eb345
---

#### What are PR’s, how to effectively create a PR, how to give feedback on PR’s and how to respond to feedback

### What is a Pull Request (PR)?

![](https://cdn-images-1.medium.com/max/306/1*VaJjpzF3103dSFJ_CE2Iiw.jpeg)

It is a request for changing code in a repository. Once you make changes you need in your code, you submit a PR. Once submitted, interested parties will perform a code review and provide you with any feedback/changes needed.

Pull Requests are typically used by teams _for shared collaboration and feature work or bug fixes._ The idea is to make sure well written and bug-free code gets pushed to the repository. It is a way to develop high-quality code.

### How to Create a Pull Request

#### Breakdown your story/feature

Before you start working on a story/feature, **make a mental/written note on how you want to break it down into several smaller PR’s.** This doesn’t just help your reviewer but also _YOU_ as you can keep track of your progress and get frequent feedback. Another benefit is, as the codebase is shared with other developers, reverting a change gets a lot easier. Hence, try to keep the scope of your PR to a single issue while breaking it down.

For example, let’s say you are implementing a todo list and have the following story:

> As a user, I can add and delete items to/from a list respectively

I would break it down by:

> **PR #1:** Add a text box and an add button on the page.  
> **PR #2:** Clicking on add button adds the item to the list  
> **PR #3:** Clicking on delete button on the list item deletes that item from the list

You will get reviewer blessings 🙏 for doing so. Imagine if your co-worker blasted a HUGE PR, you wouldn’t want to review, would you? 🙈

#### Add comments on your PR

![How-to-add-a-code-comment](https://thepracticaldev.s3.amazonaws.com/i/9a9ui3sall6fbf08yokx.gif)

<figcaption>How to add a code comment</figcaption>

Wherever you have done something different, usually, it’s a good idea to 🔗 [add a comment on the line number](https://help.github.com/articles/commenting-on-a-pull-request/) explaining why you did what you did. If you are not completely sure of your code, you should definitely tag “@” at those who have the most context on that code to get some feedback. For example,

> You used a new function from the library [Lodash](https://lodash.com/docs/4.17.10) called `isNan` which might not be used in the codebase a lot, you might want to add a comment there saying `this function basically checks if the value is Nan and returns a boolean`.

This helps your reviewer a lot as that saves their time (i.e. if they don’t already know what the function does).

#### Add screenshots/gifs

Screenshots and gifs are proof that the code that you submitted works! _This increases the likelihood of acceptance and also gives your reviewer a visual of what you have implemented._ A screenshot definitely works although when your code is doing more than what a screenshot can capture, create a gif. By using a gif, you can click around and show everything that your PR covers. My favourite one is: [Licecap](https://www.cockos.com/licecap/) 🔗

#### Tests are documentation of your code

Whenever you have worked on something which makes sense to you and you want to explain this complex code to future developers your intention for that particular change. Don’t litter the code with code comments and ask yourself these questions, if it’s so difficult to understand,

- Can I split this code into smaller functions?
- Can I rename this function to something more obvious? ask your team for function name suggestions if you like.
- How can I simplify my code further so I don’t call it complex?

Irrespective of what you pick, **you should write a TEST. 🔥**

**Your tests are there to test your logic but also, are the documentation of your code.** Try to add a test explaining that part of your code.

### How to review Pull Requests?

#### Be empathetic

As a reviewer, it’s extremely important to provide feedback in a courteous manner. **You need to remember** that you are reviewing your teammates’ code who you like to talk to and go for team outings, lunches etc. **They are human, they have feelings and feelings can get hurt easily! 💥** Hence, be more empathetic during your reviews.

#### Make yourself more familiar with the code

Always get in the habit of teaching and it doesn’t matter if you consider yourself a junior or a senior developer. Instead of telling them what the problem is, ask them questions, **make them think** and use a friendly tone. Following are a few examples:

- **Do you think** maybe we could assign this to a variable and re-use it on line 9?
- **Could we** possibly use this helpful utility that already does that for us which our dear teammate Sarah built?
- **Can we** move this code in its own function so we can write more tests 😃?
- **What do you think about trying** this option 🤔?
- **I’m not sure if I understand the whole picture** **but could you explain what this function is doing?** This will make them possibly think that the function name could be renamed. After they explain what it does, then follow it up with a suggestion such as:

> “I get it now, sorry for being slow! I’m not sure but do you think we could rename this function to option1, option2 or something along those lines, what are your thoughts”?

**Always ask them their thoughts** as remember you are a reviewer and they wrote the code so its possible they have more context than you do.

Imagine if your co-worker used words such as “Don’t do this, just rename the function”. That sounds so much direct, less friendly and **sounds like you are giving them a command rather than taking their input on it.**

#### Always provide suggestions for code improvements

Rather than just telling them, “this code could be improved”. Provide them suggestions/examples on how it could be improved further for example,

> This code works perfectly but after I started reading it further, I thought of another idea that I wanted to run it by you. I’m not sure but what about?  
> sample code #1,  
> sample code #2  
> What are your thoughts?

#### Use emoji’s

![](https://cdn-images-1.medium.com/max/225/1*Z2daFSeH84K2Y7L0TS6GgA.png)

Online criticism is misinterpreted easily. Hence, emoji’s are one of the best tools for communicating online. Using them automatically adds a friendly tone to your sentences. _Use it when you start feeling that the conversation is getting too serious_ **.** But if that’s not you then don’t force it, keep it real.

#### Take it offline

If you find yourself going back and forth in conversations with your teammate, the conversations are getting too long and its leading nowhere, take it offline. There is no point spending time typing when you can quickly hop on a call 🤙or just walk 🚶‍ to their desk.

_When you meet face to face, you automatically develop more empathy and understand their point of view even further and alternatively, they understand yours_. When you come to a conclusion, post a comment on the PR summarizing your discussion so other readers following along are aware of it and **your future self will thank you for it.**

#### nitpick

While reviewing code, you may find something that is basically a nitpick i.e. it may not necessarily block the approval of the PR but something to consider. _Nitpicks are not important but technically correct._ They can be related to grammar corrections, un-intentional new lines, any aesthetics, minor code refactor etc. For example,

> nit: extra white space  
> nit: can we assign this value to a `constant` for better readability purposes?

### How to respond to feedback

The rules that apply while submitting a PR equally apply while responding to it as well.

#### When suggestions are provided

Always remember that you are collaborating and writing code. If a suggestion is provided, always treat it **like a possibility of improving your code**. If you don’t understand something, ask for clarification for example,

> “Can you please provide an example or Can you please clarify further? I don’t understand it completely.”

If you think the feedback is valid, implement it! However big or small the change is, if you think the feedback is valid, always reply and let the reviewer know that you took their feedback. For example,

> That’s an excellent point, change coming right away!  
> Good point, thanks for catching that.

#### If you disagree 👈

Disagreements are bound to happen as different developers have different ways of writing code. Although, try to voice your opinion in a very friendly manner. **If you agree to them partially then let them know but also provide your reasoning at where you disagree with them.** For example,

> That’s a great point. I do agree with your first suggestion, will make a change right away. Totally missed that one. Although for the 2nd one, I did consider that option and decided to not go that route as for the following scenario, we don’t want to display that. //**or whatever your reasoning was, be honest. 👈**

#### Make your commit message obvious

![](https://cdn-images-1.medium.com/max/436/1*pbuzadnGkN6Il2nsrmAIYw.png)<figcaption>Gitmoji — commits example</figcaption>

Now that you spent time on your feedback, write a good commit message which lets the reviewer know that you did consider their feedback but don’t make the message too long. A very handy tool is 🔗 [Gitmoji](https://gitmoji.carloscuesta.me/). 😍 They provide an easy way of identifying the purpose or intention of a commit by looking at the emojis used.

#### Take it a step further

You have made some changes in your code based on the feedback you got. Now your code handles an additional scenario which you didn’t think of or wasn’t aware or may have missed but there’s your chance to **“Write a test”**.

Once your code is merged in, a defect gets filled. **Once you fix that defect, add a test** to make sure that the defect is actually fixed and there’s proof 🕵️‍. Now, its documented!! 😃 You get brownie 🍫 points if you take it a step further. You will automatically gain the trust of your team.

---

I hope you enjoyed reading this article and learned something. If you did, please give it some ❤️ and also, would love to hear your personal experiences on pull requests in comments. If you have any questions, please feel free to reach out on my Twitter.
