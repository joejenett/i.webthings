---
layout: category
permalink: /category/odd/
title: odd
---
{% for post in site.categories.odd %}
 <li><span>{{ post.date | date:'%B %e, %Y' }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}