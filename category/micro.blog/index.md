---
layout: page
permalink: /category/micro-blog/
title: micro-blog
redirect_from:
  - /category/micro.blog/
  - /category/micro-blog/
---
{% for post in site.categories.micro-blog %}
 <li><span>{{ post.date | date:'%B %e, %Y' }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}