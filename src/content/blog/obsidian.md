---
title: "Obsidian Notes"
description: "How I use Obsidian Notes to organize my thoughts, ideas, and projects."
pubDate: 2025-08-24
tags: ["Notetaking", "Education", "Productivity"]
draft: false
---

## What is Obsidian?

In late 2022, I was lucky enough to stumble onto a wonderful project called Obsidian Notes. The principle is simple: a note-taking software composed of plain markdown files with a focus on interconnection and extensibility. You create a folder of markdown files, and use local links, tags, and canvases to connect everything. This allows you to move from file to file as you would thought to thought. It sounds simple, but is extremely powerful in practice.

## But... why?

I was skeptical at first too. People online speak of note software like Obsidian as if they will completly change your life, and I didn't believe them. But, now that I have been using Obsidian for about 3 months, it really does have a big impact on my workflow and thought proccesses. Essentially, whenever I learn a new concept or have an interesting thought I expect to revisit, I write it down in my Obsidian vault, often in shorthand at first. Then, when I have time later, I can expand it fully. Next time I think about that thing, I can just look at my note to refresh my memory. This can also serve as a to-do list; when you think of something you need to do, just write it down. Maybe tag it. Then you come back later. It has a huge impact on my ability to get things done. Fleeting thoughts become reality a **lot** more now that I use Obsidian.

### Daily Notes

The very first place I write down most of these notes and thoughts is my daily note. A daily note is simply a file that you create each day with the date. From my daily notes I can get to everything I worked or thought about that day. In Obsidian, if you want to create a new file, you just write `[[$file_name$]]`, and then hit `Ctrl+Enter`. This file will then have a "backlink" to your daily note, which can later be viewed graphically. This allows you to visualize ideas and thoughts on a graph, and follow your train of thoughts. This is especially powerful when you return to a project or idea after a long time.

### Tags

Another hugely important feature of Obsidian is tags. I use tags just as topics. So if I make a file about a physics topic, I just tag it with physics. This can be done in two ways:

*   Inline tags
*   YAML Frontmatter

Inline tags are just written like`#topic` directly in your markdown. These are fast to make, but produce visual clutter. YAML Frontmatter tags are written at the very top of the file, like this:

```
---
tags: [xxxxx, yyyyy]
---
```

Both methods work with the other, so you can use whatever you want depending on the note. I tend to use inline tags in my daily notes, but YAML frontmatter for when I extract something to its own file.

### Graph View

I mentioned the graph view, but I just wanted to give you a visual of what that looks like:

![Graph View](graph-view.png#center)

That is a screenshot of my main Obsidian vault, with over 500 notes. It gives a clear visual of how ideas and tags are related. Most of the grouping comes from tags, but those can be disabled to get a direct view of file-to-file connections, if that is what you are looking for. Its really interesting to visualize what you have learned and thought about for the past months.

### Syncing

A conventional note-taking approach would involve a notebook, that you can take around with you and write things down in. Obsidian is digital, and not even natively in the cloud. So what do I do if I'm out and about and want to write something down? Well, the way I see it, there are two options:

*   Sync your vault across devices
*   Take intermediary notes on another device

I use a mix of both. Sometimes I will write things down on scraps of paper and fold them up in my pocket. Other times, I will write them using Obsidian for my phone (yes, its cross platform!).

There are a couple ways to sync a vault from your phone to laptop or similar. Obsidian themselves offer a service called Obsidian Sync, which is $10 a month for cross-platform cloud syncing with version history. A free approach is to setup a Git/GitHub repository, using the obsidian-git plugin.

## Conclusion

So, I implore you: take a look at Obsidian. It might not be for you, and that's fine, but if you have ever wanted to try out a note taking software, I truly believe that Obsidian is the best option available.