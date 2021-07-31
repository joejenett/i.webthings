---
layout: category
permalink: /category/retro/
title: retro
---
{% for post in site.categories.retro %}
 <li><span>{{ post.date | date:'%B %e, %Y' }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}