---
layout: category
permalink: /category/art/
title: art
---
{% for post in site.categories.art %}
 <li><span>{{ post.date | date:'%B %e, %Y' }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}