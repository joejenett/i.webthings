---
layout: category
permalink: /category/tips/
title: tips
---
{% for post in site.categories.tips %}
 <li><span>{{ post.date | date:'%B %e, %Y' }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}