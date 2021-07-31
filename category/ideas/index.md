---
layout: category
permalink: /category/ideas/
title: ideas
---
{% for post in site.categories.ideas %}
 <li><span>{{ post.date | date:'%B %e, %Y' }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}