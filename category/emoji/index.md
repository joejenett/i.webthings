---
layout: category
permalink: /category/emoji/
title: emoji
---
{% for post in site.categories.emoji %}
 <li><span>{{ post.date | date:'%B %e, %Y' }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}