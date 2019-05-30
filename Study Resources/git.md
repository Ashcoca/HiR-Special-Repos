# Git Resources

**Why do we use Git?**

Say you're working on a paper. You write five paragraphs. Then your friend comes along later, and writes another five paragraphs. Then you edit a few paragraphs, and your friend edits a few more paragraphs.

At the end of it, there are some issues, but its hard to coordinate who edited what and when, so what do you do?

**Version Control with GIT**

With a system like GIT, you would first create the file on the GIT server, and add your changes. Then, you commit those changes to the repository, which will basically say 'Hey, this file exists and looks like this.'

Then, your friend checks out that repo, pulling the latest changes. He adds some stuff, then commits to the repo. The repo says 'Hey, this file exists and is different from the previous version, so we will save it as version 2.'

So on and so forth. The GIT repo allows you and your friend to make edits and keep the changes sort of sequential, so if your friend messes up at #5, you can say 'GIT, please check out #4' and you can get back to fixing things. Each commit has an owner, so you know who did what. And you can compare Version X to Version Y, and see what has changed, making it easier to spot what new changes have been made.

**Branches** 

GIT also allows you to branch. So you and your friend are on version 10 of the doc, but you want to try something new. Your friend wants to continue, so you create a branch called 'MyNewIdea' and start working on that. This is now a separate path of writing, while your friend continues on the original, which is usually considered the master.


### Additional Reading
1. https://pixelpioneers.co/blog/2017/git-basics-explained-by-designing-a-new-car
2. https://blog.thoughtram.io/git/rebase-book/2015/02/10/understanding-branches-in-git.html


