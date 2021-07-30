---
layout: category
permalink: /category/linking/
title: linking
---
{% for post in site.categories.linking %}
 <li><span>{{ post.date | date:'%B %e' }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}