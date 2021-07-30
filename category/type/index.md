---
layout: category
permalink: /category/type/
title: type
---
{% for post in site.categories.type %}
 <li><span>{{ post.date | date:'%B %e, %Y' }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}