---
layout: category
permalink: /category/tools/
title: tools
---
{% for post in site.categories.tools %}
 <li><span>{{ post.date | date:'%B %e, %Y' }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}