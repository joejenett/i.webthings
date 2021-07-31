---
layout: category
permalink: /category/diversions/
title: diversions
---
{% for post in site.categories.diversions %}
 <li><span>{{ post.date | date:'%B %e, %Y' }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}